class Meq{
	constructor(question,solution){
		this.q = question;
		this.s = solution;
		this.xx = 0;
		this.yy = 0; //actual screen coordinates
		this.v0 = 0;//These are variables that may describe the question
		this.v1 = 0;
		this.v2 = 0;
		this.v3 = 0;
		}
	draw(){
		//console.log("triedtodraw");
		context.strokeStyle = this.c;
		context.lineWidth = 2;
		context.fillStyle = this.c;
		context.font='16px Courier New';
		context.fillText(this.q,this.xx,this.yy);
		//context.beginPath();
		}
	
	}