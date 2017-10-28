
var api = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=";
$( document ).ready(function() {
$("input").change(function(){
	var search = document.getElementById('input').value;
	$.getJSON(api+search, function(json){
		$("#div1").empty();
		for (var i = 0; i < 10; i++) {
			var title = "<h3><a target='blank' href="+json[3][i]+">"+json[1][i]+"<a/></h3>";
			var text = "<p>"+json[2][i]+"</p>";
    		$("#div1").append(title, text);     
		}
	});

});
});



