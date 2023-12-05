class NPCAI{
	constructor(myteam,mybehavior,myparent,myid){
		this.behavenow = "none";//Describes AI behavior state in terms of immediate response
		//options: "gotoplanet","gotoship","gotoplayer","gotostation","attackship","attackplayer","loiter"
		this.behavior = "none"; //Describes overall motivation to choose different behavenows and targets
		//options: "cargoroute","loiter","attackmission","blockade", 
		this.career = "none";//Describes motivation to choose different behaviors, switching between unrelated tasks
		this.team = 0;
		this.nearbynpcs=[];
		this.nearbyplanets=[];
		this.nearbyplayers = [];
		this.id = myid;
		this.enemyteams = [];
		this.friendlyteams =[];
		this.nowtargetplanet = 0;
		this.nowtargetstation = 0;
		this.alltargetplanets = [];
		this.alltargetnpcs = [];
		this.alltargetplayers = [];
		this.nowtargetship = 0;
		this.nowtargetplayer = 0;
		this.avoidi = 0;
		this.homeplanet = 0;
		this.homestation = 0;
		this.gang = 0;
		this.route = [];
		this.routei = 0;
		this.navslop = 512;
		this.hardtether = 20000;
		this.softtether = 2000;
		this.attacksfirst = true;
		this.followattackers = false;
		this.fleeattackers = false;
		this.playerhostile = false;
		this.traderhostile = true;
		this.coward = 1; //Will run away from matchup where the enemy level * this.coward  > npc level
		this.aitype = "na";
		}
	setfixedbehavior(newbehavenow,newhomeplanet,newteam,newgang){
		this.behavenow = newbehavenow;
		this.behavior = "fixed";
		this.team = newteam;
		this.gang = newgang;
		this.nowtargetplanet = newhomeplanet;
		this.homeplanet = newhomeplanet;
		}
	checkrelations(thenpc){//returns +1 for friendly, -1 for enemy, 0 for neutral
		var relationship = 0;
		var i=0;
		while(i<this.enemyteams){
			if (this.enemyteams[i]==thenpc.ai.team){relationship = -1;}
			i++;
			}
		var i=0;
		while(i<this.friendlyteams){
			if (this.friendlyteams[i]==thenpc.ai.team){relationship = 1;}
			i++;
			}
		return relationship;
		}
	avoidplanet(thesystem,planeti){	//checks if planet is a problem, sets ai to avoid it.
		var me = thesystem.npcs[this.id];
		var sun = thesystem.planets[planeti];
		var sund = me.ship.directionof(sun);
		var sundv = me.ship.deltav2(sun)
		var sundistance = me.ship.distance(sun);
		if (sundistance<2000+sun.s*2){//super sketch algo here
			this.avoidi = planeti;//probably unnecessary
			var targetd = me.ship.directionof(thesystem.planets[planeti]);
			var targetdv = me.ship.deltav2(thesystem.planets[planeti]);
			var sindv = Math.sin(targetd - targetdv[1]);
			if (sindv>0){me.ship.d = targetd+Math.PI/2;}
			if (sindv<=0){me.ship.d = targetd-Math.PI/2;}
			console.log("Avoiding"+sund+", "+sundv[1]+", "+sundistance+", "+sindv+", "+sindv);
			console.log(me.ship);
			me.ship.thrust = 2;
			}
		}
		
		
	closesttarget(thesystem){
		var closestplayerdistance = 999999;
		var closestplayer = -1;
		var me = thesystem.npcs[this.id];
		me.whatisnear(thesystem,2000);//todo 2000 should be more adaptive
		if (this.playerhostile==true){
			//console.log(this.nearbyplayers);
			//console.log(this.nearbynpcs);
			//console.log(this.nearbyplanets);
			var i=0;
			while (i<this.nearbyplayers.length){
				var playerdistance = thesystem.players[ this.nearbyplayers[i] ].ship.distance(me.ship);
				if (playerdistance<closestplayerdistance){
					closestplayer = this.nearbyplayers[i];
					closestplayerdistance = playerdistance;
					}
				i++;
				}
			}
		var closestnpcdistance = 999999;
		var closestnpc = -1;
		var enemynpcs = this.filterrelations(thesystem,-1);
		var i=0;
		while (i<enemynpcs.length){
			var npcdistance = thesystem.npcs[enemynpcs[i]].ship.distance(me.ship);
			if ((npcdistance<closestnpcdistance)&&(this.id!=enemynpcs[i])){
				closestnpc = enemynpcs[i];
				closestnpcdistance = npcdistance;
				}
			i++;
			}
		if ((closestnpc==-1)&&(closestplayer==-1)){
			return [-1,"none"]
			}
		else if (closestnpcdistance<closestplayerdistance){
			return [closestnpc,"npc"];
			}
		else if (closestnpcdistance>closestplayerdistance){
			if (this.playerhostile){
				return [closestplayer,"player"];
				}
			else if (closestnpc>=0){
				return [closestnpc, "npc"];
				}
			else{
				return [-1,"none"];
				}
			}
		}
	filterrelations(thesystem,relationship){//returns a subset of this.nearbynpcs which have the specified relationship (+1,-1,0)
		var npcsubset = [];
		var i=0;
		while(i<this.nearbynpcs.length){
			var thenpc = thesystem.npcs[this.nearbynpcs[i]];
			var myrelationship = this.checkrelations(thenpc);
			if (myrelationship == relationship){npcsubset.push(thenpc);}
			i++;
			}
		return npcsubset;
		}
	hangaround(thesystem,planeti,tetherdistance){
		//var mrs = 0.5; //minimum return speed
		var theplanet = thesystem.planets[planeti];
		var myship = thesystem.npcs[this.id].ship;
		var planetdistance = myship.distance(theplanet);
		//console.log("soft tether to "+theplanet.name+" at distance "+planetdistance);
		var dv = myship.deltav2(theplanet);
		var deltav = dv[0];
		var dir = myship.directionof(theplanet)
		var cosdv =  Math.cos(dv[1]-dir)*dv[0];
		var sindv =  Math.sin(dv[1]-dir)*dv[0];
		var escape = Math.sqrt(theplanet.m*2*.0003/planetdistance);
		//console.log("cosdv = "+cosdv+" sindv = "+sindv);
		if (deltav>escape){
			if (cosdv>-1){//if moving away from the planet
				myship.d = dir;
				myship.thrust = 1;
				//console.log("1thrusting towards planet");
				}
			else if (cosdv<-1){//if moving towards the planet
				myship.d = dv[1];//+Math.PI;
				myship.thrust = 1;
				//console.log("braking");
				}
			}
		else if(cosdv>-1){
			myship.d = dir;
			myship.thrust = 1;
			//console.log("2thrusting towards planet");
			}

		}
	behave(thesystem,time){//Bots decide and act in the current frame
		var me = thesystem.npcs[this.id];
		if (this.behavenow == "gotoinert"){
			me.ship.seek3(thesystem.planets[this.nowtargetplanet],20,30,time,1500);
			}
		if (this.behavenow == "gotostation"){
			me.ship.seek3(thesystem.stations[this.nowtargetstation],20,30,time,1500);
			if (me.ship.distance(thesystem.stations[this.nowtargetstation])<200){
				this.behavenow = "dock";
				}
			else if (me.ship.distance(thesystem.stations[this.nowtargetstation])<1000){
				me.ship.d=me.ship.directionof(thesystem.stations[this.nowtargetstation]);
				if (time%10==0){me.ship.thrust = 2;}
				}	
			}
		if (this.behavenow == "dock"){
			me.ship.x = thesystem.stations[this.nowtargetstation].x;
			me.ship.y = thesystem.stations[this.nowtargetstation].y;//crudely sticks the npc to the station
			}
		if (this.behavenow == "avoidplanet"){
			this.avoidplanet(thesystem,this.avoidi)
			}
		if (this.behavenow == "avoidstation"){
			var targetd = me.directionof(thesystem.stations[this.avoidi]);
			var targetdv = me.deltav2(thesystem.planets[this.avoidi]);
			var sindv = Math.sin(targetd - targetdv[1]);
			if (sindv>0){me.ship.d = targetd+Math.PI/2;}
			if (sindv<=0){me.ship.d = targetd-Math.PI/2;}
			if (time%20==0){me.ship.thrust = 2;}
			}
		if (this.behavenow == "gotoplayer"){
			me.ship.seek3(thesystem.players[this.nowtargetplayer].ship,200,30,time,100);//seek3(target,closingvelocity,period,gametime,stopradius){
			}
		if (this.behavenow == "gotonpc"){
			me.ship.seek3(thesystem.npcs[this.nowtargetship].ship,200,30,time,100);//seek3(target,closingvelocity,period,gametime,stopradius){
			}
		if (this.behavenow == "loiter"){//Maintains proximity to homeplanet
			if (time%20==0){
				var homeplanet = thesystem.planets[this.homeplanet];
				var myship = me.ship;
				var homedistance = myship.distance(homeplanet);
				if ((homedistance>this.hardtether)&&(myship.hp>0)){
					myship.respawn(homeplanet);
					//console.log("respawning at planet "+this.homeplanet)
					}
				else if (homedistance>this.softtether){
					this.hangaround(thesystem,this.homeplanet,2000,time);
					}
				}
			}
		if (this.behavenow == "loiter2"){ //Slows excessive speeds
			if (time%20==0){
				var homeplanet = thesystem.planets[this.homeplanet];
				var myship = me.ship;
				var mydv = myship.dv2(homeplanet);
				if ((homedistance>this.hardtether)&&(myship.hp>0)){
					myship.respawn(homeplanet);
					//console.log("respawning at planet "+this.homeplanet)
					}
				else if (homedistance>this.softtether){
					//this.hangaround(thesystem,this.homeplanet,2000,time);
					if (mydv[0]>1){
						myship.d = mydv[1];
						myship.thrust = 1;
						}
					}
				}
			}
		if (this.behavenow == "trackattacknpc"){
			var thetargetdistance = me.ship.distance(thesystem.npcs[this.nowtargetship].ship);
			me.ship.fasttrack(thesystem.npcs[this.nowtargetship].ship);//point at target ship
			if ((Math.random()>0.95) && (me.blasters[0].bombs[0].timer < 1)){  //fire occasionally,
				me.blasters[0].fire(me,0);//fire(theplayer,thetime){
				//console.log("firing");
				}//gambling that i wont give npcs a weapon that actually uses the time value.
			}
		if (this.behavenow == "trackattackplayer"){
			//var me = thesystem.npcs[this.id];
			var mytarget = thesystem.players[this.nowtargetship].ship;
			var thetargetdistance = me.ship.distance(mytarget);
			var maxrange = me.blasters[0].speed*me.blasters[0].timer+me.ship.s+mytarget.s+16;
			me.ship.fasttrack(thesystem.players[this.nowtargetship].ship);//point at target ship
			if ((Math.random()>0.95) && (me.blasters[0].bombs[0].timer < 1) && (thetargetdistance<maxrange*1.5)){  //fire occasionally,
				me.blasters[0].fire(me,0);//fire(theplayer,thetime){
				//console.log("firing");
				}//gambling that i wont give npcs a weapon that actually uses the time value.
			}
		if (this.behavenow == "leadattackplayer"){
			//var me = thesystem.npcs[this.id];
			var mytarget = thesystem.players[this.nowtargetship].ship;
			var thetargetdistance = me.ship.distance(mytarget);
			var maxrange = me.blasters[0].speed*me.blasters[0].timer+me.ship.s+mytarget.s+16;
			me.ship.d = me.blasters[0].aim1(me.ship,mytarget);
			if ((Math.random()>0.95) && (me.blasters[0].bombs[0].timer < 1) && (thetargetdistance<maxrange*1.5)){  //fire occasionally,
				me.blasters[0].fire(me,0);//fire(theplayer,thetime){
				//console.log("firing");
				}//gambling that i wont give npcs a weapon that actually uses the time value.
			}
		if (this.behavenow == "leadattack1"){
			//var dv = me.ship.deltav2()
			}
		if (this.behavenow == "gototrackattack"){
			//basic autopilotoid 
			//basic point at and shoot sometimes
			}	
		}
	ponder(thesystem){//Bots examine their situation and reevaluate this.behavenow
		if (this.behavior == "fixed"){}//nothing
		else if (this.behavior == "guardbot"){//Look for enemies in range, pick closest one and shoot at it
			//console.log(this);
			var me = thesystem.npcs[this.id];
			var myclosesttarget = this.closesttarget(thesystem);//todo 2000 should be more adaptive
			//console.log(myclosesttarget);
			if (myclosesttarget[0]>=0){
				//console.log("found target "+myclosesttarget[0]+" type "+myclosesttarget[1])
				if (myclosesttarget[1]=="player"){this.behavenow = "trackattackplayer";}
				else {this.behavenow = "trackattacknpc";}
				this.nowtargetship = myclosesttarget[0];
				}
			else {this.behavenow = "loiter";}
			}
		else if (this.behavior == "guardbot2"){//Look for enemies in range, pick closest one and shoot at it
			var me = thesystem.npcs[this.id];
			me.whatisnear(thesystem,2000);//todo 2000 should be more adaptive
			//console.log(this.nearbyplayers);
			//console.log(this.nearbynpcs);
			//console.log(this.nearbyplanets);
			var closestplayerdistance = 999999;
			var closestplayer = -1;
			var i=0;
			while (i<this.nearbyplayers.length){
				var playerdistance = thesystem.players[ this.nearbyplayers[i] ].ship.distance(me.ship);
				if (playerdistance<closestplayerdistance){
					closestplayer = this.nearbyplayers[i];
					closestplayerdistance = playerdistance;
					}

				i++;
				}
			if (closestplayer>=0){
				//console.log("found target "+closestplayer)
				this.behavenow = "trackattackplayer";
				this.nowtargetship = closestplayer;
				}
			else {this.behavenow = "loiter";}
			this.avoidplanet(thesystem,0);//avoid the sun
			}
		else if (this.behavior == "guardbot3"){//Look for enemies in range, pick closest one and shoot at it
			var me = thesystem.npcs[this.id];
			me.whatisnear(thesystem,2000);//todo 2000 should be more adaptive
			//console.log(this.nearbyplayers);
			//console.log(this.nearbynpcs);
			//console.log(this.nearbyplanets);
			var closestplayerdistance = 999999;
			var closestplayer = -1;
			var i=0;
			while (i<this.nearbyplayers.length){
				var playerdistance = thesystem.players[ this.nearbyplayers[i] ].ship.distance(me.ship);
				if (playerdistance<closestplayerdistance){
					closestplayer = this.nearbyplayers[i];
					closestplayerdistance = playerdistance;
					}

				i++;
				}
			if (closestplayer>=0){
				//console.log("found target "+closestplayer)
				this.behavenow = "leadattackplayer";
				this.nowtargetship = closestplayer;
				}
			else {this.behavenow = "loiter";}
			}
		else if (this.behavior == "guardbot4"){//Look for enemies in range, pick closest one and shoot at it
			var me = thesystem.npcs[this.id];
			me.whatisnear(thesystem,2000);//todo 2000 should be more adaptive
			//console.log(this.nearbyplayers);
			//console.log(this.nearbynpcs);
			//console.log(this.nearbyplanets);
			var closestplayerdistance = 999999;
			var closestplayer = -1;
			var i=0;
			while (i<this.nearbyplayers.length){
				var playerdistance = thesystem.players[ this.nearbyplayers[i] ].ship.distance(me.ship);
				if (playerdistance<closestplayerdistance){
					closestplayer = this.nearbyplayers[i];
					closestplayerdistance = playerdistance;
					}

				i++;
				}
			if (closestplayer>=0){
				//console.log("found target "+closestplayer)
				this.behavenow = "trackattackplayer";
				this.nowtargetship = closestplayer;
				}
			else {this.behavenow = "loiter2";}
			}
		else if (this.behavior == "inertpatrol"){
			//console.log("inertpatrollin");
			var me = thesystem.npcs[this.id];
			var mytargetplanet = thesystem.planets[this.route[this.routei]];
			var closeenough = mytargetplanet.s*3+1250;
			if (mytargetplanet.distance(me.ship)<closeenough){
				this.routei++;
				if (this.routei>=this.route.length){this.routei = 0;}
				}
			//this part is a new sun avoidance thing:
			var sun = thesystem.planets[0];
			var sund = me.ship.directionof(sun);
			var sundv = me.ship.deltav2(sun)
			var sundistance = me.ship.distance(sun);
			if ((sundistance<10000+sun.s*5)||(Math.abs(sund-sundv)<0.25)){//super sketch algo here
				this.avoidi = 0;
				this.behavenow = "avoidplanet";
				}
			else{
				this.behavenow = "gotoinert";
				this.nowtargetplanet = this.route[this.routei];
				}
			}//check if near current target planet, if so cycle target planet
		else if (this.behavior == "shopper"){
			var me = thesystem.npcs[this.id];
			var mytargetstation = thesystem.station[this.nowtargetstation];
			if (me.distance(mytargetstation)>100){
				this.behavenow="gotostation";
				}
			else {
				//Find things to buy that npc can afford
				var buyables = [];
				//buy something if that list is not empty
				//quit shopping if nothing is affordable
				if (buyables.length==0){
					this.behavior == "gbtw";
					}
				}	
			}
		else if (this.behavior == "gbtw"){
			var me = thesystem.npcs[this.id];
			if (thesystem.station[this.nowtargetstation].distance(me)<1000){
				if (time%20){
					me.ship.thrust = 2;
					}
				}
			else {
				this.contemplate(thesystem);//normally on longish timer, happens immediately(ish) after leaving station
				}
			}
		else if (this.behavior == "bassassin"){//Bot assassin
			//console.log("helpimbeingexecuted");
			var me = thesystem.npcs[this.id];
			var myrange = me.blasters[0].timer*me.blasters[0].speed+64;
			var mytarget = thesystem.npcs[this.alltargetnpcs[0]].ship;
			var mydistance =  me.ship.distance(mytarget);
			if (mydistance<myrange){//If in range
				this.behavenow = "trackattacknpc";//target the player
				this.nowtargetship = this.alltargetnpcs[0];
				console.log("targeting npc");
				}
			else{
				this.behavenow = "gotonpc";//Goto the player!
				this.nowtargetship = this.alltargetnpcs[0];//0 because at this point in dev there will be 1 element in array
				console.log("going to npc");
				}
			me.whatisnear(thesystem,2000);//todo 2000 should be more adaptive
			}//Seek and destroy a particular npc
		else if (this.behavior == "passassin"){//player assassin
			//console.log("helpimbeingexecuted");
			var me = thesystem.npcs[this.id];
			var myrange = me.blasters[0].timer*me.blasters[0].speed+64;
			var mytarget = thesystem.players[this.alltargetplayers[0]].ship;
			var mydistance =  me.ship.distance(mytarget);
			if (mydistance<myrange){//If in range
				this.behavenow = "trackattackplayer";//target the player
				this.nowtargetship = this.alltargetplayers[0];
				//console.log("targeting player");
				}
			else{
				this.behavenow = "gotoplayer";//Goto the player!
				this.nowtargetship = this.alltargetplayers[0];//0 because at this point in dev there will be 1 element in array
				//console.log("going to player");
				}
			me.whatisnear(thesystem,2000);//todo 2000 should be more adaptive
			}//Seek and destroy a particular player
		else if (this.behavior == "guardandpursueplayers"){//player assassin
			//console.log("helpimbeingexecuted");
			var me = thesystem.npcs[this.id];
			var myrange = me.blasters[0].timer*me.blasters[0].speed+64;
			//var mytarget = thesystem.players[this.alltargetplayers[0]].ship;
			
			var myplanet = thesystem.planets[this.alltargetplanets[0]];
			//var mydistance =  me.ship.distance(mytarget);
			if (this.alltargetplayers[0]>=0){//Use -1 as flag to indicate no active target
				var mytarget = thesystem.players[this.alltargetplayers[0]].ship;
				var mydistance =  me.ship.distance(mytarget);
				if (mydistance<myrange){//If in range
					this.behavenow = "trackattackplayer";//target the player
					this.nowtargetship = this.alltargetplayers[0];
					//console.log("targeting player");
					}
				else{
					this.behavenow = "gotoplayer";//Goto the player!
					this.nowtargetship = this.alltargetplayers[0];//0 because at this point in dev there will be 1 element in array
					//console.log("going to player");
					}
				if (mydistance>3000){//Bot has lost player (often due to death)
					this.behavenow = "loiter"
					this.alltargetplayers = [-1];
					}
				}
			else {//Scan for enemies to pursue
				var i=0;
				while(i<this.nearbyplayers.length){
					var aplayer = thesystem.players[this.nearbyplayers[i]];
					var planetplayerdistance = myplanet.distance(aplayer.ship);
					if (planetplayerdistance< (2000+myplanet.s) ){this.alltargetplayers = [this.nearbyplayers[i]];}//If player is near bot AND near planet, set as target.
					i++;
					}
				}
			me.whatisnear(thesystem,2000);//todo 2000 should be more adaptive
			}//Seek and destroy a particular player
		//Adjust this.behavenow according to this.behavior
		
		this.avoidplanet(thesystem,0);
		
		
		
		}
		
		
	contemplate(thesystem,me){
		if (this.career == "privateer"){
			if (3*me.ship.hp < me.ship.maxhp){//go home when hurt
				this.behavior = "gotostation";
				this.behavenow = "gotoinert";
				this.nowtargetstation = this.homestation;
				}
			else {
				mytarget = this.closesttarget(thesystem);
				var i=0;
				while(i<this.nearbynpcs.length){
					if (this.nearbynpcs[i].ai.playerhostile){
						console.log("nme"+i);
						}
					i++;
					}
				}//Need something about nearby enemies
			
			
			}
	
		}
	
	setuptrader(newroute,howclose){}
}
//testai = new NPCAI("tradeguild","trader",systems[1].planets[3])
