function playerhud(){
	
	context.fillStyle = "yellow";
	context.font = "16px Arial";
	context.fillText("HP = "+currentlevel.mrboxes[0].hp,225,16);

	context.font = "16px Arial";
	context.fillText("Nivel: "+leveli,225,64);
	
	context.font = "16px Arial";
	context.fillText("Weapon "+currentweapon,225,96);
	
	context.font = "16px Arial";
	context.fillText(gnames[currentweapon],225,128);
	//context.fillRect(128,80,20,20);
	
		context.font = "16px Arial";
	context.fillText("Puntos: "+score,225,160);
	
			context.font = "16px Arial";
	context.fillText("Dinero: "+money,225,192);
	
	context.font = "32px Arial";
	context.strokeStyle = "red";
	context.beginPath();
	context.rect(225+currentweapon*32-4,224-32+4,32,32);
	context.stroke();
	var i=0;
	while(i<guns.length){
		if (hasweapons[i]){	context.fillStyle = "white"; }
		else {	context.fillStyle = "grey"; }
		context.fillText(i,225+i*32,224);
		i++
		}
	
	}
