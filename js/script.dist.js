!function e(t,o,n){function s(r,l){if(!o[r]){if(!t[r]){var a="function"==typeof require&&require;if(!l&&a)return a(r,!0);if(i)return i(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=o[r]={exports:{}};t[r][0].call(u.exports,function(e){var o=t[r][1][e];return s(o?o:e)},u,u.exports,e,t,o,n)}return o[r].exports}for(var i="function"==typeof require&&require,r=0;r<n.length;r++)s(n[r]);return s}({1:[function(e){!function(){function t(){new o(document.querySelector(".board"))}var o=e("./classes/Blackboard");t()}()},{"./classes/Blackboard":5}],2:[function(e,t){t.exports=function(){function e(e,t,o){console.log("[BbImage] constructor","top boundaries are "+o.top);var n=Handlebars.compile($("#imageTemplate").text()),s=n(e);this.el=$(s)[0],this.boundaries=o,this.removeButton=$(this.el).find(".btn-delete")[0],bean.on(this.removeButton,"click",this.removeClickHandler.bind(this)),this.xPos=t.xPos,this.yPos=t.yPos,this.el.style.left=this.xPos+"px",this.el.style.top=this.yPos+"px",this._mouseDownHandler=this.mouseDownHandler.bind(this),this._mouseMoveHandler=this.mouseMoveHandler.bind(this),this._mouseUpHandler=this.mouseUpHandler.bind(this),this.el.addEventListener("mousedown",this._mouseDownHandler)}return e.prototype.mouseDownHandler=function(e){e.preventDefault(),bean.fire(this,"object_selected",this),this.clickOffsetX=e.offsetX,this.clickOffsetY=e.offsetY,console.log(e),window.addEventListener("mousemove",this._mouseMoveHandler),window.addEventListener("mouseup",this._mouseUpHandler)},e.prototype.mouseMoveHandler=function(e){this.xPos=e.x-this.clickOffsetX,this.yPos=e.y-this.clickOffsetY,this.el.style.left=this.xPos+"px",this.el.style.top=this.yPos+"px"},e.prototype.mouseUpHandler=function(){window.removeEventListener("mousemove",this._mouseMoveHandler),window.removeEventListener("mouseup",this._mouseUpHandler)},e.prototype.removeClickHandler=function(){bean.fire(this,"remove",this)},e.prototype.toString=function(){return"[BbImage]"},e}()},{}],3:[function(e,t){t.exports=function(){function t(){console.log("[BbUploader] constructor")}function o(){}function n(e){console.log("upload item "+String(e))}e("./BbImage");return t.prototype.uploadBoard=function(e){if(o(),e.elements instanceof Array){var t=e.elements;$.each(t,function(e,t){switch(String(t)){case"[BbImage]":console.log(t+" is a BbImage"),n(t)}})}},t}()},{"./BbImage":2}],4:[function(e,t){t.exports=function(){function e(e,t,o){console.log("[BbVideo] constructor","top boundaries are "+o.top);var n=Handlebars.compile($("#videoTemplate").text()),s=n(e);this.el=$(s)[0],this.boundaries=o,this.removeButton=$(this.el).find(".btn-delete")[0],console.log(this.removeButton),bean.on(this.removeButton,"click",this.removeClickHandler.bind(this)),this.xPos=t.xPos,this.yPos=t.yPos,this.el.style.left=this.xPos+"px",this.el.style.top=this.yPos+"px",this._mouseDownHandler=this.mouseDownHandler.bind(this),this._mouseMoveHandler=this.mouseMoveHandler.bind(this),this._mouseUpHandler=this.mouseUpHandler.bind(this),console.log(this.el),this.el.addEventListener("mousedown",this._mouseDownHandler)}return e.prototype.mouseDownHandler=function(e){bean.fire(this,"object_selected",this),e.preventDefault(),this.offsetX=e.offsetX,this.offsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveHandler),window.addEventListener("mouseup",this._mouseUpHandler)},e.prototype.mouseMoveHandler=function(e){this.xPos=e.x-this.offsetX,this.yPos=e.y-this.offsetY,this.el.style.left=this.xPos+"px",this.el.style.top=this.yPos+"px"},e.prototype.mouseUpHandler=function(){window.removeEventListener("mousemove",this._mouseMoveHandler),window.removeEventListener("mouseup",this._mouseUpHandler)},e.prototype.removeClickHandler=function(){console.log("remove"),bean.fire(this,"remove",this)},e.prototype.toString=function(){return"[BbVideo]"},e}()},{}],5:[function(e,t){t.exports=function(){function t(e){console.log("Blackboard constructor"),b=new P,bean.on(b,"login",u),console.log("naam = "+b.naam),bBuploader=new x,this.el=e,Array.prototype.forEach.call(document.getElementsByTagName("input"),function(e){console.log(e),e.getAttribute("data-control")?e.addEventListener("click",o):console.log(e+"does not contain data control")}),n()}function o(e){switch(e.preventDefault(),e.currentTarget.getAttribute("data-control")){case"add_project":m("new_project");break;case"new_project":s();break;case"invite_user":i();break;case"save_project":r();break;case"delete_project":l();break;case"add_image":a("assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg");break;case"add_post-it":p();break;case"add_video":h("string");break;case"upload":f()}}function n(){v=new _;var e={image_url:"assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"},t={image_url:"assets/images/2014-11-30-sunday-rec-projects-wiersma-family-crest.jpg"},o=[e,t];a(o)}function s(){var e=document.querySelector(".project_name").value,t=v.setProjectName(e);switch(t){case"success":$("h2").text(e);break;case"name_set":break;case"no_name":}}function i(){new w}function r(){console.log(v.saveProject()),bBuploader.uploadBoard(v)}function l(){console.log("delete_project")}function a(e){var t,o=[];if(e instanceof Array)for(var n=0;n<e.length;n++)t=new g(e[n],k,j),o.push(t);else"string"==typeof e&&(m("upload"),this.currentUploadAction="image",t=new g(E,k,j),o.push(t));$.each(o,function(e,t){$(".board").append(t.el),bean.on(t,"remove",c.bind(this)),bean.on(t,"object_selected",d.bind(this)),v.addElement(t)})}function c(e){$(".board")[0].removeChild(e.el),v.removeElement(e)}function u(){$(".containerrechts2").hide(),$(".project_name").hide(),$(".submitNewProject").hide(),Array.prototype.forEach.call(document.getElementsByTagName("input"),function(e){e.getAttribute("data-control")&&e.addEventListener("click",o)})}function d(e){console.log(e),$.each(v.elements,function(e,t){t.el.style.zIndex="0"}),e.el.style.zIndex=String(v.elements.length)}function p(){var e=new H;$(".board").append(e.el)}function h(e){m("upload");var t,o=[];if(e instanceof Array)for(var n=0;n<e.length;n++)t=new y(e[n],k,j),o.push(t);else"string"==typeof e&&(m("upload"),this.currentUploadAction="video",t=new y(B,k,j),o.push(t));$.each(o,function(e,t){console.log(t),$(".board").append(t.el),bean.on(t,"remove",c.bind(this)),bean.on(t,"object_selected",d.bind(this)),v.addElement(t)})}function m(e){"upload"===e?$(".containerrechts2").is(":visible")||$(".containerrechts2").show(100):"new_project"===e&&(console.log("show project"),$(".project_name").is(":visible")||($(".project_name").show(100),$(".submitNewProject").show(100)))}function f(){var e=$(":file").prop("files")[0];if(void 0!==e){{event.target}bBuploader.uploadOneItem(this.currentUploadAction,e.name)}else console.log("no file selectd")}var v,b,g=e("./BbImage"),y=e("./BbVideo"),w=e("./Invite"),H=e("./Postit"),_=e("./Project"),x=e("./BbUploader"),P=e("./Loginregister"),j={top:"190",bottom:"550",left:"0",right:""},k={xPos:200,yPos:200},E={image_url:"assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"},B={video_url:"assets/videos/Patti Smith - Horses.mp4"};return t}()},{"./BbImage":2,"./BbUploader":3,"./BbVideo":4,"./Invite":6,"./Loginregister":7,"./Postit":8,"./Project":9}],6:[function(e,t){t.exports=function(){function e(){console.log("[Invite] constructor")}return e}()},{}],7:[function(e,t){t.exports=function(){function e(){if("undefined"==typeof post){console.log("post is undefined");var e=Handlebars.compile($("#notloggedin-template").text()),o={title:""},n=e(o),s=$(n)[0],i=document.querySelector("#loginheader");i.appendChild(s)}t.call(this)}function t(){$(".loginbutton").on("click",function(e){e.preventDefault(),o.call(this)}.bind(this))}function o(){$.post("index.php?page=home",{email:$(".loginEmail").val(),pass:$(".loginPass").val()}).done(function(e){console.log(e),e.result===!0?(console.log("correct result in "+this),post=e.result,console.log("gebruiker ingelogd"),$("#loginheader header").remove(),n(e.session.user),bean.fire(this,"login")):(e.errors.email&&$(".erroremail").html(e.errors.email),e.errors.email||$(".erroremail").html(""),e.errors.password&&$(".errorpassword").html(e.errors.password),e.errors.password||$(".errorpassword").html(""))}.bind(this))}function n(e){this.user=e;var t=Handlebars.compile($("#loggedin-template").html()),o={user:e},n=t(o),s=[$(n)[0],$(n)[1],$(n)[2]],i=document.querySelector("#loginheader");i.appendChild(s[0]),i.appendChild(s[1]),i.appendChild(s[2]),console.log("We gaan login event afvuren")}return e}()},{}],8:[function(e,t){t.exports=function(){function e(){console.log("[Postit] constructor");var e=Handlebars.compile($("#postItTemplate").text()),t=e("");this.el=$(t)[0],this.input=this.el.querySelector(".postIt-input"),this.el.addEventListener("submit",this.submitHandler.bind(this)),console.log(this.el),this._mouseDownHandler=this.mouseDownHandler.bind(this),this._mouseMoveHandler=this.mouseMoveHandler.bind(this),this._mouseUpHandler=this.mouseUpHandler.bind(this),this.el.querySelector(".content").addEventListener("mousedown",this._mouseDownHandler)}return e.prototype.submitHandler=function(e){e.preventDefault(),this.el.querySelector("p").innerText=this.input.value,this.input.value=""},e.prototype.mouseDownHandler=function(e){"[object HTMLInputElement]"!=e.toElement&&e.preventDefault(),bean.fire(this,"object_selected",this),this.clickOffsetX=e.offsetX,this.clickOffsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveHandler),window.addEventListener("mouseup",this._mouseUpHandler)},e.prototype.mouseMoveHandler=function(e){this.xPos=e.x-this.clickOffsetX,this.yPos=e.y-this.clickOffsetY,this.el.style.left=this.xPos+"px",this.el.style.top=this.yPos+"px"},e.prototype.mouseUpHandler=function(){window.removeEventListener("mousemove",this._mouseMoveHandler),window.removeEventListener("mouseup",this._mouseUpHandler)},e.prototype.removeClickHandler=function(){bean.fire(this,"remove",this)},e.prototype.toString=function(){return"[BbImage]"},e}()},{}],9:[function(e,t){t.exports=function(){function e(){this.elements=[],this.projectName="",this.currentUser="",console.log("[Project] constructor")}return e.prototype.addElement=function(e){this.elements.push(e)},e.prototype.removeElement=function(e){this.elements.splice(this.elements.indexOf(e),1),console.log("removed "+e+" from array, has "+this.elements.length+" items")},e.prototype.setProjectName=function(e){return""===e?"no_name":""===this.projectName&&""!==e?(this.projectName=e,"success"):"name_exists"},e.prototype.saveProject=function(){return""===this.projectName?"no_name":($.each(this.elements,function(e,t){console.log(t)}),"success")},e}()},{}]},{},[1]);
//# sourceMappingURL=script.dist.js.map