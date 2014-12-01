(function(){
	var BbImage = require('./src/classes/BbImage.js');

	function clicked(e){
		e.preventDefault();
			switch(e.currentTarget.getAttribute("data-control")){
			case "add_project" : add_project();
			break;
			case "invite_user" : invite_user();
			break;
			case "save_project" : save_project();
			break;
			case "delete_project" : delete_project();
			break;
			case "add_image" : add_image();
			break;
			case "add_post-it" : add_post_it();
			break;
			case "add_video" : add_video();
			break;
		}
	}


	function init(){
		Array.prototype.forEach.call(document.getElementsByTagName("a"), function(a){
			a.addEventListener("click",clicked);
			if(!a.getAttribute("data-control")){
				console.log("does not contain data control");
			}
		});

	}

	function add_project(){
		console.log("project add");
	}

	function invite_user(){
		console.log("user invite");
	}

	function save_project(){
		console.log("save project");
	}

	function delete_project(){
		console.log("delete_project");
	}

	function add_image(){
		console.log("add_image");
		var bbImage = new BbImage();
		console.log(BbImage);
	}

	function add_post_it(){
		console.log("add_post it");
	}

	function add_video(){
		console.log("add video");
	}

	init();

})();

