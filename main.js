//Create a reference for canvas 
canvas = document.getElementById("mycanvas");
pen = canvas.getContext("2d");

//Give specific height and width to the car image

greencar_width = 100;
greencar_height = 90;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 10;
greencar_y = 10;

function add() {
	//upload car, and background images on the canvas.
	background_tag=new Image;
	background_tag.onload=uploadBackground;
	background_tag.src=background_image;

	greencar_tag=new Image;
	greencar.onload=uploadgreencar;
	greencar.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
pen.drawImage(background_tag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	pen.drawImage(greencar_tag,greencar_x,greencar_y,greencar_width,greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (greencar_y <= 0){
		greencar_y=greencar_y-10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if (greencar_y >= 300){
		greencar_y=greencar_y+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if (greencar_x >= 0) {
        greencar_x = greencar_x - 10;
        uploadBackground();
		uploadgreencar();

    }
}

function right()
{
	//Define function to move the car right side
	if (greencar_x <= 700) {
        greencar_x = greencar_x + 10;
        uploadBackground();
		uploadgreencar();

    }
}
