$(document).ready(function(){
    	$("#navIcon").click(function(){
        $("#navBar").slideToggle(1000);
   		 });
		});
$(document).ready(function(){
    	$("#readMore").click(function(){
        $("#readMoreDiv").slideToggle("fast");
   		 });
		});

var imglab=new Array();
	imglab["img1"]=new Image(100,105);
	imglab["img1"].src="../images/history slider/s1.jpg";
	imglab["img2"]=new Image(100,105);
	imglab["img2"].src="../images/history slider/s2.jpg";
	imglab["img3"]=new Image(100,105);
	imglab["img3"].src="../images/history slider/s3.jpg";
	imglab["img4"]=new Image(100,105);
	imglab["img4"].src="../images/history slider/s4.jpg";

	//imglab["img5"]=new Image(100,105);
	//imglab["img5"].src="t5.jpg";

	//imglab["img6"]=new Image(100,105);
	//imglab["img6"].src="t6.jpg";

	var nm=new Array("img1","img2","img3","img4");

	var i=0;
	var im;

	function changeimage()
	{
		im=nm[i];
	    if(i==3)
	 	{
	    	i=0;
	   	}  
	 	else{
	    	i++;
	    }
		document.getElementById("test").src=imglab[im].src;	
	 	setTimeout("changeimage()",2000);
	}