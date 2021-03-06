var cai = cai || {};  

/*
	so, wth is going on here? basically, the model json must be pivoted and flattened for the jqwidget chart...
*/

cai.OnHandModel = function(onhand) {
	var self = this;
    
	function roundNumber(num, dec) {
		var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
		return result;
	}    
    
    self.Material = onhand.materialCode;
    self.OnHand = onhand.amount;
    self.UOM = onhand.uom;
    self.Container = onhand.containerCode;
    self.ContainerCapacity = onhand.capacity;
    self.Amount = roundNumber(((onhand.amount / onhand.capacity) * 100.0), 2);
    self[onhand.materialCode] = self.Amount;
    
    self.defaultMissingMaterials = function(materials) {
	    ko.utils.arrayForEach(materials, function(material) {
        	if (self[material] === undefined) {
            	self[material] = 0;
            }
	    });
    }
    
};

cai.OnHandsModel = function(onhands) {

	var self = this;
    
    self._onhands = onhands && onhands.length > 0 ? onhands : [];
    self.Location = self._onhands.length > 0 ? self._onhands[0].locationCode : "";
    self.Materials = ko.utils.arrayMap(self._onhands, function(onhand) {
		    return onhand.materialCode;
		});
    self.Inventories = ko.utils.arrayMap(self._onhands, function(onhand) {
    		var ohm = new cai.OnHandModel(onhand);
            ohm.defaultMissingMaterials(self.Materials);
            return ohm;
		});
        
    self._colors = new cai.Colors();
    
	self.SeriesGroups = ko.utils.arrayMap(self.Inventories, function(onhand) {
    	return {
                type: 'column',
                columnsGapPercent: 50,
                valueAxis:
                {
                    unitInterval: 10,
                    minValue: 0,
                    maxValue: 100,
                    displayValueAxis: self.Inventories[0] == onhand,
                    description: 'Percentage of Container Capacity (%)',
                    axisSize: 'auto',
                    tickMarksColor: '#888888'
                },
                series: [
                	{ 
                    	dataField: onhand.Material, 
                        displayText: onhand.OnHand + ' ' + onhand.UOM, 
                        color: self._colors.nextColor()
					}
                ]
            };
	    });
};
