module.exports = (function(){
	function Postit() {
		console.log('[Postit] constructor');
		var template = Handlebars.compile($('#postItTemplate').text());
		var result = template("");
		this.el = ( $(result) )[0];
		this.input = this.el.querySelector('.postIt-input');
		this.el.addEventListener('submit', submitHandler.bind(this));
		this.el.querySelector('.colors').addEventListener('change', colorChangeHandler.bind(this));
		this.removeButton = ($(this.el).find('.btn-delete')[0]);
		bean.on(this.removeButton, 'click', this.removeClickHandler.bind(this));

		this._mouseDownHandler = this.mouseDownHandler.bind(this);
		this._mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this._mouseUpHandler = this.mouseUpHandler.bind(this);

		this.el.querySelector('.content').addEventListener('mousedown', this._mouseDownHandler);
	}

function submitHandler(event) {
		event.preventDefault();
		this.el.querySelector('p').innerText = this.input.value;
		this.input.value = '';
	};

function colorChangeHandler(event){
	console.log(event.currentTarget.value)
	this.el.style.color = "#000";
	var color;
		switch(event.currentTarget.value){
			case "yellow" : color = "FF0";
			break;
			case "magenta" : color = "F0F";
			break;
			case "cyaan" : color = "00FFFF";
			break;
			case "key" : color = "000000";
			this.el.style.color = "#FFF";
			break;
		}
	this.el.style.backgroundColor = "#"+color;
}

Postit.prototype.mouseDownHandler = function( event ){
		bean.fire(this, 'object_selected', this);
		if(event.toElement != "[object HTMLInputElement]"){
		event.preventDefault();
		}


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
		console.log("postIt delete")
		bean.fire(this, 'remove', this);

	};

	Postit.prototype.toString = function(){
		return "[BbImage]";
	};
	return Postit;
})();
