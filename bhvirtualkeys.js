function allvkeys(xmax,ymax){   //constructor(key,label,x,y){
	var avk=new Virtualkey("a","A",-100,-100);//constructor(key,label,x,y){
	var bvk=new Virtualkey("b","B",24,151);//constructor(key,label,x,y){
	var cvk=new Virtualkey("c","C",xmax/2-112,16);//constructor(key,label,x,y){
	var gvk=new Virtualkey("g","G",24,181);//constructor(key,label,x,y){
	//var hvk=new Virtualkey("h","H",-100,-100);//constructor(key,label,x,y){
	var jvk=new Virtualkey("j","J",xmax/2+120,ymax-40);//constructor(key,label,x,y)
	var mvk=new Virtualkey("m","M",88,ymax-336);//constructor(key,label,x,y)
	var nvk=new Virtualkey("n","N",xmax-104,ymax-216);//constructor(key,label,x,y)
	var zvk=new Virtualkey("z","Z",xmax-72,344);//constructor(key,label,x,y)
	var spacebarvk=new Virtualkey(" ","Spacebar",xmax/2-136,ymax-40);//constructor(key,label,x,y)
	var lbracketvk=new Virtualkey("[","[",xmax-332,16);//constructor(key,label,x,y)
	var rbracketvk=new Virtualkey("]","]",xmax-332,48);//constructor(key,label,x,y)
	var gtvk=new Virtualkey(".",">",xmax-40,ymax-216);//constructor(key,label,x,y)
	var ltvk=new Virtualkey(",","<",xmax-72,ymax-216);//constructor(key,label,x,y)
	var plusvk=new Virtualkey("+","+",24,ymax-336);//constructor(key,label,x,y)
	var minusvk=new Virtualkey("-","-",56,ymax-336);//constructor(key,label,x,y)
	return [avk,bvk,cvk,gvk,jvk,mvk,nvk,zvk,spacebarvk,lbracketvk,rbracketvk,gtvk,ltvk,plusvk,minusvk];
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
	
	*/