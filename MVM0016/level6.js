function loadlevel6(){ 
 var alevel = new Warehouse(4000,4000,0,1,[],[]); 
	var player0 = new Umb(-500,-1000,32,80,100,1);
	player0.c = "blue";
	player0.publiclabel = player0.hp;
	alevel.mrboxes.push(player0);
	var levelnum = 4;
	var i=0;
	while(i<levelnum){
		var puzzlex = 0;
		var puzzley = -1000+1000*i;//each puzzle 1000 pixels lower
		var puzzlel = 1000+1000*i; //each puzzle 1000 pixels right
		alevel.addrandompuzzlemod2nv(puzzlex,puzzley,8,250,[2],[1,2,3,4,5],["+"]);
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
		alevel.addrandompuzzlemod2nv(puzzlex,puzzley,8,250,[2],[1,2,3,4,5],["+","-"]);
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
		alevel.addrandompuzzlemod2nv(puzzlex,puzzley,8,250,[2],[1,2,3,4],["+","-","*"]);
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
		alevel.addrandompuzzlemod2nv(puzzlex,puzzley,8,250,[2],[1,2,3,4],["+","-","*","/"]);
		var frontfloor = new Umb(puzzlex-puzzlel-64,puzzley+128,puzzlel,50,0,1);
		frontfloor.c = "green";
		var backfloor = new Umb(puzzlex+puzzlel+64,puzzley+128,puzzlel,50,0,1);
		alevel.srboxes.push(frontfloor);//constructor(xx,yy,xxs,yys,hp,solid){
		alevel.srboxes.push(backfloor);//constructor(xx,yy,xxs,yys,hp,solid){
		i++;
		}
 return alevel; 
 }