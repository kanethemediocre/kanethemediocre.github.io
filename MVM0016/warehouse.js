class Warehouse{
	constructor(xxs,yys,spawns,gravity,srboxes,mrboxes){
		this.xs = xxs;
		this.ys = yys;
		this.spawns = spawns;
		this.gravity = gravity;
		this.srboxes = srboxes; //static rigid boxes
		this.mrboxes = mrboxes; //moving rigid boxes
		this.bboxes = [];//bullet boxes 
		this.bmboxes = [];//bullet modifier boxes 
		this.mmboxes = []; //motion modifier boxes (modifies bullets, players motions)
		this.itboxes = [];//items
		this.anboxes = [];
		}
	saveaslist(){
		var srboxeslist = [];
		var i=0;
		while(i<this.srboxes.length){
			srboxeslist.push(this.srboxes[i].saveaslist());
			i++;
			}
		var mrboxeslist = [];
		var i=0;
		while(i<this.mrboxes.length){
			mrboxeslist.push(this.mrboxes[i].saveaslist());
			i++;
			}
		var bboxeslist = [];
		var i=0;
		while(i<this.bboxes.length){
			bboxeslist.push(this.bboxes[i].saveaslist());
			i++;
			}
		var bmboxeslist = [];
		var i=0;
		while(i<this.bmboxes.length){
			bmboxeslist.push(this.bmboxes[i].saveaslist());
			i++;
			}
		var mmboxeslist = [];
		var i=0;
		while(i<this.mmboxes.length){
			mmboxeslist.push(this.mmboxes[i].saveaslist());
			i++;
			}
		var itboxeslist = [];
		var i=0;
		while(i<this.itboxes.length){
			itboxeslist.push(this.itboxes[i].saveaslist());
			i++;
			}
		var list = [this.xs,this.ys,this.spawns,this.gravity,srboxeslist,mrboxeslist,bboxeslist,bmboxeslist,mmboxeslist,itboxeslist];
		return list;
		}
	saveasjs(){
		var level = "function loadlevel9(){ \n var alevel = new Warehouse("+this.xs+","+this.ys+","+this.spawns+","+this.gravity+",[],[]); \n ";
		var i=0;
		while(i<this.srboxes.length){
			level=level+this.srboxes[i].saveasjs();
			level = level + "alevel.srboxes.push(it); \n ";
			i++;
			}
		var i=0;
		while(i<this.mrboxes.length){
			level=level+this.mrboxes[i].saveasjs();
			level = level + "alevel.mrboxes.push(it); \n ";
			i++;
			}
		var i=0;
		while(i<this.bboxes.length){
			level=level+this.bboxes[i].saveasjs();
			level = level + "alevel.bboxes.push(it); \n ";
			i++;
			}
		var i=0;
		while(i<this.bmboxes.length){
			level=level+this.bmboxes[i].saveasjs();
			level = level + "alevel.bmboxes.push(it); \n ";
			i++;
			}
		var i=0;
		while(i<this.mmboxes.length){
			level=level+this.mmboxes[i].saveasjs();
			level = level + "alevel.mmboxes.push(it); \n ";
			i++;
			}
		var i=0;
		while(i<this.itboxes.length){
			level=level+this.itboxes[i].saveasjs();
			level = level + "alevel.itboxes.push(it); \n ";
			i++;
			}
		var level = level + "return alevel; \n }";
		return level;
		}
	restorefromlist(list){
		this.xs = list[0];
		this.ys = list[1];
		this.spawns = list[2];
		this.gravity = list[3];
		var i=0;
		while(i<list[4].length){
			var boxlist = list[4][i];
			var abox = new Umb(200,400,16,16,1,1);//the values are irrelevant
			abox.restorefromlist(boxlist);
			this.srboxes.push(abox);
			i++;
			}
		console.log(i);
		var i=0;
		while(i<list[5].length){
			var boxlist = list[5][i];
			var abox = new Umb(200,400,16,16,1,1);//the values are irrelevant
			abox.restorefromlist(boxlist);
			this.mrboxes.push(abox);
			i++;
			}		
			console.log(i);
		var i=0;
		while(i<list[6].length){
			var boxlist = list[6][i];
			var abox = new Umb(200,400,16,16,1,1);//the values are irrelevant
			abox.restorefromlist(boxlist);
			this.bboxes.push(abox);
			i++;
			}	
			console.log(i);
		var i=0;
		while(i<list[7].length){
			var boxlist = list[7][i];
			var abox = new Umb(200,400,16,16,1,1);//the values are irrelevant
			abox.restorefromlist(boxlist);
			this.bmboxes.push(abox);
			i++;
			}	
			console.log(i);
		var i=0;
		while(i<list[8].length){
			var boxlist = list[8][i];
			var abox = new Umb(200,400,16,16,1,1);//the values are irrelevant
			abox.restorefromlist(boxlist);
			this.mmboxes.push(abox);
			i++;
			}	
			console.log(i);
		var i=0;
		while(i<list[9].length){
			var boxlist = list[9][i];
			var abox = new Umb(200,400,16,16,1,1);//the values are irrelevant
			abox.restorefromlist(boxlist);
			this.itboxes.push(abox);
			i++;
			}	
			console.log(i);
		}	
	updateall(){
		var i=0;
		while(i<this.mrboxes.length){
			this.mrboxes[i].vy = this.mrboxes[i].vy + this.gravity;
			this.mrboxes[i].x = this.mrboxes[i].x + this.mrboxes[i].vx;
			this.mrboxes[i].y = this.mrboxes[i].y + this.mrboxes[i].vy; 
			this.mrboxes[i].drag();
			this.mrboxes[i].deadcheck();
			if (this.mrboxes[i].ai=="randomwalk"){
				this.mrboxes[i].vx = this.mrboxes[i].vx + this.mrboxes[i].xdir*0.5;
				if ((time+i)%20==0){
					this.mrboxes[i].xdir = Math.floor(Math.random()*3) - 1;//-1, 0, or 1
					}
				}
			if (this.mrboxes[i].ai=="randomhop"){
				if ((time+i)%20==0){
					console.log(this.mrboxes[i].vy);
					this.mrboxes[i].vy = this.mrboxes[i].vy-12;//-1, 0, or 1
					//this.mrboxes[i].y = this.mrboxes[i].y-120;//
					}
				}
			if (this.mrboxes[i].ai=="left"){
				if ((time+i)%10==0){
					this.mrboxes[i].vx = this.mrboxes[i].vx-6;//-1, 0, or 1
					}
				}
			if (this.mrboxes[i].ai=="right"){
				if ((time+i)%10==0){
					this.mrboxes[i].vx= this.mrboxes[i].vx+6;//-1, 0, or 1
					}
				}
			if (this.mrboxes[i].ai=="hoverleft"){
				this.mrboxes[i].vy = this.mrboxes[i].vy-1;//counter gravity
				if ((time+i)%10==0){
					this.mrboxes[i].vx = this.mrboxes[i].vx-6;//-1, 0, or 1
					}
				}
			if (this.mrboxes[i].ai=="hoverright"){
				this.mrboxes[i].vy = this.mrboxes[i].vy-1;//counter gravity
				if ((time+i)%10==0){
					this.mrboxes[i].vx= this.mrboxes[i].vx+6;//-1, 0, or 1
					}
				}
			if (this.mrboxes[i].ai=="randomhover"){
				this.mrboxes[i].vx = this.mrboxes[i].vx + this.mrboxes[i].xdir*0.5;
				this.mrboxes[i].vy = this.mrboxes[i].vy-1;//counter gravity
				if ((time+i)%20==0){
					this.mrboxes[i].xdir = Math.floor(Math.random()*3) - 1;//-1, 0, or 1
					}
				}	
			if (this.mrboxes[i].ai=="randomfly"){
				this.mrboxes[i].vx = this.mrboxes[i].vx + this.mrboxes[i].xdir*0.5;
				this.mrboxes[i].vy = this.mrboxes[i].vy + this.mrboxes[i].ydir*0.5;
				this.mrboxes[i].y = this.mrboxes[i].y + this.mrboxes[i].ydir
				this.mrboxes[i].vy = this.mrboxes[i].vy-1;//counter gravity
				if ((time+i)%20==0){
					this.mrboxes[i].xdir = Math.floor(Math.random()*3) - 1;//-1, 0, or 1
					}
				if ((time+i)%20==10){
					this.mrboxes[i].ydir = Math.floor(Math.random()*3) - 1;//-1, 0, or 1
					}
				}
			i++;
			}
		var i=0;
		while(i<this.bboxes.length){
			this.bboxes[i].x = this.bboxes[i].x + this.bboxes[i].vx;
			this.bboxes[i].y = this.bboxes[i].y + this.bboxes[i].vy; 
			i++;
			}
		var i=0;
		while(i<this.anboxes.length){
			if (this.anboxes[i].hp%4==0){
				var ci = (this.anboxes[i].hp/4)%rainbowcolors.length;
				this.anboxes[i].c = rainbowcolors[ci];
				console.log("anim color update " +this.anboxes[i].c);
				}
			console.log("explosion update "+i+" hp "+this.anboxes[i].hp);
			this.anboxes[i].x = this.anboxes[i].x + this.anboxes[i].vx;
			this.anboxes[i].y = this.anboxes[i].y + this.anboxes[i].vy; 
			this.anboxes[i].xs = this.anboxes[i].xs + 12; 
			this.anboxes[i].ys = this.anboxes[i].ys + 12; 
			this.anboxes[i].hp--;
			if (this.anboxes[i].hp<=0){
				this.anboxes.splice(i,1)
				}
			else
				{
				i++;
				}
			}
		//bullet modifier boxes and motion modifier boxes are assumed static for now, but if that changes,
		//their updates will go here.
		}
	
	collideall(){
		var i=0;
		while(i<this.mrboxes.length){//Check all moving rigid boxes (mostly characters)
			var j=0;
			this.mrboxes[i].grounded = false;
			while(j<this.srboxes.length){//against all static rigid boxes (walls, terrain)
				var totalxs = this.mrboxes[i].xs+this.srboxes[j].xs;
				var dx = this.mrboxes[i].x-this.srboxes[j].x;
				if (Math.abs(dx)<totalxs){
					var totalys = this.mrboxes[i].ys+this.srboxes[j].ys;
					var dy = this.mrboxes[i].y-this.srboxes[j].y;
					if (Math.abs(dy)<totalys){//A collision happened!
						this.mrboxes[i].terraincollide(this.srboxes[j]);
						}
					}
				j++;
				}
			var j=i+1;
			while((j<this.mrboxes.length)&&(this.mrboxes[i].solid>0)){//check moving rigid boxes against each other, if they are both solid
				if (this.mrboxes[j].solid>0) {
					var totalxs = this.mrboxes[i].xs+this.mrboxes[j].xs;
					var dx = this.mrboxes[i].x-this.mrboxes[j].x;
					if (Math.abs(dx)<totalxs){
						var totalys = this.mrboxes[i].ys+this.mrboxes[j].ys;
						var dy = this.mrboxes[i].y-this.mrboxes[j].y;
						if (Math.abs(dy)<totalys){//A collision happened!
							if ((this.mrboxes[i].solid==1)&&(this.mrboxes[j].solid==3)){ //Collision between normal solid and ?spiky? solid
								this.mrboxes[i].ouchcollide(this.mrboxes[j]);
								}
							else{
								this.mrboxes[i].terraincollide(this.mrboxes[j]);
								}
							}
						}
					}
				
				j++;
				}

			var j=0;
			while(j<this.bboxes.length){//against all bullet boxes (walls, terrain)
				var totalxs = this.mrboxes[i].xs+this.bboxes[j].xs;
				var dx = this.mrboxes[i].x-this.bboxes[j].x;
				if (Math.abs(dx)<totalxs){
					var totalys = this.mrboxes[i].ys+this.bboxes[j].ys;
					var dy = this.mrboxes[i].y-this.bboxes[j].y;
					if (Math.abs(dy)<totalys){//bullet hits character
						this.mrboxes[i].hp = this.mrboxes[i].hp - this.bboxes[j].hp;
						this.mrboxes[i].publiclabel = this.mrboxes[i].hp;
						if (this.mrboxes[i].hp == 0){//Add and explosion if a death is happening here
							var anexplosion = new Umb(this.mrboxes[i].x,this.mrboxes[i].y,this.mrboxes[i].xs,this.mrboxes[i].ys,24,0);
							anexplosion.c = "orange";
							this.anboxes.push(anexplosion);
							}
						this.mrboxes[i].deadcheck();
						this.bboxes[j].hp = 0;
						}
					}
				j++;
				}				
			var j=0;
			while(j<this.mmboxes.length){//against all movement modifiersn)
				var totalxs = this.mrboxes[i].xs+this.mmboxes[j].xs;
				var dx = this.mrboxes[i].x-this.mmboxes[j].x;
				if (Math.abs(dx)<totalxs){
					var totalys = this.mrboxes[i].ys+this.mmboxes[j].ys;
					var dy = this.mrboxes[i].y-this.mmboxes[j].y;
					if (Math.abs(dy)<totalys){//A collision happened!
						this.mrboxes[i].vx = this.mrboxes[i].vx + this.mmboxes[j].hp*this.mmboxes[j].xdir;
						this.mrboxes[i].vy = this.mrboxes[i].vy + this.mmboxes[j].hp*this.mmboxes[j].ydir;//hp is used to define acceleration here.  It's fine.
						//need to add provision for more diverse movement modifiers
						}
					}
				j++;
				}			
			var j=0;
			while((i==0)&&(j<this.itboxes.length)){//Just the 1st mrbox against all the item boxes
				//var player = mrboxes[i];
				var totalxs = this.mrboxes[i].xs+this.itboxes[j].xs;
				var dx = this.mrboxes[i].x-this.itboxes[j].x;
				if (Math.abs(dx)<totalxs){
					var totalys = this.mrboxes[i].ys+this.itboxes[j].ys;
					var dy = this.mrboxes[i].y-this.itboxes[j].y;
					if (Math.abs(dy)<totalys){//A collision happened!
						//player picks up item
						if (this.itboxes[j].label=="hp20"){
							this.mrboxes[i].hp = this.mrboxes[i].hp + 20;
							if (this.mrboxes[i].hp>this.mrboxes[i].maxhp){ this.mrboxes[i].hp = this.mrboxes[i].maxhp; }
							this.mrboxes[i].publiclabel = this.mrboxes[i].hp;
							}
						else if (this.itboxes[j].label=="g1"){	hasweapons[1] = true; }//global scope shame
						else if (this.itboxes[j].label=="g2"){	hasweapons[2] = true; }//global scope shame
						else if (this.itboxes[j].label=="g3"){	hasweapons[3] = true; }
						else if (this.itboxes[j].label=="g4"){	hasweapons[4] = true; }
						else if (this.itboxes[j].label=="$"){
							money = money + 25;
							score = score + 100;
							cash1.play();
							}
						this.itboxes.splice(j,1);
						}
					}
				j++;
				}				
			i++;
			}
		var i=0;
		while(i<this.bboxes.length){//Check all bullet boxes
			var j=0;
			while(j<this.srboxes.length){//against all static rigid boxes (walls, terrain)
				var totalxs = this.bboxes[i].xs+this.srboxes[j].xs;
				var dx = this.bboxes[i].x-this.srboxes[j].x;
				if (Math.abs(dx)<totalxs){
					var totalys = this.bboxes[i].ys+this.srboxes[j].ys;
					var dy = this.bboxes[i].y-this.srboxes[j].y;
					if (Math.abs(dy)<totalys){//Bullet strikes wall collision
						if ((this.bboxes[i].solid==2)||(this.srboxes[j].solid==2)){//elastic bullets
							var overlapx = totalxs - Math.abs(dx);
							var overlapy = totalys - Math.abs(dy);
							if (overlapx<overlapy){//resolve by modifying x
									if (dx>0){//this feels avoidable but ok
										this.bboxes[i].x = this.bboxes[i].x + overlapx;
										}
									else {
										this.bboxes[i].x = this.bboxes[i].x - overlapx;
										}
								this.bboxes[i].vx = -1*this.bboxes[i].vx;
								}
							else{//resolve by modifying y
								if (dy>0){//this feels avoidable but ok
									this.bboxes[i].y = this.bboxes[i].y + overlapy;
									}
								else {
									this.bboxes[i].y = this.bboxes[i].y - overlapy;
									this.bboxes[i].grounded = true;
									}
								this.bboxes[i].vy = -1*this.bboxes[i].vy;
								}						
							this.bboxes[i].vy = -1*this.bboxes[i].vy;//this seems wrong / redundant
							}
						else{//On inelastic materials, just kill the bullet.
							this.bboxes[i].hp = 0;
							this.bboxes[i].vx = 0;
							}
						}
					}
				j++;
				}
			var inmod = false;
			var j=0
			while(j<this.bmboxes.length){//against all bullet modifier boxes
				var totalxs = this.bboxes[i].xs+this.bmboxes[j].xs;
				var dx = this.bboxes[i].x-this.bmboxes[j].x;
				if (Math.abs(dx)<totalxs){
					var totalys = this.bboxes[i].ys+this.bmboxes[j].ys;
					var dy = this.bboxes[i].y-this.bmboxes[j].y;
					if (Math.abs(dy)<totalys){//Bullet entered modifier
						inmod = true;
						if (this.bboxes[i].label == "0"){
							if (this.bmboxes[j].label == "*"){
								this.bboxes[i].hp = this.bboxes[i].hp * this.bmboxes[j].hp;
								}
							if (this.bmboxes[j].label == "/"){
								var result = this.bboxes[i].hp / this.bmboxes[j].hp;
								if (result==Math.floor(result)){//division successful!
									this.bboxes[i].hp = result;
									}
								else{
									this.bboxes[i].hp = 0;
									}
								}
							else if (this.bmboxes[j].label == "+"){
								this.bboxes[i].hp = this.bboxes[i].hp + this.bmboxes[j].hp;
								}
							else if (this.bmboxes[j].label == "-"){
								this.bboxes[i].hp = this.bboxes[i].hp - this.bmboxes[j].hp;
								}
							this.bboxes[i].publiclabel = this.bboxes[i].hp;
							}
						}
					}
				j++;
				}
			if (inmod==true){ this.bboxes[i].label = "1"; }
			else { this.bboxes[i].label = "0"; }
			var j=0
			while(j<this.mmboxes.length){//against all motion modifier boxes (walls, terrain)
				var totalxs = this.bboxes[i].xs+this.mmboxes[j].xs;
				var dx = this.bboxes[i].x-this.mmboxes[j].x;
				if (Math.abs(dx)<totalxs){
					var totalys = this.bboxes[i].ys+this.mmboxes[j].ys;
					var dy = this.bboxes[i].y-this.mmboxes[j].y;
					if (Math.abs(dy)<totalys){//Bullet is in motion modifier box
						this.bboxes[i].vx = this.bboxes[i].vx + this.mmboxes[j].hp*this.mmboxes[j].xdir;
						this.bboxes[i].vy = this.bboxes[i].vy + this.mmboxes[j].hp*this.mmboxes[j].ydir;//hp is used to define acceleration here.  It's fine.
						}
					}
				j++;
				}
			if (this.bboxes[i].hp<=0){
				this.bboxes.splice(i,1);
				}
			else{
				i++
				}
			}
		}
	drawall(viewx,viewy){
		var i=0;
		while(i<this.srboxes.length){
			this.srboxes[i].drawboxfill(viewx,viewy);
			i++;
			}
		var i=0;
		while(i<this.mrboxes.length){
			context.lineWidth = 2;
			this.mrboxes[i].drawboxoutline(viewx,viewy);
			this.mrboxes[i].drawlabel(viewx,viewy);
			i++;
			}	
		var i=0;
		while(i<this.bboxes.length){
			context.lineWidth = 2;
			this.bboxes[i].drawboxoutline(viewx,viewy);
			this.bboxes[i].drawlabel(viewx,viewy);
			i++;
			}	
		var i=0;
		while(i<this.bmboxes.length){
			context.lineWidth = 2;
			this.bmboxes[i].drawboxoutline(viewx,viewy);
			this.bmboxes[i].drawlabel(viewx,viewy);
			i++;
			}	
		var i=0;
		while(i<this.mmboxes.length){
			context.lineWidth = 2;
			this.mmboxes[i].drawboxoutline(viewx,viewy);
			this.mmboxes[i].drawlabel(viewx,viewy);
			i++;
			}	
		var i=0;
		while(i<this.itboxes.length){
			context.lineWidth = 2;
			this.itboxes[i].drawboxoutline(viewx,viewy);
			this.itboxes[i].drawlabel(viewx,viewy);
			i++;
			}	
		var i=0;
		while(i<this.anboxes.length){//All animations are explosions for now
			context.lineWidth = 8;
			this.anboxes[i].drawboxoutline(viewx,viewy);
			//console.log("draw animation box " + i);
			i++;
			}	
		}
	xmirror(xcenter){
		var moreboxes = [];
		var i=0;
		while(i<this.srboxes.length){
			var dx = this.srboxes[i].x-xcenter;
			var mirrorcopy = this.srboxes[i].savecopy();
			mirrorcopy.x = xcenter - dx;
			moreboxes.push(mirrorcopy);
			i++;
			}
		this.srboxes.push(...moreboxes);
		
		moreboxes = [];
		var i=0;
		while(i<this.mrboxes.length){
			var dx = this.mrboxes[i].x-xcenter;
			var mirrorcopy = this.mrboxes[i].savecopy();
			mirrorcopy.x = xcenter - dx;
			moreboxes.push(mirrorcopy);
			i++;
			}
		this.mrboxes.push(...moreboxes);
		//Not copying bullet boxes
		var moreboxes = [];
		var i=0;
		while(i<this.bmboxes.length){
			var dx = this.bmboxes[i].x-xcenter;
			var mirrorcopy = this.bmboxes[i].savecopy();
			mirrorcopy.x = xcenter - dx;
			moreboxes.push(mirrorcopy);
			i++;
			}
		this.bmboxes.push(...moreboxes);		
		
		var moreboxes = [];
		var i=0;
		while(i<this.mmboxes.length){
			var dx = this.mmboxes[i].x-xcenter;
			var mirrorcopy = this.mmboxes[i].savecopy();
			mirrorcopy.x = xcenter - dx;  //Mirroring motion modifier
			mirrorcopy.xdir = mirrorcopy.xdir * -1;
			if ( mirrorcopy.xdir>0 ){ mirrorcopy.publiclabel = ">"; }
			else if ( mirrorcopy.xdir<0 ){ mirrorcopy.publiclabel = "<";  }
			moreboxes.push(mirrorcopy);
			i++;
			}
		this.mmboxes.push(...moreboxes);
			
		var moreboxes = [];
		var i=0;
		while(i<this.itboxes.length){
			var dx = this.itboxes[i].x-xcenter;
			var mirrorcopy = this.itboxes[i].savecopy();
			moreboxes.push(mirrorcopy);
			i++;
			}
		this.itboxes.push(...moreboxes);
		}
	addcoin(x,y){
		var itemcoin1 =  new Umb(x,y,24,24,1,1);
		itemcoin1.label = "$";
		itemcoin1.c = "yellow";
		itemcoin1.publiclabel = "$";
		this.itboxes.push(itemcoin1);
		}
	addline(x1,y1,x2,y2,stairnum,staircolor){ //Essentially a staircase of boxes, from point 1 to point 2.
		var dx = x2-x1;
		var dy = y2-y1;
		var stairdx = Math.floor(dx / stairnum);
		var stairdy = Math.floor(dy / stairnum);
		//var staircolor = "red";
		var i=0;
		while(i<stairnum){//this one works
			var newbox = new Umb(stairdx*i+x1, stairdy*i+y1, Math.abs(stairdx)/2, Math.abs(stairdy)/2 ,0 ,1 );
			newbox.c = staircolor;
			this.srboxes.push(newbox);////constructor(xx,yy,xxs,yys,hp,solid)
			i++;
			}	
		}
	addstairs(x1,y1,x2,y2,stairdy,color){
		var dx = x2-x1;
		var dy = y2-y1;
		var stairnum = Math.floor(dy/stairdy);
		var stairdx = Math.floor(dx/stairnum);
		var i=0;
		while(i<stairnum){
			var nextstair = new Umb(stairdx*i+x1, stairdy*i+y1, stairdx, stairdy ,0 ,1 );//constructor(xx,yy,xxs,yys,hp,solid)
			nextstair.c = color;
			this.srboxes.push(new Umb(nextstair));
			//console.log(nextstair.x+" "+nextstair.y,this.srboxes.length);
			i++;
			}
		}
	addrighttriangle(x1,y1,size,xdir,ydir,stairdy,color){
		var staircolor = "red";
		var lastx = x1;
		var i=0;
		while( xdir*lastx < xdir*(x1+size*xdir) ){
			var newbox = new Umb(stairdy*i*xdir+x1, stairdy*i*ydir+y1, Math.abs(stairdy)/2, Math.abs(stairdy)/2 ,0 ,1 );
			lastx = newbox.x
			newbox.c = staircolor;
			this.srboxes.push(newbox);////constructor(xx,yy,xxs,yys,hp,solid)
			i++;
			}
		//add boxes for bottom and side
		if (xdir>0){
			if (ydir>0){
				var botbox = new Umb(x1+size*xdir/2, y1+size, size/2+stairdy/2, Math.abs(stairdy)/2 ,0 ,1 );
				var sidebox = new Umb(x1, y1+size*ydir/2, Math.abs(stairdy)/2, size/2+stairdy/2 ,0 ,1 );
				}
			else {
				var botbox = new Umb(x1+size*xdir/2, y1, size/2+stairdy/2, Math.abs(stairdy)/2 ,0 ,1 );
				var sidebox = new Umb(x1+size*xdir, y1+size*ydir/2, Math.abs(stairdy)/2, size/2+stairdy/2 ,0 ,1 );//fix
				}
			}
		else{
			if (ydir>0){
				var botbox = new Umb(x1+size*xdir/2, y1+size, size/2+stairdy/2, Math.abs(stairdy)/2 ,0 ,1 );
				var sidebox = new Umb(x1, y1+size*ydir/2, Math.abs(stairdy)/2, size/2+stairdy/2 ,0 ,1 );
				}
			else {
				var botbox = new Umb(x1+size*xdir/2, y1, size/2+stairdy/2, Math.abs(stairdy)/2 ,0 ,1 );
				var sidebox = new Umb(x1+size*xdir, y1+size*ydir/2, Math.abs(stairdy)/2, size/2+stairdy/2 ,0 ,1 );//fix
				}
			}
		this.srboxes.push(botbox);
		this.srboxes.push(sidebox);
		//var sidebox = new Umb(x1, y1+size*ydir/2, Math.abs(stairdy)/2, size/2+stairdy/2 ,0 ,1 );
		//var sidebox = new Umb(x1+size, y1+size*ydir/2, Math.abs(stairdy)/2, size/2+stairdy/2 ,0 ,1 );//fix
		}
	addrighttriangle2(x1,y1,size,xdir,ydir,stairdy,color){
		var staircolor = "red";
		var lastx = x1;
		var sidewallx = x1+size*xdir;
		
		var i=0;
		while( xdir*lastx < xdir*(x1+size*xdir) ){
			var cx1 = x1 + stairdy*i*xdir;
			var cy1 = y1 + stairdy*i*ydir;
			var cx2 = cx1+stairdy/2;//size*xdir;
			var cy2 = cy1+stairdy/2;
			var newbox = new Umb(1,2,3,4 ,0 ,1 );//position and size values are junk and get replaced by cornersxyxy
			newbox.cornersxyxy(cx1,cy1,cx2,cy2);
			lastx = cx1;
			newbox.c = staircolor;
			if (i==0){newbox.c = "pink";}
			this.srboxes.push(newbox);////constructor(xx,yy,xxs,yys,hp,solid)
			i++;
			}
		//add boxes for bottom and side
		//var sidebox = new Umb(x1, y1+size*ydir/2, Math.abs(stairdy)/2, size/2+stairdy/2 ,0 ,1 );
		//var sidebox = new Umb(x1+size, y1+size*ydir/2, Math.abs(stairdy)/2, size/2+stairdy/2 ,0 ,1 );//fix
		}
		
	addrighttriangle3(x1,y1,size,xdir,ydir,stairdy,color){//This one works.
		var staircolor = "red";
		var currenty = y1;
		var currentx = x1;
		var sidex = x1
		if ( (xdir>0)&&(ydir>0) ){	sidex = x1; }//reduce this when it's confirmed
		if ( (xdir<0)&&(ydir>0) ){	sidex = x1; }
		if ( (xdir>0)&&(ydir<0) ){	sidex = x1+size; }
		if ( (xdir<0)&&(ydir<0) ){	sidex = x1-size; }
		//console.log(x1+"   "+sidex)
		var i=0;
		while( ydir*currenty<ydir*(y1+size*ydir) ){
			var newbox = new Umb(1,2,3,4,0,1);//constructor(xx,yy,xxs,yys,hp,solid)  size and position values here are placeholders
			currenty = y1+i*stairdy*ydir;
			currentx = x1+i*stairdy*xdir;
			//newbox.cornersxyxy(currentx,currenty,currentx+stairdy*xdir,currenty+stairdy*ydir);
			newbox.cornersxyxy(currentx,currenty,sidex,currenty+(stairdy+1)*ydir);//works for xdir = 1, ydir = 1
			newbox.c = color;
			this.srboxes.push(newbox);
			i++;
			}
		}
	addsolidstair45(x1,y1,size,xdir,ydir,stairdy,color){//This one works.
		var staircolor = "red";
		var currenty = y1;
		var currentx = x1;
		var sidex = x1
		if ( (xdir>0)&&(ydir>0) ){	sidex = x1; }//reduce this when it's confirmed
		if ( (xdir<0)&&(ydir>0) ){	sidex = x1; }
		if ( (xdir>0)&&(ydir<0) ){	sidex = x1+size; }
		if ( (xdir<0)&&(ydir<0) ){	sidex = x1-size; }
		console.log(x1+"   "+sidex)
		var i=0;
		while( ydir*currenty<ydir*(y1+size*ydir) ){
			var newbox = new Umb(1,2,3,4,0,1);//constructor(xx,yy,xxs,yys,hp,solid)  size and position values here are placeholders
			currenty = y1+i*stairdy*ydir;
			currentx = x1+i*stairdy*xdir;
			//newbox.cornersxyxy(currentx,currenty,currentx+stairdy*xdir,currenty+stairdy*ydir);
			newbox.cornersxyxy(currentx,currenty,sidex,currenty+(stairdy+1)*ydir);//works for xdir = 1, ydir = 1
			newbox.c = color;
			this.srboxes.push(newbox);
			i++;
			}
		}
	addsolidstaircase(x1,y1,x2,y2,stairdy,color){
		var staircolor = "red";
		var currenty = y1;
		var currentx = x1;
		var dx = x2-x1;
		var dy = y2-y1;
		var xdir = 1;
		var ydir = 1;
		var sidex = x1;
		if (dx<0){xdir = -1;}
		//if (dy<0){
		//	ydir = -1;
		//	sidex = x2;
		//	}
		var slope = 1;
		if (dx!=0){slope=dy/dx;}
		console.log(x1+"   "+sidex)
		var i=0;
		while( ydir*currenty<ydir*(y1+dy) ){
			var newbox = new Umb(1,2,3,4,0,1);//constructor(xx,yy,xxs,yys,hp,solid)  size and position values here are placeholders
			currenty = y1+i*stairdy*ydir;
			currentx = x1+i*stairdy*xdir/slope;
			//newbox.cornersxyxy(currentx,currenty,currentx+stairdy*xdir,currenty+stairdy*ydir);
			newbox.cornersxyxy(currentx,currenty,sidex,currenty+(stairdy+1)*ydir);//works for xdir = 1, ydir = 1
			newbox.c = color;
			this.srboxes.push(newbox);
			i++;
			}
		}
	addsolidstaircase2(x1,y1,x2,y2,stairdy,staircolor){ //Essentially a staircase of boxes, from point 1 to point 2.
		//var stairnum = 32;
		//var x1 = 4000;
		//var y1 = -100;
		//var x2 = 3500;
		//var y2 = -900;
		var dx = x2-x1;
		var dy = y2-y1;
		var stairdx = Math.floor(dx / (dy/stairdy));
		var sidex = x1;
		if (dy<0){sidex = x2;}
		var currentx = x1;
		var currenty = y1;
		//var staircolor = "red";
		var i=0;
		while(i<100){//fix loop bounds
			var newbox = new Umb(1, 2, 3, 4 ,0 ,1 );
			currentx = x1 + stairdx*i;
			//if (dx>0){	currentx = x1 + stairdx*i; }
			//else {currentx = x1 - stairdx*i; }
			if (dy>0){	currenty =  y1 + stairdy*i;  }
			else {currenty =  y1 - stairdy*i }
			//var newbox = new Umb(stairdx*i+x1, stairdy*i+y1, Math.abs(stairdx)/2, Math.abs(stairdy)/2 ,0 ,1 );
			newbox.cornersxyxy(currentx,currenty,sidex,currenty+(stairdy+1));//works for xdir = 1, ydir = 1
			newbox.c = staircolor;
			this.srboxes.push(newbox);////constructor(xx,yy,xxs,yys,hp,solid)
			//console.log(currentlevel.srboxes[currentlevel.srboxes.length-1]);
			i++;
			}	
		}
	addrandomground(xmin,xmax,ymin,ymax,dx,dymin,dymax,color){//individual srboxes with noise
		var xnow = xmin;
		var ynow = Math.floor((ymin + ymax) / 2);
		while(xnow<xmax){
			var xsize = Math.floor(dx/2);
			var ysize = 64;
			var yshift = Math.floor(dymin + Math.random()*(dymax-dymin));
			xnow = xnow+xsize;
			ynow = ynow+yshift;
			if (ynow>ymax){ynow = ymax;}
			else if (ynow<ymin){ynow = ymin;}
			//console.log(xnow+" "+ynow);
			var abox = new Umb(xnow,ynow,xsize,ysize,0,1);
			abox.c = color;
			this.srboxes.push(abox);;
			}	
		}
	addrandomground2(xmin,xmax,ymin,ymax,dxmin,dxmax,dymin,dymax,color){//based on addlinefunction
		var xnow = xmin;
		var ynow = Math.floor((ymin + ymax) / 2);
		while(xnow<xmax){
			var xshift = Math.floor(dxmin + Math.random()*(dxmax-dxmin));
			var yshift = Math.floor(dymin + Math.random()*(dymax-dymin));
			var stairnum = Math.abs(yshift/16);
			console.log(xnow+" "+ynow);
			this.addline(xnow,ynow,xnow+xshift,ynow+yshift,stairnum,color);//addline(x1,y1,x2,y2,stairnum,staircolor){
			//var abox = new Umb(xnow,ynow,xsize,ysize,0,1);
			//abox.c = color;
			//this.srboxes.push(abox);
			xnow = xnow+xshift;
			ynow = ynow+yshift;
			}	
		}
	addrandomground3(xmin,xmax,ymin,ymax,ystart,yend,dxmin,dxmax,dymin,dymax,hilly,bottomy,color){//based on addlinefunction
		var xnow = xmin;
		var ynow = ystart;
		var ythick = 100;
		var ydir = 1;
		var stairstep = 20;
		while(xnow<xmax){
			var xshift = Math.floor(dxmin + Math.random()*(dxmax-dxmin));
			var yshift = Math.floor(dymin + Math.random()*(dymax-dymin));
			xshift = xshift+stairstep - xshift%stairstep;
			yshift = yshift+stairstep - yshift%stairstep;
			var stairnum = Math.abs(yshift/16);
			//console.log(xnow+" "+ynow);
			if (Math.random()<hilly){ //Make a slope
				console.log("shift = "+yshift+" ynow = "+ynow);
				if ( (ynow+yshift) > ymax ){
					yshift = ymax - ynow;//ynow + yshift = ymax
					console.log("yshift max");
					//ynow = ymax;
					}
				else if ( (ynow+yshift) < ymin ){
					yshift = ymin - ynow; //yshift is negative in these cases
					console.log("yshift min");
					//ynow = ymin;
					}
				else{
					console.log("yshift in bounds");
					}
				console.log("new yshift = "+yshift);
					
				if (yshift<0){ydir = -1;}
				else {ydir = 1;}
				xshift = Math.abs(yshift);
				//currentlevel.addsolidstair45(editx1,edity1,size,xdir,ydir,stairstep,editcolors[editcolori]);
				this.addsolidstair45(xnow,ynow,Math.abs(yshift),1,ydir,stairstep,color);
				var abox = new Umb(1,2,3,4,0,1);
				var floortopy = ynow;
				if (ydir>0){floortopy = ynow + yshift;}
				abox.c = color;
				abox.cornersxyxy(xnow,floortopy,xnow + xshift,bottomy);
				this.srboxes.push(abox);
				ynow = ynow+yshift;
				console.log("slope"+xnow+" "+ynow);
				}
			else{  //make a flat
				var abox = new Umb(1,2,3,4,0,1);
				abox.c = color;
				abox.cornersxyxy(xnow,ynow,xnow + xshift,bottomy);
				this.srboxes.push(abox);
				console.log("flat"+xnow+" "+ynow);
				}
			//this.addline(xnow,ynow,xnow+xshift,ynow+yshift,stairnum,color);//addline(x1,y1,x2,y2,stairnum,staircolor){
			//var abox = new Umb(xnow,ynow,xsize,ysize,0,1);
			//abox.c = color;
			//this.srboxes.push(abox);
			xnow = xnow+xshift;
			//ynow = ynow+yshift;
			}	
		}
	addrandomground4(xmin,xmax,ymin,ymax,dx,dymin,dymax,bottomy,color){//individual srboxes with noise and flat bottom
		var xnow = xmin;
		var ynow = Math.floor((ymin + ymax) / 2);
		while(xnow<xmax){
			var xsize = Math.floor(dx/2);
			var ysize = 64;
			var yshift = Math.floor(dymin + Math.random()*(dymax-dymin));
			xnow = xnow+xsize;
			ynow = ynow+yshift;
			if (ynow>ymax){ynow = ymax;}
			else if (ynow<ymin){ynow = ymin;}
			//console.log(xnow+" "+ynow);
			var abox = new Umb(xnow,ynow,xsize,ysize,0,1);
			abox.cornersxyxy(xnow,ynow,xnow + dx,bottomy);//Overrides position and size.  
			abox.c = color;
			this.srboxes.push(abox);;
			}	
		}
	addrandomfloaters(xmin,xmax,ymin,ymax,dxmin,dxmax,dymin,dymax,color,density,cohesion){
		var xnow = xmin;
		var ynow =  Math.floor(ymin + Math.random()*(ymax-ymin));
		var xstart = xmin;
		var xend = xmin
		var maxlength = 512;
		var toggle = false;
		while(xnow<xmax){
			if (Math.random()>cohesion){
				if (  ((!toggle)&&(Math.random()<density)) || ((toggle)&&(Math.random()>density)) || ((toggle)&&(xnow-xstart>maxlength))  )  {
					toggle = !toggle;
					if (toggle){//starting floater
						ynow =  Math.floor(ymin + Math.random()*(ymax-ymin));
						xstart = xnow;
						}
					else{//ending floater
						xend = xnow;
						var xsize = Math.floor((xend-xstart)/2);
						var ysize = Math.floor(dymin + Math.random()*(dymax-dymin));
						var abox = new Umb(xstart+xsize,ynow,xsize,ysize,0,1);
						abox.c = color;
						this.srboxes.push(abox);;
						}
					}
				}
			xnow = xnow + dxmin;
			}
		}
		
		
	addrandomfloaters2(xmin,xmax,ymin,ymax,dxmin,dxmax,dymin,dymax,color,density,cohesion){
		var xnow = xmin;
		var ynow =  Math.floor(ymin + Math.random()*(ymax-ymin));
		var xstart = xmin;
		var xend = xmin
		var maxlength = 512;
		var toggle = false;
		while(xnow<xmax){
			if (Math.random()>cohesion){
				if (  ((!toggle)&&(Math.random()<density)) || ((toggle)&&(Math.random()>density)) || ((toggle)&&(xnow-xstart>maxlength))  )  {
					toggle = !toggle;
					if (toggle){//starting floater
						ynow =  Math.floor(ymin + Math.random()*(ymax-ymin));
						xstart = xnow;
						}
					else{//ending floater
						xend = xnow;
						var xsize = Math.floor((xend-xstart)/2);
						var ysize = Math.floor(dymin + Math.random()*(dymax-dymin));
						var abox = new Umb(xstart+xsize,ynow,xsize,ysize,0,1);
						abox.c = color;
						this.srboxes.push(abox);
						}
					}
				}
			xnow = xnow + dxmin;
			}
		}
	addpuzzlemodn(x,y,gap,g,pos,modboxes){//For a single row of bullet modifiers
		var modx = 0;
		var mody = 0;
		var i=0;
		while(i<modboxes.length){
			modboxes[i].x = x-(modboxes.length-i)*gap;
			modboxes[i].y = y;
			modboxes[i].xs = 64;
			modboxes[i].ys = 64;
			modboxes[i].c = "red";
			this.bmboxes.push(modboxes[i]);
			i++;
			}
		var solutionbox = new Umb(x, y, 128, 128 ,solvenmod(g,modboxes,pos),1 );
		solutionbox.publiclabel = solutionbox.hp;
		solutionbox.c = "purple";
		this.mrboxes.push(solutionbox);
		return solutionbox.hp;
		}
	addrandompuzzlemodn(x,y,n,gap,gs,nums,ops){
		var q=0;
		var solution = 0;
		while((q<100)&&(solution<=0)){
			var g = gs[Math.floor(Math.random()*gs.length)];
			var pos = Math.floor(Math.random()*(n+1));
			if (pos==n){var pos = Math.floor(Math.random()*(n+1));}
			var i=0;
			var modboxes = []
			while(i<n){
				var pnum=nums[Math.floor(Math.random()*nums.length)];
				var pop=ops[Math.floor(Math.random()*ops.length)];
				var amodbox = new Umb(x, y, 64, 64 ,pnum,1 );
				amodbox.label = pop;
				amodbox.publiclabel = pop+pnum;
				modboxes.push(amodbox);
				i++;
				}
			solution = solvenmod(g,modboxes,pos)
			q++;
			}
		if (q==100){console.log("mod n puzzle solution out of bounds 100 times");}
		this.addpuzzlemodn(x,y,gap,g,pos,modboxes);	
		}
	addpuzzlemod2n(x,y,gap,g,pos,modboxes){//for 2 separate rows of bullet mods
		var i=0;
		while(i<modboxes.length){
			modboxes[i].x = x-(modboxes.length-i)*gap/2;
			modboxes[i].y = y;
			modboxes[i].xs = 64;
			modboxes[i].ys = 64;
			modboxes[i].c = "red";
			this.bmboxes.push(modboxes[i]);
			i=i+2;
			}
		var i=1;
		while(i<modboxes.length){
			modboxes[i].x = x+(modboxes.length-i+1)*gap/2; //This assumes row is on opposite side, but positions will be overridden and may instead be above
			modboxes[i].y = y;//+gap;
			modboxes[i].xs = 64;
			modboxes[i].ys = 64;
			modboxes[i].c = "red";
			this.bmboxes.push(modboxes[i]);
			i=i+2;
			}
		var solutionbox = new Umb(x, y, 128, 128 ,solven2mod(g,modboxes,pos),1 );
		solutionbox.publiclabel = solutionbox.hp;
		solutionbox.c = "purple";
		this.mrboxes.push(solutionbox);
		return solutionbox.hp;
		}
	
	addrandompuzzlemod2n(x,y,n,gap,gs,nums,ops){
		var q=0;
		var solution = 0;
		while((q<100)&&(solution<=0)){
			var g = gs[Math.floor(Math.random()*gs.length)];
			var pos = Math.floor(Math.random()*(n+1));
			if (pos==n){var pos = Math.floor(Math.random()*(n+1));}
			var i=0;
			var modboxes = []
			while(i<n){
				var pnum=nums[Math.floor(Math.random()*nums.length)];
				var pop=ops[Math.floor(Math.random()*ops.length)];
				var amodbox = new Umb(x, y, 64, 64 ,pnum,1 );
				amodbox.label = pop;
				amodbox.publiclabel = pop+pnum;
				modboxes.push(amodbox);
				i++;
				}
			solution = solven2mod(g,modboxes,pos)
			q++;
			}
		if (q==100){console.log("mod n2 puzzle solution out of bounds 100 times");}
		this.addpuzzlemod2n(x,y,gap,g,pos,modboxes);	
		}
	addpuzzlemod2nv(x,y,gap,g,pos,modboxes){//for 2 separate rows of bullet mods
		var i=0;
		while(i<modboxes.length){
			modboxes[i].x = x-(modboxes.length-i)*gap/2;
			modboxes[i].y = y;
			modboxes[i].xs = 64;
			modboxes[i].ys = 64;
			modboxes[i].c = "red";
			this.bmboxes.push(modboxes[i]);
			i=i+2;
			}
		var i=1;
		while(i<modboxes.length){
			modboxes[i].x = x-(modboxes.length-i+1)*gap/2; //This assumes row is on opposite side, but positions will be overridden and may instead be above
			modboxes[i].y = y-gap;
			modboxes[i].xs = 64;
			modboxes[i].ys = 64;
			modboxes[i].c = "red";
			this.bmboxes.push(modboxes[i]);
			i=i+2;
			}
		var solutionbox = new Umb(x, y-150, 128, 256 ,solven2mod(g,modboxes,pos),1 );
		solutionbox.publiclabel = solutionbox.hp;
		solutionbox.c = "purple";
		this.mrboxes.push(solutionbox);
		return solutionbox.hp;
		}
	addrandompuzzlemod2nv(x,y,n,gap,gs,nums,ops){
		var q=0;
		var solution = 0;
		while((q<100)&&(solution<=0)){
			var g = gs[Math.floor(Math.random()*gs.length)];
			var pos = Math.floor(Math.random()*(n+1));
			if (pos==n){var pos = Math.floor(Math.random()*(n+1));}
			var i=0;
			var modboxes = []
			while(i<n){
				var pnum=nums[Math.floor(Math.random()*nums.length)];
				var pop=ops[Math.floor(Math.random()*ops.length)];
				var amodbox = new Umb(x, y, 64, 64 ,pnum,1 );
				amodbox.label = pop;
				amodbox.publiclabel = pop+pnum;
				modboxes.push(amodbox);
				i++;
				}
			solution = solven2mod(g,modboxes,pos)
			q++;
			}
		if (q==100){console.log("mod n2 puzzle solution out of bounds 100 times");}
		this.addpuzzlemod2nv(x,y,gap,g,pos,modboxes);	
		}
	addpuzzlemodnb(x,y,gap,g,pos,modboxes){//For a single row of bullet modifiers
		var modx = 0;
		var mody = 0;
		var i=0;
		while(i<modboxes.length){
			modboxes[i].x = x-(i+1)*gap;
			modboxes[i].y = y;
			modboxes[i].xs = 64;
			modboxes[i].ys = 64;
			modboxes[i].c = "red";
			this.bmboxes.push(modboxes[i]);
			i++;
			}
		var solutionbox = new Umb(x, y, 128, 128 ,solvenmodb(g,modboxes,pos),1 );
		var bouncebox = new Umb( x-(modboxes.length+1)*gap, y, 128, 256 ,0,2 );
		//var indicatorbox = new Umb(x-(modboxes.length-pos)*gap, y-500, 128, 128 ,solvenmodb(g,modboxes,pos),1 );
		solutionbox.publiclabel = solutionbox.hp;
		solutionbox.c = "purple";
		this.mrboxes.push(solutionbox);
		this.srboxes.push(bouncebox);
		return solutionbox.hp;
		}
	addrandompuzzlemodnb(x,y,n,gap,gs,nums,ops){
		var q=0;
		var solution = 0;
		while((q<100)&&(solution<=0)){
			var g = gs[Math.floor(Math.random()*gs.length)];
			var pos = Math.floor(Math.random()*(2*n+1));
			if (pos==n){var pos = Math.floor(Math.random()*(n+1));}
			var i=0;
			var modboxes = []
			while(i<n){
				var pnum=nums[Math.floor(Math.random()*nums.length)];
				var pop=ops[Math.floor(Math.random()*ops.length)];
				var amodbox = new Umb(x, y, 64, 64 ,pnum,1 );
				amodbox.label = pop;
				amodbox.publiclabel = pop+pnum;
				modboxes.push(amodbox);
				i++;
				}
			solution = solvenmodb(g,modboxes,pos)
			q++;
			}
		if (q==100){console.log("mod n puzzle solution out of bounds 100 times");}
		this.addpuzzlemodnb(x,y,gap,g,pos,modboxes);	
		}
	cleanup(){//removes objects with 0 size;
		var i=0;
		while(i<this.srboxes.length){
			if ((this.srboxes[i].xs<1)||(this.srboxes[i].ys<1)){
				this.srboxes.splice(i,1);//remove the box if either size is 0 or less
				}
			i++;
			}
		
		}
	deadscore(){
		var numkills = 0;
		var kills = [];
		var i=1;
		while(i<this.mrboxes.length){
			if (this.mrboxes[i].y>=1000000){
				kills.push(this.mrboxes[i].maxhp)
				numkills++;
				this.mrboxes.splice(i,1);
				}
			else{
				i++; 
				}
			}
		return numkills;
		}
	}