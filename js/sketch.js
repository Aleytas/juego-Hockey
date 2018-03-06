let ball
let jugador1
let jugador2

function setup()
{
	createCanvas(windowWidth,windowHeight)
	jugador1 = new paleta(1, color('red'))
	jugador2 = new paleta(2, color('green'))
	ball = new Ball()
}

////////////////////////////////////////////7

function draw()
{
	background('Black'); // FONDO 
	drawLine()
	ball.draw() // DIBUJA PELOTA
	ball.move() // MUEVE PELOTA

	if (ball.collision(jugador1)|| ball.collision(jugador2)) // si la pelota colisiona con el jugador 1, la pelota se mueve a...
		ball.move()

	let checkScore=ball.checkScore()

	if (checkScore===2) // anoto jugador 2
		jugador2.updateScore()
	else if(checkScore===1)
		jugador1.updateScore()

	jugador1.draw()  // DIBUJA JUGADOR 1
	jugador2.draw() // DIBUJA JUGADOR 2

	if (keyIsPressed) 
	{
		if(keyIsDown(87))
			p1.move(-1)
		if (keyIsDown(83)) 
			p1.move(1)
		if (keyIsDown(UP_ARROW))
			P2.move(-1)
		if(keyIsDown(DOWN_ARROW))
			p2.move(1)
	}

	showScore()
}

///////////////////////////////////////////

const drawLine = function ()
{
	stroke('#fff')
	strokeWeight(4)
	line(width/2, 0, width/2, height)
}


////  METODO PUNTUACIONES //////////////////

const showScore = function ()
{
	fill('#fff')
	textSize(50)
	text(jugador1.getScore(),width*0.25,70)
	text(jugador2.getScore(),width*0.75,70)
}
/////////////////////////////////////////////////

//////  FUNCION DE LOS BOTONES

/*function keyPressed()
{
	switch(keyCode)
	{
		case 87:// LETRA W - SE MUEVE PARA ARRIBA LA BARRA
		jugador1.move(-5) // JUGADOR 1 se mueve hacia arriba (5)
		console.log('arriba p1') // escribe "arriba p1" en consola
		break

		case 83://
		jugador1.move(5)
		console.log('abajo p1')
		break

		case UP_ARROW:
		jugador2.move(-5)
		console.log('arriba p2')
		break

		case DOWN_ARROW:
		jugador2.move(5)
		console.log('abajo p2')
		break
	}
}*/


