module.exports = (function(){
	function BbImage(imageData) {
		console.log('[BbImage] constructor');
		var template = Handlebars.compile($('#imageTemplate').text());
		var result = template(imageData);
		this.el = ( $(result) );
		this.removeButton = $('.btn-delete');
		this.removeButton.on("click", this.deleteHandler);
		bean.on(this.removeButton, 'click', this.removeClickHandler.bind(this));
		initDrag();
	}

	function initDrag(){
		console.log("initDrag");
	}


	BbImage.prototype.deleteHandler = function(e){
		console.log("delete");
	}

	BbImage.prototype.removeClickHandler = function(e) {
		console.log("removen");
		bean.fire(this, 'remove', this);

	};

	return BbImage;
})();
