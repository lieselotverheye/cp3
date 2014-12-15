(function(){
	var Blackboard = require('./classes/Blackboard');
	function init(){
		new Blackboard(document.querySelector('.board'));
	}
	init();
})();

