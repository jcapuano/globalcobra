var cai = cai || {};  

var cDefaultHost = "localhost";
var cDefaultPort = 3030;

cai.HubClient = function(host, port) {
	var self = this;
    
	self.Host = host || cDefaultHost;
	self.Port = port || cDefaultPort;
    self.socket = null;
    self.appViewModel = null;
    
    self.init = function() {
    	cai.log('Starting Hub Client');
    	self.socket = io.connect(self.Host, {port: self.Port});
        self.socket.on('connect', function() {
        
		    self.socket.on('set locations', function(data) {
		        cai.log("Set Locations");
		        cai.log(data);
                self.onSetLocations(data);
		    });
            
		    self.socket.on('set materials', function(data) {
		        cai.log("Set Materials");
		        cai.log(data);
                self.onSetMaterials(data);
		    });
            
		    self.socket.on('set demand', function(data) {
		        cai.log("Set Demand");
		        cai.log(data);
                self.onSetDemand(data);
		    });
            
		    self.socket.on('set inventory', function(data) {
		        cai.log("Set On Hand");
		        cai.log(data);
                self.onSetOnHand(data);
		    });
            
		    self.socket.on('demand change', function(data) {
		        cai.log("Demand Change");
		        cai.log(data);
                self.onSetDemand(data);
		    });
            
		    self.socket.on('inventory change', function(data) {
		        cai.log("On Hand Change");
		        cai.log(data);
                self.onSetOnHand(data);
		    });
        });
    }    
    
    self.stop = function() {
    	cai.log('Stopping Hub Client');
        self.socket.disconnect();
    }    
    
    self.registerAppViewModel = function(vm) {
    	self.appViewModel = vm;
    }
    
    self.getLocations = function() {
    	cai.log('Get Locations');
        self.socket.emit('get locations');
    }
	self.onSetLocations = function(locations) {
    	if (self.appViewModel) {
        	self.appViewModel.onSetLocations(locations);
        }
	}
    
    self.getMaterials = function(location) {
    	cai.log('Get Materials');
        self.socket.emit('get materials', location);
    }
    self.onSetMaterials = function(materials) {
    	if (self.appViewModel) {
        	self.appViewModel.onSetMaterials(materials);
        }
	}
    
    self.getDemand = function(location, material, starttime, intervals) {
    	cai.log('Get Demand');
        self.socket.emit('get demand', location, material, starttime, intervals);
    }
	self.onSetDemand = function(demands) {
    	if (self.appViewModel) {
        	self.appViewModel.onSetDemand(demands);
        }
	}
    
    self.getOnHand = function(location) {
    	cai.log('Get On Hand');
        self.socket.emit('get inventory', location);
    }
	self.onSetOnHand = function(onhands) {
    	if (self.appViewModel) {
        	self.appViewModel.onSetOnHand(onhands);
        }
	}
};
