/* -------------------DUCK Hunter------------------------------ */
var container = document.querySelector('#container');
var movingSquare = document.querySelector('#duck');
var speed = 50;													//réglage de la vitesse deplacement du canard

var tempsJeu = 120;          									//Declartaion et initialisation de la variable temps maximal du jeu
var stop = 0;													///Declartaion et initialisation d' une variable qui mettra fin au jeux

movingSquare.style.top = '0px';
movingSquare.style.left = '0px';

document.addEventListener('keydown', (event) => {
  var top = parseInt(movingSquare.style.top);
  var left = parseInt(movingSquare.style.left);

	if(stop == 0){
	  if (event.key == 'ArrowRight') {
		if(left < 933) {                                          //00 car 800px du contenaire -100 du canard
		  left += speed;                                          //left = left + speed
		}
	  }
	  if (event.key == 'ArrowLeft') {
		if(left > 0) {
		  left -= speed; 
		}
	  }
	  if (event.key == 'ArrowDown') {
		if(top < 600) {
		  top += speed; 
		}
	  }
	  if (event.key == 'ArrowUp') {
		if (top > 0) {
		  top -= speed;
		}
	  }

	  movingSquare.style.left = left + 'px';
	  movingSquare.style.top = top + 'px';
	}
});


var canard=document.querySelector('#duck');                        //initialisation de la variable cannard
var ptsHunter=document.querySelector('#scoreHunter');
                                             
var HunterScore=0;                                               	//initialisation de score du joueur qui controle le chasseur a 0 points
var scoreDuck=0; 												 	//initialisation de score du joueur qui controle le canard a 0 points
var timeOut=0;                                             			//initialisation de la variable timeOut a 0 (variable qui servira a compter le temps ecouler
 
function PointHunter(){
	if(timer.innerHTML != tempsJeu){								//Si le temps ecouler et inferieur au tempsmax du jeux
		HunterScore++;
		ptsHunter.innerText = HunterScore;                          //on actualise le innertext de chasseur
	}
}

function compteurDuck(){
	if(timer.innerHTML != tempsJeu){								//Si le temps ecouler et inferieur au tempsmax du jeux
		scoreDuck++;
		ptsDuck.innerText = scoreDuck;
	} else {
		ptsDuck.innerText = scoreDuck;
	}
}

function decompteTime(){
    
	if(timeOut <= tempsJeu){										//Si le temps ecouler et inferieur au tempsmax du jeux
		timer.innerText = timeOut;									//on actualise le innertext (l'affichagea) de timeOut
		timeOut++;													//augmentation du temps écoulé
		if(timer.innerHTML == tempsJeu){							//Si le temps écoulé est équal au temps maxi du jeux
			stop = 1;												//on passe stop a 1 (se qui stoppera le jeux)
			if(ptsDuck.innerText>ptsHunter.innerText)
			{
				alert("THE WINNER is:\n BipBip");
			}else if(ptsDuck.innerText<ptsHunter.innerText){
				alert("THE WINNER is:\n Vil Le Coyote");
			}else{
				alert("EGALITE !!!! !!! !! !");
				}
		}
	}	
}

setInterval(decompteTime, 1000);
setInterval(compteurDuck,10000);

if(stop == 0){														//Si stop est a 0 on peut jouer.
	canard.addEventListener('click',PointHunter);					// Je veux écouter l'événement click sur mon canard
}