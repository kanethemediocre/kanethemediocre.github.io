function loadlevel8(){ 
 var alevel = new Warehouse(4000,4000,0,1,[],[]); 
	var player0 = new Umb(-500,-4000,32,80,100,1);
	player0.c = "blue";
	player0.publiclabel = player0.hp;
	alevel.addrandomground(-8000,8000,-2500,-2300,80,-20,20,"red");//addrandomground(xmin,xmax,ymin,ymax,dx,dymin,dymax,color){
	alevel.addrandomfloaters(-18000,18000,-3000,-2600,32,32,32,32,"green",0.6,0.9);//addrandomfloaters(xmin,xmax,ymin,ymax,dxmin,dxmax,dymin,dymax,color,density,cohesion){
	//alevel.addrandomground2(-4000,4000,-2500,-2000,200,200,-200,200,"red");//addrandomground2(xmin,xmax,ymin,ymax,dxmin,dxmax,dymin,dymax,color){//based on stair function
	alevel.mrboxes = [player0];
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
 }