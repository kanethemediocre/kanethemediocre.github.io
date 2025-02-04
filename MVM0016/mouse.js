document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
    mx =  e.clientX +windowmousexoffset;//myplayer.mousexoffset;
	my =  e.clientY +windowmouseyoffset;//+myplayer.mouseyoffset;
	mdir = -1*Math.atan2(mx-canvas.width/6,my-canvas.height/2)+Math.PI/2;
} 
document.addEventListener("mousedown", mouseDownHandler, false);
function mouseDownHandler(e) {
	mousestate = e.buttons;
	if (editmode){
		editx1 = mx + viewx;
		edity1 = my + viewy;
		
		}
	}
document.addEventListener("mouseup", mouseUpHandler, false);
function mouseUpHandler(e) {
    mousestate = e.buttons;
	if (editmode){
		
		//console.log("itried2edit");
		editx2 = mx + viewx;
		edity2 = my + viewy;
		var xsize = Math.floor(Math.abs( (editx1-editx2)/2));
		var ysize = Math.floor(Math.abs((edity1-edity2)/2));
		var xcenter = Math.floor( (editx1+editx2)/2);
		var ycenter = Math.floor( (edity1+edity2)/2);
		var newbox = new Umb(xcenter,ycenter,xsize,ysize,edithp,1);
		newbox.c = editcolors[editcolori];
		if (boxmodei==0){
			newbox.solid = editsolid;
			currentlevel.srboxes.push(newbox);
			}
		else if (boxmodei==1){
			newbox.ai=editais[editaii];
			newbox.publiclabel = newbox.hp;
			currentlevel.mrboxes.push(newbox);
			
			}
		else if (boxmodei==2){
			newbox.label = editoperators[editoperatori];
			newbox.publiclabel = newbox.label + " " + newbox.hp;
			currentlevel.bmboxes.push(newbox);
			}
		else if (boxmodei==3){
			//do direction stuff
			if (editdiri==0){
				newbox.publiclabel = "^";
				newbox.xdir = 0;
				newbox.ydir = -1;
				}
			if (editdiri==1){
				newbox.publiclabel = "v";
				newbox.xdir = 0;
				newbox.ydir = 1;
				}
			if (editdiri==2){
				newbox.publiclabel = ">";
				newbox.xdir = 1;
				newbox.ydir = 0;
				}
			if (editdiri==3){
				newbox.publiclabel = "<";
				newbox.xdir = -1;
				newbox.ydir = 0;
				}
			currentlevel.mmboxes.push(newbox);
			}
		else if (boxmodei==4){
			newbox.label = edititems[edititemi];
			newbox.publiclabel = edititems[edititemi];//make this better, public facing description
			currentlevel.itboxes.push(newbox);
			}
		else if (boxmodei==5){//Stairs
			var stairnum = Math.floor(Math.abs(edity1-edity2)/16)+1;
			currentlevel.addline(editx1,edity1,editx2,edity2,stairnum,editcolors[editcolori]);
			
			}
		else if (boxmodei==6){//solid Stairs
			var stairstep = 20;
			var xdir = (editx2-editx1)/Math.abs(editx2-editx1);
			var ydir = (edity2-edity1)/Math.abs(edity2-edity1);
			var size = Math.abs(edity1-edity2)-Math.abs(edity1-edity2)%stairstep;
			currentlevel.addsolidstair45(editx1,edity1,size,xdir,ydir,stairstep,editcolors[editcolori]);//addsolidstair45(x1,y1,size,xdir,ydir,stairdy,color){//This one works.
			//currentlevel.addsolidstaircase2(editx1,edity1,editx2,edity2,stairstep,editcolors[editcolori]);	//	addsolidstaircase(x1,y1,x2,y2,stairdy,color){
			}
		else if (boxmodei==7){//This is delete mode
			var i=0;
			while(i<currentlevel.srboxes.length){
				if (newbox.collide(currentlevel.srboxes[i])){
					currentlevel.srboxes.splice(i,1);
					}
				else{
					i++;
					}
				}
			var i=0;
			while(i<currentlevel.mrboxes.length){
				if (newbox.collide(currentlevel.mrboxes[i])){
					currentlevel.mrboxes.splice(i,1);
					}
				else{
					i++;
					}
				}
			var i=0;
			while(i<currentlevel.bmboxes.length){
				if (newbox.collide(currentlevel.bmboxes[i])){
					currentlevel.bmboxes.splice(i,1);
					}
				else{
					i++;
					}
				}
			var i=0;
			while(i<currentlevel.mmboxes.length){
				if (newbox.collide(currentlevel.mmboxes[i])){
					currentlevel.mmboxes.splice(i,1);
					}
				else{
					i++;
					}
				}
			var i=0;
			while(i<currentlevel.itboxes.length){
				if (newbox.collide(currentlevel.itboxes[i])){
					currentlevel.itboxes.splice(i,1);
					}
				else{
					i++;
					}
				}

			}
		//console.log(newbox.xs+" "+newbox.ys);
		}

	
	}
document.addEventListener("wheel", mouseWheelHandler, {passive: false});
function mouseWheelHandler(e) {
    e.preventDefault();
    e.stopPropagation();
	return false;
}

