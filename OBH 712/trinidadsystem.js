function loadtrinidadsystem(){
	var ns = new System(0,randname(4),0,0);
	let trin = new Umo(0, 0, 2048, "orange"); //planet initialization/////////////
	trin.name = "Trin";
	let dada = new Umo(0,32000,1024,"green");//2
	dada.name = "Dada";
	dada.setorbit(trin, 32000, 0, 1);
	dada.parentid = 0;
	dada.c2 = "lime";	
	let hijo = new Umo(0, 40000, 1024, "purple"); //3
	hijo.setorbit(trin, 40000, Math.PI, 1);
	hijo.name = "Hijo";
	hijo.parentid = 0;
	hijo.c2 = "magenta";
	let fant = new Umo(1000, 48000, 1024, "blue"); //4
	fant.name = "Fant";
	fant.setorbit(trin, 48000, 0, 1);
	fant.parentid = 0;
	fant.c2 = "teal";
    //dada moons first
	let pesc = new Umo(0, 32000, 200, "brown");//5
	pesc.name = "Pesc";						
	pesc.setorbit(dada, 1500, 0, 1);
	pesc.parentid = 1;
	pesc.c2 = "red";
	let foob = new Umo(600,32000,240, "grey");//6
	foob.name = "Foob";
	foob.setorbit(dada, 2100, 0, 1);
	foob.parentid = 1;
	foob.c2 = "darkgrey";
	let bire = new Umo(-800,32000,360, "white");//7
	bire.name = "Bire";
	bire.setorbit(dada, 2800, 0, 1);
	bire.parentid = 1;
	bire.c2 = "grey";
	let outo = new Umo(0,0,200,"brown");//8
	outo.name = "Outo";
	outo.setorbit(dada,3600,0,1);
	outo.parentid = 1;
	outo.c2 = "purple";
    let jook = new Umo(0,0,150,"brown");//9
	jook.name = "Jook";
	jook.setorbit(dada,4200,0,1);
	jook.parentid = 1;
	jook.c2 = "purple";
    //now hijo moons
	let juga = new Umo(0,0,240,"yellow");//10
	juga.name = "Juga";
	juga.setorbit(hijo,1500,0,1);
	juga.parentid = 2;
	juga.c2 = "beige";
	let larn = new Umo(0,0,200,"blue");//11
	larn.name = "Larn";
	larn.setorbit(hijo,2000,0,1);
	larn.parentid = 2;
	larn.c2 = "teal";
	let erce = new Umo(0,0,320,"brown");//12
	erce.name = "Erce";
	erce.setorbit(hijo,2500,0,1);
	erce.parentid = 2;
	erce.c2 = "firebrick";
	let frog = new Umo(0,0,120,"tan");//13
	frog.name = "Frog";
	frog.setorbit(hijo,3000,0,1);
	frog.parentid = 2;
	frog.c2 = "goldenrod"
    //now fant moons
	let espi = new Umo(0,0,100,"yellow");//14
	espi.name = "Espi";
	espi.setorbit(fant,1500,0,1);
	espi.parentid = 3;
	espi.c2 = "lightyellow";
	let wisp  = new Umo(0,0,150,"grey");//15
	wisp.name = "Wisp";
	wisp.setorbit(fant,2250,0,1);
	wisp.parentid = 3;
	wisp.c2 = "azure";
	let pult  = new Umo(0,0,200,"grey");//16
	pult.name = "Pult";
	pult.setorbit(fant,3000,0,1);
	pult.parentid = 3;
	pult.c2 = "cadetblue";
	let unde  = new Umo(0,0,130,"darkslategrey");//17
	unde.name = "Unde";
	unde.setorbit(fant,3500,0,1);
	unde.parentid = 3;
	unde.c2 = "dimgrey";
	let hont = new Umo(0,0,240,"grey");//18
	hont.name = "Hont";
	hont.setorbit(fant,4000,0,1);
	hont.parentid = 3;
	hont.c2 = "lightgrey";
	let veng  = new Umo(0,0,180,"grey");//19
	veng.name = "Veng";
	veng.setorbit(fant,4400,0,1);
	veng.parentid = 3;
	veng.c2 = "aliceblue";
//stan minisystem
	let stan = new Umo(0,0,512,"green");//20
	stan.name = "Stan";
	stan.setorbit(trin,120000,0,-1);
	stan.parentid = 0;
	stan.c2 = "aquamarine";
	let luci  = new Umo(0,0,180,"grey");//21
	luci.name = "Luci";
	luci.setorbit(stan,1000,0,-1);
	luci.parentid = 19;		
	luci.c2 = "cyan";
	let devo  = new Umo(0,0,160,"grey");//22
	devo.name = "Devo";
	devo.setorbit(stan,1500,0,-1);
	devo.parentid = 19;	
	devo.c2 = "darkcyan";

	ns.planets = [trin,dada,hijo,fant,pesc,foob,bire,outo,jook,juga,larn,erce,frog,espi,wisp,pult,unde,hont,veng,stan,luci,devo];

	let dadaoutpost = new Umo (0,0,128, randcolor());
	dadaoutpost.c2 = randcolor();
	dadaoutpost.parentid = 0;
	dadaoutpost.name = "Ye Olde Spaceship Supply Shoppe";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	dadaoutpost.polytheta = totheta;
	dadaoutpost.polyradius = toradii;
	dadaoutpost.setorbit(ns.planets[0], 32000, 0.4, 1);

	let hijooutpost = new Umo(0,0,128, randcolor());
	hijooutpost.c2 = randcolor();
	hijooutpost.parentid = 0;
	hijooutpost.name = "Not Your Dada's Outfitter";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	hijooutpost.polytheta = totheta;
	hijooutpost.polyradius = toradii;
	hijooutpost.setorbit(ns.planets[0], 40000, Math.PI+0.35, 1);

	let fantoutpost = new Umo(0,0,128, randcolor());
	fantoutpost.c2 = randcolor();
	fantoutpost.parentid = 0;
	fantoutpost.name = "Want-Fant";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	fantoutpost.polytheta = totheta;
	fantoutpost.polyradius = toradii;
	fantoutpost.setorbit(ns.planets[0], 48000, 0.3, 1);

	let stanoutpost = new Umo(0,0,128, randcolor());
	stanoutpost.c2 = randcolor();
	stanoutpost.parentid = 0;
	stanoutpost.name = "Shifty Steve's Questionable Commodities";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	stanoutpost.polytheta = totheta;
	stanoutpost.polyradius = toradii;
	stanoutpost.setorbit(ns.planets[0], 120000, 0.05, -1);

	ns.outposts = [dadaoutpost, hijooutpost, fantoutpost, stanoutpost];

	var i=0;
	while (i<ns.outposts.length){
		var numberofsides = Math.floor(Math.random()*6+7)*2;
		ns.outposts[i].makeemblem(numberofsides,0.1);
		i++;
		}

	let dadashopitems = [upgradeshopitems[0],blasterbuyitems[1],blasterbuyitems[2],blasterbuyitems[3],blasterbuyitems[9],blasterupgradeitems[6],blasterupgradeitems[72],upgradeshopitems[1]];
	let dadashop = new Shop("Ye Olde Space Shoppe",0,"The Gentleman's Outfitter",dadashopitems);

	let hijoshopitems = [upgradeshopitems[0],blasterbuyitems[4],blasterbuyitems[10],blasterbuyitems[7],blasterupgradeitems[73],blasterupgradeitems[10],blasterupgradeitems[62]];
	let hijoshop = new Shop("Not Your Dada's Spaceport",1,"Welcome to our new location",hijoshopitems);

	let fantshopitems = [upgradeshopitems[0],blasterbuyitems[12],blasterbuyitems[13],blasterbuyitems[0],blasterupgradeitems[15],blasterupgradeitems[73],blasterupgradeitems[48]];
	let fantshop = new Shop("Want-Fant",2,"You want it, Fant has it.",fantshopitems);

	let stanshopitems = [upgradeshopitems[0],blasterbuyitems[13],blasterbuyitems[17],blasterbuyitems[8],blasterupgradeitems[13],,blasterupgradeitems[72],blasterupgradeitems[74]];
	let stanshop = new Shop("Shifty Steve's Questionable Commodities",3,"Everything your legitimate business needs.",stanshopitems);
	ns.shops = [dadashop,hijoshop,fantshop,stanshop];
	
	ns.enemypopulate(5,5,15);
	ns.friendlypopulate(3,1,4,8,16);
	
	return ns;
	}