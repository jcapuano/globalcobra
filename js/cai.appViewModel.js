var cai = cai || {};  

cai.AppViewModel = function() {
	var self = this;
    
    self.Error = ko.observable("");
    
	self.init = function() {
    
		cai.log("Initializing the Application View Model");
        
        $( "#selectionMode" ).buttonset();
        
        //$("#radioDemand").jqxRadioButton({ groupName: '1', width: 250, height: 25 });
        //$("#radioInventory").jqxRadioButton({ groupName: '1', width: 250, height: 25 });
    }    
    
    //--------------------------------------
    //  PUBLIC
    //--------------------------------------
    self.refresh = function() {
		cai.log("Retrieving Locations...");
        hub.getLocations();
        
		cai.log("Retrieving Materials...");
        hub.getMaterials();
    }
    
    //--------------------------------------
    //  HUB HANDLERS
    //--------------------------------------
	self.onSetLocations = function(locations) {
    	var json = (typeof locations == "string") ? $.evalJSON(locations) : locations;
        self.loadMenu("#menuLocations", json, "locationCode", 50, self.onLocationSelected);
	}

    self.onSetMaterials = function(materials) {
    	var json = (typeof materials == "string") ? $.evalJSON(materials) : materials;
        
        var mnuLocation = $("#menuLocations");
        var selectedLocation = mnuLocation ? $.trim(mnuLocation.text()) : "";
        
        var filtered = ko.utils.arrayFilter(json, function(material) {
            return selectedLocation && selectedLocation.length > 0 && material.locationCode == selectedLocation;
        });
        
        self.loadMenu("#menuMaterials", filtered, "materialCode", 150, self.onMaterialSelected);
	}
    
    //--------------------------------------
    //  EVENT HANDLERS
    //--------------------------------------
    
    self.onLocationSelected = function (event) {
	    if (event.args) {
	        var item = event.args.item;
	        if (item) {
            	alert("Selected Location: " + item);
	        }
	    }
	}        
    
    self.onMaterialSelected = function (event) {
	    if (event.args) {
	        var item = event.args.item;
	        if (item) {
            	alert("Selected Material: " + item);
	        }
	    }
	}        
    
    //--------------------------------------
    //  PRIVATE
    //--------------------------------------
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
    
    self.startWait = function(title) {
        $.blockUI({ message: '<h1><img src="img/ajax-loader.gif" /> ' + title + '</h1>' });
    }
    
    self.stopWait = function() {
        $.unblockUI();
	}      
};

