module.exports = (function(){
	function BbVideo(videoData, position, boundaries) {
		console.log('[BbVideo] constructor', 'top boundaries are ' + boundaries.top);
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

	BbVideo.prototype.mouseDownHandler = function( event ){
		bean.fire(this, 'object_selected', this);
		event.preventDefault();
		offsetX = event.offsetX;
		offsetY = event.offsetY;

		//console.log( 'Offset x = ' + this.offsetX + ' | y = ' + this.offsetY);

		window.addEventListener('mousemove', this._mouseMoveHandler);
		window.addEventListener('mouseup', this._mouseUpHandler);

		//class toekenennen met een drop shadow

	};

	BbVideo.prototype.mouseMoveHandler = function( event ){
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

	BbVideo.prototype.mouseUpHandler = function( event ){
		window.removeEventListener('mousemove', this._mouseMoveHandler);
		window.removeEventListener('mouseup', this._mouseUpHandler);
	};




	BbVideo.prototype.removeClickHandler = function( event ) {
		bean.fire(this, 'remove', this);

	};

	return BbVideo;
})();
