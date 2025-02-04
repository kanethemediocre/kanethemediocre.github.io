function loadlevel9(){ 
 var alevel = new Warehouse(4000,4000,0,1,[],[]); 
 var it = new Umb(0,30,400,30,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(0,-30,30,30,0,1);function loadlevel8(){ 
 var alevel = new Warehouse(4000,4000,0,1,[],[]); 
	var player0 = new Umb(-500,-3000,32,80,100,1);
	player0.c = "blue";
	player0.publiclabel = player0.hp;
	alevel.mrboxes.push(player0);
	alevel.addrandomground(-4000,4000,-2500,-2000,24,-16,16,"red");//addrandomground(xmin,xmax,ymin,ymax,dx,dymin,dymax,color){
	var levelnum = 4;
	var i=0;
	while(i<levelnum){
		var puzzlex = 0;
		var puzzley = -1000+1000*i;//each puzzle 1000 pixels lower
		var puzzlel = 1000+1000*i; //each puzzle 1000 pixels right
		alevel.addrandompuzzlemodnb(puzzlex,puzzley,4,250,[2],[1,2,3,4,5],["+"]);
		var frontfloor = new Umb(puzzlex-puzzlel-64,puzzley+128,puzzlel,50,0,1);
		frontfloor.c = "green";
		var backfloor = new Umb(puzzlex+puzzlel+64,puzzley+128,puzzlel,50,0,1);
		alevel.srboxes.push(frontfloor);//constructor(xx,yy,xxs,yys,hp,solid){
		alevel.srboxes.push(backfloor);//constructor(xx,yy,xxs,yys,hp,solid){
		i++;
		}
	while(i<levelnum*2){
		var puzzlex = 0;
		var puzzley = -1000+1000*i;//each puzzle 1000 pixels lower
		var puzzlel = 1000+1000*i; //each puzzle 1000 pixels right
		alevel.addrandompuzzlemodnb(puzzlex,puzzley,4,250,[2],[1,2,3,4,5],["+","-"]);
		var frontfloor = new Umb(puzzlex-puzzlel-64,puzzley+128,puzzlel,50,0,1);
		frontfloor.c = "green";
		var backfloor = new Umb(puzzlex+puzzlel+64,puzzley+128,puzzlel,50,0,1)
		alevel.srboxes.push(frontfloor);//constructor(xx,yy,xxs,yys,hp,solid){
		alevel.srboxes.push(backfloor);//constructor(xx,yy,xxs,yys,hp,solid){
		i++;
		}
	while(i<levelnum*3){
		var puzzlex = 0;
		var puzzley = -1000+1000*i;//each puzzle 1000 pixels lower
		var puzzlel = 1000+1000*i; //each puzzle 1000 pixels right
		alevel.addrandompuzzlemodnb(puzzlex,puzzley,4,250,[2],[1,2,3,4],["+","-","*"]);
		var frontfloor = new Umb(puzzlex-puzzlel-64,puzzley+128,puzzlel,50,0,1);
		frontfloor.c = "green";
		var backfloor = new Umb(puzzlex+puzzlel+64,puzzley+128,puzzlel,50,0,1)
		alevel.srboxes.push(frontfloor);//constructor(xx,yy,xxs,yys,hp,solid){
		alevel.srboxes.push(backfloor);//constructor(xx,yy,xxs,yys,hp,solid){
		i++;
		}
	while(i<levelnum*4){
		var puzzlex = 0;
		var puzzley = -1000+1000*i;//each puzzle 1000 pixels lower
		var puzzlel = 1000+1000*i; //each puzzle 1000 pixels right
		alevel.addrandompuzzlemodnb(puzzlex,puzzley,4,250,[2],[1,2,3,4],["+","-","*","/"]);
		var frontfloor = new Umb(puzzlex-puzzlel-64,puzzley+128,puzzlel,50,0,1);
		frontfloor.c = "green";
		var backfloor = new Umb(puzzlex+puzzlel+64,puzzley+128,puzzlel,50,0,1);
		alevel.srboxes.push(frontfloor);//constructor(xx,yy,xxs,yys,hp,solid){
		alevel.srboxes.push(backfloor);//constructor(xx,yy,xxs,yys,hp,solid){
		i++;
		}
 return alevel; 
 }function loadlevel8(){ 
 var alevel = new Warehouse(4000,4000,0,1,[],[]); 

 return alevel; 
 }  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='brown'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(-300,-130,50,50,0,2);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='magenta'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(114,137,114,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(386,149,158,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(680,159,136,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(982,181,166,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1269,167,121,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1522,169,132,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1798,142,144,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(2079,175,137,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(2340,139,124,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(2581,138,117,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(2867,182,169,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(3170,134,134,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(3446,176,142,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(3716,130,128,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(4001,140,157,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(4350,144,192,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(4725,165,183,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(5065,185,157,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(5346,183,124,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(5653,156,183,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(5941,136,105,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(6244,138,198,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(6610,149,168,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(6878,186,100,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(7169,161,191,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(7479,181,119,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(7788,156,190,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(8162,137,184,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(8541,172,195,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(8922,139,186,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(9236,152,128,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(9516,149,152,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(9840,159,172,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(10180,168,168,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(10472,150,124,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(10787,133,191,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(11177,189,199,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(11537,170,161,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(11883,134,185,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(12260,162,192,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(12568,188,116,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(12879,190,195,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(13195,151,121,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(13463,188,147,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(13748,138,138,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(14012,182,126,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(14303,176,165,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(14595,158,127,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(14918,135,196,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(15313,162,199,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(15651,169,139,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(15918,185,128,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(16187,169,141,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(16475,169,147,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(16799,164,177,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(17143,178,167,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(17430,141,120,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(17709,187,159,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(17979,164,111,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(18220,151,130,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(18485,137,135,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(18740,129,120,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(18997,129,137,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(19285,169,151,128,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1000,120,20,20,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1020,100,20,20,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1040,80,20,20,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1060,60,20,20,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1080,40,20,20,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1100,20,20,20,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1120,0,20,20,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1140,-20,20,20,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1160,-40,20,20,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1180,-60,20,20,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1200,-80,20,20,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(1220,-100,20,20,0,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(663,-78,96,28,4,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(866,-144,58,46,4,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='yellow'; 
 it.label=''; 
 it.publiclabel='00000'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.srboxes.push(it); 
 var it = new Umb(840.1608515449669,-270,32,80,100,1);  
 it.vx=8.297339776561904e-32;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='blue'; 
 it.label=''; 
 it.publiclabel='100'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.mrboxes.push(it); 
 var it = new Umb(100,-100,40,100,4,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='4'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.mrboxes.push(it); 
 var it = new Umb(-372.7043561414768,-100000,40,100,5,1);  
 it.vx=3.456890031716825;
 it.vy=23.999999999999936;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='0'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(3098.570562268159,-100000,40,100,5,1);  
 it.vx=3.238983374522116;
 it.vy=23.999999999999936;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='0'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(1982,-52.999999999999986,40,100,5,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=-1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(2738,-46,40,100,5,1);  
 it.vx=0.5;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='3'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(2871.6524746839154,-46,40,100,5,1);  
 it.vx=2.6222063659338604;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(3547.5,-52,40,100,5,1);  
 it.vx=-0.98;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=-1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(6298.9032070163075,-90,40,100,5,1);  
 it.vx=1.977392690513606;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(4472.2208770010175,-84,40,100,5,1);  
 it.vx=0.19079349582164246;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(4488.730462258072,-84,40,100,5,1);  
 it.vx=1.9112021735054936;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(7551.558692083527,-47,40,100,5,1);  
 it.vx=3.6026037706143548;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(6207.239050333806,-90,40,100,5,1);  
 it.vx=-1.1354478319437091;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(7248.893260880597,-67,40,100,5,1);  
 it.vx=-1.7294999045913992;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=-1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(6923.755070453165,-41.99999999999999,40,100,5,1);  
 it.vx=2.969320363994455;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(8435.712094356515,-56.000000000000014,40,100,5,1);  
 it.vx=-3.0147343184227013;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=-1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(8532.115063378806,-56,40,100,5,1);  
 it.vx=-0.15257508802190306;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(8430.456663509112,-55.999999999999986,40,100,5,1);  
 it.vx=2.591515094964696;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(8668.016948168637,-56.000000000000014,40,100,5,1);  
 it.vx=-2.779967421915314;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=-1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(8696,-56.000000000000014,40,100,5,1);  
 it.vx=0.5;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(10528.121126816166,-78,40,100,5,1);  
 it.vx=3.38264407264772;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(8565.216477256428,-56,40,100,5,1);  
 it.vx=3.1002101631817043;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(11224.072587589832,-38.99999999999999,40,100,5,1);  
 it.vx=-3.1774208317855575;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=-1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(11613.17506433192,-57.99999999999999,40,100,5,1);  
 it.vx=-3.451808749140428;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=-1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(11032.992456610942,-38.99999999999999,40,100,5,1);  
 it.vx=-0.5635719021774716;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(11509.399075617914,-57.99999999999999,40,100,5,1);  
 it.vx=2.340884305835624;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=-1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(11457.434234780021,-58.00000000000001,40,100,5,1);  
 it.vx=-2.729563504583983;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(14242.29047131933,-51.99999999999999,40,100,5,1);  
 it.vx=-2.3655414057673987;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(15495.612515778828,-65.99999999999999,40,100,5,1);  
 it.vx=-2.0487186164921303;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(14248.42511168249,-51.99999999999999,40,100,5,1);  
 it.vx=1.7658662482603358;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(14429.039766575946,-69.99999999999999,40,100,5,1);  
 it.vx=0.7193308547780946;
 it.vy=1.8816;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(16903.270220666687,-64,40,100,5,1);  
 it.vx=1.078168258518629;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(17070.165662370364,-50.00000000000001,40,100,5,1);  
 it.vx=-2.5511082733057076;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=-1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(15885.631619862352,-43.00000000000001,40,100,5,1);  
 it.vx=0.8826455751391794;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(15539.756190707989,-66,40,100,5,1);  
 it.vx=-0.8473402561012443;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(18054.700477647002,-77,40,100,5,1);  
 it.vx=0.8527184728091164;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(19725.44787069687,18166.00000000002,40,100,5,1);  
 it.vx=3.6092578177312125;
 it.vy=23.999999999998902;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(17770.573256866264,-41.00000000000001,40,100,5,1);  
 it.vx=3.0422822785212156;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(18020.029349313103,-64,40,100,5,1);  
 it.vx=3.6749005537900006;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=true; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(18142.990257893576,188325,40,100,5,1);  
 it.vx=0.6940577445699379;
 it.vy=23.999999999999936;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=false; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(20033.294826269885,188325,40,100,5,1);  
 it.vx=-0.057537421170476666;
 it.vy=23.999999999999936;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=false; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(20523.76865346133,188325,40,100,5,1);  
 it.vx=-0.6369442089953745;
 it.vy=23.999999999999936;
 it.maxtimer=3600; 
 it.c='red'; 
 it.label=''; 
 it.publiclabel='5'; 
it.grounded=false; 
 it.xdir=0; 
 it.ydir=0; 
 it.ai='randomwalk'; 
alevel.mrboxes.push(it); 
 var it = new Umb(94605.03858341744,-336.52234852297545,12,12,1,1);  
 it.vx=13.230897227898485;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='1'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(-23485.610738119572,-17374.122578056104,12,12,4,1);  
 it.vx=-4.988818112707067;
 it.vy=-3.333421398117613;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='4'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(25485.874212400515,-303.05532749793116,12,12,3,1);  
 it.vx=6.019990929429304;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='3'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(25485.874212400515,-271.05532749793116,12,12,3,1);  
 it.vx=6.019990929429304;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='3'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(25485.874212400515,-239.05532749793116,12,12,3,1);  
 it.vx=6.019990929429304;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='4'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(24990.760039916026,-238.85398110006992,12,12,3,1);  
 it.vx=6.001147675997278;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='4'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(24990.760039916026,-206.85398110006992,12,12,3,1);  
 it.vx=6.001147675997278;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='7'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(13176.620979494734,-302,12,12,3,1);  
 it.vx=6;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='3'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(13176.620979494734,-270,12,12,3,1);  
 it.vx=6;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='7'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(13176.620979494734,-238,12,12,3,1);  
 it.vx=6;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='8'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(-12483.518711051336,-302,12,12,3,1);  
 it.vx=-6.68369843198287;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='18'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(-12483.518711051336,-270,12,12,3,1);  
 it.vx=-6.68369843198287;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='18'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(-12483.518711051336,-238,12,12,3,1);  
 it.vx=-6.68369843198287;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='0'; 
 it.publiclabel='18'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bboxes.push(it); 
 var it = new Umb(1600,-100,100,100,2,0);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='*'; 
 it.publiclabel='* 2'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bmboxes.push(it); 
 var it = new Umb(2900,-150,100,100,2,0);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='+'; 
 it.publiclabel='+ 2'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bmboxes.push(it); 
 var it = new Umb(4200,-50,100,100,2,0);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='/'; 
 it.publiclabel='/ 2'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bmboxes.push(it); 
 var it = new Umb(6500,-150,100,100,1,0);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='white'; 
 it.label='-'; 
 it.publiclabel='- 1'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bmboxes.push(it); 
 var it = new Umb(1018,-248,57,34,4,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='blue'; 
 it.label='+'; 
 it.publiclabel='+ 4'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bmboxes.push(it); 
 var it = new Umb(693,-291,31,45,6,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='blue'; 
 it.label='*'; 
 it.publiclabel='* 6'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.bmboxes.push(it); 
 var it = new Umb(846,-460,77,77,6,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='purple'; 
 it.label=''; 
 it.publiclabel='^'; 
it.grounded=false; 
 it.xdir=0; 
 it.ydir=-1; 
 it.ai='none'; 
alevel.mmboxes.push(it); 
 var it = new Umb(853,-643,94,53,6,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='purple'; 
 it.label=''; 
 it.publiclabel='>'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.mmboxes.push(it); 
 var it = new Umb(3200,-100,24,24,1,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='green'; 
 it.label='hp20'; 
 it.publiclabel='+20'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.itboxes.push(it); 
 var it = new Umb(1169,-284,23,41,6,1);  
 it.vx=0;
 it.vy=0;
 it.maxtimer=3600; 
 it.c='purple'; 
 it.label='hp20'; 
 it.publiclabel='hp20'; 
it.grounded=false; 
 it.xdir=1; 
 it.ydir=0; 
 it.ai='none'; 
alevel.itboxes.push(it); 
 return alevel; 
 }