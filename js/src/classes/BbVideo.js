module.exports = (function(){
	function BbVideo(videoData, position, boundaries) {
		console.log('[BbVideo] constructor', 'top boundaries are ' + boundaries.top);
		var template = Handlebars.compile($('#videoTemplate').text());
		var result = template(videoData);
		this.el = ( $(result) )[0];
		this.boundaries = boundaries;

		this.removeButton = ($(this.el).find('.btn-delete')[0]);
		console.log(this.removeButton);
		bean.on(this.removeButton, 'click', this.removeClickHandler.bind(this));

		this.xPos = position.xPos;
		this.yPos = position.yPos;
		this.el.style.left = this.xPos + 'px';
		this.el.style.top = this.yPos + 'px';

		this._mouseDownHandler = this.mouseDownHandler.bind(this);
		this._mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this._mouseUpHandler = this.mouseUpHandler.bind(this);
		console.log(this.el);
		this.el.addEventListener('mousedown', this._mouseDownHandler);
	}

	BbVideo.prototype.mouseDownHandler = function( event ){
		bean.fire(this, 'object_selected', this);
		event.preventDefault();
		this.offsetX = event.offsetX;
		this.offsetY = event.offsetY;
		//console.log( ' offsetx = ' + this.offsetY + ' | offsety = ' + this.offsetY);
		window.addEventListener('mousemove', this._mouseMoveHandler);
		window.addEventListener('mouseup', this._mouseUpHandler);

		//class toekenennen met een drop shadow

	};

	BbVideo.prototype.mouseMoveHandler = function( event ){

			this.xPos = event.x - (this.offsetX*2);
			this.yPos = event.y - (this.offsetY*2);

			this.el.style.left = this.xPos +'px';
			this.el.style.top = this.yPos + 'px';
	};

	BbVideo.prototype.mouseUpHandler = function( event ){
		window.removeEventListener('mousemove', this._mouseMoveHandler);
		window.removeEventListener('mouseup', this._mouseUpHandler);
	};

	BbVideo.prototype.removeClickHandler = function( event ) {
		bean.fire(this, 'remove', this);

	};

	BbVideo.prototype.toString = function(){
		return "[BbVideo]";
	};

	return BbVideo;
})();
