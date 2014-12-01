(function(){
	var BbImage = require('./classes/BbImage');
	var BbVideo = require('./classes/BbVideo');
	var Invite = require('./classes/Invite');
	var Postit = require('./classes/Postit');
	var Project = require('./classes/Project');

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
		fetch_data();

	}

	function fetch_data(){
		//data wordt zogezegd gehaald, stel nu dat we wat image objects hebben met daarin een url, xpos en ypos;
		//container.innerHMTL = "";
		// for each item in de array, een image aanmaken
	}

	function add_project(){
		var project = new Project();
	}

	function invite_user(){
		var invite = new Invite();
	}

	function save_project(){
		console.log("save project");
	}

	function delete_project(){
		console.log("delete_project");
	}

	function add_image(){
		var imageData = {image_url : "assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"};
		var bbImage = new BbImage(imageData);
		console.log(bbImage);

		$('#container').append(bbImage.el);
	}

	function add_post_it(){
		var postit = new Postit();
	}

	function add_video(){
		var bbVideo = new BbVideo();
	}

	init();

})();

