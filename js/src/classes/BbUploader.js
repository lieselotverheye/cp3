module.exports = (function(){
	var BbImage = require("./BbImage");
	function BbUploader() {
		console.log('[BbUploader] constructor');
	}

BbUploader.prototype.uploadBoard = function(data, url){
	console.log("datatype = " + data, "url = " + url);
	if(data.elements instanceof Array){
		var bbElements = data.elements;
		$.each(bbElements, function(index, item){
			switch(String(item)){
				case "[BbImage]" : console.log(item + " is a BbImage");
				break;
			}
		});
	}
};

	return BbUploader;
})();
