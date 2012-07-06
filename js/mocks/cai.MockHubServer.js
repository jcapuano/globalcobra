var cai = cai || {};
cai.server = cai.server || {};

cai.server.onGetLocations = function() {
	hub.onSetLocations(cai.MockLocations);
}

cai.server.onGetMaterials = function() {
	hub.onSetMaterials(cai.MockMaterials);
}

