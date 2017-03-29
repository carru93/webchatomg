$(document).ready(function(){
	var socket = io();
	
	$("#name").focus();	
	
	$("#name").keydown(function(e){
		if(e.which === 13){
			console.log("ok");
			$('#login').click();
		}
	});
	
	$("#login").click(function(){
		localStorage.setItem("username", $("#name").val());
		console.log(localStorage["username"]);
		window.location.replace("chat");
		});
	
});


