( function (window){
	var byespeaker={};
	byespeaker.speakword = "Good bye";
	byespeaker.speak = function(name){
		console.log(byespeaker.speakword + " " + name);
	}
	window.byespeaker = byespeaker;
})(window);