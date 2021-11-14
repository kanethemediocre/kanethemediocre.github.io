	
/////////////////////////////Begin system class///////////////////////////////////////////////////////////////////////////////////////////////////////////////
class System{
	constructor(index, name, x, y){
		this.index = index; //integer identifying system 
		this.name = name; //name of system for display
		this.planets = []; //list of planets (to be generated)
		this.ships = []; //list of ships (to be generated)
		this.npc = []; //More ship umos, but not enemy ais.  Not yet used.
		this.botbombs = []; //list of bombs used in system
		this.outposts = []; //list of outposts in system.  1st (index 0) item is empty, correlates with dockstate == 0 which is undocked
		this.shops = []; //list of shops in the system.  1st (index 0) item is empty, correlates with dockstate == 0 which is undocked
		this.turrets = []; //list of bare turrets in the system.
		this.difficulty = 1; //Scales ship generation attributes
		this.x = x;
		this.y = y;
	}
	draw(viewx,viewy){ //no filter draws everything, sort of obselete
		var i= this.ships.length;
		while  (i>0){
			i=i-1;
			this.ships[i].drawship(viewx,viewy);
			}
		var i= this.planets.length;
		while  (i>0){
			i=i-1;
			this.planets[i].drawplanet(viewx,viewy);
			}
		var i= this.botbombs.length;
		while  (i>0){
			i=i-1;
			this.botbombs[i].drawbomb(viewx,viewy);
			}
		}
	draw2(viewx,viewy){ //linear filtered instead of by distance, maybe computationally cheaper?
		var i= this.ships.length;
		while  (i>0){
			i=i-1;
			var xtol = canvas.width/2+this.ships[i].s;
			var xdif = this.ships[i].x-viewx;
			if ((xdif < xtol)&&(xdif > -1*xtol)){
				var ytol = canvas.height/2+this.ships[i].s;
				var ydif = this.ships[i].y-viewy;
				if ((ydif < ytol)&&(ydif>-1*ytol)){
					this.ships[i].drawship(viewx,viewy);	
					}		
				}		
			}
		var i= this.turrets.length;
		while  (i>0){
			i=i-1;
			var xtol = canvas.width/2+this.turrets[i].pivot.s*4;//*4 is arbitrary safety factor, the pivot is normally smaller than the total turret size including base.  If it's slightly too far it won't render anyways, just waste a tiny bit of calculations.
			var xdif = this.turrets[i].pivot.x-viewx;
			if ((xdif < xtol)&&(xdif > -1*xtol)){
				var ytol = canvas.height/2+this.turrets[i].pivot.s*4; //same arbitrary *4 reasoning.
				var ydif = this.turrets[i].pivot.y-viewy;
				if ((ydif < ytol)&&(ydif>-1*ytol)){
					this.turrets[i].draw(viewx,viewy);	
					}		
				}		
			var xtol2 = canvas.width/2+this.turrets[i].bombs[0].s;
			var xdif2 = this.turrets[i].bombs[0].x-viewx;
			if ((xdif2 < xtol2)&&(xdif2 > -1*xtol2)){
				var ytol2 = canvas.height/2+this.turrets[i].bombs[0].s*4; //same arbitrary *4 reasoning.
				var ydif2 = this.turrets[i].bombs[0].y-viewy;
				if ((ydif2 < ytol2)&&(ydif2>-1*ytol2)){
					this.turrets[i].bombs[0].drawbomb(viewx,viewy);	
					}		
				}	
			}	
		var i= this.planets.length;
		while  (i>0){
			i=i-1;
			var xtol = canvas.width/2+this.planets[i].s;
			var xdif = this.planets[i].x-viewx;
			if ((xdif < xtol)&&(xdif > -1*xtol)){
				var ytol = canvas.height/2+this.planets[i].s;
				var ydif = this.planets[i].y-viewy;
				if ((ydif < ytol)&&(ydif>-1*ytol)){
					this.planets[i].drawplanet(viewx,viewy);	
					}		
				}		
			}	
		var i= this.botbombs.length;
		while  (i>0){
			i=i-1;
			var xtol = canvas.width/2+this.botbombs[i].s;
			var xdif = this.botbombs[i].x-viewx;
			if ((xdif < xtol)&&(xdif > -1*xtol)){
				var ytol = canvas.height/2+this.botbombs[i].s;
				var ydif = this.botbombs[i].y-viewy;
				if ((ydif < ytol)&&(ydif>-1*ytol)){
					this.botbombs[i].drawbomb(viewx,viewy);	
					}		
				}		
			}
		var i= this.outposts.length;
		while  (i>0){
			i=i-1;
			var xtol = canvas.width/2+this.outposts[i].s;
			var xdif = this.outposts[i].x-viewx;
			if ((xdif < xtol)&&(xdif > -1*xtol)){
				var ytol = canvas.height/2+this.outposts[i].s;
				var ydif = this.outposts[i].y-viewy;
				if ((ydif < ytol)&&(ydif>-1*ytol)){
					this.outposts[i].drawstation(viewx,viewy);	
					}		
				}		
			}				
		}
	updateall(){
		var i = this.ships.length; //update section////////////////////////////////////////////////////////////
		while (i>0){ //update ships
			i=i-1;
			this.ships[i].updateship(this.planets); //basic ship updates
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////AI section/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
			if (this.ships[i].ai == "enemy"){
				if ( (  this.ships[i].distance(this.planets[this.ships[i].parentid]) > 10000  )&&(this.ships[i].hp>0) ){//If this bot got lost....
					var savedhp = this.ships[i].hp; //remember it's hitpoints... 
					this.ships[i].respawn(this.planets[this.ships[i].parentid]); //Respawn...
					this.ships[i].hp = savedhp; //re-apply hitpoints so it doesn't get a free heal out of it.
					}
				var thetargetdistance = this.ships[0].distance(this.ships[i]);	
				if (thetargetdistance < 5000){ //Don't do anything if player is far
					var theparentdistance = this.ships[i].distance(this.planets[this.ships[i].parentid]);
					this.ships[i].fasttrack(this.ships[0]); //Bots point towards player
					if ((Math.random()>0.95) && (this.botbombs[i-1].timer < 1)){  //Bots fire occasionally, if bomb isn't out
					if ((!this.ships[i].ispointingat(this.planets[this.ships[i].parentid]))||(thetargetdistance<theparentdistance)){  //Don't shoot if your parent planet is between bot and player (the target)
							this.ships[i].launchbomb(this.botbombs[i-1], 12, 80); 
							}
						}
					}
				}
			if (this.ships[i].ai == "trader"){
				var targetplanet = this.ships[i].aitargets[this.ships[i].aistate];
				this.ships[i].seek3(this.planets[targetplanet],20,30,time,1000);
				//money = money + 1;//test
				if (this.ships[i].distance(this.planets[targetplanet])<1500){ 
					this.ships[i].aistate = this.ships[i].aistate+1;
					if (this.ships[i].aistate>this.ships[i].aitargets.length-1){ this.ships[i].aistate = 0;}
					}
				}
			}
		var i=this.turrets.length;
		while(i>0){
			i=i-1;
			if (this.turrets[i].pivot.ai == "enemy"){
				if (this.ships[0].distance(this.turrets[i].pivot) < 5000){ //Don't do anything if player is far
					this.turrets[i].pivot.fasttrack(this.ships[0]); //Bots point towards player
					if ((Math.random()>0.95) && (this.turrets[i].bombs[0].timer < 1)){  //Bots fire occasionally, if bomb isn't out
						this.turrets[i].pivot.launchbomb(this.turrets[i].bombs[0], 12, 80); 					
						}
					}
				}
			}
///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
/////////////////////end AI section ////////////////////////////////////////
		var i = this.planets.length; //update planets
		while (i>0){
			i=i-1;
			this.planets[i].update1();
			}
		var i = this.botbombs.length; //update bot bombs
		while (i>0){
			i=i-1;
			this.botbombs[i].update1();
			this.botbombs[i].updatebomb();
			}

		var i = this.outposts.length; 
		while (i>0){
			i=i-1;
			this.outposts[i].update1();
			this.outposts[i].d = this.outposts[i].directionof(planets[0]);
			}
		var i = this.turrets.length; 
		while (i>0){
			i=i-1;
			this.turrets[i].update1();
			}				
			
		}//end updateall()/////
	gravitateall(){
		var i = this.planets.length;
		while (i>0){ //Planet on ships and bombs
			i=i-1;
			var j = this.ships.length;
			while (j>0){ //gravitate on each ship
				j=j-1;
				this.planets[i].gravitate(this.ships[j]);
				}
			j = this.botbombs.length;
			while (j>0){ //gravitate on each bot bomb
				j=j-1;
				this.planets[i].gravitate(this.botbombs[j]);
				}				
			}
		var i = this.outposts.length;
		while (i>0){
			i=i-1;
			this.planets[0].gravitate(this.outposts[i]);	
			}
		var i = this.planets.length;
		while (i>1){//Planet on planet gravity
			i=i-1;
			this.planets[0].gravitate(this.planets[i]);//sun gravitates all
			if (this.planets[i].parentid>0){ this.planets[this.planets[i].parentid].gravitate(this.planets[i]); } //others only affected by parent
			}
		}
	gravitateothers(umolist){//For gravitating Umos external to the system (playerbombs at the start)
		var i = this.planets.length;
		while (i>0){
			i=i-1;
			var j = umolist.length;
			while (j>0){
				j=j-1;
				this.planets[i].gravitate(umolist[j]);
				}
			}	
		}
	dockcheck(dockstate){ //currently gets player stuck docked, not sure why
		var i=0;
		while (i<outposts.length){
			if (ships[0].distance(outposts[i])<160){
				outposts[i].dock(ships[0]);
				dockstate = i;//Maybe add this to system update function, but that implicitly passes dockstate which might not work in other languages.
				}		
			i=i+1;
			}
		}
	collideself(){ //Internal system collisions, ships to planets, ships to bot bombs, planets to bot bombs, turret bombs to ships and planets....
		var i = this.planets.length;
		var j = this.ships.length;
		var k = this.botbombs.length;
		while (i>0){ //For all planets+other collisions/////////////////////////////////
			i=i-1;
			var j = this.ships.length;
			while (j>0){ //For all ships to each planet
				j=j-1;
				this.planets[i].circlecollide(this.ships[j]);
				
				}
			var k = this.botbombs.length;
			while (k>0){ //For all bombs to each planet
				k=k-1; 
				this.planets[i].circlecollide(this.botbombs[k]);
				}
			var u= this.turrets.length;
			while(u>0){
				u=u-1;
				this.planets[i].circlecollide(this.turrets[u].bombs[0]); //Only checks 1 bomb, currently they only have 1 bomb.
				}
			var h = allblasters.length; //global scope is bad, shame
			while (h>0){
				h=h-1;
				var g = allblasters[h].bombs.length;
				while (g>0){
					g=g-1;
					this.planets[i].circlecollide(allblasters[h].bombs[g]);
					}
				}
			}
		//Intership collisions///////////////////////////////////////
		var i = 0;//For each ship,
		var j = 0; //to each other ship
		while (i<this.ships.length-1){
			j = i+1; //avoids duplicate executions 
			while (j<this.ships.length){
				this.ships[i].circlecollide2(this.ships[j]);
				j = j+1;
				}
			i = i+1;
			}
			
//////////////////bombs hitting ships///////////////////////////////////////////////
		var i=0;
		while (i<this.turrets.length){
			this.turrets[i].bombs[0].bombcollide(this.ships[0]); //Only collides with player ship for now
			i=i+1; 
			}
		var j=0;
		while (j<this.ships.length){
			if (this.ships[j].hp>0){ //don't check dead ships
				var g=0;
				while (g<this.botbombs.length){  //Bots can kill each other again
					this.botbombs[g].bombcollide(this.ships[j]);
					g=g+1;
					}
				}
			j=j+1;
			}
		var k = 0;
		while (k<allblasters.length){ //global scope, shame.  All this is about the allblasters bombs.
			var h = 0;
			while (h<allblasters[k].bombs.length){ //Global scope all over here.
				var i = 0;
				while (i<this.ships.length){
					if (this.ships[i].hp>0){
						allblasters[k].bombs[h].bombcollide(this.ships[i]);
						if (this.ships[i].hp<0){ //This is getting repeated allblasters.length times, not sure how best to fix
							if (this.ships[i].ai=="enemy"){
								var getcash = Math.floor(Math.random()*21+10)*this.ships[i].level;
								money = money + getcash;
								gotmoney = [30,getcash];
								cashsound1.play();
							}else if (this.ships[i].ai=="trader"){
								money = money - 1000;
								gotmoney = [30, -1000];
								//somebadsound.play();
								}
							}
						}
					i=i+1;
					}	
				h=h+1;
				}
			k=k+1;
			}
		}	
	collideothers(externalplanets, externalships, externalbombs){//input are umo arrays
		var  i = externalplanets.length;//unfinished... 		
	}
	randomplanets(){
		var numplanets = Math.floor(Math.random()*6+6);//random number of planets, 5-11
		var orbitradius = 0; //randomized in the loop
		var planetsize = 0; //randomized in the loop
		this.planets.push( new Umo(this.x,this.y,Math.floor(Math.random()*3000+1000), "orange") ); //make the sun 
		this.planets[0].name = this.name; // Star name is same as system name
		var i=0;
		while (i<numplanets-1){
			i=i+1; //planets[0] is already the sun, so we can skip index 0;
			orbitradius = Math.floor( (Math.random()*Math.random()*250000) + 4*this.planets[0].s); //Minimum orbit radius 4x sun radius, 1/r density factor
			planetsize = Math.floor( Math.random()*Math.random()*800 + Math.random()*100+100 ); //Minimum size 100,
			var i = 1;
			while (i<this.planets.length){
				var otherdist = this.planets[0].distance(this.planets[i]);
				var proximity = Math.abs(orbitradius - otherdist);
				if (proximity < 6*(this.planets[i].s+planetsize)){
					orbitradius = Math.floor( (Math.random()*Math.random()*250000) + 4*this.planets[0].s);//rerandomizes orbit
					var i=0; //re-checks new orbitradius....
					}
				i=i+1;
				}
			this.planets.push( new Umo(0,0,planetsize, randcolor() ) );//this is where the planet gets added to the array
			this.planets[i].c2 = randcolor();
			this.planets[i].name = randname(4);//random 4 character name
			this.planets[i].setorbit(this.planets[0], orbitradius, Math.random()*6.28, 1);
			this.planets[i].parentid = 0; //establishes star (planet[0] as parent planet
			}
		var i=1;
		var numplanets = this.planets.length;
		while (i<numplanets-1){
			this.randommoons(i); 
			i=i+1;
			}
		var extradots = Math.floor(Math.random()*3);
		while(extradots>0){
			this.planets[i].polyradius.push(0);
			this.planets[i].polytheta.push(0);
			extradots = extradots - 1;
			}
		var i = 0;
		while (i<this.planets.length){
			var j=0;
			while (j<this.planets[i].polytheta.length){
				this.planets[i].polyradius[j] = Math.random()+0.125;
				this.planets[i].polytheta[j] = Math.random()*2*Math.PI;
				j=j+1;
				}
			i=i+1;
			}
			
			
		this.randomoutposts(3); 
		var traderstops = Math.floor(Math.random()*3)+2;
		var destinations = [];
		var i=0;
		while (i<traderstops){
			var thisstop = Math.floor(Math.random()*(this.planets.length-1))+1;
			destinations.push(thisstop);
			i=i+1;
			}
		this.addrandomtraders(destinations, 4, 15)
		}
		
	randommoons(index){//index is of planet
		var nummoons = Math.floor(Math.random()*this.planets[index].s/100 )//Planets < 120 in size have 0 chance of a moon, planet 240 in size has 50% chance of 1 moon, etc.
		var moonsize = 0; //randomized in loop
		var moonorbitr = 0;//randomized in loop
		var moonindex = 0; //set in loop
		var i = nummoons;
		while (i>0){
			i=i-1;
			moonsize = Math.floor(Math.random()*this.planets[index].s/3+10);//radius is 10 plus up to 1/3 of parent planet
			moonorbitr = Math.floor(this.planets[index].s*(Math.random()*3.5+1.5)+80); //orbit radius is 1.5x parent planet radius + up to 3.5x parent planet radius... plus 80.
			moonindex = this.planets.length;//no -1 because push comes on next line
			this.planets.push( new Umo(0,0,moonsize, randcolor()) );
			this.planets[moonindex].c2 = randcolor();
			this.planets[moonindex].name = randname(4);
			this.planets[moonindex].parentid = index;
			this.planets[moonindex].setorbit(this.planets[index],moonorbitr,Math.random()*6.28, 1);//orbit direction is 1, not random
			}
		}
	
	randomoutposts(num){//num is number of outposts
		var alreadypickedplanets = [];
		var i=0;
		while (i<num){//
			this.outposts.push( new Umo(0,0,128, randcolor()));
			var lastindex = this.outposts.length-1;
			this.outposts[lastindex].c2 = randcolor();
			this.outposts[lastindex].parentid = 0;
			this.outposts[lastindex].name = randname(8)+"'s "+randname(7)+" "+randname(5);
			var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
			var toradii = [1,1,1,1]; //rectangle
			this.outposts[lastindex].polytheta = totheta;
			this.outposts[lastindex].polyradius = toradii;
			var pickedplanet = Math.floor(Math.random()*(this.planets.length-2))+1;//station will be in a solar following orbit to the chosen planet
			while ((this.planets[pickedplanet].parentid !== 0)&&(alreadypickedplanets.includes(pickedplanet))){//No outpost generated if planet is actually a moon or already picked
				pickedplanet = Math.floor(Math.random()*(this.planets.length-2))+1;//tries again to find a not-moon
				}
			var orbitdistance = this.planets[0].distance(this.planets[pickedplanet]);
			var orbitposition = this.planets[0].directionof(this.planets[pickedplanet]);
			this.outposts[lastindex].setorbit(this.planets[0], orbitdistance, orbitposition+0.2+Math.random()*0.3, 1);//This properly sets orbital distance, maybe properly sets orbit position.
			
			var numberofsides = Math.floor(Math.random()*6+7)*2;
			this.outposts[i].makeemblem(numberofsides,0.1); //randomly generates a shop logo
			
			
			//Now add the shop...  Tons of global scope used here.
			var randshopitems3 = [];  
			randshopitems3.push(repairshopitem);//First 2 items are always the same, repair item and booster item.
			randshopitems3.push(booster1);
			var j=2;
			while(j<4){ //Next 2 items will be random blasters for sale
				var buyableblaster = Math.floor(Math.random()*blasterbuyitems.length);
				randshopitems3.push(blasterbuyitems[buyableblaster]);
				j=j+1;
				}
			while (j<7){ //Next 3 items will be random blaster upgrades
				var theitem = Math.floor(Math.random()*blasterupgradeitems.length);
				randshopitems3.push(blasterupgradeitems[theitem]);
				j=j+1;
			}
			while (j<9){ //Next 2 items will be random ship upgrades.
				var randupgrade = Math.floor(Math.random()*upgradeshopitems.length);
				randshopitems3.push(upgradeshopitems[randupgrade]);
				j=j+1;
				}
			while (j<12){ //And 3 cargo items
				var randcargo = Math.floor(Math.random()*allcargos.length);
				randshopitems3.push(new Shopitem("cargo",randcargo,"buy",1));
				j=j+1;
				}
			this.shops.push(new Shop("XXXXXXXXXX",i, "whaaaaaaaaaaaaaat", randshopitems3)); //should fix this to reflect outpost name/description
			var k = 0;
			while (k<4){ //This adds 4 cargo missions to the shop.  
				this.shops[i].addcargomission(this.ships,this.planets,this.outposts);
				k=k+1;
				}// Destroy missions can't be added here (they are added in enemypopulate function), because normally the enemy ships haven't been added to the system yet when randomoutposts() (this function) is run.
			i=i+1;
			}
		}
	levelup(botindex,levels){//adds "levels" to make bots tougher
		var i = levels;
		while(i>0){
			i=i-1;
			var bonus = Math.floor(Math.random()*5);//Picks a number to select which bonus the bot gets
			if (bonus==0){ //extra health
				this.ships[botindex].maxhp = this.ships[botindex].maxhp+100;
				this.ships[botindex].hp = this.ships[botindex].hp+100;
				}
			if (bonus==1){ //extra shield
				this.ships[botindex].maxshield = this.ships[botindex].maxshield+50;
				this.ships[botindex].shield = this.ships[botindex].shield+50;
				}
			if (bonus==2){ //extra shield regen
				this.ships[botindex].shieldregen = this.ships[botindex].shieldregen+0.25;
				}			
			if (bonus==3){ //extra bomb damage
				this.botbombs[botindex-1].hurt = this.botbombs[botindex-1].hurt+8;
				}						
			if (bonus==4){ //extra bomb blast
				this.botbombs[botindex-1].boombuff = this.botbombs[botindex-1].boombuff+0.25;//I think botbombs needs -1 because it does not include a bomb for ships[0] (player)
				}			
			this.ships[botindex].level = this.ships[botindex].level+1;
			}
		}
	addrandomgang(planetindex, num,level){ //Adds a gang of enemy ships, level describes difficulty (not used yet)
		var gangsize = num;
		var gangcolor = randcolor();
		var gangcolor2 = randcolor();
		var gangparent = planetindex;
		var randomsides = Math.floor(Math.random()*8)*2+8; //randomized side number
		var randomplayerverts = randpolarpoly(randomsides, 0.25);//sides,  minimum radius
		normalizepoly(randomplayerverts);
		var gangpolytheta = randomplayerverts[0];
		var gangpolyradius = randomplayerverts[1];
		var i = gangsize;
		while (i>0){
			i=i-1;
			this.ships.push(new Umo(-600,32000,32,gangcolor));
			var botindex = this.ships.length-1;
			this.ships[botindex].c2 = gangcolor2;
			this.ships[botindex].parentid = gangparent; 
			this.ships[botindex].respawn(this.planets[this.ships[botindex].parentid]);
			this.ships[botindex].name = randname(5);
			this.ships[botindex].hp = 150;
			this.ships[botindex].maxhp = 150;
			this.ships[botindex].polytheta = gangpolytheta;
			this.ships[botindex].polyradius = gangpolyradius;
			this.ships[botindex].ai = "enemy";
			this.botbombs.push( new Umo(0,0,0,"red"));
			this.botbombs[this.botbombs.length-1].hp = 1;  //Set hitpoints to 1 so they explode on contact
			this.botbombs[this.botbombs.length-1].maxhp = 1; //with planets 
			this.botbombs[this.botbombs.length-1].shield=0;  
			this.levelup(botindex,level);
			}
		}
	addrandomtraders(destinations, num, level){
		var fleetsize = num;
		var fleetcolor = randcolor();
		var fleetcolor2 = randcolor();
		var fleetparent = destinations[0];
		var randomsides = Math.floor(Math.random()*8)*2+8; //randomized side number
		var randomshipverts = randpolarpoly(randomsides, 0.25);//sides,  minimum radius
		normalizepoly(randomshipverts);
		var fleetpolytheta = randomshipverts[0];
		var fleetpolyradius = randomshipverts[1];
		var i = fleetsize;
		while (i>0){
			i=i-1;
			this.ships.push(new Umo(-600,32000,32,fleetcolor));
			var botindex = this.ships.length-1;
			this.ships[botindex].c2 = fleetcolor2;
			this.ships[botindex].parentid = fleetparent; 
			this.ships[botindex].respawn(this.planets[fleetparent]);
			this.ships[botindex].name = randname(5);
			this.ships[botindex].hp = 150;
			this.ships[botindex].maxhp = 150;
			this.ships[botindex].polytheta = fleetpolytheta;
			this.ships[botindex].polyradius = fleetpolyradius;
			this.ships[botindex].ai = "trader";
			this.ships[botindex].aistate = 0;
			this.ships[botindex].aitargets = destinations;
			this.botbombs.push( new Umo(0,0,0,"red"));
			this.botbombs[this.botbombs.length-1].hp = 1;  //Set hitpoints to 1 so they explode on contact
			this.botbombs[this.botbombs.length-1].maxhp = 1; //with planets 
			this.botbombs[this.botbombs.length-1].shield=0;  
			this.levelup(botindex,level);
			}
		}
	enemypopulate(num,minlevel,maxlevel){ //Adds gangs of enemy ships, level describes difficulty, num is size of each gang.
		var i=1;
		while (i<this.planets.length-1){
			var templevel = Math.floor(minlevel + Math.random()*(maxlevel+1 - minlevel));
			this.addrandomgang(i,num,templevel);
			i=i+1;
			}
		var i = 0;
		while (i<this.shops.length){
			var k = 0;
			while (k<4){
				this.shops[i].addkillmission(this.ships,this.planets,this.outposts);
				k=k+1;
				}
			i=i+1;
			}
		}
	nextjob(){
		var numjobs = 0;
		var thejob = "none";
		var i=0;
		while (i<this.shops.length){
			var j=0;
			while (j<this.shops[i].missions.length){
				if (this.shops[i].missions[j].taken){
					numjobs = numjobs + 1;
					thejob = this.shops[i].missions[j].message;
					}
				j=j+1;
				}
			i=i+1;
			}
		return [thejob, numjobs];
		}
	joblist(x,y){
		context.fillStyle = "orange";
		context.font='12px Arial';
		var jobnum = 0;
		var i=0;
		while (i<this.shops.length){
			var j=0;
			while (j<this.shops[i].missions.length){
				if (this.shops[i].missions[j].taken){
					context.fillText(this.shops[i].missions[j].message,x,y+jobnum*20);
					jobnum++;
					}
				j=j+1;
				}
			i=i+1;
			}
		}
	}//end of system class////////////////////////////////////////////////////////////////////////////////////////////////////////////////