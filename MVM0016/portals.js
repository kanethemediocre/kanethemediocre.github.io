function portalcheck(player){
	var i=0;
	while(i<portals.length){
		if (portals[i].collide(player)){
			if (portals[i].hp<levels.length){
				leveli = portals[i].hp;
				currentlevel = levels[leveli];
				player.x = portals[i].xdir;
				player.y = portals[i].ydir;
				}
			}
		i++;
		}
	}
