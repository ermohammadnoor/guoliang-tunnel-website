$(document).ready(function(){
    	$("#navIcon").click(function(){
        $("#navBar").slideToggle(1000);
   		 });
		});
var myIndex1 = 1;
var myIndex2 = 1;
var myIndex3 = 1;
var myIndex4 = 1;

function showImage(){
	var x1 = document.getElementsByClassName("mySlides1");
	var x2 = document.getElementsByClassName("mySlides2");
	var x3 = document.getElementsByClassName("mySlides3");
	var x4 = document.getElementsByClassName("mySlides4");
	x1[0].style.display = "block";
	x2[0].style.display = "block";
	x3[0].style.display = "block";
	x4[0].style.display = "block";
}