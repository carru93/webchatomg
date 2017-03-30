$(document).ready(function(){

				var char_scritti = 0;
				$("#chars").text(char_scritti);
			
				var username = localStorage["username"];
				console.log(username + " recived");
				
				$("#inputBox").focus();
				
				$("#username_title").append(username);
				
				$("#username_data").append(username);
				
				$("#color_selector").change(function(){
					$("#username_title").css("color", $("#color_selector").val());	
					$("mex").css("color", $("#color_selector").val());
				});
				
				$("#sendButton").click(function(){
					
					var l = $("#inputBox").val();
					char_scritti += l.length;
					$("#chars").text(char_scritti);
					
					socket.emit('messaggio', $('#inputBox').val());
					
					$("#inputBox").val("");
					$("#inputBox").focus()
				});

				$("#azzera").click(function(){
					char_scritti = 0;
					$("#chars").text(char_scritti);
				});

				$("#inputBox").keydown(function(e){
					if(e.which === 13){
						$('#sendButton').click();
					}
				});
				
				var socket = io();

			/*	$('#sendButton').click(function(){
					console.log("inviato");
					console.log($('#inputBox').val());
					return false;
				});*/
				
				socket.on('messaggio', function(msg){
					//console.log("ricevuto");
					//console.log(msg);
					$('#messagesBox').append("<mex>"+msg+"</mex>");
				});

			});
