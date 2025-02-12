function hud(playerindex){
	var myplayer = systems[ps].players[playerindex];
	context.font='12px Arial';
	context.fillStyle = "white"; 
	if(myplayer.targetlock>=0){
		if (myplayer.ship.distance(systems[ps].npcs[myplayer.targetlock].ship)>myplayer.radarrange){
			myplayer.targetlock = -1;
			var shipsinrange = [];//To help guide what ships are targetable by the player, I'm generating a list of indices
			var closestdistance = 999999;//needs to be larger than radarrange 
			var closestindex = 0; 
			}
		else{
			var shipsinrange = [myplayer.targetlock];//simulates targeting computer finding only this ship
			var closestdistance = myplayer.ship.distance(systems[ps].npcs[myplayer.targetlock].ship);
			var closestindex = myplayer.targetlock; 
			}
		}	

	var shipsinrange = [];//To help guide what ships are targetable by the player, I'm generating a list of indices
	var fshipsinrange = [];
	var eshipsinrange = [];
	var eshiplevel = 0;
	var closestdistance = 999999;//needs to be larger than radarrange 
	var closestindex = 0; 
	var i=0;
	while (i<systems[ps].npcs.length){ //this loop makes the short list
		var tdistance = Math.floor(myplayer.ship.distance(systems[ps].npcs[i].ship));
		if (tdistance<myplayer.radarrange){
			shipsinrange.push(i);
			if (systems[ps].npcs[i].ai.playerhostile){
				eshipsinrange.push(i); 
				eshiplevel = eshiplevel + systems[ps].npcs[i].ship.level;
				}
			else {
				fshipsinrange.push(i);
				}
			if ((myplayer.ship.pointingat(systems[ps].npcs[i].ship))&&(myplayer.targetlock<0)){
				myplayer.shiptarget = i;	
				}
			else if (myplayer.targetlock>=0){
				myplayer.shiptarget = myplayer.targetlock;//This can be more efficient and exclude other calculations around here
				}
			if (tdistance<closestdistance){
				closestdistance = tdistance;
				closestindex = shipsinrange.length-1;
				}
			}
		i++;
		}
	if (closestdistance!=999999){
		if (myplayer.ship.distance(systems[ps].npcs[myplayer.shiptarget].ship)>myplayer.radarrange){
			myplayer.shiptarget=0;
			closestindex = 0;
			}
		}
	var i=0;//y tho?
	if (nmeactive == 1){
		if (myplayer.transparentui == false){
			//console.log("itriedtoopaquetargeting");
			context.fillStyle = "#080808";
			context.fillRect(canvas.width-160,0,160,320);
			}
		drawframe(canvas.width-160,0,160,320);//function drawframe(x,y,xs,ys){
		if (shipsinrange.length>0){
			//shipsinrange[shiptarget][0].drawcompass(ships[0],canvas.width-64, 96, 64); //Targeting computer compass
			var reticlecolor = "blue";
			if (systems[ps].npcs[myplayer.shiptarget].ai.playerhostile==true){reticlecolor = "red";}
			myplayer.ship.drawcompass2(systems[ps].npcs[myplayer.shiptarget].ship,canvas.width-80, 96, 64); //Targeting computer compass
			systems[ps].npcs[myplayer.shiptarget].ship.drawreticle(myplayer.ship.x,myplayer.ship.y,reticlecolor); //Targeting reticle
			var aimdir = myplayer.blasters[myplayer.wep].aim1(myplayer.ship,systems[ps].npcs[myplayer.shiptarget].ship);
			if (aimdir!=999){//This is the lead indicator
				context.beginPath();
				context.strokeStyle = reticlecolor;
				context.moveTo(canvas.width/2+Math.cos(aimdir[0])*200,canvas.height/2+Math.sin(aimdir[0])*200);
				context.lineTo(canvas.width/2+Math.cos(aimdir[0])*300,canvas.height/2+Math.sin(aimdir[0])*300);
				context.moveTo(canvas.width/2+Math.cos(aimdir[1])*200,canvas.height/2+Math.sin(aimdir[1])*200);
				context.lineTo(canvas.width/2+Math.cos(aimdir[1])*300,canvas.height/2+Math.sin(aimdir[1])*300);
				context.stroke();
				}
			var nmechart2 = [["Name","Level","HP","Shield","Damage","Blast","Regen", "AI"],[systems[ps].npcs[myplayer.shiptarget].ship.name, systems[ps].npcs[myplayer.shiptarget].ship.level, systems[ps].npcs[myplayer.shiptarget].ship.hp,  systems[ps].npcs[myplayer.shiptarget].ship.shield, systems[ps].npcs[myplayer.shiptarget].blasters[0].bombs[0].hurt, systems[ps].npcs[myplayer.shiptarget].blasters[0].bombs[0].boombuff,systems[ps].npcs[myplayer.shiptarget].ship.shieldregen,systems[ps].npcs[myplayer.shiptarget].ai.behavior]];
			showchart(nmechart2, 64, 16, canvas.width-150,192);//test location
			//console.log(systems[ps].npcs[myplayer.shiptarget]);
			//context.beginPath(); 
			//context.rect(canvas.width-304,4+16*closestindex, 160, 16); //This is the item selection indicator
			//context.lineWidth = 2; 
			//context.strokeStyle = "white";
			//context.stroke();	
			}
		//context.font = '24px Ariel';
		//context.fillStyle = "lime";
		//context.fillText(fshipsinrange.length+" Friendly ships detected", canvas.width-408, 20);	
		context.font = '24px Ariel';
		context.fillStyle = "red";
		context.fillText(eshipsinrange.length+" Enemies in range", canvas.width-408, 20);	
		context.fillText("Mean level: "+Math.floor(eshiplevel/eshipsinrange.length), canvas.width-408, 50);	
		context.fillStyle = "white";
		context.fillText("System ID: "+ps, 408, canvas.height-20);			
		
		if (myplayer.targetlock>=0){
			context.font = '24px Ariel';
			context.fillStyle = "yellow";
			context.fillText("Target Locked", canvas.width-160, 20);	
			}
		}
	if (myplayer.vkvisible){
		var i=0;
		while (i<vkeys.length){
			vkeys[i].draw();
			i++;
			}
		}
	if (myplayer.vkactive == false){
		context.font = '20px Ariel';
		context.fillStyle = "yellow";
		if (myplayer.vkvisible == true){context.fillText("Virtual keys are visible and disabled, press V to change.", canvas.width/2-160, 16);}
		if (myplayer.vkvisible == false){context.fillText("Virtual keys are hidden and disabled, press V to change.", canvas.width/2-160, 16);}
		} 
///////////////Navigation hud///////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (myplayer.navactive > 0){
		if (myplayer.transparentui == false){
			//console.log("itriedtoopaquenav");
			context.fillStyle = "#080808";
			context.fillRect(canvas.width-500,canvas.height-180,500,180);
			}
		drawframe(canvas.width-500,canvas.height-180,500,180);//function drawframe(x,y,xs,ys){
		var hastarget = true;
		var thenavtarget=0;
		if (myplayer.navactive==1){//For tracking planetoids
			if (myplayer.navtarget < 0) {myplayer.navtarget = 0;}//maybe not necessary?
			else if (myplayer.navtarget>systems[ps].planets.length-1){myplayer.navtarget = 0;	}//maybe not necessary?
			if (systems[ps].planets.length<1){ hastarget = false; }
			else {
				thenavtarget=systems[ps].planets[myplayer.navtarget];
				}
			context.font = '20px Ariel';
			context.fillStyle = "white";
			context.fillText("Planet Navigation", canvas.width-160, canvas.height-16);
			}
		if (myplayer.navactive==2){//For tracking dockable stations
			if (myplayer.navtarget < 0) {myplayer.navtarget = 0;}//maybe not necessary?
			else if (myplayer.navtarget>systems[ps].outposts.length-1){myplayer.navtarget = 0;	}//maybe not necessary?
			if (systems[ps].outposts.length<1){ hastarget = false; }
			else {
				thenavtarget=systems[ps].outposts[myplayer.navtarget];
				}
			context.font = '20px Ariel';
			context.fillStyle = "white";
			context.fillText("Station Navigation", canvas.width-160, canvas.height-16);
			}
		if (myplayer.navactive==3){//For tracking nearby stars
			var sensordistance = 2000000*myplayer.upgrades[7].tier;
			var nearbystars = [];
			var i=1;
			while(i<systems.length){
				if (myplayer.ship.distance(systems[i].planets[0])<sensordistance){ nearbystars.push(systems[i].planets[0]); }
				i++;
				}
			if (myplayer.navtarget < 0) {myplayer.navtarget = nearbystars.length-1;}
			else if (myplayer.navtarget>nearbystars.length-1){myplayer.navtarget = 0;	}//Definitely necessary here, as the playerkeys function does not have access to nearbystars.length
			if (nearbystars.length<1){ hastarget = false; }
			else {
				thenavtarget=nearbystars[myplayer.navtarget];
				}
			context.font = '20px Ariel';
			context.fillStyle = "white";
			context.fillText("Stellar Navigation", canvas.width-160, canvas.height-16);
			}
		if (hastarget){
			thenavtarget.drawcompass(myplayer.ship,canvas.width-64,canvas.height-96, 64); //Nav computer compass for planets
			var solardistance = systems[ps].planets[0].distance(myplayer.ship); //distance to sun
			var solargravity = (.0003*systems[ps].planets[0].m)/(solardistance*solardistance); //Gravitational influence of sun, pixels per frame per frame.
			var distance = thenavtarget.distance(myplayer.ship); //distance to target planet
			var planetarygravity = (.0003*thenavtarget.m)/(distance*distance); //gravity from target planet
			var name = thenavtarget.name.slice(0,16);
			var pclass = "Moon"; //Defaults to Moon,
			if (thenavtarget==0){pclass = "Star";} //0 index is the sun
			else if (thenavtarget.parentid == 0){pclass = "Planet";}//Objects orbiting sun are planets
			if (myplayer.navactive==2){pclass = "Station"; }
			var size = String(Math.floor(thenavtarget.s));
			var mass = String(Math.floor(thenavtarget.m/1000));
			var parent = systems[ps].planets[thenavtarget.parentid].name;	
			var orbitradius = thenavtarget.distance(systems[ps].planets[thenavtarget.parentid]);
			var orbitspeed = thenavtarget.deltav(systems[ps].planets[thenavtarget.parentid]);
			var orbitpos = systems[ps].planets[thenavtarget.parentid].directionof(thenavtarget);
			while (orbitpos > Math.PI){orbitpos=orbitpos - 2*Math.PI;} //This reduces the angle difference to within +- Math.PI
			while (orbitpos < -1*Math.PI){orbitpos = orbitpos + 2*Math.PI;}
			var distance = thenavtarget.distance(myplayer.ship); //distance to target planet
			//var planetarygravity = (.0003*planets[navtarget].m)/(distance*distance); //gravity from target planet
			var gravity = 0;
			if (myplayer.navactive==1){ gravity = ((.0003*thenavtarget.m*900)/(distance*distance)).toFixed(3); }
			var dv = thenavtarget.deltav2(myplayer.ship);
			var deltav = (dv[0]).toFixed(3).padStart(8,"0");
			var cosdv =  Math.cos(dv[1]-myplayer.ship.directionof(thenavtarget))*dv[0];
			var sindv =  Math.sin(dv[1]-myplayer.ship.directionof(thenavtarget))*dv[0];
			var escape = 0;
			if (myplayer.navactive == 1){escape = Math.sqrt(thenavtarget.m*2*.0003/myplayer.ship.distance(thenavtarget));}
			var navchart2 = [ ["Name","Class", "Size", "Mass", "Parent", "Orbit Radius", "Orbit speed", "Orbit Position"], [name, pclass, size, mass, parent, Math.floor(orbitradius), Math.floor(orbitspeed), orbitpos.toFixed(3)],  ["Distance","DeltaV", "Cos DV", "Sin DV", "Gravity", "Escape","X","Y"], [Math.floor(distance),deltav, cosdv.toFixed(3), sindv.toFixed(3), gravity, escape.toFixed(3),Math.floor(thenavtarget.x), Math.floor(thenavtarget.y)]  ];
			showchart(navchart2, 80, 16, canvas.width-480,canvas.height-160);	
			}
		}
	else {
		//context.font = '20px Ariel';
		//context.fillStyle = "white";
		//context.fillText("Navigation is off", canvas.width-160, canvas.height-16);
		}
	//context.fillText("Press N key to cycle navigation computer mode",canvas.width-300,canvas.height-8);
////////////////////////Map/////////////////////////////////////
			//if (mapactive == 1){drawmap(planets,256,canvas.width/2,canvas.height/2, ships[0].x, ships[0].y);}
			//planets[0].drawcompass(ships[0],canvas.width/2,canvas.height-48); //Nav computer compass for sun
///////////////Rest of HUD/////////////////////////////////////////////////////////////////////////////////////////////////	
	if (myplayer.transparentui == false){
		//console.log("itriedtoopaquestatus");
		context.fillStyle = "#080808";
		context.fillRect(0,0,160,276);
		}
	drawframe(0,0,160,276);//function drawframe(x,y,xs,ys){
	var sbl = 150; //status bar base length
	context.font='12px Arial';
	context.fillStyle = "orange"; //thruster power bar 
	context.strokeStyle = "orange";
	context.lineWidth = 2;
    context.fillRect(4, 84,Math.floor(sbl*myplayer.thruster/100), 16);
	context.beginPath();
	context.rect(4,84,Math.floor(sbl*myplayer.maxthruster/100),16);
	context.stroke();
	context.fillStyle = "red"; //weapons energy bar
    context.fillRect(4, 64,Math.floor(sbl*myplayer.energy/100), 16);
	context.strokeStyle = "red";
	context.beginPath();
	context.rect(4,64,Math.floor(sbl*myplayer.maxenergy/100),16);
	context.stroke();
	context.fillStyle = "purple"; //level bar
	context.strokeStyle = "purple";
    context.fillRect(4, 44,Math.floor(sbl*myplayer.levelcheck()), 16);
	context.beginPath();
	context.rect(4,44,sbl,16);
	context.stroke();
	context.fillStyle = "blue"; //shield bar
	context.strokeStyle = "blue";
    context.fillRect(4, 24,Math.floor(sbl*myplayer.ship.shield/200), 16);
	context.beginPath();
	context.rect(4,24,Math.floor(sbl*myplayer.ship.maxshield/200),16);
	context.stroke();
	context.fillStyle = "green"; //health bar
	context.strokeStyle = "green";
    context.fillRect(4, 4,Math.floor(sbl*myplayer.ship.hp/1000), 16);
	context.beginPath();
	context.rect(4,4,Math.floor(sbl*myplayer.ship.maxhp/1000),16);
	context.stroke();
	context.fillStyle = "white";
	myplayer.levelcheck();//Remove this to run this function less.
	var statuschart1 = [ ["Health","Shields","Level "+myplayer.ship.level,"Weapons", "Thrusters"]  ];
	showchart(statuschart1, 80, 20, 8,16);	
	context.font='20px Arial';
	context.fillStyle = "yellow";
	context.fillText("Bling",5,120);
	context.fillText(myplayer.money,80,120);//Displays how much money the player has
	if (myplayer.gotmoney[0]>0){//If the player has received money recently, display how much and decrement the display lifetime of that event.
		myplayer.gotmoney[0] = myplayer.gotmoney[0]-1;//gotmoney[0] is the timer integer
		context.fillStyle = "green";
		context.fillText("+"+myplayer.gotmoney[1],100,116);//gotmoney[1] is the value integer
		context.fillStyle = "white";
		}
	context.fillStyle = "red";
	context.fillRect(16*myplayer.wep-160*Math.floor(myplayer.wep/10),128+16*Math.floor(myplayer.wep/10),14,20);//This highlights which blaster the player has selected
	//context.fillRect(16*myplayer.wep-160*Math.floor(i/10),104+16*Math.floor(i/10),14,20);//This highlights which blaster the player has selected
	context.font='14px Arial';
	var i=0;//This indicates available blasters to the user
	while(i<myplayer.blasters.length){
		if (myplayer.blasters[i].phas){context.fillStyle = "white";}else{context.fillStyle = "grey";}
		context.fillText(i,16*i-160*Math.floor(i/10),144+16*Math.floor(i/10));
		i=i+1;
		}
	context.font='20px Arial';
	context.fillStyle = "red";
	context.fillText(myplayer.blasters[myplayer.wep].name+" equipped",8,184);
	context.fillStyle = "purple";
	context.fillText(myplayer.boosters +" Boosters",8,212);	
	context.fillStyle = "#4040FF";
	var probestring = "Probing Color";
	if (myplayer.probemode==1){ probestring = "Probing Shape";}
	if (myplayer.probemode==2){ probestring = "Probing Weapon";}
	if (myplayer.probemode==3){ probestring = "Probe Camera";}
	if ((myplayer.wep==0)||(aturretwep==0)||(bturretwep==0)){
		context.fillText(probestring,8,240);
		}
	//context.fillStyle = "green"; 
	//context.fillText("task: "+myplayer.task,8,268);//The task is a brief description of the last thing a player was asked to do.
	context.fillStyle = "yellow";
	context.fillText("job: "+myplayer.job,8,268);//Jobs are missions taken from station menus.  This indicates latest and how many jobs.
	
	if (myplayer.debugdisplay){
		context.fillStyle = "white";
		context.font='12px Arial';
		context.fillText("dockstate: "+myplayer.dockstate,8,336);//Debugging stuff
		context.fillText("storystate: "+myplayer.storystate,8,352);
		context.fillText("probemode: "+myplayer.probemode,8,368);
		context.fillText("autopilot: "+myplayer.autopilot,8,384);
		context.fillText("nav target active "+systems[ps].planets[myplayer.navtarget].active,8,400);
		context.fillText("ps: "+ps,8,416);
		}
	//context.fillText("ship target active "+systems[ps].ships[myplayer.shiptarget].active,8,330);
	if (myplayer.alive == false){//This is the death screen.
		if (myplayer.transparentmenus == false){
			context.fillStyle = "#080808";
			context.fillRect(100,100,canvas.width-200,canvas.height-200);
			}
		drawframe(100,100,canvas.width-200,canvas.height-200);
		context.fillStyle = "red";
		context.font='24px Arial';
		context.fillText("Your ship was destroyed.  It will be repaired in "+myplayer.deadtime+" frames.",canvas.width/2-300,128);
		context.fillText("Help the repair computer to finish faster.",canvas.width/2-200,160);
		context.fillStyle = "white";
		context.font='12px Arial';
		myplayer.deadtree.emods[0].quizblocks[0].quizzes[0].draw(200,200);
	}
	context.fillStyle = "white";
	context.font='12px Arial';
	var starty = Math.floor(canvas.height*5/6 - 24); //allotting bottom 1/6 of screen + 24 px fudge factor
	var startx = 420;
	var endx = canvas.width - 640;
	playerradio.display(time,startx,starty,endx);
	if (showstats){
		context.fillStyle = "white";
		context.font='20px Arial';
		//console.log("itriedtoshowstats");
		context.fillText("Highest level: "+bonuslevel,canvas.width/2 - 80,100);
		context.fillText("Weapons pool: "+bonusweplist,canvas.width/2 - 80,128);
		context.fillText("Boss kills: "+bosskills,canvas.width/2 - 80,156);
		context.fillText("Systems visited: "+visited.length,canvas.width/2 - 80,184);
		context.fillText("Most Bling: "+maxbling,canvas.width/2 - 80,212);
		context.fillText("Deaths: "+myplayer.deaths,canvas.width/2 - 80,240);
		context.fillText("X to hide",canvas.width/2 - 80,268);
		}
	myplayer.blasters[myplayer.wep].drawsights(myplayer,time);
	if (players>1){
		context.font = context.font='20px Arial';
		context.fillText("Turret 1 Weapon: "+aturretwep+" "+myplayer.blasters[aturretwep].name, canvas.width - 300,canvas.height-100);
		//context.fillText("Turret 1 Energy "+aturretenergy, canvas.width- 180,canvas.height-60);
		}
	if (players>2){
		context.fillText("Turret 2 Weapon: "+bturretwep+" "+myplayer.blasters[bturretwep].name, canvas.width - 300,canvas.height-60);
		var conflictwep1 = -1;
		var conflictwep2 = -1;
		if (myplayer.wep==aturretwep){conflictwep1 = aturretwep;}
		if (myplayer.wep==bturretwep){conflictwep2 = bturretwep;}
		if (bturretwep==aturretwep){
			conflictwep1 = aturretwep;
			conflictwep2 = aturretwep;
			}
		context.fillStyle = "red";
		
		if (conflictwep1>1){
			context.fillText("Conflict on weapon "+aturretwep, canvas.width - 256,canvas.height-80);
			}
		if (conflictwep2>1){
			context.fillText("Conflict on weapon "+bturretwep, canvas.width - 256,canvas.height-40);
			}
		//context.fillText("T2 Energy "+bturretenergy, canvas.width/2 + 80,128);
		}

//Autopilot indicator
	if (myplayer.autopilot==1){
		context.fillStyle = "red";
		context.font='32px Arial';
		context.fillText("Autopilot on",canvas.width/2 - 80,canvas.height/2 - 100);
		}
	else if (myplayer.autopilot==2){
		context.fillStyle = "orange";
		context.font='32px Arial';
		context.fillText("Autobrake on",canvas.width/2 - 80,canvas.height/2 - 100);

		}
	if ((myplayer.emenu>0)&&(myplayer.ship.hp>0)){//engineering menu
			context.fillStyle = "lightblue";
			context.font = '24px Arial';
			context.fillText("Press E to Exit",400,50);
		//myplayer.emtrees[0].drawicons(myplayer,400,100);
		//console.log(myplayer.emenu + " " +myplayer.emg+" "+myplayer.emh+" "+myplayer.emi+" "+myplayer.emj);
		if (myplayer.emenu == 1){
			context.fillStyle = "lightblue";
			context.font = '24px Arial';
			//console.log(myplayer.emtrees.length);
			if (myplayer.emtrees.length<2){ myplayer.emenu = 2; }
			else{
				//display all the trees
				}
			}
		if (myplayer.emenu >= 2){
			myplayer.emtrees[myplayer.emg].draw(myplayer,400,100);
			}
		}

////Shopping!//////////////////////////////////////////////////////
	if ((myplayer.dockstate>=0)&&(myplayer.dockstate<systems[ps].shops.length)){
		if (myplayer.shopmode == 0){
			//console.log("itriedtodrawthebuymenu1");
			if (myplayer.shopitem >= systems[ps].shops[myplayer.dockstate].inv.length){myplayer.shopitem=0;}
			//console.log("itriedtodrawthebuymenu2");
			systems[ps].shops[myplayer.dockstate].drawbuymenu(280,64,myplayer.shopitem,myplayer);
		}else if (myplayer.shopmode == 1){
			//console.log("itriedtodrawthebuymenu3");
			systems[ps].shops[myplayer.dockstate].drawsellmenu(280,64,myplayer.shopitem,myplayer);
		}else if (myplayer.shopmode == 2){
			//console.log("itriedtodrawthebuymenu4");
			systems[ps].shops[myplayer.dockstate].drawworkmenu(280,64,myplayer.shopitem,myplayer);
			}
		var i=0;
		while ((i<svkeys.length)&&(myplayer.vkvisible)){
			svkeys[i].draw();
			i++;
			}
		}
	else{ 
		//dont draw or do shop stuff?
		}
	//draw cargo stuff
	if (diagnostic>0){	
		if (myplayer.transparentui == false){
			//console.log("itriedtoopaquestatus");
			context.fillStyle = "#080808";
			context.fillRect(canvas.width-200,380,200,200);
			}
		drawframe(canvas.width-200,380,200,200);//function drawframe(x,y,xs,ys){
		if (diagnostic == 1){myplayer.blasters[myplayer.wep].drawstats(canvas.width-196,400);}
		if (diagnostic == 2){myplayer.inventory.draw(canvas.width-196,432);}
		if (diagnostic == 3){
			context.fillStyle = "teal";
			context.font='12px Arial';
			var titles = ["Armor",    "Max Armor",    "Shield",       "Max Shield",      "Shield Regen",      "Radar Range","Cargo Max",             ];
			var values = [myplayer.ship.hp,myplayer.ship.maxhp, myplayer.ship.shield,myplayer.ship.maxshield,myplayer.ship.shieldregen,myplayer.radarrange, myplayer.inventory.maxcargo ];
			showchart([titles,values], 80, 16, canvas.width-196,400);
			}
		}
	if (myplayer.planetmenu == 1){
		//systems[ps].drawplanetlist(0,400,100,48,80); //Mostly works.  Wasteful, could be more preprocessed
		//drawplanetlist(playerindex,x,y,ystep,scale){
		var blind = 0;//This is a trick to hide planets at the end of the stack.  Was for waldo, not used here.
		//if (myplayer.sensor >0){blind = 0;}
		var mx = mdx+canvas.width/2;
		var my = mdy+canvas.height/2;
		var ystep = 50;
		var x = 400;
		var y = 64;
		var scale = 64;
		var i=0;
		while(i<myplayer.planetarychart.length-blind){
			var dx = -64;
			var dy = ystep*(i+0)+6;
			var j = 0;
			while(j<myplayer.planetarychart[i].length){
				if (j>0){
					dx = 8+ystep*(j-0.5);
					dy = ystep*(i-0.3);
					}
				var theplanet = systems[ps].planets[myplayer.planetarychart[i][j]];
				context.beginPath();  //So instead of not rendering, it will render at most recent thickness (often max)
				context.arc(x+ystep*(j), y+ystep*(i), theplanet.s /scale, 0, 2 * Math.PI, false); //until linewidth of 1 is reached.
				context.lineWidth = 4;
				//console.log("i = "+i+" j = "+j);
				context.strokeStyle = theplanet.c;
				context.stroke();
				context.fillStyle = "white";
				context.font = "16px Ariel";
				context.fillText(theplanet.name,x+dx,y+dy);
				if (systems[ps].players[playerindex].navtarget == myplayer.planetarychart[i][j]){//indicate planet is targeted	
					context.beginPath();  
					context.rect(x+ystep*(j)-ystep*0.4, y-ystep*0.4+ystep*(i),ystep*0.8,ystep*0.8); 
					context.lineWidth = 2;
					context.strokeStyle = "white";
					context.stroke();
					}
				j++;
				}
			i++;
			}
		if ((mx>x)&&(my>y)){
			var mi = Math.floor((my-y)/ystep+0.5);
			var mj = Math.floor((mx-x)/ystep+0.5);
			if (mi<myplayer.planetarychart.length-blind){
				if (mj<myplayer.planetarychart[mi].length){
					myplayer.navtarget = myplayer.planetarychart[mi][mj];
					}
				}
			}
		}	
	if (myplayer.options == 1){
		if (myplayer.transparentmenus == false){
			context.fillStyle = "#080808";
			context.fillRect(230,50,500,500);
			}
		context.font = "24px Ariel";
		context.fillStyle = "yellow";
		context.fillText("Options",250,88);	
		var i=0;
		while (i<ovkeys.length){
			ovkeys[i].draw();
			i++;
			}
		context.font = "20px Ariel";
		context.fillStyle = "lime";
		context.fillText(musicvolume,420,116);	
		context.fillText(soundvolume,420,148);			
		context.fillText(lastsong,368,182);
		context.fillText(myplayer.vkactive,410,288);
		if (document.fullscreenElement) {
			context.fillText(fullscreenmouseyoffset,420,352);
		} else {
			context.fillText(windowmouseyoffset,420,352);
			}
		}
		
var netsolarpain = 0;
if (myplayer.shieldbonus!="solar"){netsolarpain = myplayer.solarpain-1.125;}
else {netsolarpain = myplayer.solarpain - 3.125;}
if (netsolarpain > 0){
	context.font = "32px Ariel";
	context.fillStyle = "yellow";
	context.fillText("SOLAR DAMAGE",canvas.width/2-100,256);	
	
	}
if (cheatmode == 1){
	context.font = "32px Ariel";
	context.fillStyle = "red";
	context.fillText("YOU'RE A CHEATER",canvas.width/2-100,64);	
	context.font = "12px Ariel";
	context.fillText("End key gives money, Q key fires scrt blaster, W key warps to planet, V warps to next solar system",canvas.width/2-300,48);	
	}
}
