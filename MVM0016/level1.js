function loadlevel1(){
	var floor0 = new Umb(0,30,400,30,0,1);//constructor(xx,yy,xxs,yys,hp,solid)
	floor0.c = "green";
	var crate0 = new Umb(0,-30,30,30,0,1);
	crate0.c = "brown";
	var bouncyblock0 = new Umb(-300,-130,50,50,0,2);//constructor(xx,yy,xxs,yys,hp,solid)
	bouncyblock0.c = "magenta";
	var player0 = new Umb(0,-220,32,80,100,1);
	player0.c = "blue";
	player0.publiclabel = player0.hp;
	var enemy0 = new Umb(100,-120,40,100,4,1);
	enemy0.c = "red";
	enemy0.publiclabel = enemy0.hp;

	var currentlevel = new Warehouse(4000,4000,[spawn0],1,[floor0,crate0,bouncyblock0],[player0,enemy0]);//constructor(xxs,yys,spawns,gravity,srboxes,mrboxes){
	//currentlevel.itboxes = [itemgun2,itemgun3,itemgun4,itemhp20];

		
		
	return currentlevel;
	}