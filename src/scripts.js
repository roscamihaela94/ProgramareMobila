var joc = {
	canvas:document.createElement("canvas"),
	background: document.getElementById("background"),
creazaJoc: function() {
 		this.canvas.width = screen.width ;
 		this.canvas.height = 270;
 		this.context = this.canvas.getContext("2d");
 		document.body.insertBefore(this.canvas, document.body.childNodes[0]);

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
 var creazaJoc = function (){
 	joc.creazaJoc();
 	joc.updateBackround();
 	var pasare = new creeazaPasare( 10, 120, 30, 30, 0.05);
 	pasare.update();
 }

