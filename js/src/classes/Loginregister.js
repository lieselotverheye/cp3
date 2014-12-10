module.exports = (function(){
	function Loginregister() {
		//console.log('[Loginregister] constructor');
		login();

		var template = Handlebars.compile($('#notloggedin-template').text());
		var result = template();


	}



	function login(){
		console.log("login!!!")

		$('.loginbutton').on('click', function(event){

			event.preventDefault();
			voorbeeldJSONPost();

		});

	}

function voorbeeldJSONPost() {

		$.post( "index.php?page=home", {
			email: $('.loginEmail').val(),
			pass: $('.loginPass').val(),
		})
		.done(function( data ) {
			console.log(data);

			if( data.result ){
				console.log('gebruiker ingelogd');
				$("#formie").remove();
			}else{
				console.log('gebruiker NIET ingelogd');
			}




	   	if(data.session) {

	   	} else {




	   	}



	  });



	}







	return Loginregister;
})();
