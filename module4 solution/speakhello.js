( function (window){
	var hellospeaker={};
	hellospeaker.speakword = "Hello";
	hellospeaker.speak = function(name){
		console.log(hellospeaker.speakword + " "+ name);
	}
	window.hellospeaker = hellospeaker;
})(window);