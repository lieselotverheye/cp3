module.exports = (function(){

	function Project() {
		this.elements = [];
		console.log('[Project] constructor');
	}

	Project.prototype.addElement = function(element){
		this.elements.push(element);
	};

	Project.prototype.removeElement = function(element){
		this.elements.splice(this.elements.indexOf(element), 1);
		console.log("removed " + element + " from array, has "+ this.elements.length + " items");
	};

	Project.prototype.saveProject = function(){
		$.each(this.elements, function( index, project_element ) {
			console.log(project_element);
		});

	}



	return Project;

})();
