var frame = 0;
var pasare;
var arrayObstacole =[];
var numarDeFrameuriLaCareSeCreeazaUnNouObstacol = 200;

var joc = {
	canvas:document.createElement("canvas"),
	background: document.getElementById("background"),
creazaJoc: function() {
 		this.canvas.width = screen.width ;
 		this.canvas.height = 270;
 		this.context = this.canvas.getContext("2d");
 		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
 		intervalId = setInterval(updateJoc, 10);

 	},
 	stergeCanvas: function(){
 		this.context.clearRect(0, 0 , this.canvas.width, this.canvas.height);
 	},
 	updateBackround:function(){
 		var ptrn = this.context.createPattern(background, 'repeat') // Aici se creeaza din imaginea un patern si o repeta pe axa Ox
 		this.context.fillStyle = ptrn;
 		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
 }
 function creeazaPasare( x, y, width, height, gravitatia){
 	var imagine = document.getElementById("twitter");
 	
 	this.x = x;
 	this.y = y;
 	this.width = width;
 	this.height = height;
 	this.gravitatia = gravitatia;
 	this.update = function(){
 		this.context = joc.context;
 		this.context.drawImage(imagine, this.x, this.y);
 	}
 }

 function creeazaObstacol(x, y, width, height, culoare, locatieObstacol) {
 	 var imagine = document.getElementById("facebook");

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.culoare = culoare;
	this.locatieObstacol = locatieObstacol;
	this.context = joc.context;
	 this.update = function(){
	 	
	 	this.context.fillStyle = this.culoare;
	 	this.context.fillRect( this.x, this.y, this.width, this.height);
	

	if (this.locatieObstacol == "sus") {
            this.context.drawImage(imagine, this.x, this.height - 30);
        } else if (this.locatieObstacol == "jos") {
             this.context.drawImage(imagine, this.x, this.y);
        }
	 }	 
 }


 function updateJoc(){
	joc.stergeCanvas();
	joc.updateBackround();
	pasare.update();
 	frame += 1;

 	if(frame % numarDeFrameuriLaCareSeCreeazaUnNouObstacol == 0 ){
    	 obstacol1 = new creeazaObstacol( 200, 0, 30, 80, "#1d3469", "sus");
 		 obstacol2 = new creeazaObstacol( 200, 200, 30, 70, "#1d3469", "jos");
 		 	arrayObstacole.push(obstacol1);
 		 	arrayObstacole.push(obstacol2);
 		 	
 	} 

 	for (var i =0; i < arrayObstacole.length; i++ ){
 		arrayObstacole[i].x += -1; //mutam obstacolele la stanga cu 1
        arrayObstacole[i].update();

 	}
 	
 }
 
 var creazaJoc = function (){
 	joc.creazaJoc();
 	joc.updateBackround();
 	pasare = new creeazaPasare( 10, 120, 30, 30, 0.05);
 	pasare.update();
 	}
 	

