var cai = cai || {};  

cai.AppViewModel = function() {
	var self = this;
    
    self.Error = ko.observable("");
    self._mode = ko.observable("demand");
    self._intervals = 16;
    self._materials = [];
    
    self.displayMode = function() {
    	return self._mode() + "Template";
    }
    
    self.displayMaterialSelection = ko.computed(function() {
    	return (self._mode() == "demand");
    })
    
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
    	self.refreshLocations();
        // will refresh materials once locations are received
        // will refresh chart once materials are received
    }
    
    //--------------------------------------
    //  HUB HANDLERS
    //--------------------------------------
	self.onSetLocations = function(locations) {
    	cai.log("Set Locations");
    
    	var json = (typeof locations == "string") ? $.evalJSON(locations) : locations;
        self.loadMenu("#menuLocations", json, "locationCode", 50, self.onLocationSelected);
        self.stopWait();
    	self.refreshMaterials();
	}

    self.onSetMaterials = function(materials) {
    	cai.log("Set Materials");
    
    	var json = (typeof materials == "string") ? $.evalJSON(materials) : materials;
        
        var selectedLocation = self.getSelectedLocation();
        
        self._materials = ko.utils.arrayFilter(json, function(material) {
            return (!selectedLocation || selectedLocation.length < 1 || material.locationCode == selectedLocation);
        });
        
        self.loadMenu("#menuMaterials", self._materials, "materialCode", 150, self.onMaterialSelected);
        self.stopWait();

        self.refreshData(); 	// update chart
	}
    
    self.onSetDemand = function(demands) {
    	cai.log("Set Demand");
    
    	var json = (typeof demands == "string") ? $.evalJSON(demands) : demands;
        // if "demand" mode and "selection" filter matches received data (location/material)
        
        self.loadDemandChart(json);
        self.stopWait();
	}
    
    self.onSetOnHand = function(onhands) {
    	cai.log("Set On Hand");
    
    	var json = (typeof onhands == "string") ? $.evalJSON(onhands) : onhands;
        
        // if "onhand" mode and "selection" filter matches received data (location)
        
        self.loadOnHandChart(json);
        self.stopWait();
	}
    
    //--------------------------------------
    //  EVENT HANDLERS
    //--------------------------------------
    
    self.onDemandModeSelected = function() {
    	cai.log("Selected Demand Mode");
    	self._mode("demand");
        self.getDemand();
    }
    
    self.onInventoryModeSelected = function() {
    	cai.log("Selected Inventory Mode");
    	self._mode("onhand");
        self.startWait("Requesting On Hand Inventory...");
        self.getOnHand();
    }
    
    self.onLocationSelected = function (event) {
	    if (event.args) {
	        var item = event.args.item;
	        if (item) {
            	cai.log("Selected Location: " + item.value);
                self.refreshMaterials();
                self.refreshData();
	        }
	    }
	}        
    
    self.onMaterialSelected = function (event) {
	    if (event.args) {
	        var item = event.args.item;
	        if (item) {
            	cai.log("Selected Material: " + item.value);
                self.refreshData();
	        }
	    }
	}        

    self.onResize = function() {
    	if (self._mode() == "demand") {
        	self.resizeDemandChart();
		}
        else {
        	self.resizeOnHandChart();
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
    
    self.getDemand = function() {
        self.startWait("Requesting Demand...");
        hub.getDemand(self.getSelectedLocation(), self.getSelectedMaterial(), cai.nowJSON(), self._intervals);
    }
    
    self.getOnHand = function() {
        self.startWait("Requesting On Hand...");
        hub.getOnHand(self.getSelectedLocation());
	}        
    
    self.refreshLocations = function() {
		cai.log("Retrieving Locations...");
        hub.getLocations();
	}
    
    self.refreshMaterials = function() {
		cai.log("Retrieving Materials...");
        hub.getMaterials(self.getSelectedLocation());
    }
    
    self.refreshData = function() {
    	if (self._mode() == "demand") {
        	self.getDemand();
		}
        else {
        	self.getOnHand();
		}            
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
    
    	var dm = new cai.DemandsModel(demands, self._materials);
    
        // prepare jqxChart settings
        var settings = {
            //title: "Inventory Demand",
            //description: "Demand projected for current schedule",
            title: "Projected Demand for " + dm.Material + " at Location " + dm.Location,
            enableAnimations: false,
            showLegend: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            backgroundColor: 'LightGray',
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
        $('#content').empty();
        $('#content').append("<div id='chartDemand' class='chartDemand'></div>");
        $('#chartDemand').jqxChart(settings);
        
    	self.resizeDemandChart();
	}
    
    self.loadOnHandChart = function(onhands) {
    
    	var ohm = new cai.OnHandsModel(onhands);
    
        // prepare jqxChart settings
        var settings = {
            //title: "On Hand Inventory",
            //description: "On Hand Inventory for current location",
            title: "On Hand Inventory at Location " + ohm.Location,
            enableAnimations: false,
            showLegend: false,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            backgroundColor: 'LightGray',
            source: ohm.Inventories,
            categoryAxis:
                {
                    textRotationAngle: 0,
                    dataField: 'Material',
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
            seriesGroups: ohm.SeriesGroups
        };        
        
        // setup the chart
        $('#content').empty();
        $('#content').append("<div id='chartOnHand' class='chartOnHand'></div>");
        
        $('#chartOnHand').jqxChart(settings);
        
    	self.resizeOnHandChart();
	}
    
    self.resizeDemandChart = function() {
    
        var container = $("#content");
        //$('#chartDemand').width(container.innerWidth());
        //$('#chartDemand').height(container.innerHeight());
        
        $('#chartDemand').width(container.innerWidth() - 20);
        $('#chartDemand').height(window.innerHeight - 100);
        
        $('#chartDemand').jqxChart('refresh');
    }

    self.resizeOnHandChart = function() {
        var container = $("#content");
        //$('#chartOnHand').width(container.innerWidth());
        //$('#chartOnHand').height(container.innerHeight());
        
        $('#chartOnHand').width(container.innerWidth() - 20);
        $('#chartOnHand').height(window.innerHeight - 100);
        
        $('#chartOnHand').jqxChart('refresh');
    }
    
    self.startWait = function(title) {
        $.blockUI({ message: '<h1><img src="img/ajax-loader.gif" /> ' + title + '</h1>' });
    }
    
    self.stopWait = function() {
        $.unblockUI();
	}      
};

