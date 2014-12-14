module.exports = (function(){
	var BbImage = require('./BbImage');
	var BbVideo = require('./BbVideo');
	var Invite = require('./Invite');
	var Postit = require('./Postit');
	var Project = require('./Project');
	var BbUploader = require('./BbUploader');
	var Loginregister = require('./Loginregister');
	var BOUNDARIES = {top: "190", bottom: "550", left: "0", right: ""};
	var position = {xPos: 200, yPos: 200};
	var newImage = {image_url : "assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"};
	var newVideo = {video_url : "assets/videos/Patti Smith - Horses.mp4"};
	var currentProject, currentUploadAction, login;


	function Blackboard(el){
		console.log("Blackboard constructor");
		login = new Loginregister();
		bean.on(login, 'login', loginHandler);
		console.log("naam = " + login.naam);

		bBuploader = new BbUploader();

		this.el = el;

		if(document.URL.search("home") != -1 ){
		}
		fetch_data();
	}



		function clicked(e){
		e.preventDefault();
			switch(e.currentTarget.getAttribute("data-control")){
			case "add_project" : animateFields("new_project");
			break;
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
			case "add_video" : add_video("string");
			break;
			case "upload" : uploadItem();
			break;
		}
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
	var projectName_input = document.querySelector('.project_name').value;
	var add_project_validation = currentProject.setProjectName(projectName_input);
		switch(add_project_validation){
			case "success" : $('h2').text(projectName_input);
			break;
			case "name_set" : //showen dat de naam al geset is, mogelijks veranderen
			break;
			case "no_name" : //tonen dat er geen naam gegeven is
			break;
		}
	}

	function invite_user(){
		var invite = new Invite();
	}

	function save_project(){
		console.log(currentProject.saveProject());
		bBuploader.uploadBoard(currentProject);
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
			animateFields("upload");
			this.currentUploadAction = "image";
			bbImage = new BbImage(newImage, position, BOUNDARIES);
			imageArray.push(bbImage);
		}

		$.each(imageArray, function( index, imageObject ) {
	  	$('.board').append(imageObject.el);
			bean.on(imageObject, 'remove', removeHandler.bind(this));
			bean.on(imageObject, 'object_selected', object_selectedHandler.bind(this));
			currentProject.addElement(imageObject);
			});
	}

	function removeHandler(element){
		$('.board')[0].removeChild(element.el);
		currentProject.removeElement(element);
	}

	function loginHandler(e){
			$('.containerrechts2').hide();
			$('.project_name').hide();
			$('.submitNewProject').hide();
			Array.prototype.forEach.call(document.getElementsByTagName("input"), function(input){
			if(!input.getAttribute("data-control")){
			}else{
				input.addEventListener("click",clicked);
			}
		});
	}

	function object_selectedHandler(element){
		console.log(element);
		$.each(currentProject.elements, function( index, value ) {
			value.el.style.zIndex = "0";
		});
		element.el.style.zIndex = String(currentProject.elements.length);
	}


	function add_post_it(){
		animateUploadField();
		var postit = new Postit();
		this.currentUploadAction = "postit";
	}

	function add_video(data){
		animateFields("upload");
		var bbVideo, videoArray = [];
		if(data instanceof Array){
			for(var i = 0; i<data.length;i++){
				bbVideo = new BbVideo(data[i], position, BOUNDARIES);
				videoArray.push(bbVideo);
			}
		}

		else if(typeof(data) === "string"){
			animateFields("upload");
			this.currentUploadAction = "video";
			bbVideo = new BbVideo(newVideo, position, BOUNDARIES);
			videoArray.push(bbVideo);
		}

		$.each(videoArray, function( index, videoObject ) {
			console.log(videoObject);
	  	$('.board').append(videoObject.el);
			bean.on(videoObject, 'remove', removeHandler.bind(this));
			bean.on(videoObject, 'object_selected', object_selectedHandler.bind(this));
			currentProject.addElement(videoObject);
			});
	}

	function animateFields(button){
		if(button === "upload"){
			if(!$('.containerrechts2').is(":visible") ){
				$('.containerrechts2').show(100);
			}
		}
		else if(button === "new_project"){
			console.log('show project');
			if(!$('.project_name').is(":visible") ){
				$('.project_name').show(100);
				$('.submitNewProject').show(100);
			}
		}
	}

	function uploadItem(){
		//ajax upload van de open file dialog string
		var selected_file = $(':file').prop('files')[0];
		if(selected_file !== undefined){
			var input = event.target;
			bBuploader.uploadOneItem(this.currentUploadAction, selected_file.name);
		}
		else{
			console.log("no file selectd");
		}
	}


		//console.log(e.target.files[0].name);

	return Blackboard;
})();

