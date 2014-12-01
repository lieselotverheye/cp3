module.exports = (function(){
	function BbImage(imageData) {
		console.log('[BbImage] constructor');
		var template = Handlebars.compile($('#imageTemplate').text());
		var result = template(imageData);
		this.el = ( $(result) );
		this.removeButton = $('.btn-delete');
		bean.on(this.removeButton, 'click', this.removeClickHandler.bind(this));
		//initDrag();
	}

	/*
	function initDrag(){
		console.log("initDrag");
	}
	*/


	BbImage.prototype.removeClickHandler = function(e) {
		bean.fire(this, 'remove', this);

	};

	return BbImage;
})();
