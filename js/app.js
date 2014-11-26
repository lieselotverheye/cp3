(function(){

	var song_index = 0;
	var songs = [];

	var audio;
	var control_bar;

	var counter = 0;
	var time = 0;

	var wrap;
	var repeatPlayList = false;
	var pauze = false;

	function playing(){
		//element waarop klasse playing op wordt toegep. verwijderen.
		if(document.querySelector(".playing")){
			document.querySelector(".playing").classList.remove("playing");
		}
		document.querySelector("a[href='"+songs[song_index] + "']").parentNode.classList.add("playing");
	}

	function normalize(number){


	}

	function clicked(e){
		e.preventDefault();
			switch(e.currentTarget.getAttribute("data-control")){
			case "previous" : song_index = cycle(0, songs.length -1, --song_index);
			break;
			case "next" :  song_index = cycle(0, songs.length -1, ++song_index);
						break;
			case "random" :  song_index = Math.floor(Math.random()*songs.length);
			break;
			case "pauze" : /*
				console.log("pauze");
				if(!pauze){
				pauze = true;
				audio.pause();
				}
				else if(pauze){
				audio.play();
				pauze = false;
				}
			break;
			*/
			default : song_index = songs.indexOf(e.currentTarget.getAttribute("href"));
			break;
		}
		//if(!pauze){
		play(songs[song_index]);
		//}
	}

	function cycle(min, max, value){
		//of getal is groter dan max return minimum
		if(value > max){
			return min;
		}
		//getal kleiner dan minimin return max
		else if (value < min){
			return max;
		}
		//getal is binen range return value
		else{
			return value;
		}
	}

	function do_action(action, element){

	}

	function play(file){
		file = "sound/" + file;

		if(audio.canPlayType('audio/mp4; codecs="mp4a.40.2"')){
			file += ".mp3";
		}
		else if(audio.canPlayType('audio/ogg; codecs="vorbis"')){
			file += ".ogg";
		}

		audio.setAttribute("src",file);
		audio.play();
		playing();
	}

	function update_played(){
		var position = (audio.currentTime/audio.duration)*500;
		wrap.style.width = position + "px";
	}

	function scrub(e){
		console.log("register");
		var position = e.pageX - e.currentTarget.offsetLeft;
		audio.currentTime = (audio.duration * position) / 500;
	}

	function move_bar(position, el){

	}

	function songEnded(e){
		console.log("song endede");
		if(!repeatPlayList && song_index === songs.length-1){

		}
		else{
		song_index = cycle(0, songs.length -1, ++song_index);
		play(songs[song_index]);
		}
	}

	function init(){
		audio = document.getElementsByTagName("audio")[0];
		audio.addEventListener("timeupdate", update_played);
		audio.addEventListener("ended", songEnded);
		control_bar = document.querySelector(".control-bar");
		wrap = control_bar.querySelector(".wrap");
		control_bar.addEventListener("click", scrub);
		wrap.style.width = 0 + "px";
		Array.prototype.forEach.call(document.getElementsByTagName("a"), function(a){
			a.addEventListener("click",clicked);
			if(!a.getAttribute("data-control")){
				songs.push(a.getAttribute("href"));
			}
		})

		pauseButton = document.getAttribute("data-control")

	}

	init();

})();

