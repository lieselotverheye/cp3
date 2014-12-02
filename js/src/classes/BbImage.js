module.exports = (function(){
	offsetX = 0;
	offsetY = 0;
	function BbImage(imageData, boundaries) {
		console.log('[BbImage] constructor');
		var template = Handlebars.compile($('#imageTemplate').text());
		var result = template(imageData);
		//element = array pos 0 van HandleBars
		this.el = ( $(result) )[0];
		this.removeButton = $('.btn-delete');
		this.removeButton.on("click", removeButtonHandler);
		//bean.on(this.removeButton, 'click', this.removeClickHandler.bind(this));

		var xpos = 200;
		var ypos = 200;

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


	};

	BbImage.prototype.mouseMoveHandler = function( event ){

		if((event.y - offsetY) > 195){
		this.el.style.left = (event.x - offsetX) +'px';
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
		bean.fire(this.removeButton, 'remove', this);

	};

	removeButtonHandler = function(){
		console.log("in the remove button")
			bean.fire(this, 'remove', this);

	}

	return BbImage;
})();
