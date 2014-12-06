module.exports = (function(){
	var BbImage = require('./BbImage');
	var BbVideo = require('./BbVideo');
	var Invite = require('./Invite');
	var Postit = require('./Postit');
	var Project = require('./Project');
	var BOUNDARIES = {top: "190", bottom: "550", left: "0", right: ""};
	var position = {xPos: 500, yPos: 500};
	var newImage = {image_url : "assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"};
	var board_elements = [];
	var currentProject;

	function clicked(e){
		e.preventDefault();
			switch(e.currentTarget.getAttribute("data-control")){
			case "new_project" : add_project();
			break;
			case "invite_user" : invite_user();
			break;
			case "save_project" : save_project();
			break;
			case "delete_project" : delete_project();
			break;
			case "add_image": add_image("assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg");
			break;
			case "add_post-it" : add_post_it();
			break;
			case "add_video" : add_video();
			break;
		}
	}


	function Blackboard(el){
		this.el = el;

		Array.prototype.forEach.call(document.getElementsByTagName("input"), function(input){
			if(!input.getAttribute("data-control")){
				console.log(input + "does not contain data control");
			}else{
				input.addEventListener("click",clicked);
			}
		});

		if(document.URL.search("home") != -1 ){
		}
		fetch_data();


	}

	function fetch_data(){
		//data wordt zogezegd gehaald, stel nu dat we wat image objects hebben met daarin een url, xpos en ypos;
		//container.innerHMTL = "";
		// for each item in de array, een image aanmaken
		currentProject = new Project();
		var imageData = {image_url : "assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"};
		var imageData2 = {image_url : "assets/images/2014-11-30-sunday-rec-projects-wiersma-family-crest.jpg"};
		var imageArray = [imageData, imageData2];
		add_image(imageArray);
	}


	function add_project(){
	currentProject.projectName = document.querySelector('.project_name').value;
	}

	function invite_user(){
		var invite = new Invite();
	}

	function save_project(){
		console.log(currentProject.saveProject());
	}

	function delete_project(){
		console.log("delete_project");
	}

	function add_image(data){
		var bbImage, imageArray = [];
		if(data instanceof Array){
			for(var i = 0; i<data.length;i++){
				bbImage = new BbImage(data[i], position, BOUNDARIES);
				imageArray.push(bbImage);
			}
		}

		else if(typeof(data) === "string"){
			bbImage = new BbImage(newImage, position, BOUNDARIES);
			imageArray.push(bbImage);
		}

		$.each(imageArray, function( index, imageObject ) {
	  	$('.board').append(imageObject.el);
			bean.on(imageObject, 'remove', removeHandler.bind(this));
			currentProject.addElement(imageObject);
			});
	}

	function removeHandler(element){
		$('.board')[0].removeChild(element.el);
		//remove element from projectlist
		currentProject.removeElement(element);
	}


	function add_post_it(){
		var postit = new Postit();
	}

	function add_video(){
		var bbVideo = new BbVideo();
	}
	return Blackboard;
})();

