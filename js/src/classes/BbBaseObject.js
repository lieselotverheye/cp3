module.exports = (function(){

function BbBaseObject() {
	this.name = "bbBaseObject";
}

mouseDownHandler = function( event ){
		event.preventDefault();
		bean.fire(this, 'object_selected', this);

		clickOffsetX = event.offsetX;
		clickOffsetY = event.offsetY;
		console.log(event);
		//console.log( ' offsetx = ' + this.offsetY + ' | offsety = ' + this.offsetY);
		window.addEventListener('mousemove', this._mouseMoveHandler);
		window.addEventListener('mouseup', this._mouseUpHandler);

		//class toekenennen met een drop shadow

	};

return BbBaseObject;
})();
