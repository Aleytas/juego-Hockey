const Ball = function () 
{
	const r = 20
	let x = Math.floor(width / 2)
	let y = Math.floor(height / 2)
	let stepX = 5
	let stepY = 2

 ////////////////////////////////////////////////////////////////////////////////////

	const reset = function () 
	{
		 x = Math.floor(width / 2)
		 y = Math.floor(height / 2)
		 stepX *= Math.round(Math.random()) * 2 - 1
		 stepY *= Math.round(Math.random()) * 2 - 1
	}

 /////////////////////////////////////////////////////////////////////////////////////

	const edges = function ()
	{
		if (y - r <= 0 || y + r >= height) 
			stepY = -stepY;
	}

 ////////////////////////////////////////////////////

	const checkScore = function()
	{
		if (x-r<=0) 
		{
			reset()
			return 2
		}

		if (x + r >= width) 
		{
			reset()
			return 1
		}

		return 0
	}

 //////  METODO MOVIEMIENTO /////////////////////////////
	
	const move = function () 
	{
		x += stepX
		y += stepY
		edges()
	}

  //////////////7//  METODO GOLPE /////////////////////////

	const collision= function(player)
	{
		let dx = Math.abs(x-player.getX() - player.getW()/2)
		let dy= Math.abs(y-player.getY() - player.getH()/2)

		if (dx > player.getW()/2+r || dy>player.getH()/2 +r) 
		return false

		if (dx <= player.getW()/2 || dy>player.getH()/2) 
		{
			stepX= -stepX
			return true
		}
		
	}	

 //////////////////////////////////////////////////////////
	const draw = function () 
		{
			push()
			ellipseMode(CENTER);
			fill('#fff');
			noStroke()
			ellipse(x, y, r * 2, r * 2);
			pop()
		}

	

 ////  METODOS QUE SE USARAN QUE SEA PUBLICO SE COLOCA AQUI
	return
	{
		draw,
		move,
		collision,
		checkScore
	}
	
}