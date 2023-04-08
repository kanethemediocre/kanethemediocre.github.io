function optionsvkeys(xmax,ymax){   //constructor(key,label,x,y){
	var mvp=new Virtualkey(0,"Music Volume +",200,100);//constructor(key,label,x,y){
	var mvm=new Virtualkey(1,"Music Volume -",400,100);//constructor(key,label,x,y){
	var svp=new Virtualkey(2,"Sound Volume +",200,140);//constructor(key,label,x,y){
	var svm=new Virtualkey(3,"Sound Volume -",400,140);//constructor(key,label,x,y){
	//var hvk=new Virtualkey("h","H",-100,-100);//constructor(key,label,x,y){
	var ss=new Virtualkey(4,"Skip Song",200,180);//constructor(key,label,x,y)
	var ttt=new Virtualkey(5,"Touchscreen Thrust Toggler",200,240);//constructor(key,label,x,y) //disabled by offscreen placement
	var sta=new Virtualkey(6,"Starfield toggle",200,280);//constructor(key,label,x,y)
	var vka=new Virtualkey(7,"Virtual Keys Active",200,320);//constructor(key,label,x,y)
	var vkv=new Virtualkey(8,"Virtual Keys Visible",400,320);//constructor(key,label,x,y){
	var fup=new Virtualkey(9,"Enable Fullscreen",200,360);//constructor(key,label,x,y)
	var fum=new Virtualkey(10,"Exit Fullscreen",400,360);//constructor(key,label,x,y)

	return [mvp,mvm,svp,svm,ss,sta,vka,vkv,fup,fum,ttt];
}
function optionsactions(action,theplayer){
	switch(action){
		case 0://music+
			musicvolume = musicvolume + 0.1;
			if (musicvolume>1){musicvolume = 1;}
			setmusicvolume(musicvolume);
			break;
		case 1://music-
			musicvolume = musicvolume - 0.1;
			if (musicvolume<0){musicvolume = 0;}
			setmusicvolume(musicvolume);
			break;
		case 2://sound+
			soundvolume = soundvolume + 0.1;
			if (soundvolume>1){soundvolume = 1;}
			setsoundvolume(soundvolume);
			cashsound1.play();			
			break;
		case 3://sound-
			soundvolume = soundvolume - 0.1;
			if (soundvolume<0){soundvolume = 0;}
			setsoundvolume(soundvolume);
			cashsound1.play();
			break;
		case 4://skip
			pausemusic();
			nextsong();
			break;
		case 5://touch thrust controls
			
			break;
		case 6://starfield
			if (starmode==0){starmode=1;}
			else{starmode=0;}
			break;
		case 7://vk active
			if (theplayer.vkactive){theplayer.vkactive = false;}
			else{theplayer.vkactive = true;}
			break;
		case 8://vk visible
			if (theplayer.vkvisible){theplayer.vkvisible = false;}
			else{theplayer.vkvisible = true;}
			break;
		case 9://fullscreen
			openFullscreen(); //No fullscreen exit.  Javascript feels defective, fullscreen exit code doesn't work.
			theplayer.mousexoffset = fullscreenmousexoffset;
			theplayer.mouseyoffset = fullscreenmouseyoffset; 
			break;
		case 10:

			break;
		}
	}
/*
	drawaskey(32,167,"B","white");
	drawaskey(32,197,"G","white");
	drawaskey(canvas.width/2-104,32,"C","white");
	drawaskey(canvas.width/2-128,canvas.height-24," ","white");
	drawaskey(canvas.width/2+128,canvas.height-24,"J","white");
	drawaskey(canvas.width-64,360,"Z","white");
	
	drawaskey(canvas.width-324,32,"[","white");
	drawaskey(canvas.width-324,64,"]","white");
	drawaskey(canvas.width-324,96,"T","white");
	drawaskey(32,canvas.height-320,"+","white");
	drawaskey(64,canvas.height-320,"-","white");
	drawaskey(96,canvas.height-320,"M","white");
	drawaskey(canvas.width-32,canvas.height-200,">","white");
	drawaskey(canvas.width-64,canvas.height-200,"<","white");
	drawaskey(canvas.width-96,canvas.height-200,"N","white");
	
			drawaskeyspecial(700,160,60,24,"Up","white");
		drawaskeyspecial(700,200,60,24,"Down","white");
			drawaskeyspecial(480,32,128,24,"Backspace","white");
		drawaskeyspecial(800,180,80,24,"Enter","white");
		drawaskeyspecial(800,140,60,24,"Up","white");
		drawaskeyspecial(800,220,60,24,"Down","white");
	*/