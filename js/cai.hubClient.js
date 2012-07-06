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

    self.getDemand = function(location, material, starttime, intervals) {
    	cai.server.onGetDemand(location, material, starttime, intervals);
    }
	self.onSetDemand = function(demands) {
    	if (self.appViewModel) {
        	self.appViewModel.onSetDemand(demands);
        }
	}
    
    self.getOnHand = function(location) {
    	cai.server.onGetOnHand(location);
    }
	self.onSetOnHand = function(onhands) {
    	if (self.appViewModel) {
        	self.appViewModel.onSetOnHand(onhands);
        }
	}
    
};
