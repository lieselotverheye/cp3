module.exports = (function(){
	var BbImage = require("./BbImage");
	function BbUploader() {
		console.log('[BbUploader] constructor');
	}

BbUploader.prototype.uploadBoard = function(project, url){
	checkExistingBb();
	if(project.elements instanceof Array){
		var bbElements = project.elements;
		$.each(bbElements, function(index, item){
			switch(String(item)){
				case "[BbImage]" : console.log(item + " is a BbImage");
				uploadImage(item);
				break;
			}
		});
	}
};

function uploadOneItem(item){
		switch(String(item)){
		case "image" : console.log(item + " is a BbImage, send to upload");
		uploadImage(item);
	}
}

function checkExistingBb(){
	//ajax get doen om te zien of het een edit is of een insert
}

function uploadImage(item){
	//ik ben een afbeelding, voeg mij toe met ajax
	console.log("upload item " + String(item));
}

	return BbUploader;
})();
