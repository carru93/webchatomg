username=[];

$("#main_page").ready(function(){
	$("#name").focus();	
	
	$("#name").keydown(function(e){
		if(e.which === 13){
			console.log("ok");
			$('#login').click();
		}
	});
	
	$("#login").click(function(){
		username[0] = $("#name").val();
		console.log(username);
		window.location.replace("chat");
		});
	
});

$("#chat").ready(function(){
				console.log(username[0]+" recived");
				$("#username_title").append(username[0]);
				});
