$(document).ready(function(){
	$("#login").click(function(){
		var username = $("#name").val();
		console.log(username);
		window.location.replace("chat");
});
});
