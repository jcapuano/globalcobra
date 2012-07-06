var cai = cai || {};  

cai.HubClient = function() {
	var self = this;
    
    // General
    self.init = function() {
    }
    
    self.appViewModel = null;
    
    self.registerAppViewModel = function(vm) {
    	self.appViewModel = vm;
    }
    
    self.getLocations = function() {
    	cai.server.onGetLocations();
    	
    }
	self.onSetLocations = function(locations) {
    	if (self.appViewModel) {
        	self.appViewModel.onSetLocations(locations);
        }
	}

    self.getMaterials = function() {
    	cai.server.onGetMaterials();
    }
    self.onSetMaterials = function(materials) {
    	if (self.appViewModel) {
        	self.appViewModel.onSetMaterials(materials);
        }
	}
    
};
