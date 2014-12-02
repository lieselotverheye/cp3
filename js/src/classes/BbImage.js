module.exports = (function(){
	offsetX = 0;
	offsetY = 0;
	function BbImage(imageData) {
		console.log('[BbImage] constructor');
		var template = Handlebars.compile($('#imageTemplate').text());
		var result = template(imageData);
		this.el = ( $(result) );
		//console.log(this.el);
		this.removeButton = $('.btn-delete');
		bean.on(this.removeButton, 'click', this.removeClickHandler.bind(this));

		var xpos = 0;
		var ypos = 0;

		this.el[0].style.left = xpos + 'px';
		this.el[0].style.top = ypos + 'px';

		this._mouseDownHandler = this.mouseDownHandler.bind(this);
		this._mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this._mouseUpHandler = this.mouseUpHandler.bind(this);

		this.el[0].addEventListener('mousedown', this._mouseDownHandler);
	}

	BbImage.prototype.mouseDownHandler = function( event ){
		//je selecteert het block element door de bind,
		//zonder bind zou je de div (this.el) selecteren
		//console.log(this);
		//console.log(this.naam);


		offsetX = event.offsetX;
		offsetY = event.offsetY;

		//console.log( 'Offset x = ' + this.offsetX + ' | y = ' + this.offsetY);
		console.log(window);
		window.addEventListener('mousemove', this._mouseMoveHandler);
		window.addEventListener('mouseup', this._mouseUpHandler);


	};

	BbImage.prototype.mouseMoveHandler = function( event ){
		this.el[0].style.left = (event.x - offsetX) +'px';
		this.el[0].style.top = (event.y - offsetY) + 'px';


	};

	BbImage.prototype.mouseUpHandler = function( event ){
		console.log("mouse goes up");
		window.removeEventListener('mousemove', this._mouseMoveHandler);
		window.removeEventListener('mouseup', this._mouseUpHandler);
	};




	BbImage.prototype.removeClickHandler = function(e) {
		bean.fire(this, 'remove', this);

	};

	return BbImage;
})();
