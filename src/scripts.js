var joc = {
	canvas:document.createElement("canvas"),
creazaJoc: function() {
 		this.canvas.width = screen.width ;
 		this.canvas.height = 270;
 		this.context = this.canvas.getContext("2d");
 		document.body.insertBefore(this.canvas, document.body.childNodes[0]);

 	}
 }
 var creazaJoc = function (){
 	joc.creazaJoc();
 }