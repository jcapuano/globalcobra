var cai = cai || {};  

cai.Colors = function(colors) {

	var self = this;
    
    self._colors = colors || [
    	"#FF0000",
        "#FF8800",
        "#FFC700",
        "#FFF600",
        "#D4FF00",
        "#83FF00",
        "#00FF26",
        "#00FFE9",
        "#00CBFF",
        "#0037FF",
        "#9800FF",
        "#FF00D8"
    ];
    self._coloritr = 0;
    
	self.reset = function() {
    	self._coloritr = 0;
    }
    
	self.nextColor = function() {
    	var color = self._colors[self._coloritr++];
        if (self._coloritr >= self._colors.length) {
        	self._coloritr = 0;
        }
        return color;
    }		      
};
