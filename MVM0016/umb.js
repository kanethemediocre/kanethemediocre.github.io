class Umb{
	constructor(xx,yy,xxs,yys,hp,solid){
		this.x = xx;
		this.y = yy; //coordinates of center
		this.vx = 0;
		this.vy = 0;
		this.xs = xxs;
		this.ys = yys;
		this.hp = hp;
		this.maxhp = hp;
		this.timer = 0;
		this.maxtimer = 3600;
		this.solid = solid;
		this.c = "white";//maybe get more complicated than one color in the future
		this.label = "";
		this.publiclabel = "00000";
		this.lc = "black";
		this.grounded = false;
		this.xdir = 1;
		this.ydir = 0;
		this.ai = "none";
		}
	bmfunc(g){
		var s = g;
		if (this.label == "*"){
			//console.log("*tried");
			s = s * this.hp;
			}
		else if (this.label == "/"){
			var result = s/ this.hp;
			if (result==Math.floor(result)){//division successful!
				s = result;
				}
			else{
				s = 0;
				}
			}
		else if (this.label == "+"){
			s = s + this.hp;
			}
		else if (this.label == "-"){
			s = s - this.hp;
			//if (s<0){s = 0;}
			}
		return s;
		}
	saveaslist(){
		return [this.x,this.y,this.vx,this.vy,this.xs,this.ys,this.hp,this.maxhp,this.timer,this.maxtimer,this.solid,this.c,this.label,this.publiclabel,this.lc,this.grounded,this.xdir,this.ydir,this.ai];
		}
	saveasjs(){
		var thecode = "var it = new Umb("+this.x+","+this.y+","+this.xs+","+this.ys+","+this.maxhp+","+this.solid+");  \n it.vx="+this.vx+";\n it.vy="+this.vy+";\n "
		thecode = thecode+"it.maxtimer="+this.maxtimer+"; \n it.c='"+this.c+"'; \n it.label='"+this.label+"'; \n it.publiclabel='"+this.publiclabel+"'; \n";
		thecode = thecode+"it.grounded="+this.grounded+"; \n it.xdir="+this.xdir+"; \n it.ydir="+this.ydir+"; \n it.ai='"+this.ai+"'; \n";
		return thecode;
		}
	savecopy(){
		var copy = new Umb(this.x,this.y,this.xs,this.ys,this.maxhp,this.solid);
		copy.hp = this.hp;
		copy.timer = this.timer;
		copy.maxtimer = this.maxtimer;
		copy.c = this.c;
		copy.label = this.label;
		copy.publiclabel = this.publiclabel;
		copy.lc = this.lc;
		copy.xdir = this.xdir;
		copy.ydir = this.ydir;
		copy.ai = this.ai;
		return copy;
		}
	restorefromlist(list){
		this.x = list[0];
		this.y = list[1];
		this.vx = list[2];
		this.vy = list[3];
		this.xs = list[4];
		this.ys = list[5];
		this.hp = list[6];
		this.maxhp = list[7];
		this.timer = list[8];
		this.maxtimer = list[9];
		this.solid = list[10];
		this.c = list[11];
		this.label = list[12];
		this.publiclabel = list[13];
		this.lc = list[14];
		this.grounded = list[15];
		this.xdir = list[16];
		this.ydir = list[17];
		this.ai = list[18];
		console.log(this);
		}
	collide(that){//checks for collision between to umb s
		var adx = Math.abs(this.x - that.x);
		var ady = Math.abs(this.y - that.y);
		var totalxs = this.xs+that.xs;
		var totalys = this.ys+that.ys;
		if ((adx<totalxs) && (ady<totalys)){ return true; }
		else { return false; }
		}
	terraincollide(that){//assumes collision is happening
		var maxstep = 32;
		var totalxs = this.xs+that.xs;
		var totalys = this.ys+that.ys;
		var dx = this.x-that.x;
		var dy = this.y - that.y;
		
		var overlapx = totalxs - Math.abs(dx);
		var overlapy = totalys - Math.abs(dy);
		//console.log(overlapy)
		if (overlapx<overlapy){//resolve by modifying x
			if ((overlapy<maxstep)&&(dy<0)){this.y = this.y - overlapy;}
			else{
				if (dx>0){//this feels avoidable but ok
					this.x = this.x + overlapx;
					}
				else {
					this.x = this.x - overlapx;
					}
				if ((this.solid==2)||(that.solid==2)){//solid==2 is elastic material
					this.vx = -1*this.vx;
					}
				else{
					this.vx = 0;
					}
				}
			}
		else{//resolve by modifying y
			if (dy>0){//this feels avoidable but ok
				this.y = this.y + overlapy;
				}
			else {
				this.y = this.y - overlapy;
				this.grounded = true;
				}
			if ((this.solid==2)||(that.solid==2)){//solid==2 is elastic material
				this.vy = -1*this.vy;
				}
			else{
				this.vy = 0;
				}
			}						
		}
	drag(){
		var basedrag = 0.96;
		var overspeed = 12;
		var overspeeddrag = 0.9;
		this.vx = this.vx * basedrag;
		this.vy = this.vy * basedrag;
		if (Math.abs(this.vx)>overspeeddrag){
			this.vx = this.vx*overspeeddrag;
			}
		}
	drawboxfill(viewx,viewy){
		var x = this.x - viewx;//coordinates of center as drawn
		var y = this.y - viewy;
		context.fillStyle = this.c;
		context.fillRect(x-this.xs,y-this.ys,this.xs*2,this.ys*2);
		context.font = "16px Arial";
		context.fillText(this.label,this.x,this.y);
		}
	drawboxoutline(viewx,viewy){
		var x = this.x - viewx;//coordinates of center as drawn
		var y = this.y - viewy;
		context.strokeStyle = this.c;
		context.beginPath();
		context.rect(x-this.xs,y-this.ys,this.xs*2,this.ys*2);
		context.stroke();
		//context.font = "16px Arial";
		//context.fillText(this.publiclabel,x,y);
		}	
	drawlabel(viewx,viewy){
		var x = this.x - viewx - 6;//coordinates of center as drawn
		var y = this.y - viewy + 6;
		context.fillStyle = this.c;
		context.font = "16px Arial";
		context.fillText(this.publiclabel,x,y);
		}
	drawdude(viewx,viewy){
		var headx = this.x - viewx;
		var heady = this.y - viewy - this.ys*0.75;
		var headsize = 0.2;
		var torsox = this.x;
		var torsoy = this.y;
		var shoulderx = this.x - viewx;
		var shouldery = this.y - viewy - this.ys*0.5;
		var groinx = this.x - viewx;
		var groiny = this.y - viewy + this.ys*0.25;
	
		var foot1x = this.x - viewx - this.xs*0.75;
		var foot1y = this.y-viewy-this.ys*0.98;
		var foot2x = this.x - viewx + this.xs*0.75;
		var foot2y = this.y-viewy-this.ys*0.98;
		
		}
	}
