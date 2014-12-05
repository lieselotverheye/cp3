(function(){

	function clicked(e){
		e.preventDefault();
			switch(e.currentTarget.getAttribute("data-control")){
			case "login" : console.log("login");
			break;
		}
	}


	function init(){
		Array.prototype.forEach.call(document.getElementsByTagName("a"), function(a){
			a.addEventListener("click",clicked);
			if(!a.getAttribute("data-control")){
				console.log("does not contain data control");
			}
		});

	}

	init();

})();

