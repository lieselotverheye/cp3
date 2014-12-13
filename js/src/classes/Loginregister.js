module.exports = (function(){
	var post;
	var naam = "frederik";

	function Loginregister() {
		//console.log('[Loginregister] constructor');
this.naam = "frederik";

		console.log("naam binnen klasse" + this.naam );

		console.log(post);
		if(typeof(post) == "undefined"){
			console.log("post is undefined");
		var template = Handlebars.compile($('#notloggedin-template').text());
		var context = {title: ""};

		var result = template(context);
		var el = $(result)[0];

		var loginheader = document.querySelector('#loginheader');
		loginheader.appendChild(el);
		}
		login.call(this);
	}

	function defaultheader(){

	}


	function login(){
		$('.loginbutton').on('click', (function(event){
			event.preventDefault();
			voorbeeldJSONPost.call(this);
		}).bind(this));
	}

	function voorbeeldJSONPost() {

		$.post( "index.php?page=home", {
			email: $('.loginEmail').val(),
			pass: $('.loginPass').val()
		})
		.done((function( data ) {
		console.log(data);

			if( data.result === true){
				console.log("correct result in " + this);
				post = data.result;
				//session = data.session.user;
				console.log('gebruiker ingelogd');
				$("#loginheader header").remove();
				loadnewHeader(data.session.user);
				bean.fire(this, 'login');

			}else{
				if(data.errors.email){
					$('.erroremail').html(data.errors.email);
				}
				if(!data.errors.email){
					$('.erroremail').html("");
				}
				if(data.errors.password){
					$('.errorpassword').html(data.errors.password);
				}
				if(!data.errors.password){
					$('.errorpassword').html("");
				}
			}

	  }).bind(this));

	}

	function loadnewHeader(useremail){

		console.log(this);


		var template = Handlebars.compile($('#loggedin-template').html());
		var context = {user: useremail};

		var result = template(context);

		var el = [$(result)[0], $(result)[1], $(result)[2]];

		var def = document.querySelector('#loginheader');
		def.appendChild(el[0]);
		def.appendChild(el[1]);
		def.appendChild(el[2]);

		console.log("We gaan login event afvuren");
	}








	return Loginregister;
})();
