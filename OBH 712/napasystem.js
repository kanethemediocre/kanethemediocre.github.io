function loadnapasystem(){
	var ns = new System(0,randname(4),0,0);
	let napa = new Umo(0, 0, 1600, "orange"); //planet initialization/////////////
	napa.name = "Napa";
	let vers = new Umo(0,5000,180,"brown");//1//initial position irrelevant
	vers.name = "vers";
	vers.setorbit(napa, 5000, 0, 1);
	vers.parentid = 0;
	vers.c2 = "darkred";
	let aris = new Umo(0,8000,260,"green");//2
	aris.name = "aris";
	aris.setorbit(napa, 8000, 0, 1);
	aris.parentid = 0;
	aris.c2 = "lime";	
	let luxe = new Umo(0, 12000, 230, "purple"); //3
	luxe.setorbit(napa, 12000, 0, 1);
	luxe.name = "luxe";
	luxe.parentid = 0;
	luxe.c2 = "magenta";
	let elle = new Umo(1000, 16000, 200, "blue"); //4
	elle.name = "elle";
	elle.setorbit(napa, 16000, 0, 1);
	elle.parentid = 0;
	elle.c2 = "teal";
	ns.planets = [napa,vers,aris,luxe,elle];

	let arisoutpost = new Umo (0,0,128, randcolor());
	arisoutpost.c2 = randcolor();
	arisoutpost.parentid = 0;
	arisoutpost.name = "Ye Olde Spaceship Supply Shoppe";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	arisoutpost.polytheta = totheta;
	arisoutpost.polyradius = toradii;
	arisoutpost.setorbit(ns.planets[0], 8000, 0.3, 1);
	let luxeoutpost = new Umo(0,0,128, randcolor());
	luxeoutpost.c2 = randcolor();
	luxeoutpost.parentid = 0;
	luxeoutpost.name = "Not Your Dada's Outfitter";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	luxeoutpost.polytheta = totheta;
	luxeoutpost.polyradius = toradii;
	luxeoutpost.setorbit(ns.planets[0], 12000, 0.25, 1);
	ns.outposts = [arisoutpost, luxeoutpost];

	var i=0;
	while (i<ns.outposts.length){
		var numberofsides = Math.floor(Math.random()*6+7)*2;
		ns.outposts[i].makeemblem(numberofsides,0.1);
		i++;
		}

	var aristurret1 = new Turret("friendly",ns.planets[2],0,330);
	var aristurret2 = new Turret("friendly",ns.planets[2],Math.PI/2,330);
	var aristurret3 = new Turret("friendly",ns.planets[2],Math.PI,330);
	var aristurret4 = new Turret("friendly",ns.planets[2],Math.PI*1.5,330);
	var luxeturret1 = new Turret("friendly",ns.planets[3],0,300);
	var luxeturret2 = new Turret("friendly",ns.planets[3],Math.PI/2,300);
	var luxeturret3 = new Turret("friendly",ns.planets[3],Math.PI,300);
	var luxeturret4 = new Turret("friendly",ns.planets[3],Math.PI*1.5,300);
	luxeturret1.bombs = [new Umo(0,0,8,"purple"), new Umo(0,0,8,"blue"), new Umo(0,0,8,"green"), new Umo(0,0,8,"yellow"),new Umo(0,0,8,"orange"),new Umo(0,0,8,"red")];
	luxeturret2.bombs = [new Umo(0,0,8,"purple"),new Umo(0,0,8,"blue"),new Umo(0,0,8,"green"),new Umo(0,0,8,"yellow"),new Umo(0,0,8,"orange"),new Umo(0,0,8,"red")];
	luxeturret3.bombs = [new Umo(0,0,8,"purple"),new Umo(0,0,8,"blue"),new Umo(0,0,8,"green"),new Umo(0,0,8,"yellow"),new Umo(0,0,8,"orange"),new Umo(0,0,8,"red")];
	luxeturret4.bombs = [new Umo(0,0,8,"purple"),new Umo(0,0,8,"blue"),new Umo(0,0,8,"green"),new Umo(0,0,8,"yellow"),new Umo(0,0,8,"orange"),new Umo(0,0,8,"red")];
	var arstturret1 = new Turret("friendly",ns.outposts[0],Math.PI*1.5,150);
	var arstturret2 = new Turret("friendly",ns.outposts[0],Math.PI*0.5,150);
	var lustturret1 = new Turret("friendly",ns.outposts[1],Math.PI*1.5,150);
	var lustturret2 = new Turret("friendly",ns.outposts[1],Math.PI*0.5,150);
	ns.turrets = [aristurret1,aristurret2,aristurret3,aristurret4,luxeturret1,luxeturret2,luxeturret3,luxeturret4,arstturret1,arstturret2,lustturret1,lustturret2];

	let arisshopitems = [upgradeshopitems[0],blasterbuyitems[5],blasterbuyitems[6],blasterbuyitems[11],blasterbuyitems[14],blasterupgradeitems[0],blasterupgradeitems[11],blasterupgradeitems[46],blasterupgradeitems[67]];
	let arisshop = new Shop("The Foob",0,"yaaaaa",arisshopitems);
	let luxeshopitems = [upgradeshopitems[0],blasterbuyitems[10],blasterbuyitems[13],blasterbuyitems[16],blasterupgradeitems[76],blasterupgradeitems[18],blasterupgradeitems[65]];
	let luxeshop = new Shop("The Luxemburger",1,"mmmmmm",luxeshopitems);
	ns.shops = [arisshop,luxeshop];
	
	ns.enemypopulate(5,5,15);
	ns.friendlypopulate(3,1,4,8,16);
	
	return ns;
	}