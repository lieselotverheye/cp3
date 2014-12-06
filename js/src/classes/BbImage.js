module.exports = (function(){
	function BbImage(imageData, position, boundaries) {
		console.log('[BbImage] constructor', 'top boundaries are ' + boundaries.top);
		var template = Handlebars.compile($('#imageTemplate').text());
		var result = template(imageData);
		this.el = ( $(result) )[0];
		this.boundaries = boundaries;

		this.removeButton = ($(this.el).find('.btn-delete')[0]);
		bean.on(this.removeButton, 'click', this.removeClickHandler.bind(this));

		this.xPos = position.xPos;
		this.yPos = position.yPos;

		this.el.style.left = this.xPos + 'px';
		this.el.style.top = this.yPos + 'px';

		this._mouseDownHandler = this.mouseDownHandler.bind(this);
		this._mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this._mouseUpHandler = this.mouseUpHandler.bind(this);

		this.el.addEventListener('mousedown', this._mouseDownHandler);
	}

	BbImage.prototype.mouseDownHandler = function( event ){
		//je selecteert het block element door de bind,
		//zonder bind zou je de div (this.el) selecteren
		//console.log(this);
		//console.log(this.naam);

		event.preventDefault();
		offsetX = event.offsetX;
		offsetY = event.offsetY;

		//console.log( 'Offset x = ' + this.offsetX + ' | y = ' + this.offsetY);

		window.addEventListener('mousemove', this._mouseMoveHandler);
		window.addEventListener('mouseup', this._mouseUpHandler);

		//class toekenennen met een drop shadow

	};

	BbImage.prototype.mouseMoveHandler = function( event ){
		if((event.y - offsetY) > this.boundaries.top &&
			(event.y - offsetY) < this.boundaries.bottom
			){
			this.xPos = event.x - offsetX ;
			this.yPos = event.y - offsetY;
			this.el.style.left = this.xPos +'px';
			this.el.style.top = this.yPos + 'px';
		}

		console.log( 'Offset x = ' + this.xPos + ' | y = ' + this.yPoss);

	};

	BbImage.prototype.mouseUpHandler = function( event ){
		window.removeEventListener('mousemove', this._mouseMoveHandler);
		window.removeEventListener('mouseup', this._mouseUpHandler);
	};




	BbImage.prototype.removeClickHandler = function( event ) {
		bean.fire(this, 'remove', this);

	};

	return BbImage;
})();
