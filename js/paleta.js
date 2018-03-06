const paleta = function (player, color)
{
	const c = color // Color
	const w = 30 	// Ancho
	const h = 200	// Alto
	const p = player //Jugador
	const x = p===1 ? 0: width -w
	const speed = 8
	const UP =-1
	const DOWN =1
	let y = Math.floor(height/2)
	let score = 0

	
	const draw = function ()
	{
		rectMode(CORNER)// ESQUINA 
		noStroke()// quita contorno
		fill(c) // colorea imagen
		rect(x,y,w,h) // crea un rectangulo
	}
////////////////////////////////////////////////////////////////////////////

	const move = function(dir)
	{
		if(edge(dir))
		
		y+=(speed*dir)
	}

 ////////////////////////////////////////////////////////////////////////
	
	const edge=function(dir)
	{
		return (dir === UP && y > 0|| dir === DOWN && y <height-h) 
	}

 //////////////////////////////////////////////////////////////////////////
 /////////////////  AUMENTA PUNTUACION  //////////////////////////////////

	const updateScore= function()
	{
		score++;
	}

 /////////////////////////////////////////////////////////////////////////////



//////////////////////  GET  //////////////////////

 const getX = function(){
		return x
	}

	const getY = function(){
		return y
	}

	const getW = function(){
		return w
	}

	const getH = function(){
		return h
	}

	const getScore=function(){
		return score
	}

	return
	{
		draw,
		move,
		getX,
		getY,
		getW,
		getH,
		getScore,
		updateScore
	}
}
	



