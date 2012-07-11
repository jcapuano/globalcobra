var cai = cai || {};
cai.server = cai.server || {};

cai.server.onGetLocations = function() {
	hub.onSetLocations(cai.MockLocations);
}

cai.server.onGetMaterials = function(location) {
	var materials = ko.utils.arrayFilter(cai.MockMaterials, function(material) {
            return material.locationCode == location;
        });
	hub.onSetMaterials(materials);
}

cai.server.onGetDemand = function(location, material, starttime, intervals) {
	var demands = ko.utils.arrayFilter(cai.MockDemand, function(demand) {
            return demand.locationCode == location && demand.materialCode == material;
        });
    
	hub.onSetDemand(demands);
}

cai.server.onGetOnHand= function(location) {
	var onhand = ko.utils.arrayFilter(cai.MockInventory, function(inventory) {
            return inventory.locationCode == location;
        });
    
	hub.onSetOnHand(onhand);
}
