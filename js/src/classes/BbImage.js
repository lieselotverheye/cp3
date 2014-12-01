module.exports = (function(){
	function BbImage(imageData) {
		console.log('[BbImage] constructor');
		var template = Handlebars.compile($('#imageTemplate').text());
		var result = template(imageData);
		this.el = ( $(result) );
	}

	return BbImage;
})();
