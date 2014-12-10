module.exports = (function(){
	function Loginregister() {
		//console.log('[Loginregister] constructor');

		var template = Handlebars.compile($('#notloggedin-template').text());
		var context = {title: ""};

		var result = template(context);
		var el = $(result)[0];

		var loginheader = document.querySelector('#loginheader');
		loginheader.appendChild(el);

				login();


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

			if( data.result ){
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

		var template = Handlebars.compile($('#loggedin-template').text());
		var context = {user: useremail};

		var result = template(context);
		var el = $(result)[0];
		console.log(el);

		var def = document.querySelector('#loginheader');
		def.appendChild(el);

	}








	return Loginregister;
})();
