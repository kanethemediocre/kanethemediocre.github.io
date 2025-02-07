function loadlevel12(){
	var player0 = new Umb(0,-2200,32,80,100,1);
	player0.c = "blue";
	player0.publiclabel = player0.hp;

	var itemcoin1 =  new Umb(3200,-100,24,24,1,1);
	itemcoin1.label = "$";
	itemcoin1.c = "yellow";
	itemcoin1.publiclabel = "$";

	var gun0 = new CompoundGun(1,1,1);//constructor(numslots,basevalue,baseeffect){
	var cgm0 = new CGMod(1,"+",0,10);//constructor(num,operator,effect,delay){

	var currentlevel = new Warehouse(4000,4000,[0],1,[],[player0]);//constructor(xxs,yys,spawns,gravity,srboxes,mrboxes){
	currentlevel.itboxes = [itemcoin1];
	var sprinklex1 = 1000;
	var sprinkledx = 500;
	var sprinkley = -800;
	var i=0;
	while(i<80){
		currentlevel.addcoin(i*400+Math.floor(Math.random()*300),-1200);
		currentlevel.addcoin(i*400+Math.floor(Math.random()*300),-650);
		i++;
		}
	var sprinklex1 = 1000;
	var sprinkledx = 800;
	var sprinkley = -800;
	var i=0;
	while(i<40){
		var enemy0 = new Umb(sprinklex1+sprinkledx*i,-800,32,80,Math.floor(Math.random()*10)+2,3);
		enemy0.c = "orange";
		enemy0.publiclabel = enemy0.hp;
		enemy0.ai = "randomwalk";
		currentlevel.mrboxes.push(enemy0);
		var enemy1 = new Umb(sprinklex1+sprinkledx*i,-1100-Math.floor(Math.random()*400),40,40,Math.floor(Math.random()*10)+2,3);
		enemy1.c = "orange";
		enemy1.publiclabel = enemy1.hp;
		enemy1.ai = "randomhover";
		currentlevel.mrboxes.push(enemy1);
		i++;
		}	
	currentlevel.addrandomfloaters(-8000,8000,-700,-900,32,32,32,32,"green",0.6,0.85);//addrandomfloaters(xmin,xmax,ymin,ymax,dxmin,dxmax,dymin,dymax,color,density,cohesion){
	//addrandomground3(           xmin,  xmax, ymin,ymax,ystart,yend,dxmin,dxmax,dymin,dymax,hilly,bottomy,color){
	currentlevel.addrandomground3(-8000,8000,-650,-400,-200,  -200,120  ,240,  -160, 160,  0.4,  0, "red");
	currentlevel.cleanup();
	return currentlevel;
	}