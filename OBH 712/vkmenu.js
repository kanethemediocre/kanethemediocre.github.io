class Vkmenu{
	constructor(vkeys,x,y,xs,ys,title){
		this.x = x;
		this.y = y;
		this.xs = xs;
		this.ys = ys;
		this.vkeys = vkeys;
		this.title = title;
		this.c = "white";
		this.display = false;
		this.active = false;
		}
	draw(){
		if (this.display){
			context.fillStyle = "#080808";
			context.fillRect(this.x,this.y,this.xs,this.ys);
			context.beginPath();
			context.strokeStyle = this.c//systems[ps].outposts[systems[ps].players[0].dockstate].c2;//Global scope here, very bad, also in drawpolarpoly
			context.rect(this.x,this.y,this.xs,this.ys);
			context.stroke();
			var i=0;
			while (i<this.vkeys.length){
				this.vkeys[i].draw();
				i++;
				}
			}
		}
	check(xx,yy){
		var vkeypressed = false;
		var vkeyaction = -1;
		var i=0;
		while(i<this.vkeys.length){
			//console.log("itried");
			if (this.vkeys[i].inside(xx,yy)){//mouseyoffset is needed to help support bad / fake fullscreen browser implementation
				vkeyaction = this.vkeys[i].key;
				i=this.vkeys.length; //On loop exit i=vkeys.length+1 if triggered, otherwise i=vkeys.length after last iteration.
				vkeypressed = true;
				}
			i++;
			}
		return vkeyaction;
		}
	checkzones(xx,yy,xs,ys,mx,my,nx,ny){//x,y,x size, y size, mouse x, mouse y, number x, number y
		if ((mx>xx)&&(mx<(xx+nx*xs))&&(my>yy)&&(my<(yy+ny*ys))){//are we even in bounds
			var clickx = Math.floor((mx - xx)/xs);
			var clicky = Math.floor((my - yy)/ys);
			return [clickx,clicky];		
			}	
		else {
			return [-1,-1];
			}
		}
	}
