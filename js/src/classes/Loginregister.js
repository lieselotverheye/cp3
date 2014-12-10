module.exports = (function(){
	var post;

	function Loginregister() {
		//console.log('[Loginregister] constructor');
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



		login();




	}

	function defaultheader(){

	}


	function login(){

		$('.loginbutton').on('click', function(event){
		console.log("login!!!");

			event.preventDefault();
			voorbeeldJSONPost();

		});

	}

	function voorbeeldJSONPost() {

		$.post( "index.php?page=home", {
			email: $('.loginEmail').val(),
			pass: $('.loginPass').val()
		})
		.done(function( data ) {
		console.log(data);

			if( data.result === true){
				post = data.result;
				//session = data.session.user;
				console.log('gebruiker ingelogd');
				$("#loginheader header").remove();
				loadnewHeader(data.session.user);

			}else{
				if(data.errors.email){
					$('.erroremail').html(data.errors.email);
				}
				if(data.errors.password){
					$('.errorpassword').html(data.errors.password);
				}
			}

	  });

	}

	function loadnewHeader(useremail){


		var template = Handlebars.compile($('#loggedin-template').html());
		var context = {user: useremail};

		var result = template(context);

		var el = [$(result)[0], $(result)[1], $(result)[2]];

		var def = document.querySelector('#loginheader');
		def.appendChild(el[0]);
		def.appendChild(el[1]);
		def.appendChild(el[2]);

	}








	return Loginregister;
})();
