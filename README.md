# ProgramareMobile

Acest proiect este un joc si se numeste Jump or Die. Este realizat in JavaScript si HTML5. 

# Despre proiect

## Modul de functionare al jocului

Jocul este construit intr-un canvas pe care sunt desenate trei obiecte principale:
 - Pasarea - componenta care se deplaseaza pe axa OY
 - Obstacolele - componente care se deplaseaza pe axa OX
 - Scorul - componenta unde este contorizat scorul curent (**este egal cu numarul de frame-uri** la care a ajuns jucatorul)

## Mecanica jocului

**Frame** - un frame este reprezentat de o stare a jocului. Acesta este generat odata la 10 milisecunde (prin apelarea functiei updateJoc)
**Obstacol** - un obstacol este creeat de catre functia creeazaObstacol(x, y, width, height, culoare, locatieObstacol). Acesta se deplaseaza pe axa OX si este generat odata la **200 de frame-uri** (adica odata la 2 secunde apare un obstacol nou).

## Functii utilizate
setInterval(updateJoc, 10)

| Functie si Parametrii | Detalii |Documentatie |
| ------ | ------ | ------ |
| **setInterval**(updateJoc, 10) | Functia **setInterval** apeleaza functia **updateJoc** o data la 10 milisecunde |[setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) |
|**clearInterval**(joc.intervalId)| Opreste actiunea realizata de setInterval (nu o sa se mai apeleze functia updateJoc deloc) | [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)|
|**clearRect**(0, 0 , this.canvas.width, this.canvas.height) | Aceasta functie sterge canvasul incepand de la x = 0, y = 0, toata suprafata canvas-ului | [clearRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect) |
|**createPattern**(background, 'repeat') | Aceasta functie am folosit-o la repetarea background-ului. Primeste  ca parametru o **imagine(background)** si returneaza un pattern. | [createPattern](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createPattern) |
|**fillRect**(0, 0, this.canvas.width, this.canvas.height) | Deseneaza un dreptunghi incepand de la x = 0, y = 0 avand o lungime si o inaltime | [fillRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect) |
| **drawImage**(imagine, this.x, this.y) | Deseneaza o imagine la coordonatele [x,y] | [drawImage](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage) |
| **fillText**(this.scor, this.x, this.y) | Deseneaza scorul(un text) la coordonatele [x,y] | [fillText](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText) |
| **Math.random()** | Returneaza un numar random intre [0,1)|[Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) |
|**window.addEventListener**("touchstart", on_touch_start)| Ataseaza la evenimentul de **touchstart** functia **on_touch_start**  |[window.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) |
|**window.addEventListener**("touchend", on_touch_end)| La fel ca mai sus doar ca pentru evenimentul de touchend | [window.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) | 

**Pentru editarea acestui fisier am folosit [dillinger.io](http://dillinger.io/)**