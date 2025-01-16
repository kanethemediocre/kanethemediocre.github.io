//A lot of player keyboard controls are handled in system.playerkeys().
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
	if (keyspressed.includes(event.key)){	
		}
	else {
		keyspressed.push(event.key);
		}	
	if (event.key=="`"){
		editmode = !editmode;
		}
	if (event.key=="c"){
		editcolori++;
		if (editcolori>=editcolors.length){
			editcolori = 0;
			}
		}
	if (event.key=="z"){
		boxmodei++;
		if (boxmodei>=boxmodes.length){
			boxmodei = 0;
			}
		}
	if ((event.key=="+")||(event.key=="=")){
		edithp++;
		}
	if (event.key=="-"){
		edithp--;
		if (edithp<0){
			edithp = 0;
			}
		}
	if (event.key=="x"){
		if (boxmodei==1){
			editaii++;
			if (editaii>=editais.length){
				editaii = 0;
				}			
			}
		else if (boxmodei==2){
			editoperatori++;
			if (editoperatori>=editoperators.length){
				editoperatori = 0;
				}
			}
		else if (boxmodei==3){
			editdiri++;
			if (editdiri>=editdirs.length){
				editdiri = 0;
				}
			}
		else if (boxmodei==4){
			edititemi++;
			if (edititemi>=edititems.length){
				edititemi = 0;
				}
			}
		}
	if (event.key=="v"){
		editsolid++;
		if (editsolid>=3){
			editsolid = 0;
			}			
		}
	if (event.key=="l"){
		leveli++;
		if (leveli>=levels.length){
			leveli = 0;
			}			
		currentlevel = levels[leveli];
		}
	if (event.key=="b"){
		console.log(currentlevel.saveasjs());
		}
  event.preventDefault();// Cancel the default action to avoid it being handled twice
}, true);	//end of event key handling, not clear what the ", true);" is about		


window.addEventListener("keyup", function (event) {
	if (event.defaultPrevented) {
		return; // Do nothing if the event was already processed
		}
	var i=0;
	while(i<keyspressed.length){
		if (keyspressed[i]==event.key){
			keyspressed.splice(i, 1);
			}
		i++;
		}
  event.preventDefault();// Cancel the default action to avoid it being handled twice
}, true);	//end of event key handling, not clear what the ", true);" is about		

