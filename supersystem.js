class Supersystem{
	constructor(linktype,nsystems,msystems,ppopmin,ppopmax,psizemin,psizemax,npopmin,npopmax){
		this.systems = []
		this.ppopmin = ppopmin;//max/min number of planets
		this.ppopmax = ppopmax;
		this.n = nsystems;//Total systems are m*n
		this.m = msystems;
		this.linktype = linktype;
		this.systemsize = 20000;
		var clearance = 128;
		if (this.linktype = "3bubble"){
			var i=0;
			while(i<this.n*this.m){
				var numplanets = Math.floor(this.ppopmin+Math.random()*(this.ppopmax-this.ppopmin));
				var asystem = new System(i,"sys1",0,0);
				asystem.generatepocket(3,numplanets,this.systemsize,psizemin,psizemax);//generatepocket(nout,nin,sizeout,minsizein,maxsizein){
				asystem.planets[1].s = asystem.planets[1].s - clearance;
				asystem.planets[2].s = asystem.planets[2].s - clearance;
				asystem.planets[3].s = asystem.planets[3].s - clearance;
				if (i%2==1){//Flip every other system
					var j=0;
					while(j<asystem.planets.length){
						asystem.planets[j].x = -1*asystem.planets[j].x;
						j++;
						}
					}
				this.systems.push(asystem);
				i++;
				}
			}
		}
	checktrans(playerindex,systemindex){
		var newsystem = -1;
		var dirnum = -1;
		if (systemindex<this.systems.length){
			newsystem = systemindex;
			if (playerindex<this.systems[systemindex].players.length){
				if (this.linktype == "3bubble"){
					var pradius = this.systems[systemindex].planets[0].distance(this.systems[systemindex].players[playerindex].ship);
					var threshold = this.systemsize*Math.sin(Math.PI/6);
					var dirnum = -1;
					if (pradius>threshold){
						var truedir = this.systems[systemindex].planets[0].directionof(this.systems[systemindex].players[playerindex].ship);
						var dir = truedir+0.5;//fudge factor to move threshold a bit away from center value
						while (dir>2*Math.PI){dir = dir-2*Math.PI;}
						while (dir<0){dir = dir+2*Math.PI;}
						dirnum = Math.floor((dir/(2*Math.PI))*6);
						if (dirnum == 0){
							newsystem = systemindex+this.n;
							this.systems[systemindex].players[playerindex].ship.y = Math.sin(truedir+Math.PI)*(threshold-1);//-1*this.systems[systemindex].players[playerindex].ship.y;
							this.systems[systemindex].players[playerindex].ship.x = Math.cos(truedir+Math.PI)*(threshold-1);//-1*this.systems[systemindex].players[playerindex].ship.x;
							}
						if (dirnum == 1){
							newsystem = systemindex+1;
							this.systems[systemindex].players[playerindex].ship.y = Math.sin(truedir+Math.PI)*(threshold-1);//-1*this.systems[systemindex].players[playerindex].ship.y;
							this.systems[systemindex].players[playerindex].ship.x = Math.cos(truedir+Math.PI)*(threshold-1);//-1*this.systems[systemindex].players[playerindex].ship.x;
							}
						if (dirnum == 2){
							newsystem = systemindex+1;
							this.systems[systemindex].players[playerindex].ship.y = Math.sin(truedir+Math.PI)*(threshold-1);//-1*this.systems[systemindex].players[playerindex].ship.y;
							this.systems[systemindex].players[playerindex].ship.x = Math.cos(truedir+Math.PI)*(threshold-1);//-1*this.systems[systemindex].players[playerindex].ship.x;
							}
						if (dirnum == 3){
							newsystem = systemindex-this.n;
							this.systems[systemindex].players[playerindex].ship.y = Math.sin(truedir+Math.PI)*(threshold-1);//-1*this.systems[systemindex].players[playerindex].ship.y;
							this.systems[systemindex].players[playerindex].ship.x = Math.cos(truedir+Math.PI)*(threshold-1);//-1*this.systems[systemindex].players[playerindex].ship.x;
							}
						if (dirnum == 4){
							newsystem = systemindex-1;
							this.systems[systemindex].players[playerindex].ship.y = Math.sin(truedir+Math.PI)*(threshold-1);//-1*this.systems[systemindex].players[playerindex].ship.y;
							this.systems[systemindex].players[playerindex].ship.x = Math.cos(truedir+Math.PI)*(threshold-1);//-1*this.systems[systemindex].players[playerindex].ship.x;
							}
						if (dirnum == 5){
							newsystem = systemindex-1;
							this.systems[systemindex].players[playerindex].ship.y = Math.sin(truedir+Math.PI)*(threshold-1);//-1*this.systems[systemindex].players[playerindex].ship.y;
							this.systems[systemindex].players[playerindex].ship.x = Math.cos(truedir+Math.PI)*(threshold-1);//-1*this.systems[systemindex].players[playerindex].ship.x;
							}
						this.systems[systemindex].players[playerindex].navtarget = 0;
						this.systems[systemindex].players[playerindex].shiptarget = 0;
						this.systems[systemindex].players[playerindex].planetarychart = systems[ps].generateplanetlist();
						console.log(newsystem);
						if (newsystem<0){newsystem = newsystem+this.n*this.m;}
						newsystem = newsystem % (this.n*this.m);
						console.log(dirnum+" "+newsystem);
						}
					}				
				}
			}
		
		return newsystem;
		}
	}