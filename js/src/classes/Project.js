module.exports = (function(){

	function Project() {
		this.elements = [];
		this.projectName = "";
		console.log('[Project] constructor');
	}

	Project.prototype.addElement = function(element){
		this.elements.push(element);
	};

	Project.prototype.removeElement = function(element){
		this.elements.splice(this.elements.indexOf(element), 1);
		console.log("removed " + element + " from array, has "+ this.elements.length + " items");
	};

	Project.prototype.setProjectName = function(name){
		if(this.projectName === ""){
			this.projectName = name;
			return "success";
		}
		else{
			return "name_exists";
		}
	};

	Project.prototype.saveProject = function(){
		if(this.projectName !== ""){
			$.each(this.elements, function( index, project_element ) {
				console.log(project_element);
			});
		}
		else{
			return "no_name";
		}
		return "success";
	};



	return Project;

})();
