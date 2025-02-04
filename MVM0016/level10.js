function loadlevel10(){
	var floor0 = new Umb(0,1,1,1,0,1);//constructor(xx,yy,xxs,yys,hp,solid)
	floor0.c = "pink";
	var crate0 = new Umb(0,-30,30,30,0,1);
	crate0.c = "brown";
	var bouncyblock0 = new Umb(-300,-130,50,50,0,2);//constructor(xx,yy,xxs,yys,hp,solid)
	bouncyblock0.c = "magenta";
	var player0 = new Umb(0,-2200,32,80,100,1);
	player0.c = "blue";
	player0.publiclabel = player0.hp;
	var enemy0 = new Umb(100,-120,40,100,4,1);
	enemy0.c = "red";
	enemy0.publiclabel = enemy0.hp;

	var floor1 = new Umb(0,30,400,30,0,1);//These are the real floor0 values, just testing the restore function
	floor1.c = "green"
	var floor1list = floor1.saveaslist();
	floor0.restorefromlist(floor1list);
	var i=0;
	while(i<40){
		var enemy0 = new Umb(100,-120,40,100,4,1);
		enemy0.c = "red";
		enemy0.publiclabel = enemy0.hp;
		
		i++;
		}
	var spawn0 = new Umb(-300,100,16,16,0,0);
	var bulletmod0 = new Umb(1600,-100,100,100,2,0);
	bulletmod0.label = "*";
	bulletmod0.publiclabel = bulletmod0.label + " " + bulletmod0.hp;
	var bulletmod1 = new Umb(2900,-150,100,100,2,0);
	bulletmod1.label = "+";
	bulletmod1.publiclabel = bulletmod1.label + " " + bulletmod1.hp;
	var bulletmod2 = new Umb(4200,-50,100,100,2,0);
	bulletmod2.label = "/";
	bulletmod2.publiclabel = bulletmod2.label + " " + bulletmod2.hp;
	var bulletmod3 = new Umb(6500,-150,100,100,1,0);
	bulletmod3.label = "-";
	bulletmod3.publiclabel = bulletmod3.label + " " + bulletmod3.hp;
	
	var itemgun2 =  new Umb(200,-100,24,24,1,1);
	itemgun2.label = "g2";
	itemgun2.c = "purple";
	itemgun2.publiclabel = "2";
	var itemgun3 =  new Umb(1400,-100,24,24,1,1);
	itemgun3.label = "g3";
	itemgun3.c = "purple";
	itemgun3.publiclabel = "3";
	var itemgun4 =  new Umb(2200,-100,24,24,1,1);
	itemgun4.label = "g4";
	itemgun4.c = "purple";
	itemgun4.publiclabel = "4";
	var itemhp20=  new Umb(3200,-100,24,24,1,1);
	itemhp20.label = "hp20";
	itemhp20.c = "green";
	itemhp20.publiclabel = "+20";

	var gun0 = new CompoundGun(1,1,1);//constructor(numslots,basevalue,baseeffect){
	var cgm0 = new CGMod(1,"+",0,10);//constructor(num,operator,effect,delay){

	var currentlevel = new Warehouse(4000,4000,[0],1,[floor0,crate0,bouncyblock0],[player0,enemy0]);//constructor(xxs,yys,spawns,gravity,srboxes,mrboxes){
	currentlevel.itboxes = [itemgun2,itemgun3,itemgun4,itemhp20];
	var sprinklex1 = 1000;
	var sprinkledx = 500;
	var sprinkley = -800;
	var i=0;
	while(i<40){
		var enemy0 = new Umb(sprinklex1+sprinkledx*i,-500,32,80,Math.floor(Math.random()*10),3);
		enemy0.c = "orange";
		enemy0.publiclabel = enemy0.hp;
		enemy0.ai = "randomwalk";
		currentlevel.mrboxes.push(enemy0);
		i++;
		}
	currentlevel.bmboxes.push(bulletmod0);
	currentlevel.bmboxes.push(bulletmod1);
	currentlevel.bmboxes.push(bulletmod2);
	currentlevel.bmboxes.push(bulletmod3);
	//addrandomground3(           xmin,  xmax, ymin,ymax,ystart,yend,dxmin,dxmax,dymin,dymax,hilly,bottomy,color){
	currentlevel.addrandomground3(-13000,13000,-600,-200,-200,  -200,120  ,240,  -160, 160,  0.4,  0, "red");
	currentlevel.cleanup();
	return currentlevel;
	}