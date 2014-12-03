(function(){
	var Blackboard = require('./classes/Blackboard');
	var Loginregister = require('./classes/Loginregister');

	function init(){
		new Blackboard();
		new Loginregister();
	}
	init();
})();

