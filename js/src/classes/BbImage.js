module.exports = (function(){
	function BbImage(imageData, position, boundaries) {
		console.log('[BbImage] constructor', 'top boundaries are ' + boundaries.top);
		var template = Handlebars.compile($('#imageTemplate').text());
		var result = template(imageData);
		//element = array pos 0 van HandleBars
		this.el = ( $(result) )[0];
		this.boundaries = boundaries;

		this.removeButton = $('.btn-delete');
		//this.removeButton.on("click", removeButtonHandler);
		bean.on(this.removeButton, 'click', this.removeClickHandler.bind(this));

		var xpos = position.xPos;
		var ypos = position.yPos;

		this.el.style.left = xpos + 'px';
		this.el.style.top = ypos + 'px';

		this._mouseDownHandler = this.mouseDownHandler.bind(this);
		this._mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this._mouseUpHandler = this.mouseUpHandler.bind(this);

		this.el.addEventListener('mousedown', this._mouseDownHandler);
		console.log(this);
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

		if((event.y - offsetY) > this.boundaries.top){
		this.el.style.left = (event.x - offsetX ) +'px';
		this.el.style.top = (event.y - offsetY) + 'px';
		console.log(event.y - offsetY);
		}
		else{
			//window.removeEventListener('mousemove', this._mouseMoveHandler);
		//window.removeEventListener('mouseup', this._mouseUpHandler);
		}

	};

	BbImage.prototype.mouseUpHandler = function( event ){
		console.log("mouse goes up");
		window.removeEventListener('mousemove', this._mouseMoveHandler);
		window.removeEventListener('mouseup', this._mouseUpHandler);
	};




	BbImage.prototype.removeClickHandler = function(e) {
		console.log("fire");
		bean.fire(this, 'remove', this);

	};

	removeButtonHandler = function(){
		console.log("in the remove button");
			bean.fire(this, 'remove', this);

	}

	return BbImage;
})();
