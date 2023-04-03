function optionsvkeys(xmax,ymax){   //constructor(key,label,x,y){
	var mvp=new Virtualkey("a","Music Volume +",xmax-136,ymax-216);//constructor(key,label,x,y){
	var mvm=new Virtualkey("b","Music Volume -",24,187);//constructor(key,label,x,y){
	var svp=new Virtualkey("c","Sound Volume +",xmax/2-112,16);//constructor(key,label,x,y){
	var svm=new Virtualkey("g","Sound Volume -",24,217);//constructor(key,label,x,y){
	//var hvk=new Virtualkey("h","H",-100,-100);//constructor(key,label,x,y){
	var ss=new Virtualkey("j","Skip Song",160,24);//constructor(key,label,x,y)
	var sta=new Virtualkey("m","Starfield toggle",88,ymax-336);//constructor(key,label,x,y)
	var vka=new Virtualkey("n","Virtual Keys Active",xmax-104,ymax-216);//constructor(key,label,x,y)
	var vkv=new Virtualkey("q","Virtual Keys Visible",xmax-168,ymax-216);//constructor(key,label,x,y){
	var fup=new Virtualkey("d","Enable Fullscreen",xmax-72,344);//constructor(key,label,x,y)
	var fum=new Virtualkey(" ","Exit Fullscreen",xmax/2-136,ymax-40);//constructor(key,label,x,y)
	var ttt=new Virtualkey("[","Touchscreen Thrust Toggler",xmax-332,-160);//constructor(key,label,x,y) //disabled by offscreen placement
	return [mvp,mvm,svp,svm,ss,sta,vka,vkv,fup,fum,ttt];
}
function optionsactions(action){
	
	
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