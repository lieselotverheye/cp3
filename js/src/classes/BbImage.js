module.exports = (function(){
	function BbImage(imageData) {
		console.log('[BbImage] constructor');
		var template = Handlebars.compile($('#imageTemplate').text());
		var result = template(imageData);
		this.el = ( $(result) );
		this.removeButton = $('.btn-delete');
		console.log(this.removeButton);
		bean.on(this, 'click', this.removeClickHandler.bind(this));
	}

	BbImage.prototype.removeClickHandler = function(event) {
		bean.fire(this, 'remove', this);
	};

	function mousedownHandler(e){
		console.log(e);
	}

	return BbImage;
})();
