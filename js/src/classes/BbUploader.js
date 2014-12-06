module.exports = (function(){
	function BbUploader() {
		console.log('[BbUploader] constructor');
	}

BbUploader.prototype.upload = function(dataType, url){
	console.log("datatype = " + dataType, "url = " + url);
};

	return BbUploader;
})();
