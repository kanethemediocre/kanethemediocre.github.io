function loadlevel9(){ 

 var alevel = new Warehouse(4000,4000,0,1,[],[]); 
	var player0 = new Umb(-500,-8000,32,80,100,1);
	player0.c = "blue";
	player0.publiclabel = player0.hp;
	alevel.mrboxes.push(player0);
	alevel.addrandomground4(-4000,4000,-2500,-2000,24,-16,16,-1800,"purple");//addrandomground(xmin,xmax,ymin,ymax,dx,dymin,dymax,bottomy,color){
		
 return alevel; 
 }