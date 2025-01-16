function edithud(){
	if (mousestate==1){
		var dbxsize = Math.floor(Math.abs( (editx1-(mx + viewx))/2 ));
		var dbysize = Math.floor(Math.abs( (edity1-(my + viewy))/2 ));
		var dbx = Math.floor( (editx1+(mx + viewx))/2 );
		var dby = Math.floor( (edity1+(my + viewy))/2 );
		var dummybox = new Umb(dbx,dby,dbxsize,dbysize,1,1);
		dummybox.c = editcolors[editcolori];
		dummybox.drawboxoutline(viewx,viewy);
		}
	
	context.fillStyle = "lime";
	context.font = "16px Arial";
	context.fillText("` Edit Mode On",25,16);

	context.font = "16px Arial";
	context.fillText("z "+boxmodes[boxmodei]+" Mode",25,64);
	
	context.font = "16px Arial";
	context.fillText("c Color is "+editcolors[editcolori],25,96);
	context.fillStyle = editcolors[editcolori];
	context.fillRect(128,80,20,20);
	
	context.fillStyle = "lime";
	context.font = "16px Arial";
	context.fillText("+- HP is "+edithp,25,128);

		context.font = "16px Arial";
		context.fillText("v Solid is "+editsolid,25,160);

	
	if (boxmodei == 1){
		context.font = "16px Arial";
		context.fillText("x AI selected is "+editais[editaii],25,192);
		}
	
	if (boxmodei == 2){
		context.font = "16px Arial";
		context.fillText("x Operator is "+editoperators[editoperatori],25,192);
		}
	if (boxmodei == 3){
		context.font = "16px Arial";
		context.fillText("x Direction is "+editdirs[editdiri],25,192);
		}		

	if (boxmodei == 4){
		context.font = "16px Arial";
		context.fillText("x Item is "+edititems[edititemi],25,192);
		}
	context.font = "16px Arial";
	context.fillText("b to save level to console as js",25,256);
	
	context.font = "16px Arial";
	context.fillText("l to change level (0-10)",25,288);
	}
