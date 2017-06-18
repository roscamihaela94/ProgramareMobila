var frame = 0;
var pasare;
var arrayObstacole =[];
var numarDeFrameuriLaCareSeCreeazaUnNouObstacol = 200;
var scor;

var joc = {
	canvas:document.createElement("canvas"),
	background: document.getElementById("background"),
creazaJoc: function() {
 		this.canvas.width = screen.width ;
 		this.canvas.height = 270;
 		this.context = this.canvas.getContext("2d");
 		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
 		this.intervalId = setInterval(updateJoc, 10);

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
 	this.context = joc.context;
 	this.x = x;
 	this.y = y;
 	this.width = width;
 	this.height = height;
 	this.gravitatia = gravitatia;
 	this.gravitatiaActuala = 0;
 	this.update = function(){
 		this.context.drawImage(imagine, this.x, this.y);
 	}

 	this.pozitieNoua = function(){
		this.gravitatiaActuala += this.gravitatia;
		this.y = this.y + this.gravitatiaActuala;
		this.atingeJos();
		this.atingeSus();
		
 	}
 	 this.atingeJos = function() {
        var jos = joc.canvas.height - this.height; // 270 - 30 = 240
        if (this.y > jos) {
            this.y = jos;
            this.gravitatiaActuala = 0;
        }
    }

    this.atingeSus = function() {
        if (this.y < 0) {
            this.y = 0;
            this.gravitatiaActuala = 0;
        }
    }
     this.atingeObstacol = function(obstacol) {
        //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
        //Aici am facut detectia coliziuni dintre obstacol si obiect
        if (this.x < obstacol.x + obstacol.width && this.x + this.width > obstacol.x && this.y < obstacol.y + obstacol.height && this.height + this.y > obstacol.y) {
            return true;
        }
        return false;
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
 function deseneazaScor(x, y,dimensiuneFont, fontFalily, culoare) {
    this.scor = 0;
    this.x = x;
    this.y = y;
    this.culoare = culoare;
    this.context = joc.context;
    this.context.font = dimensiuneFont + " " + fontFalily;
    this.context.fillStyle = culoare;
    this.context.fillText("", this.x, this.y);

    this.update = function() {
        this.context.fillStyle = this.culoare;
        this.context.fillText(this.scor, this.x, this.y);
    }

 }

 function updateJoc(){

 	for (i = 0; i < arrayObstacole.length; i += 1) {
 		if(pasare.atingeObstacol(arrayObstacole[i])){
 			vibreaza();
 			clearInterval(joc.intervalId);
 			return;
 		}
 	}
	joc.stergeCanvas();
	joc.updateBackround();
	pasare.pozitieNoua();
	pasare.update();
	scor.scor = "Scor: " + frame;

	
 	frame += 1;

 	if(frame % numarDeFrameuriLaCareSeCreeazaUnNouObstacol == 0 ){
    	  lungimeCanvas = joc.canvas.width;
        inaltimeCanvas = joc.canvas.height;

        height = generareNumarRandom(20, 200);
        gaura = generareNumarRandom(100, 200);

        arrayObstacole.push(new creeazaObstacol(lungimeCanvas, 0, 30, height, "#1d3469", "sus"));
        arrayObstacole.push(new creeazaObstacol(lungimeCanvas, height + gaura, 30, inaltimeCanvas - height - gaura, "#1d3469", "jos"));
 		 	
 	} 

 	for (var i =0; i < arrayObstacole.length; i++ ){
 		arrayObstacole[i].x += -1; //mutam obstacolele la stanga cu 1
        arrayObstacole[i].update();


 	}
 	scor.update();
 	
 }
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random - Genereaza un numar random intre doua valori min si max
//functia Math.random genereaza numere rendom intre 0 si 1
function generareNumarRandom(min, max) {
    return Math.random() * (max - min) + min;
}
 
 var creazaJoc = function (){
 	joc.creazaJoc();
 	pasare = new creeazaPasare( 10, 120, 30, 30, 0.05);
 	scor = new deseneazaScor(joc.canvas.width - 230, 60, "30px" , 'fontArcade', '#ffffff');
 	}
 function accelereaza(n) {
    	pasare.gravitatia = n;
}	
window.addEventListener("touchstart", on_touch_start);
window.addEventListener("touchend", on_touch_end);

function on_touch_start(event) {
    accelereaza(-0.3);
}

function on_touch_end(event) {
    accelereaza(0.05);
}
function vibreaza() {
    window.navigator.vibrate(100);
}