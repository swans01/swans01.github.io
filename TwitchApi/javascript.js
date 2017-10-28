var streamer = ["freecodecamp", "ESL_SC2", "noobs2ninjas"];
var streamerLink = ["https://www.twitch.tv/freecodecamp", "https://www.twitch.tv/esl_sc2", "https://www.twitch.tv/noobs2ninjas"];
var url = "https://api.twitch.tv/kraken/streams/";
var client_id = "?client_id=kmdabq0tkcerjg9rpl9htb0d14nz7m";
var content;

$( document ).ready(function() {
	$( "#all" ).click(function() {
		$("#content").empty();
		for (let i = 0; i < streamer.length; i++) {
		$.getJSON(url+streamer[i]+client_id, function(json) {
    	if(!json.stream){
    		content = "<li class='list-group-item'>"+streamer[i]+" is offline</li>";
    		$("#content").append(content);
    	}else{
    		content = "<li class='list-group-item'>"+streamer[i]+" is playing "+json.stream.game+"<a target='blank' href="+streamerLink[i]+"> Watch Now!</a></li>";
    		$("#content").append(content);
    	}
    });		
	}
	});

	$( "#online" ).click(function() {
		$("#content").empty();
		for (let i = 0; i < streamer.length; i++) {
		$.getJSON(url+streamer[i]+client_id, function(json) {
    	if(json.stream){
    		content = "<li class='list-group-item'>"+streamer[i]+" is playing "+json.stream.game+"<a target='blank' href="+streamerLink[i]+"> Watch Now!</a></li>";
    		$("#content").append(content);
    	}
    });		
	}
	});

	$( "#offline" ).click(function() {
		$("#content").empty();
		for (let i = 0; i < streamer.length; i++) {
		$.getJSON(url+streamer[i]+client_id, function(json) {
    	if(!json.stream){
    		content = "<li class='list-group-item'>"+streamer[i]+" is offline</li>";
    		$("#content").append(content);
    	}
    });		
	}
	});
	
});