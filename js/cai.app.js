var cai = cai || {};  

cai.Application = function() {
    var self = this;
    
    self.appViewModel = null;
    
    self.init = function() {
    	self.appViewModel = new cai.AppViewModel();
        self.appViewModel.init();
        
        ko.applyBindings(self.appViewModel);
    };
    
    self.connectViews = function() {
	    hub.registerAppViewModel(self.appViewModel);
    }
    
    self.refreshViews = function() {
    	self.appViewModel.refresh();
    }
};

var cHubHost = "localhost";
var cHubPort = "3030";

var app = null;
var hub = null;

$(document).ready(function(){
    
    cai.log("Initializing the Application");
    app = new cai.Application();
    app.init();
    
    cai.log("Initializing the Hub");
    hub = new cai.HubClient(cHubHost, cHubPort);
    hub.init();
    
    cai.log("Refreshing views");
    app.connectViews();
    app.refreshViews();
});


