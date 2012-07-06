var cai = cai || {};  

cai.AppViewModel = function() {
	var self = this;
    
    self.Error = ko.observable("");
    self._mode = ko.observable("demand");
    self._intervals = 16;
    
    self.displayMode = function() {
    	return self._mode() + "Template";
    }
    
	self.init = function() {
    
		cai.log("Initializing the Application View Model");
        
        $("#selectionMode").buttonset();
        $('#radioDemand').click(self.onDemandModeSelected);
        $('#radioInventory').click(self.onInventoryModeSelected);
        
        $(window).resize(self.onResize);
    }    
    
    //--------------------------------------
    //  PUBLIC
    //--------------------------------------
    self.refresh = function() {
		cai.log("Retrieving Locations...");
        hub.getLocations();
        
		cai.log("Retrieving Materials...");
        hub.getMaterials();
        
        self.onDemandModeSelected();	// default to demand view
    }
    
    //--------------------------------------
    //  HUB HANDLERS
    //--------------------------------------
	self.onSetLocations = function(locations) {
    	cai.log("Set Locations");
    
    	var json = (typeof locations == "string") ? $.evalJSON(locations) : locations;
        self.loadMenu("#menuLocations", json, "locationCode", 50, self.onLocationSelected);
        self.stopWait();
	}

    self.onSetMaterials = function(materials) {
    	cai.log("Set Materials");
    
    	var json = (typeof materials == "string") ? $.evalJSON(materials) : materials;
        
        var mnuLocation = $("#menuLocations");
        var selectedLocation = mnuLocation ? $.trim(mnuLocation.text()) : "";
        
        var filtered = ko.utils.arrayFilter(json, function(material) {
            return selectedLocation && selectedLocation.length > 0 && material.locationCode == selectedLocation;
        });
        
        self.loadMenu("#menuMaterials", filtered, "materialCode", 150, self.onMaterialSelected);
        self.stopWait();
	}
    
    self.onSetDemand = function(demands) {
    	cai.log("Set Demand");
    
    	var json = (typeof demands == "string") ? $.evalJSON(demands) : demands;
        
        self.loadDemandChart(json);
        self.stopWait();
	}
    
    self.onSetOnHand = function(onhands) {
    	cai.log("Set On Hand");
    
    	var json = (typeof onhands == "string") ? $.evalJSON(onhands) : onhands;
        
        self.stopWait();
	}
    
    //--------------------------------------
    //  EVENT HANDLERS
    //--------------------------------------
    
    self.onDemandModeSelected = function() {
    	cai.log("Selected Demand Mode");
    	self._mode("demand");
        self.startWait("Requesting Demand...");
        hub.getDemand(self.getSelectedLocation(), self.getSelectedMaterial(), cai.now(), self._intervals);
    }
    
    self.onInventoryModeSelected = function() {
    	cai.log("Selected Inventory Mode");
    	self._mode("onhand");
        self.startWait("Requesting On Hand Inventory...");
        hub.getOnHand(self.getSelectedLocation());
    }
    
    self.onLocationSelected = function (event) {
	    if (event.args) {
	        var item = event.args.item;
	        if (item) {
            	alert("Selected Location: " + item.value);
	        }
	    }
	}        
    
    self.onMaterialSelected = function (event) {
	    if (event.args) {
	        var item = event.args.item;
	        if (item) {
            	alert("Selected Material: " + item.value);
	        }
	    }
	}        

    self.onResize = function() {
    	if (self._mode() == "demand") {
        	self.resizeDemandChart();
		}
	}       
    
    //--------------------------------------
    //  PRIVATE
    //--------------------------------------
    self.getSelectedLocation = function() {
        var mnuLocation = $("#menuLocations");
        
        return mnuLocation ? $.trim(mnuLocation.text()) : "";
    }
    
    self.getSelectedMaterial = function() {
        var mnuMaterial = $("#menuMaterials");
        
        return mnuMaterial ? $.trim(mnuMaterial.text()) : "";
    }
    
    self.loadMenu = function(elemid, data, fieldname, width, selecthandler) {
    	var theme = getTheme();
        var source =
                {
                    datatype: "json",
                    datafields: [
                        { name: fieldname }
                    ],
                    id: '',
                    localdata: data
                };        
    
        var dataAdapter = new $.jqx.dataAdapter(source);
        // Create a jqxComboBox
        $(elemid).jqxDropDownList({ selectedIndex: 0, source: dataAdapter, displayMember: fieldname, valueMember: fieldname, width: width, height: 20, autoDropDownHeight: true, theme: theme });
        // bind to the select event.
        $(elemid).bind('select', selecthandler);
    }
    
    self.loadDemandChart = function(demands) {
    
    	var dm = new cai.DemandsModel(demands);
    
        // prepare jqxChart settings
        var settings = {
            title: "Inventory Demand",
            description: "Demand projected for current schedule",
            enableAnimations: true,
            showLegend: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            source: dm.Demands,
            categoryAxis:
                {
                    textRotationAngle: 0,
                    dataField: 'StartTime',
                    showTickMarks: true,
                    tickMarksInterval: 1,
                    tickMarksColor: '#888888',
                    unitInterval: 1,
                    showGridLines: false,
                    gridLinesInterval: 1,
                    gridLinesColor: '#888888',
                    axisSize: 'auto'
                },
            colorScheme: 'scheme06',
            seriesGroups:
                [
                    {
                        type: 'stackedcolumn',
                        columnsGapPercent: 100,
                        seriesGapPercent: 5,
                        valueAxis:
                        {
                            unitInterval: dm.Interval,
                            minValue: dm.Min,
                            maxValue: dm.Max,
                            displayValueAxis: true,
                            description: dm.UOM,
                            axisSize: 'auto',
                            tickMarksColor: '#888888'
                        },
                        series: dm.Series
                    }
                ]
        };        
        
        // setup the chart
        $('#chartDemand').empty();
        $('#chartDemand').jqxChart(settings);
        
    	self.resizeDemandChart();
	}
    
    self.resizeDemandChart = function() {
    
        var container = $("#content");
        //$('#chartDemand').width(container.innerWidth());
        //$('#chartDemand').height(container.innerHeight());
        
        $('#chartDemand').width(container.innerWidth() - 20);
        $('#chartDemand').height(window.innerHeight - 100);
        
        $('#chartDemand').jqxChart('refresh');
    }

    
    self.startWait = function(title) {
        $.blockUI({ message: '<h1><img src="img/ajax-loader.gif" /> ' + title + '</h1>' });
    }
    
    self.stopWait = function() {
        $.unblockUI();
	}      
};

