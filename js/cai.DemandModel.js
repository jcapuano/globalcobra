var cai = cai || {};  

cai.DemandModel = function(starttime, demands) {
	var self = this;
    
    self.StartTime = null;
    
    // set display time
    self.setDisplayTime = function() {
    	var dt = new Date(starttime);
        var t = dt.toTimeString();
        var i = t.lastIndexOf(":");
        
        self.StartTime = t.substr(0, i);
    }
    
    // set type amounts
    self.setTypeAmounts = function() {
    	demands.sort(function(a,b) {
    		var typeA = a.type.toLowerCase();
	        var typeB = b.type.toLowerCase();
	    	if (typeA < typeB) {
    	    	return -1;
        	}
	    	if (typeA > typeB) {
    	    	return 1;
        	}
	        return 0;
	    });
    
	    ko.utils.arrayForEach(demands, function(item) {
    		self[item.type] = parseFloat(item.amount);
	    });
    }
    
    self.defaultMissingTypes = function(types) {
	    ko.utils.arrayForEach(types, function(type) {
        	if (self[type] === undefined) {
            	self[type] = 0;
            }
	    });
    }
    
    self.construct = function() {
    	self.setDisplayTime();
        self.setTypeAmounts();
    }
    
    self.construct();
};

cai.DemandsModel = function(demands) {

	var self = this;
    
    self._demand = demands.length > 0 ? demands[0] : {};
    self.Location = self._demand.locationCode;
    self.Material = self._demand.materialCode;
    self.Min = 0;
    self.Max = 0;
    self.Interval = 0;
    self.UOM = "";
    self.Demands = [];
    self.DemandTypes = [];
    self.Series = []
    
    self.buildSeries = function() {
        
	    ko.utils.arrayForEach(self.DemandTypes, function(type) {
        	self.Series.push({ dataField: type, displayText: type});
	    });
    }
    
    self.buildDemands = function() {
        // loop over all time buckets
	    ko.utils.arrayForEach(self._demand.timeBuckets, function(demand) {
        	var dvm = new cai.DemandModel(demand.startTime, demand.demands);
            self.Demands.push(dvm);
            
            // loop over each demand type
		    ko.utils.arrayForEach(demand.demands, function(item) {
		        var value = parseFloat(item.amount);
		        if (!isNaN(value) && value > self.Max) {
                	self.Max = value;
		        }
                if (!self.UOM || self.UOM.length < 1) {
                	self.UOM = item.uom;
                }
                
                if (self.DemandTypes.indexOf(item.type) < 0) {
                	self.DemandTypes.push(item.type);
                }
		    });
	    });
        
        self.DemandTypes.sort();
        
	    ko.utils.arrayForEach(self.Demands, function(demand) {
        	demand.defaultMissingTypes(self.DemandTypes);
	    });
    }
	
    self.construct = function() {
    	self.buildDemands();
        self.buildSeries();
        self.Interval = Math.floor((self.Max - self.Min) / 10.0);
    }
    self.construct();
};
