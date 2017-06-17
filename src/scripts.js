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
 var creazaJoc = function (){
 	joc.creazaJoc();
 	joc.updateBackround();

 }

