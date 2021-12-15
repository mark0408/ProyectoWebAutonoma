// JavaScript Document
$(document).ready(function(){
		

	
});

$('#tex').css("display","block");
$('.grupo1').css("display","block");
$('.grupo2').css("display","none");
$('.grupo3').css("display","none");
$('.grupo4').css("display","none");
	

	$('.click1').click(function(){

		$('.grupo1').fadeTo("opacity ",1);
		$('.grupo2').fadeTo("opacity ",0);
		$('.grupo3').fadeTo("opacity", 0);
		$('.grupo4').fadeTo("opacity",0)
		
     });
	
	$('.click2').click(function(){
		
		$('.grupo1').fadeTo("opacity ",0);
		$('.grupo2').fadeTo("opacity ",1);
		$('.grupo3').fadeTo("opacity", 0);
		$('.grupo4').fadeTo("opacity",0)
		
	});
	
	$('.click3').click(function(){
		$('.grupo1').fadeTo("opacity ", 0);
		$('.grupo2').fadeTo("opacity ", 0);
		$('.grupo3').fadeTo("opacity",1);
		$('.grupo4').fadeTo("opacity",0)
		
	});
	
	$('.click4').click(function(){
		
		$('.grupo1').fadeTo("opacity ", 0);
		$('.grupo2').fadeTo("opacity ", 0);
		$('.grupo3').fadeTo("opacity",0);
		$('.grupo4').fadeTo("opacity",1)
	})
	
	


