class CompoundGun{
	constructor(numslots,basevalue,baseeffect){
		this.baseeffect = "|";//pipe signifies straight flying single projectile
		this.basenum = 1;
		this.basedelay = 30;
		this.timer = 0;
		this.effects = this.baseeffect;//string with characters representing modifiers
		this.bullets = [];
		this.parts = [new CGMod(0)];
		this.basevalue = basevalue
		this.answer = this.basevalue;
		var i=1;
		while(i<numslots){//fill with empty modules
			this.parts.push(new CGMod(0,"+",0,1));//constructor(num,operator,effect,delay){
			this.answer = this.parts[i].operate(this.answer);
			i++;
			}
		}
	reload(){
		this.timer = 0;
		this.effects = this.baseeffect;//string with characters representing modifiers
		this.bullets = [];
		this.parts = [new CGMod(0)];
		this.basevalue = basevalue
		this.answer = this.basevalue;
		var i=1;
		while(i<numslots){//fill with empty modules
			this.effects.push(this.parts[i].effect);//not sure this is how effects are going to work.
			this.answer = this.parts[i].operate(this.answer);
			i++;
			}
		}
	fire(x,y,vx,vy, dir){//might become a character action to avoid these references
		this.timer = this.basedelay;
		var speed = 6;
		if (this.baseeffect=="|"){
			var newbullet = new Umb(x,y,12,12,this.answer,1);//constructor(xx,yy,xxs,yys,hp,solid){
			newbullet.x = newbullet.x+64*dir;
			newbullet.vx = vx+dir*speed;
			newbullet.label = "0";
			newbullet.publiclabel = newbullet.hp;
			return [newbullet];
			}
		if (this.baseeffect=="="){
			var bullets = [];
			var dy = 32;
			var halfspread = dy*((this.basenum-1)/2);
			var i = 0;
			while(i<this.basenum){
				var ay = y - halfspread + dy*i
				var newbullet = new Umb(x,ay,12,12,this.answer,1);//constructor(xx,yy,xxs,yys,hp,solid){
				newbullet.x = newbullet.x+64*dir+i;
				newbullet.vx = vx+dir*speed;
				newbullet.label = "0";
				newbullet.publiclabel = newbullet.hp;
				bullets.push(newbullet);
				i++;
				}
			return bullets;
			}
		if (this.baseeffect=="<"){
			var bullets = [];
			var dtheta = Math.PI*0.125;
			var halfspread = dtheta*((this.basenum-1)/2);
			var dy = 32;
			var i = 0;
			while(i<this.basenum){
				var atheta = 0 - halfspread + dtheta*i;
				var ay =  -1*dy*((this.basenum-1)/2)+dy*i;
				var newbullet = new Umb(x,y+ay,12,12,this.answer,1);//constructor(xx,yy,xxs,yys,hp,solid){
				newbullet.x = newbullet.x+64*dir+i;
				newbullet.vx = vx+(dir*speed)*Math.cos(atheta);
				newbullet.vy = speed*Math.sin(atheta);
				newbullet.label = "0";
				newbullet.publiclabel = newbullet.hp;
				bullets.push(newbullet);
				i++;
				}
			return bullets;
			}
		}
	drawh(x,y){
		var xpointer = x;
		var i=0;
		while(i<this.parts.length){
			i++;
			}
		}
	}