
function checkzones(xx,yy,xs,ys,mx,my,nx,ny){//x,y,x size, y size, mouse x, mouse y, number x, number y
	if ((mx>xx)&&(mx<(xx+nx*xs))&&(my>yy)&&(my<(yy+ny*ys))){//are we even in bounds
		var clickx = Math.floor((mx - xx)/xs);
		var clicky = Math.floor((my - yy)/ys);
		return [clickx,clicky];		
		}	
	else {
		return [-1,-1];
		}
	}

document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
	var myplayer = systems[ps].players[myi];
    mdx =  e.clientX - canvas.width/2+myplayer.mousexoffset;
	mdy =  e.clientY - canvas.height/2+myplayer.mouseyoffset;
	//moused = -1*Math.atan2(mdx,mdy) - Math.PI/2;
	//mousedistance = Math.sqrt(mdx*mdx+mdy*mdy);
	myplayer.moused = -1*Math.atan2(mdx,mdy) - Math.PI/2;
	myplayer.mousedistance = Math.sqrt(mdx*mdx+mdy*mdy);
} 
document.addEventListener("mousedown", mouseDownHandler, false);
function mouseDownHandler(e) {
	action = -1;
	var myplayer = systems[ps].players[myi];
	if (myplayer.planetmenu == 1){
		myplayer.planetmenu = 0;
		return;
		}
	if (myplayer.options == 1){
		var vkeypressed = false;
		var vkeyaction = -1;
		var i=0;
		while(i<ovkeys.length){
			//console.log("itried");
			if (ovkeys[i].inside(e.clientX+myplayer.mousexoffset,e.clientY+myplayer.mouseyoffset)){//mouseyoffset is needed to help support bad / fake fullscreen browser implementation
				action = ovkeys[i].key;
				i=ovkeys.length; //On loop exit i=vkeys.length+1 if triggered, otherwise i=vkeys.length after last iteration.
				vkeypressed = true;
				}
			i++;
			}
		optionsactions(action,myplayer);
		}
	if (myplayer.options == 2){
		var action = optionsmenu2.check(e.clientX +myplayer.mousexoffset,e.clientY+myplayer.mouseyoffset);
		options2actions(action,myplayer);
		}
	else{
		myplayer.mousestate = e.buttons;
		if (myplayer.mousestate ==2){
			//psimsys = systems[ps].simcopy(0);
			}
		myplayer.moused = -1*Math.atan2(mdx,mdy) - Math.PI/2;
		myplayer.mousedistance = Math.sqrt(mdx*mdx+mdy*mdy);
		//console.log(e.clientX+ " " +e.clientY);
		if (myplayer.vkactive == true){
			var vkeyused = false;
			var i=0;
			while(i<vkeys.length){
				if (vkeys[i].inside(e.clientX+myplayer.mousexoffset,e.clientY+myplayer.mouseyoffset)){//mouseyoffset is needed to help support bad / fake fullscreen browser implementation
					myplayer.input = vkeys[i].key;
					systems[ps].playerkeys();
					vkeyused = true;
					i=vkeys.length; //Exit loop.
					}
				i++;
				}
			if ((myplayer.dockstate>=0)&&(!vkeyused)){
				var i=0;
				while(i<svkeys.length){
					if (svkeys[i].inside(e.clientX+myplayer.mousexoffset,e.clientY+myplayer.mouseyoffset)){//mouseyoffset is needed to help support bad / fake fullscreen browser implementation
						myplayer.input = svkeys[i].key;
						systems[ps].playerkeys();
						vkeyused = true;
						i=svkeys.length; //Exit loop.
						}
					i++;
					}
				//This part adds a check clicking on a shop item
				//some reference lines from elsewhere:
				//function checkzones(xx,yy,xs,ys,mx,my,nx,ny){//x,y,x size, y size, mouse x, mouse y, number x, number y
				//context.rect(x-12,y+20+item*16,400,16);
				//systems[ps].shops[myplayer.dockstate].drawbuymenu(280,64,myplayer.shopitem,myplayer);
				if (myplayer.shopmode==0){//Applies to item purchase menu only
					var numitems = systems[ps].shops[myplayer.dockstate].inv.length;
					}
				else if (myplayer.shopmode==1){//applies to cargo sales menu only
					var numitems = myplayer.inventory.cargo.length;
					}
				else if (myplayer.shopmode==2){//applies to mission menu only
					var numitems = systems[ps].shops[myplayer.dockstate].missions.length;
					}
				else {//This should never happen.
					console.log("udungoofed");
					numitems = 0;
					}
				console.log(numitems);
				var clickitem = checkzones(268,84,400,16,e.clientX+myplayer.mousexoffset,e.clientY+myplayer.mouseyoffset,1,numitems);
				if (myplayer.shopmode==2){//Cargo menu is in a different spot.
					clickitem = checkzones(268,116,400,16,e.clientX+myplayer.mousexoffset,e.clientY+myplayer.mouseyoffset,1,numitems);
					}
				if (clickitem[1]>=0){//If a shop item was clicked,
					console.log("shop item in bounds "+clickitem[1]);
					if (myplayer.shopitem==clickitem[1]){
						myplayer.input = "Enter";
						systems[ps].playerkeys();
						vkeyused = true;
						}
					else{
						myplayer.shopitem = clickitem[1]
						}
					}
				}
			if ((myplayer.journalactive>0)&&(!vkeyused)){
				var i=0;
				while(i<jvkeys.length){
					if (jvkeys[i].inside(e.clientX+myplayer.mousexoffset,e.clientY+myplayer.mouseyoffset)){//mouseyoffset is needed to help support bad / fake fullscreen browser implementation
						myplayer.input = jvkeys[i].key;
						systems[ps].playerkeys();
						vkeyused = true;
						i=jvkeys.length; //Exit loop.
						}
					i++;
					}
				}
			if (!vkeyused){ systems[ps].playermice(); } //If loop exited without vkeys trigger, meaning no buttons were clicked
			}
		else { systems[ps].playermice();}
		}
	}
document.addEventListener("mouseup", mouseUpHandler, false);
function mouseUpHandler(e) {
var myplayer = systems[ps].players[0];
myplayer.mousestate = e.buttons;
myplayer.ship.cthrust = 0;
}
document.addEventListener("wheel", mouseWheelHandler, {passive: false});
function mouseWheelHandler(e) {
	var myplayer = systems[ps].players[0];
	if (e.deltaY>0){myplayer.cyclewep(1);}
	if (e.deltaY<0){myplayer.cyclewep(-1);}
    e.preventDefault();
    e.stopPropagation();
	return false;
}



window.addEventListener("gamepadconnected", (e) => {
	gamepad = e
 console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
  console.log(e.gamepad.buttons);
  gpc = true;
});


window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});




function fullscreenchanged(event) {
	var myplayer = systems[ps].players[0];
  if (document.fullscreenElement) {
    console.log(`entered fullscreen mode.`);
	myplayer.mousexoffset = fullscreenmousexoffset;
	myplayer.mouseyoffset = fullscreenmouseyoffset;
	
  } else {
    console.log('Leaving fullscreen mode.');
	myplayer.mousexoffset = windowmousexoffset;
	myplayer.mouseyoffset = windowmouseyoffset;
  }
}

//const el = document.getElementById('fullscreen-div');
const e1 = document.getElementById('gameCanvas');
e1.addEventListener('fullscreenchange', fullscreenchanged);

/*

document.querySelector('#scrollable').addEventListener('wheel', preventScroll, {passive: false});

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

*/