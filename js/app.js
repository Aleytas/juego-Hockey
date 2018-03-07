let pelota;
let jugador1;
let jugador2;

function setup()
{
	createCanvas(windowWidth, windowHeight);
	jugador1 = new Paddle( 1, color('red'));
	jugador2 = new Paddle( 2, color('blue'));
	pelota = new Ball(); // Llama a la pestaña Pelota
}


function draw()
{
	background('black');// color de fondo
	drawLine();
	pelota.draw();
	pelota.move();

	if(pelota.collision(jugador1) || pelota.collision(jugador2))
	{
		pelota.move();
	}

	let checkScore = pelota.checkScore();

	if (checkScore === 2) 
	{
		jugador2.upDateScore();
	}
	else{
		if(checkScore === 1)
		{
			jugador1.upDateScore()
		}
	
}


///////////////////////   METODO MOVIMIENTO CON TECLAS    /////////////////////////////////

	jugador1.draw();
	jugador2.draw();

	if(keyIsPressed)
	{
		if (keyIsDown(65)) // Si pulsan la letra (Q)
		{
			jugador1.move(-1); //jugador 1 se mueve en la posicion Y -1
		}

		if (keyIsDown(90)) 
		{
			jugador1.move(1);
		}

		if(keyIsDown(UP_ARROW))
		{
			jugador2.move(-1);
		}

		if (keyIsDown(DOWN_ARROW)) 
		{
			jugador2.move(1);
		}

		
	}

	puntuacion();
	
}

////////////////////////////////  DIBUJA LINEA
const drawLine = function ()
{
	stroke('blue')// color de linea
	strokeWeight(4)
	line(width/2, 0, width/2, height);// linea
	//ellipse(685, 300, 100, 100);// circulo
	noStroke();
}

/*///  CARGAR IMAGEN
function preload() 
{
  img = loadImage('mesa.jpg');
}*/

//////////////////    PUNTUACION  ///////////////////

const puntuacion = function ()
{
	fill('white')
	textSize(50);
	text(jugador1.getScore(), width * 0.25, 70);
	text(jugador2.getScore(), width * 0.75, 70);
}
/*function keyPressed(){
	switch(keyCode){
		case 87:
			p1.move(-1);
			break;
		case 83: 
			p1.move(1);
			break;
		case UP_ARROW:
			p2.move(-1);
			break;
		case DOWN_ARROW: 
			p2.move(1);
			break;
	}
}*/