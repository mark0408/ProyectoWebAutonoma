//JavaScript Document
	var i=0;
var img=[
	"../baner/ban1.jpg" ,
	"../baner/ban2.jpg" ,
	"../baner/ban3.jpg" 

];
function carrusel(){
	document.getElementById('ban').src=img[i];
	i++;
	if(i>img.length-1)
		i=0;
	ciclo = setTimeout('carrusel()',1000);
}


/* cuando se tiene baner enumerado (1,2,3) te permite mostrarlo al hacer click en los numeros*/
/*function ver(n){
	document.getElementById('ban').src=img[n];
	i=n;
}*/
function ampliar(n){
	document.getElementsByClassName('cabe')[n].style.width='60px';
	document.getElementsByClassName('cabe')[n].style.height='60px';
	document.getElementsByClassName('cabe')[n].style.transform="rotat(360deg)";
	document.getElementsByClassName('cabe')[n].style.transition="all 1.5s";
}

function reducir(n){
	document.getElementsByClassName('cabe')[n].style.width='50px';
	document.getElementsByClassName('cabe')[n].style.height='50px';
}



$(".colaboradores").mouseover(function(){
    $(this).find("img").hide();/*css("width","0px")*/
	$(this).find("img").css("transition","all 1s");
    });
    $(".colaboradores").mouseout(function(){
    $(this).find("img").show(); /*css("width","100%")*/
		$(this).find("img").css("transition","all 1s");
    });



//__________//
function pausa(){
	clearTimeout(ciclo);
	ciclo=null;
}
function continuar(){
	if(ciclo==null){
		carrusel();
	}	
}
function sgte(){
  showSlides(slideIndex += i);

	
}
function anterior(){
	carrusel();
	i=i-1;
}

window.onload=carrusel();
