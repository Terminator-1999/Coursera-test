( function (){
	var names = ["yakoov", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	
	for(var i=0 ; i<names.length ; i++){
		var firstl = names[i].charAt(0).toLowerCase();
		if(firstl === 'j'){
			byespeaker.speak(names[i]);
		}else{
			hellospeaker.speak(names[i]);
		}
	}
})();