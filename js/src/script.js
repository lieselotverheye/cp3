(function(){
	var BbImage = require('./classes/BbImage');
	var BbVideo = require('./classes/BbVideo');
	var Invite = require('./classes/Invite');
	var Postit = require('./classes/Postit');
	var Project = require('./classes/Project');

$clickcount = 0;

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
		Array.prototype.forEach.call(document.getElementsByTagName("input"), function(input){
			input.addEventListener("click",clicked);
			if(!input.getAttribute("data-control")){
				console.log("does not contain data control");
			}
		});
		fetch_data();

		handlelogin();

	}

	function fetch_data(){
		//data wordt zogezegd gehaald, stel nu dat we wat image objects hebben met daarin een url, xpos en ypos;
		//container.innerHMTL = "";
		// for each item in de array, een image aanmaken
		var imageData = {image_url : "assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"};
		var imageData2 = {image_url : "assets/images/2014-11-30-sunday-rec-projects-wiersma-family-crest.jpg"};
		var imageArray = [imageData, imageData2];
		add_image(imageArray);
	}

	function handlelogin(){

		$('.loginknop').on('click', function(){
			event.preventDefault();


			$clickcount += 1;
			var inputData = {
				'count' : 1,
				'loginEmail' : $('.loginEmail').val(),
				'loginPass' : $('.loginPass').val()
			};

			var loginAjax = $.post('http://localhost/whiteboard/cp3-eindopdracht-2DEV2-groep10/index.php?page=home', inputData);

			loginAjax.done(function(data){

				console.log("got data back" + data);

			});


		});

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

	function add_image(data){
		//kijken welk dataType het is, als het een array is, door bv alles in te laden doen we een for loop
		//als het een string is door maar 1 object toe te voegen, voegen we maar 1 object toe.
		//code is dan korter
		if(data instanceof Array){
			//console.log(data + " is an array");
			for(var i = 0; i<data.length;i++){
				var bbImage = new BbImage(data[i]);
				$('#container').append(bbImage.el);
				//bean.on(bbImage.el, 'remove', BbImage.removeHandler.bind(bbImage.el));
			}
		}
		else if(data instanceof String){
			console.log(data + " is a string");
		}
	}

	this.removeHandler = function(bbImage) {
		console.log("aargh");
		this.el.removeChild(bbImage.el);
	}

	function add_post_it(){
		var postit = new Postit();
	}

	function add_video(){
		var bbVideo = new BbVideo();
	}

	init();

})();

