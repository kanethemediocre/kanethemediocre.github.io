class Shop{
	constructor(name, storelocation, description, inv){ //name and description are strings, location is a station umo index
		this.name = name;
		this.description = description; 
		this.home = storelocation; //a station umo index
		this.inv = inv;//list of shopitem objects
		this.missions = []; 
		this.cargoprices = [];//list of price multipliers, index matching allcargos list
		this.eco = new Economy();
		var i=0;
		while (i<allcargos.length){
			var pricemulti = 0.5+Math.random();
			this.cargoprices.push(pricemulti); //fill array with 1x multipliers by default
			i=i+1;
			}
		}
	drawbuymenu(xpos,ypos,item,theplayer){//screen coords of top corner, item index
		context.fillStyle = "rgb(0 0 0 / 60%)";
		context.fillRect(0,0,canvas.width,canvas.height);
		var x = xpos;
		var y = ypos;
		if (theplayer.transparentmenus == false){
			context.fillStyle = "#080808";
			context.fillRect(xpos-16,ypos-56,512,336+128);
			}
		context.font='20px Arial';
		context.fillStyle = "white";
		context.fillText("Right click to Launch!",x,y+432);
		context.font='16px Arial';
		context.fillStyle = "white";
		context.fillText("Welcome to "+this.name,x,y+8);
		context.font='36px Arial';
		context.fillStyle = systems[ps].outposts[this.home].c;
		context.fillText("Buy",x+100,y-24);
		context.font='16px Arial';
		context.fillText("Work",x+50,y-24);
		context.fillText("Sell",x+180,y-24);
		var names = [];
		var descriptions = [];
		var prices = [];
		var utypes = [];
		//console.log(this.inv);
		var i=0;
		while (i<this.inv.length){
			names.push(this.inv[i].namestring().slice(0,20));
			descriptions.push(this.inv[i].describestring().slice(0,20));
			//console.log(this.eco.prices);
			prices.push( this.inv[i].itemprice(theplayer,this.eco) );
			utypes.push(this.inv[i].utype);
			i=i+1;
			}
		
		if (i>0){
			var shopchart = [names,descriptions,prices,utypes];
			context.font='12px Arial';
			fillwrappedtext(this.inv[item].describestring(),86,16,x,y+236+128);
			context.beginPath(); //This colored rectangle will show which item is selected.
			context.strokeStyle = systems[ps].outposts[this.home].c;//systems[ps].outposts[systems[ps].players[0].dockstate].c;//Global scope here, very bad, also in drawpolarpoly
			context.rect(x-12,y+20+item*16,400,16);
			context.stroke();
			var i=0;
			while (i<this.inv.length){
				context.fillStyle = "grey";
				if (this.inv[i].available(theplayer)){//Used global variable instead of reference
					context.fillStyle = "white";
					}
				var utypewithstats = this.inv[i].utype.slice(0,16);
				if (this.inv[i].type == "blaster"){
					if (this.inv[i].utype == "damage"){
						utypewithstats = this.inv[i].utype.slice(0,16)+" + "+theplayer.blasters[this.inv[i].i].uphurt;
						}
					else if (this.inv[i].utype == "timer"){
						utypewithstats = this.inv[i].utype.slice(0,16)+" + "+theplayer.blasters[this.inv[i].i].uptimer;
						}
					else if (this.inv[i].utype == "boom"){
						utypewithstats = this.inv[i].utype.slice(0,16)+" + "+theplayer.blasters[this.inv[i].i].upboom;
						}
					else if (this.inv[i].utype == "speed"){
						utypewithstats = this.inv[i].utype.slice(0,16)+" + "+theplayer.blasters[this.inv[i].i].upspeed;
						}
					else if (this.inv[i].utype == "n"){
						utypewithstats = this.inv[i].utype.slice(0,16)+" + "+theplayer.blasters[this.inv[i].i].upn;
						}
					}
				if (this.inv[i].type == "upgrade"){
					if (this.inv[i].utype == "armor"){
						utypewithstats = this.inv[i].utype.slice(0,16)+" + 250";
						}
					else if (this.inv[i].utype == "shield"){
						utypewithstats = this.inv[i].utype.slice(0,16)+" + 100";
						}
					else if (this.inv[i].utype == "shieldregen"){
						utypewithstats = this.inv[i].utype.slice(0,16)+" + 0.25";
						}
					else if (this.inv[i].utype == "cargo"){
						utypewithstats = this.inv[i].utype.slice(0,16)+" + 10";
						}
					else if (this.inv[i].utype == "thrust"){
						utypewithstats = this.inv[i].utype.slice(0,16)+" + 0.5";
						}
					else if (this.inv[i].utype == "radar"){
						utypewithstats = this.inv[i].utype.slice(0,16)+" + 1000";
						}
					}
				context.fillText(this.inv[i].namestring().slice(0,16),x,y+32+16*i);
				context.fillText(this.inv[i].describestring().slice(0,16),x+80,y+32+16*i);
				context.fillText(this.inv[i].itemprice(theplayer,this.eco),x+200,y+32+16*i);
				context.fillText(utypewithstats,x+300,y+32+16*i);
				i=i+1;
				}
			context.beginPath();
			context.strokeStyle = systems[ps].outposts[this.home].c2//systems[ps].outposts[systems[ps].players[0].dockstate].c2;//Global scope here, very bad, also in drawpolarpoly
			context.rect(xpos-16,ypos-56,512,336+128);
			context.rect(xpos-16,ypos+12,512,208+128);
			context.stroke();
			drawpolarpoly(x+464,y-20,systems[ps].outposts[this.home].emblem[0],systems[ps].outposts[this.home].emblem[1],32,systems[ps].outposts[this.home].c,-1*Math.PI/2); //this.emblem is a randomized logo
			if (this.inv[item].type=="blaster"){
				//console.log("toldblasterdrawstats");
				if (!theplayer.transparentmenus){
					context.fillStyle = "#080808";//Background is black
					context.fillRect(800, 140, 360, 188); //rectangle the size of the canvas.
					}
				theplayer.blasters[this.inv[item].i].drawstats2(800,160,"lime","cyan");
				}
			}
		else{//if the loop never ran, i==0 at check.
			console.log("no inventory in shop");
			}
		
		}	
	
	drawsellmenu(xpos,ypos,item,theplayer){//screen coords of top corner, item index
		context.fillStyle = "rgb(0 0 0 / 60%)";
		context.fillRect(0,0,canvas.width,canvas.height);
		var x = xpos;
		var y = ypos;
		if (theplayer.transparentmenus == false){
			context.fillStyle = "#080808";
			context.fillRect(xpos-16,ypos-56,512,336+128);
			}
		context.font='20px Arial';
		context.fillStyle = "white";
		context.fillText("Right click to Launch!",x,y+432);
		context.fillStyle = "white";
		context.font='16px Arial';
		context.fillText("Welcome to "+this.name,x,y+8);
		context.font='36px Arial';
		context.fillStyle = systems[ps].outposts[this.home].c;
		context.fillText("Sell",x+100,y-24);
		context.font='16px Arial';
		context.fillText("Buy",x+50,y-24);
		context.fillText("Work",x+180,y-24);
		context.font='12px Arial';
		if (theplayer.inventory.cargotypes()>0){
			//fillwrappedtext(allcargos[item].description,86,16,x,y+236+128);
			var flavortext = "";
			var realindex = -1;
			var localindex = -1
			var i=0;
			while(i<theplayer.inventory.cargo.length){
				if (theplayer.inventory.cargo[i]>0){localindex++;}
				if (theplayer.shopitem==localindex){
					realindex = i;
					i = theplayer.inventory.cargo.length;
					}
				i++;
				}
			console.log("localindex = "+localindex+" shopitem = "+theplayer.shopitem+" realindex = "+realindex);
			if (realindex>=0){
				fillwrappedtext(this.eco.cargos[realindex].description,86,16,x,y+236+128);
				}
			}
		context.beginPath(); //This colored rectangle will show which item is selected.
		context.strokeStyle = systems[ps].outposts[theplayer.dockstate].c;//Global scope here, very bad, also in drawpolarpoly
		context.rect(x-12,y+20+item*16,400,16);
		context.stroke();
	
		var i=0;
		var yoffset = 0;
		while(i<theplayer.inventory.cargo.length-2){
			if (theplayer.inventory.cargo[i]>0){
				context.fillText(allcargos[i].name.slice(0,16),x,y+32+yoffset);
				//context.fillText(allcargos[i].description.slice(0,16),x+80,y+32+yoffset);//this.inv[i].itemprice(theplayer,this.eco)
				//context.fillText(Math.floor(allcargos[i].baseprice*allshops[systems[ps].players[0].dockstate].cargoprices[i]),x+200,y+32+16*i); //duplicate to itemprice() function, but this is indexed by allcargos instead of shopitem.
				context.fillText(Math.floor(cargoitems[i].itemprice(theplayer,this.eco)),x+200,y+32+yoffset); //duplicate to itemprice() function, but this is indexed by allcargos instead of shopitem.
				yoffset = yoffset + 16;
				}
			i++;
			}
		/*
		
		var i=0;
		while (i<allcargos.length-1){//Don't want to render the last cargo item as an option, because it's reserved for mission cargo
			if (systems[ps].players[0].inventory.cargo[i]>0){context.fillStyle = "white";}else{context.fillStyle = "grey";}//Used global variable instead of reference
			context.fillText(allcargos[i].name.slice(0,16),x,y+32+16*i);
			context.fillText(allcargos[i].description.slice(0,16),x+80,y+32+16*i);
			//context.fillText(Math.floor(allcargos[i].baseprice*allshops[systems[ps].players[0].dockstate].cargoprices[i]),x+200,y+32+16*i); //duplicate to itemprice() function, but this is indexed by allcargos instead of shopitem.
			context.fillText(Math.floor(allcargos[i].baseprice*this.cargoprices[i]),x+200,y+32+16*i); //duplicate to itemprice() function, but this is indexed by allcargos instead of shopitem.
			i=i+1;
			}
		
		*/
		
		context.beginPath();
		context.strokeStyle = systems[ps].outposts[theplayer.dockstate].c2;//Global scope here, very bad, also in drawpolarpoly
		context.rect(xpos-16,ypos-56,512,336+128);
		context.rect(xpos-16,ypos+12,512,208+128);
		context.stroke();
		drawpolarpoly(x+464,y-20,systems[ps].outposts[theplayer.dockstate].emblem[0],systems[ps].outposts[theplayer.dockstate].emblem[1],32,systems[ps].outposts[theplayer.dockstate].c,-1*Math.PI/2); //this.emblem is a randomized logo
		}		
	drawworkmenu(xpos, ypos, item,theplayer){
		context.fillStyle = "rgb(0 0 0 / 60%)";
		context.fillRect(0,0,canvas.width,canvas.height);
		var x = xpos;
		var y = ypos;//+16;
		if (theplayer.transparentmenus == false){
			context.fillStyle = "#080808";
			context.fillRect(xpos-16,ypos-56,512,336+128);
			}
		context.font='20px Arial';
		context.fillStyle = "white";
		context.fillText("Right click to Launch!",x,y+432);
		context.font='16px Arial';
		context.fillStyle = "white";
		context.fillText("Welcome to "+this.name,x,ypos+8);
		context.font='36px Arial';
		context.fillStyle = systems[ps].outposts[this.home].c;
		context.fillText("Work",x+88,y-24);
		context.font='16px Arial';
		context.fillText("Sell",x+50,y-24);
		context.fillText("Buy",x+180,y-24);
		context.font='12px Arial';
		context.fillStyle = "white";	
		if (this.missions.length>item){fillwrappedtext(this.missions[item].message,86,16,x,ypos+236+128);}
		context.beginPath(); //This colored rectangle will show which item is selected.
		context.strokeStyle = systems[ps].outposts[theplayer.dockstate].c;//Global scope here, very bad, also in drawpolarpoly
		context.rect(x-12,y+52+item*16,400,16);
		context.stroke();
		context.fillText("Type:",x+0,y+32);
		context.fillText("Location:",x+80,y+32);
		context.fillText("Distance:",x+160,y+32);
		context.fillText("Danger:",x+240,y+32);
		context.fillText("Reward:",x+320,y+32);
		var i=0;
		while (i<this.missions.length){
			if (this.missions[i].taken){context.fillStyle = "red";}else{context.fillStyle = "white";}
			context.fillText(this.missions[i].type.slice(0,16),x,y+64+16*i);
			context.fillText(this.missions[i].distance,x+160,y+64+16*i);
			context.fillText(this.missions[i].danger,x+240,y+64+16*i);
			//context.fillText(this.missions[i].message.slice(0,16),x+80,y+32+16*i);
			context.fillText(this.missions[i].reward,x+320,y+64+16*i);
			var missionlocation = "unknown";
			if (this.missions[i].type == "cargo"){
				missionlocation = systems[ps].planets[this.missions[i].target].name;
				}
			if (this.missions[i].type == "destroy"){
				missionlocation = systems[ps].planets[systems[ps].npcs[this.missions[i].target].ai.homeplanet].name;
				}
			context.fillText(missionlocation,x+80,y+64+16*i);
			context.fillText(missionlocation,x+80,y+64+16*i);
			i=i+1;
			}
		context.beginPath();
		context.strokeStyle = systems[ps].outposts[theplayer.dockstate].c2;//Global scope here, very bad, also in drawpolarpoly
		context.rect(xpos-16,ypos-56,512,336+128);
		context.rect(xpos-16,ypos+12,512,208+128);
		context.stroke();
		drawpolarpoly(x+464,y-20,systems[ps].outposts[theplayer.dockstate].emblem[0],systems[ps].outposts[theplayer.dockstate].emblem[1],32,systems[ps].outposts[theplayer.dockstate].c,-1*Math.PI/2); //this.emblem is a randomized logo
		}
	addcargomission(theships,theplanets,theoutposts){
		var missiontarget = 1+Math.floor(Math.random()*(theplanets.length-1));
		var missiondistance = theoutposts[this.home].distance(theplanets[missiontarget]);
		var missionpay = Math.floor(500 + missiondistance/40);
		var missionmessage = "Go to "+theplanets[missiontarget].name + "."
		this.missions.push(new Mission("cargo",this.home,missiontarget,missionmessage,missionpay,0));//missiontype, morigin, mtarget,mmessage,mreward,mstory
		//this.missions[this.missions.length-1].distance = Math.floor(missiondistance/2000);
		this.missions[this.missions.length-1].calcdistance(theships,theplanets,theoutposts);
		this.missions[this.missions.length-1].calcdanger(theships,theplanets);
		}
	addkillmission(thenpcs,theplanets,theoutposts){
		var missiontarget = 1+Math.floor(Math.random()*(thenpcs.length-2));
		var missiondistance = theoutposts[this.home].distance(thenpcs[missiontarget].ship);
		var missionpay = Math.floor(500 + missiondistance/40);
		var missionmessage = "Destroy "+thenpcs[missiontarget].ship.name + ".  It can be found near "+theplanets[thenpcs[missiontarget].ai.homeplanet].name;
		this.missions.push(new Mission("destroy",this.home,missiontarget,missionmessage,missionpay,0));//missiontype, morigin, mtarget,mmessage,mreward,mstory
		this.missions[this.missions.length-1].calcdistance(thenpcs,theplanets,theoutposts);
		this.missions[this.missions.length-1].calcdanger(thenpcs,theplanets);
		}
	}
