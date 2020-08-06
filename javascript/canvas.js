window.onload = function(){
	/*for the image of buddha*/
	var c = document.getElementById('myCanvas');
	var ctx = c.getContext('2d');
	var img = document.getElementById('buddha'); //works on the id "buddha"
	ctx.drawImage(img, 0, 0, 300, 150);//Customizing the image

	/*For the image of cart*/
	var canvas = document.getElementById('icon');
    var ctx = canvas.getContext('2d');
    var img = document.getElementById("cart");//works on the id "cart"
    ctx.drawImage(img, 20, 15, 250, 110);//Customizing the image
};
