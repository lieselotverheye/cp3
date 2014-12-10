module.exports = (function(){
	var BbImage = require('./BbImage');
	var BbVideo = require('./BbVideo');
	var Invite = require('./Invite');
	var Postit = require('./Postit');
	var Project = require('./Project');
	var BbUploader = require('./BbUploader');
	var BOUNDARIES = {top: "190", bottom: "550", left: "0", right: ""};
	var position = {xPos: 200, yPos: 200};
	var newImage = {image_url : "assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"};
	var currentProject, currentUploadAction;

	function Blackboard(el){
		bBuploader = new BbUploader();
		$('.containerrechts2').hide();
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
			animateUploadField();
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
		//remove element from projectlist
		currentProject.removeElement(element);
	}

	function object_selectedHandler(element){
		//$('.board')[0].(element.el);
		console.log("selected" + element.el);
		console.log("z index = " + element.el.style.zIndex);
		console.log("total elements = " + currentProject.elements.length);
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

	function add_video(){
		animateUploadField();
		var bbVideo = new BbVideo();
		this.currentUploadAction = "video";
	}

	function animateUploadField(){
		if(!$('.containerrechts2').is(":visible") ){
			$('.containerrechts2').show(100);

			/*setTimeout(function() {
      // Do something every 2 seconds
      $('.containerrechts2').hide(100);
			}, 20000);*/
		}
		else(console.log("already hidden"));
	}

	function uploadItem(){
		console.log(window.FileReader.readAsDataURL);
		console.log(bBuploader);
		var selected_file = $(':file').prop('files')[0];
		if(selected_file !== undefined){
			var input = event.target;
      console.log("url  " + reader.readAsDataURL(selected_file));
			bBuploader.upload(this.currentUploadAction, selected_file.name);
		}
		else{
			console.log("no file selectd");
		}
	}


		//console.log(e.target.files[0].name);

	return Blackboard;
})();

