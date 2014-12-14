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
		bean.fire(this, 'object_selected', this);
		event.preventDefault();
		this.offsetX = event.offsetX;
		this.offsetY = event.offsetY;
		//console.log( ' offsetx = ' + this.offsetY + ' | offsety = ' + this.offsetY);
		window.addEventListener('mousemove', this._mouseMoveHandler);
		window.addEventListener('mouseup', this._mouseUpHandler);

		//class toekenennen met een drop shadow

	};

	BbImage.prototype.mouseMoveHandler = function( event ){

			this.xPos = event.x - (this.offsetX*2);
			this.yPos = event.y - (this.offsetY*2);
			//console.log( ' offsetx = ' + this.offsetY + ' | offsety = ' + this.offsetY);
			//console.log( ' x = ' + this.xPos + ' | y = ' + this.yPos);
			this.el.style.left = this.xPos +'px';
			this.el.style.top = this.yPos + 'px';
	};

	BbImage.prototype.mouseUpHandler = function( event ){
		window.removeEventListener('mousemove', this._mouseMoveHandler);
		window.removeEventListener('mouseup', this._mouseUpHandler);
	};

	BbImage.prototype.removeClickHandler = function( event ) {
		bean.fire(this, 'remove', this);

	};

	BbImage.prototype.toString = function(){
		return "[BbImage]";
	};

	return BbImage;
})();
