!function e(n,o,t){function r(s,i){if(!o[s]){if(!n[s]){var a="function"==typeof require&&require;if(!i&&a)return a(s,!0);if(c)return c(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=o[s]={exports:{}};n[s][0].call(u.exports,function(e){var o=n[s][1][e];return r(o?o:e)},u,u.exports,e,n,o,t)}return o[s].exports}for(var c="function"==typeof require&&require,s=0;s<t.length;s++)r(t[s]);return r}({1:[function(e){!function(){function n(e){switch(e.preventDefault(),e.currentTarget.getAttribute("data-control")){case"add_project":c();break;case"invite_user":s();break;case"save_project":i();break;case"delete_project":a();break;case"add_image":l();break;case"add_post-it":u();break;case"add_video":f()}}function o(){Array.prototype.forEach.call(document.getElementsByTagName("a"),function(e){e.addEventListener("click",n),e.getAttribute("data-control")||console.log("does not contain data control")}),t(),r()}function t(){var e={image_url:"assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"},n={image_url:"assets/images/2014-11-30-sunday-rec-projects-wiersma-family-crest.jpg"},o=[e,n];l(o)}function r(){$(".loginknop").on("click",function(){event.preventDefault();var e={ha:$(".loginEmail").val(),loginPass:$(".loginPass").val()},n=$.post("http://localhost/whiteboard/cp3-eindopdracht-2DEV2-groep10/index.php?page=home",e);n.done(function(e){console.log("got data back"+e)})})}function c(){new m}function s(){new g}function i(){console.log("save project")}function a(){console.log("delete_project")}function l(e){if(e instanceof Array)for(var n=0;n<e.length;n++){var o=new d(e[n]);$("#container").append(o.el),bean.on(o,"remove",removeHandler.bind(o))}else e instanceof String&&console.log(e+" is a string")}function u(){new v}function f(){new p}var d=e("./classes/BbImage"),p=e("./classes/BbVideo"),g=e("./classes/Invite"),v=e("./classes/Postit"),m=e("./classes/Project");this.removeHandler=function(e){console.log("aargh"),this.el.removeChild(e.el)},o()}()},{"./classes/BbImage":2,"./classes/BbVideo":3,"./classes/Invite":4,"./classes/Postit":5,"./classes/Project":6}],2:[function(e,n){n.exports=function(){function e(e){console.log("[BbImage] constructor");var n=Handlebars.compile($("#imageTemplate").text()),o=n(e);this.el=$(o),this.removeButton=$(".btn-delete"),bean.on(this.removeButton,"click",this.removeClickHandler.bind(this))}return e.prototype.removeClickHandler=function(){bean.fire(this,"remove",this)},e}()},{}],3:[function(e,n){n.exports=function(){function e(e){this.el=e,console.log("[BbVideo] constructor")}return e}()},{}],4:[function(e,n){n.exports=function(){function e(){console.log("[Invite] constructor")}return e}()},{}],5:[function(e,n){n.exports=function(){function e(){console.log("[Postit] constructor")}return e}()},{}],6:[function(e,n){n.exports=function(){function e(){console.log("[Project] constructor")}return e}()},{}]},{},[1]);
//# sourceMappingURL=script.dist.js.map