 
class Message{//This is really just a struct for now.  The draw function is handled in by the player class.
	constructor(mtext,mx, my, start, end){
		this.text = mtext;
		this.x = mx;
		this.y = my;
		this.start = start;
		this.end = end;
		this.c = "white";
		}
	}	