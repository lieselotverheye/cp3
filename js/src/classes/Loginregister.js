module.exports = (function(){
	function Loginregister() {
		//console.log('[Loginregister] constructor');
		login();
	}



	function login(){
		//console.log("login!!!")

		$('.loginbutton').on('click', loginhandler);


	}

	function loginhandler(){

		event.preventDefault();
		var inputData = {
			'loginEmail': $('.loginEmail').val(),
			'loginPass': $('.loginPass').val()
		};

		var errorCheck = {
			'email': $('.loginEmail').val(),
			'password': $('.loginPass').val()
		};


		// 1. POST naar php functie (bv. checkUsername)
		var checkEmail = $.post('index.php?page=checkusername', errorCheck);
		console.log("got email back " + checkEmail);

		//checkEmail.done !!!! voor data op te halen

		// in php doe je database check

		// in php: return true or false

		// 2. in succeshandler van ajax call check je als true of false is
		//succeshandler = .done


		//validation

		var saveUserAjax = $.post('index.php?page=home', inputData);

		saveUserAjax.done(function(data){
			console.log('Got data back ' + data);

		});

	}




	return Loginregister;
})();
