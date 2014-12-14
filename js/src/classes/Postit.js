module.exports = (function(){
	function Postit() {
		console.log('[Postit] constructor');
		var template = Handlebars.compile($('#postItTemplate').text());
		var result = template("");
		this.el = ( $(result) )[0];
		this.input = this.el.querySelector('.postIt-input');
		this.el.addEventListener('submit', this.submitHandler.bind(this));
		console.log(this.el);

		this._mouseDownHandler = this.mouseDownHandler.bind(this);
		this._mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this._mouseUpHandler = this.mouseUpHandler.bind(this);

		this.el.querySelector('.content').addEventListener('mousedown', this._mouseDownHandler);
	}

Postit.prototype.submitHandler = function(event) {
		event.preventDefault();
		this.el.querySelector('p').innerText = this.input.value;
		this.input.value = '';
	};

Postit.prototype.mouseDownHandler = function( event ){
		if(event.toElement != "[object HTMLInputElement]"){
		event.preventDefault();
		}
		bean.fire(this, 'object_selected', this);

		this.clickOffsetX = event.offsetX;
		this.clickOffsetY = event.offsetY;
		//console.log( ' offsetx = ' + this.offsetY + ' | offsety = ' + this.offsetY);
		window.addEventListener('mousemove', this._mouseMoveHandler);
		window.addEventListener('mouseup', this._mouseUpHandler);

		//class toekenennen met een drop shadow

	};

	Postit.prototype.mouseMoveHandler = function( event ){
			this.xPos = event.x - this.clickOffsetX;
			this.yPos = event.y - this.clickOffsetY;
			this.el.style.left = this.xPos +'px';
			this.el.style.top = this.yPos + 'px';
	};

	Postit.prototype.mouseUpHandler = function( event ){
		window.removeEventListener('mousemove', this._mouseMoveHandler);
		window.removeEventListener('mouseup', this._mouseUpHandler);
	};

	Postit.prototype.removeClickHandler = function( event ) {
		bean.fire(this, 'remove', this);

	};

	Postit.prototype.toString = function(){
		return "[BbImage]";
	};
	return Postit;
})();
