function loadsoolsystem(){
	var ns = new System(1,randname(4),0,0);
	let sool = new Umo(0, 0, 2048, "orange"); //planet initialization/////////////
	sool.name = 'Sool';
	let murc = new Umo(0,8000,150,"brown");//1//initial position irrelevant
	murc.name = "Murc";
	murc.setorbit(sool, 8000, 0, 1);
	murc.parentid = 0;
	murc.c2 = "darkred";
	let vnus = new Umo(0,14000,280,"yellow");//2
	vnus.name = "Vnus";
	vnus.setorbit(sool, 14000, 0, 1);
	vnus.parentid = 0;
	vnus.c2 = "tan";	
	let earf = new Umo(0, 20000, 320, "blue"); //3
	earf.setorbit(sool, 20000, 0, 1);
	earf.name = "Earf";
	earf.parentid = 0;
	earf.c2 = "green";
	let moon = new Umo(1000, 20000, 100, "white"); //4
	moon.name = "Moon";
	moon.setorbit(earf, 1000, 0, -1);
	moon.parentid = 3;
	moon.c2 = "grey";
	let merz = new Umo(0, 32000, 220, "brown");//5
	merz.name = "Merz";						
	merz.setorbit(sool, 32000, 0, 1);
	merz.parentid = 0;
	merz.c2 = "red";
	let fobz = new Umo(600,32000,32, "grey");//6
	fobz.name = "Fobz";
	fobz.setorbit(merz, 600, 0, 1);
	fobz.parentid = 5;
	fobz.c2 = "darkgrey";
	let deem = new Umo(-800,32000,32, "white");//7
	deem.name = "Deem";
	deem.setorbit(merz, 800, 0, 1);
	deem.parentid = 5;
	deem.c2 = "grey";
	let jupe = new Umo(0,0,1024,"brown");//8
	jupe.name = "Jupe";
	jupe.setorbit(sool,80000,0,1);
	jupe.parentid = 0;
	jupe.c2 = "purple";
	let heyo = new Umo(0,0,120,"yellow");//9
	heyo.name = "Heyo";
	heyo.setorbit(jupe,1280,0,1);
	heyo.parentid = 8;
	heyo.c2 = "beige";
	let erpa = new Umo(0,0,200,"blue");//10
	erpa.name = "Erpa";
	erpa.setorbit(jupe,3600,0,1);
	erpa.parentid = 8;
	erpa.c2 = "teal";
	let mede = new Umo(0,0,280,"brown");//11
	mede.name = "Mede";
	mede.setorbit(jupe,5200,0,1);
	mede.parentid = 8;
	mede.c2 = "firebrick"
	let isto = new Umo(0,0,280,"tan");//12
	isto.name = "Isto";
	isto.setorbit(jupe,7200,0,1);
	isto.parentid = 8;
	isto.c2 = "goldenrod"
	let tern = new Umo(0,0,750,"yellow");//13
	tern.name = "Tern";
	tern.setorbit(sool,130000,0,1);
	tern.parentid = 0;
	tern.c2 = "lightyellow";
	let thys  = new Umo(0,0,120,"grey");//14
	thys.name = "Thys";
	thys.setorbit(tern,1200,0,1);
	thys.parentid = 13;
	thys.c2 = "azure";
	let dion  = new Umo(0,0,150,"grey");//15
	dion.name = "Dion";
	dion.setorbit(tern,1800,0,1);
	dion.parentid = 13;
	dion.c2 = "cadetblue";
	let raya  = new Umo(0,0,200,"darkslategrey");//16
	raya.name = "Raya";
	raya.setorbit(tern,2400,0,1);
	raya.parentid = 13;
	raya.c2 = "dimgrey";
	let itan  = new Umo(0,0,300,"grey");//17
	itan.name = "Itan";
	itan.setorbit(tern,3600,0,1);
	itan.parentid = 13;
	itan.c2 = "lightgrey";
	let peet  = new Umo(0,0,200,"grey");//18
	peet.name = "Peet";
	peet.setorbit(tern,5600,0,1);
	peet.parentid = 13;
	peet.c2 = "aliceblue";
	let anus = new Umo(0,0,500,"green");//19
	anus.name = "Anus";
	anus.setorbit(sool,170000,0,1);
	anus.parentid = 0;
	anus.c2 = "aquamarine";
	let aril  = new Umo(0,0,150,"grey");//20
	aril.name = "Aril";
	aril.setorbit(anus,1000,0,1);
	aril.parentid = 19;		
	aril.c2 = "cyan";
	let umbi  = new Umo(0,0,150,"grey");//21
	umbi.name = "Umbi";
	umbi.setorbit(anus,1500,0,1);
	umbi.parentid = 19;	
	umbi.c2 = "darkcyan";
	let titi  = new Umo(0,0,200,"tan");//22
	titi.name = "Titi";
	titi.setorbit(anus,2400,0,1);
	titi.parentid = 19;	
	titi.c2 = "olive"
	let bron  = new Umo(0,0,200,"maroon");//23
	bron.name = "Bron";
	bron.setorbit(anus,3000,0,1);
	bron.parentid = 19;		
	bron.c2 = "brown";
	let tune = new Umo(0,0,550,"cyan");//24
	tune.name = "Tune";
	tune.setorbit(sool,210000,0,1);
	tune.parentid = 0;
	tune.c2 = "white";
	let tron = new Umo(0,0,250,"navy");//25
	tron.name = "Tron";
	tron.setorbit(tune,1500,0,1);
	tron.parentid = 24;
	tron.c2 = "lightslategrey";
	ns.planets = [sool,murc,vnus,earf,moon,merz,fobz,deem,jupe,heyo,erpa,mede,isto,tern,thys,dion,raya,itan,peet,anus,aril,umbi,titi,bron,tune,tron];
	var i = 0; //This randomizes planetary dots for home system.
	while (i<ns.planets.length){
		var j=0;
		var extradots = Math.floor(Math.random()*3);
		while(extradots>0){
			ns.planets[i].polyradius.push(0);
			ns.planets[i].polytheta.push(0);
			extradots = extradots - 1;
			}
		while (j<ns.planets[i].polytheta.length){
			ns.planets[i].polyradius[j] = Math.random()+0.125;
			ns.planets[i].polytheta[j] = Math.random()*2*Math.PI;
			j=j+1;
			}
		i=i+1;
		}

	let terranoutpost = new Umo (0,0,128, randcolor());
	terranoutpost.c2 = randcolor();
	terranoutpost.parentid = 0;
	terranoutpost.name = "Bill's Billion Bits";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	terranoutpost.polytheta = totheta;
	terranoutpost.polyradius = toradii;
	terranoutpost.setorbit(ns.planets[0], 20000, 0.25, 1);//set in orbit around sool behind earf 

	let merzoutpost = new Umo(0,0,128, randcolor());
	merzoutpost.c2 = randcolor();
	merzoutpost.parentid = 0;
	merzoutpost.name = "The Merry Merzian";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	merzoutpost.polytheta = totheta;
	merzoutpost.polyradius = toradii;
	merzoutpost.setorbit(ns.planets[0], 32000, 0.2, 1);//set in orbit around sool behind merz


	let jupeoutpost = new Umo(0,0,128, randcolor());
	jupeoutpost.c2 = randcolor();
	jupeoutpost.parentid = 0;
	jupeoutpost.name = "Jojo's House of Cheese";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	jupeoutpost.polytheta = totheta;
	jupeoutpost.polyradius = toradii;
	jupeoutpost.setorbit(ns.planets[0], 80000, 0.1, 1);//set in orbit around sool behind jupe

	let anusoutpost = new Umo(0,0,128, randcolor());
	anusoutpost.c2 = randcolor();
	anusoutpost.parentid = 0;
	anusoutpost.name = "Dangustown";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	anusoutpost.polytheta = totheta;
	anusoutpost.polyradius = toradii;
	anusoutpost.setorbit(ns.planets[0], 170000, 0.05, 1);//set in orbit around sool behind jupe

	let oortoutpost = new Umo(0,0,128, randcolor());
	oortoutpost.c2 = randcolor();
	oortoutpost.parentid = 0;
	oortoutpost.name = "Sharon's Scientific Supplies";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	oortoutpost.polytheta = totheta;
	oortoutpost.polyradius = toradii;
	oortoutpost.setorbit(ns.planets[0], 320000, 0.3, 1);//set in orbit around sool in bufu

	let randoutpost1 = new Umo(0,0,128, randcolor());
	randoutpost1.c2 = randcolor();
	randoutpost1.parentid = 0;
	randoutpost1.name = "Randomized Blasters";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	randoutpost1.polytheta = totheta;
	randoutpost1.polyradius = toradii;
	randoutpost1.setorbit(ns.planets[0], 32000, 0.3, 1);//set in orbit around sool trailing earf

	let randoutpost2 = new Umo(0,0,128, randcolor());
	randoutpost2.c2 = randcolor();
	randoutpost2.parentid = 0;
	randoutpost2.name = "Ship Upgrades";
	var totheta = [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
	var toradii = [1,1,1,1]; //rectangle
	randoutpost2.polytheta = totheta;
	randoutpost2.polyradius = toradii;
	randoutpost2.setorbit(ns.planets[0], 32000, 0.32, 1);//set in orbit around sool trailing earf
	ns.outposts = [terranoutpost, merzoutpost, jupeoutpost, anusoutpost, oortoutpost, randoutpost1, randoutpost2];
	var i=0;
	while (i<ns.outposts.length){
		var numberofsides = Math.floor(Math.random()*6+7)*2;
		ns.outposts[i].makeemblem(numberofsides,0.1);
		i=i+1;
		}

	let blasterbuyitems2 = bhblasterbuyitems();//[buyw0item,buyw2item,buyw3item,buyw4item,buyw5item,buyw6item,buyw7item,buyw8item,buyw9item,buyw11item,buyw12item,buyw13item,buyw14item,buyw15item,buyw16item,buyw17item,buyw18item,buyw19item];
	let blasterupgradeitems2 = bhblasterupgradeitems();
	let booster12 = new Shopitem("booster",0,"buy",1); //Tier 0 booster
	var cargoitems = bhcargoitems();//[buycargo0,buycargo1,buycargo2,buycargo3,buycargo4,buycargo5,buycargo6,buycargo7,buycargo8,buycargo9,buycargo10,buycargo11,buycargo12];
	var upgradeshopitems2 = bhupgradeitems();//[uprepairitem,uparmoritem,upshielditem,upshieldregenitem,upradaritem,upcargoitem,upthrustitem,upsensoritem,upsolaritem,upimpactitem,randomchassisitem];
	let merzianshopitems = [upgradeshopitems2[0],blasterbuyitems2[1],blasterbuyitems2[2],blasterbuyitems2[3],blasterupgradeitems2[8],booster12,upgradeshopitems2[1]];
	let merrymerz = new Shop("The Merry Merzian", 1, "I have these fine tapestries....", merzianshopitems);
	let billshopitems = [upgradeshopitems2[0],blasterbuyitems2[1],blasterbuyitems2[2],blasterupgradeitems2[6],blasterupgradeitems2[7],upgradeshopitems2[2]];
	let billbits = new Shop("Bills Billion Bits", 0, "Welcome to Earf", billshopitems);
	let jojoshopitems = [upgradeshopitems2[0],blasterbuyitems2[4],blasterbuyitems2[5],blasterbuyitems2[6],blasterupgradeitems2[1],upgradeshopitems2[1],upgradeshopitems2[2],upgradeshopitems2[5]];
	let jojocheese = new Shop("JoJo's House of Cheese", 2, "Jupe Fantastico", jojoshopitems);
	let dangshopitems = [upgradeshopitems2[0],blasterbuyitems2[3],blasterbuyitems2[7],blasterbuyitems2[8],blasterupgradeitems2[1],blasterupgradeitems2[9],blasterupgradeitems2[10],blasterupgradeitems2[25],upgradeshopitems2[6]];
	let dangustown = new Shop("Dangustown", 3, "It's YOUR Anus!", dangshopitems);
	let sharonshopitems = [upgradeshopitems2[0],blasterbuyitems2[1],blasterbuyitems2[0],blasterupgradeitems2[40],blasterupgradeitems2[24],upgradeshopitems2[4],upgradeshopitems2[7]];
	let sharons = new Shop("Sharon's Scientific Supplies", 4, "wubbasomethinggoeshere", sharonshopitems);
	let randshopitems1 = [];
	var i = 0;
	while (i<12){
		var randomblasterupgrade = Math.floor(Math.random()*blasterupgradeitems2.length)
		randshopitems1.push(blasterupgradeitems2[randomblasterupgrade]);
		i++;
		}
	let randoshop1 = new Shop("Rando Calrissian's Blaster Upgrades",5, "Randomized items", randshopitems1);
	//var upgradeshopitems2 = [uprepairitem,uparmoritem,upshielditem,upshieldregenitem,upradaritem,upcargoitem,upthrustitem,upsensoritem,upsolaritem,upimpactitem,randomchassisitem];
	let upgradeshop = new Shop("All Upgrades Testing Shop",6, "Upgrades", upgradeshopitems2);
	ns.shops = [billbits,merrymerz,jojocheese,dangustown,sharons,randoshop1,upgradeshop];//"all" meaning home system
	var i=0;
	while(i<50){
		ns.ecobalance(.03);
		i++;
		}
	ns.addcargosales(cargoitems);
	ns.addrandomgang(1,2,16);//These addrandomgang statements allow me to define how difficult and how many bots are at each planet
	ns.addrandomgang(2,3,3);
	ns.addrandomgang(3,4,2);
	ns.addrandomgang(5,3,1);
	ns.addrandomgang(10,3,8);
	ns.addrandomgang(11,4,6);
	ns.addrandomgang(12,3,5);
	ns.addrandomgang(14,2,7);
	ns.addrandomgang(15,4,9);
	ns.addrandomgang(16,4,10);
	ns.addrandomgang(17,4,12);
	ns.addrandomgang(18,2,14);
	ns.addrandomgang(21,2,8);
	ns.addrandomgang(22,3,9);
	ns.addrandomgang(23,4,10);
	ns.addrandomtraders([5,11,16], 8, 4);//These are friendly NPCs
	ns.addmercenaries(3,[16,23],2,6);
	ns.addcargomissions(4);
	
	

	var murcturret1 = new Turret("enemy",ns.planets[1],0,192);
	var murcturret2 = new Turret("enemy",ns.planets[1],Math.PI,192);
	var murcturret3 = new Turret("enemy",ns.planets[1],Math.PI/2,192);   
	var murcturret4 = new Turret("enemy",ns.planets[1],3*Math.PI/2,192);
	var turrets = [murcturret1,murcturret2,murcturret3,murcturret4];
	var i=0;
	while (i<turrets.length){
		turrets[i].pivot.hp = 4000;
		turrets[i].pivot.maxhp = 4000;
		turrets[i].pivot.shield = 1000;
		turrets[i].pivot.maxshield = 1000;
		i++;
		}
	ns.turrets = turrets;
	return ns;
	}
