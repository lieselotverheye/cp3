!function e(o,t,n){function s(r,a){if(!t[r]){if(!o[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(i)return i(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=t[r]={exports:{}};o[r][0].call(u.exports,function(e){var t=o[r][1][e];return s(t?t:e)},u,u.exports,e,o,t,n)}return t[r].exports}for(var i="function"==typeof require&&require,r=0;r<n.length;r++)s(n[r]);return s}({1:[function(e){!function(){function o(){new t(document.querySelector(".board"))}var t=e("./classes/Blackboard");o()}()},{"./classes/Blackboard":5}],2:[function(e,o){o.exports=function(){function e(e,o,t){console.log("[BbImage] constructor","top boundaries are "+t.top);var n=Handlebars.compile($("#imageTemplate").text()),s=n(e);this.el=$(s)[0],this.boundaries=t,this.removeButton=$(this.el).find(".btn-delete")[0],bean.on(this.removeButton,"click",this.removeClickHandler.bind(this)),this.xPos=o.xPos,this.yPos=o.yPos,this.el.style.left=this.xPos+"px",this.el.style.top=this.yPos+"px",this._mouseDownHandler=this.mouseDownHandler.bind(this),this._mouseMoveHandler=this.mouseMoveHandler.bind(this),this._mouseUpHandler=this.mouseUpHandler.bind(this),this.el.addEventListener("mousedown",this._mouseDownHandler)}return e.prototype.mouseDownHandler=function(e){bean.fire(this,"object_selected",this),e.preventDefault(),this.offsetX=e.offsetX,this.offsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveHandler),window.addEventListener("mouseup",this._mouseUpHandler)},e.prototype.mouseMoveHandler=function(e){this.xPos=e.x-this.offsetX,this.yPos=e.y-this.offsetY,this.el.style.left=this.xPos+"px",this.el.style.top=this.yPos+"px"},e.prototype.mouseUpHandler=function(){window.removeEventListener("mousemove",this._mouseMoveHandler),window.removeEventListener("mouseup",this._mouseUpHandler)},e.prototype.removeClickHandler=function(){bean.fire(this,"remove",this)},e.prototype.toString=function(){return"[BbImage]"},e}()},{}],3:[function(e,o){o.exports=function(){function o(){console.log("[BbUploader] constructor")}e("./BbImage");return o.prototype.uploadBoard=function(e,o){if(console.log("datatype = "+e,"url = "+o),e.elements instanceof Array){var t=e.elements;$.each(t,function(e,o){switch(String(o)){case"[BbImage]":console.log(o+" is a BbImage")}})}},o}()},{"./BbImage":2}],4:[function(e,o){o.exports=function(){function e(e,o,t){console.log("[BbVideo] constructor","top boundaries are "+t.top);var n=Handlebars.compile($("#imageTemplate").text()),s=n(imageData);this.el=$(s)[0],this.boundaries=t,this.removeButton=$(this.el).find(".btn-delete")[0],bean.on(this.removeButton,"click",this.removeClickHandler.bind(this)),this.xPos=o.xPos,this.yPos=o.yPos,this.el.style.left=this.xPos+"px",this.el.style.top=this.yPos+"px",this._mouseDownHandler=this.mouseDownHandler.bind(this),this._mouseMoveHandler=this.mouseMoveHandler.bind(this),this._mouseUpHandler=this.mouseUpHandler.bind(this),this.el.addEventListener("mousedown",this._mouseDownHandler)}return e.prototype.mouseDownHandler=function(e){bean.fire(this,"object_selected",this),e.preventDefault(),offsetX=e.offsetX,offsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveHandler),window.addEventListener("mouseup",this._mouseUpHandler)},e.prototype.mouseMoveHandler=function(e){e.y-offsetY>this.boundaries.top&&e.y-offsetY<this.boundaries.bottom&&(this.xPos=e.x-offsetX,this.yPos=e.y-offsetY,this.el.style.left=this.xPos+"px",this.el.style.top=this.yPos+"px"),console.log("Offset x = "+this.xPos+" | y = "+this.yPoss)},e.prototype.mouseUpHandler=function(){window.removeEventListener("mousemove",this._mouseMoveHandler),window.removeEventListener("mouseup",this._mouseUpHandler)},e.prototype.removeClickHandler=function(){bean.fire(this,"remove",this)},e}()},{}],5:[function(e,o){o.exports=function(){function o(e){console.log("Blackboard constructor"),login=new H,console.log(login),bean.on(login,"login",u),console.log("naam = "+login.naam),bBuploader=new _,$(".containerrechts2").hide(),this.el=e,-1!=document.URL.search("home"),n()}function t(e){switch(e.preventDefault(),e.currentTarget.getAttribute("data-control")){case"new_project":s();break;case"invite_user":i();break;case"save_project":r();break;case"delete_project":a();break;case"add_image":l("assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg");break;case"add_post-it":p();break;case"add_video":h();break;case"upload":f()}}function n(){g=new x;var e={image_url:"assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"},o={image_url:"assets/images/2014-11-30-sunday-rec-projects-wiersma-family-crest.jpg"},t=[e,o];l(t)}function s(){var e=document.querySelector(".project_name").value,o=g.setProjectName(e);switch(o){case"success":$("h2").text(e);break;case"name_set":break;case"no_name":}}function i(){new y}function r(){console.log(g.saveProject()),bBuploader.uploadBoard(g)}function a(){console.log("delete_project")}function l(e){var o,t=[];if(e instanceof Array)for(var n=0;n<e.length;n++)o=new v(e[n],B,P),t.push(o);else"string"==typeof e&&(m(),this.currentUploadAction="image",o=new v(j,B,P),t.push(o));$.each(t,function(e,o){$(".board").append(o.el),bean.on(o,"remove",c.bind(this)),bean.on(o,"object_selected",d.bind(this)),g.addElement(o)})}function c(e){$(".board")[0].removeChild(e.el),g.removeElement(e)}function u(){Array.prototype.forEach.call(document.getElementsByTagName("input"),function(e){e.getAttribute("data-control")?(e.addEventListener("click",t),console.log(e)):console.log(e+"does not contain data control")})}function d(e){$.each(g.elements,function(e,o){o.el.style.zIndex="0"}),e.el.style.zIndex=String(g.elements.length)}function p(){m();new w;this.currentUploadAction="postit"}function h(){m();new b;this.currentUploadAction="video"}function m(){$(".containerrechts2").is(":visible")||$(".containerrechts2").show(100)}function f(){console.log(window.FileReader.readAsDataURL),console.log(bBuploader);var e=$(":file").prop("files")[0];if(void 0!==e){{event.target}console.log("url  "+reader.readAsDataURL(e)),bBuploader.upload(this.currentUploadAction,e.name)}else console.log("no file selectd")}var g,v=e("./BbImage"),b=e("./BbVideo"),y=e("./Invite"),w=e("./Postit"),x=e("./Project"),_=e("./BbUploader"),H=e("./Loginregister"),P={top:"190",bottom:"550",left:"0",right:""},B={xPos:200,yPos:200},j={image_url:"assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"};return o}()},{"./BbImage":2,"./BbUploader":3,"./BbVideo":4,"./Invite":6,"./Loginregister":7,"./Postit":8,"./Project":9}],6:[function(e,o){o.exports=function(){function e(){console.log("[Invite] constructor")}return e}()},{}],7:[function(e,o){o.exports=function(){function e(){if(this.naam="frederik",console.log("naam binnen klasse"+this.naam),console.log(s),"undefined"==typeof s){console.log("post is undefined");var e=Handlebars.compile($("#notloggedin-template").text()),t={title:""},n=e(t),i=$(n)[0],r=document.querySelector("#loginheader");r.appendChild(i)}o.call(this)}function o(){$(".loginbutton").on("click",function(e){e.preventDefault(),t.call(this)}.bind(this))}function t(){$.post("index.php?page=home",{email:$(".loginEmail").val(),pass:$(".loginPass").val()}).done(function(e){console.log(e),e.result===!0?(console.log("correct result in "+this),s=e.result,console.log("gebruiker ingelogd"),$("#loginheader header").remove(),n(e.session.user),bean.fire(this,"login")):(e.errors.email&&$(".erroremail").html(e.errors.email),e.errors.email||$(".erroremail").html(""),e.errors.password&&$(".errorpassword").html(e.errors.password),e.errors.password||$(".errorpassword").html(""))}.bind(this))}function n(e){console.log(this);var o=Handlebars.compile($("#loggedin-template").html()),t={user:e},n=o(t),s=[$(n)[0],$(n)[1],$(n)[2]],i=document.querySelector("#loginheader");i.appendChild(s[0]),i.appendChild(s[1]),i.appendChild(s[2]),console.log("We gaan login event afvuren")}var s;return e}()},{}],8:[function(e,o){o.exports=function(){function e(){console.log("[Postit] constructor")}return e}()},{}],9:[function(e,o){o.exports=function(){function e(){this.elements=[],this.projectName="",console.log("[Project] constructor")}return e.prototype.addElement=function(e){this.elements.push(e)},e.prototype.removeElement=function(e){this.elements.splice(this.elements.indexOf(e),1),console.log("removed "+e+" from array, has "+this.elements.length+" items")},e.prototype.setProjectName=function(e){return""===e?"no_name":""===this.projectName&&""!==e?(this.projectName=e,"success"):"name_exists"},e.prototype.saveProject=function(){return""===this.projectName?"no_name":($.each(this.elements,function(e,o){console.log(o)}),"success")},e}()},{}]},{},[1]);
//# sourceMappingURL=script.dist.js.map