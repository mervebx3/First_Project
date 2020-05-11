
Array.prototype.shuffle = function(){
	
	var i = this.length, j, temp; 
	while (--i > 0){   							
		j = Math.floor(Math.random() * (i+1));  
		temp = this[j]; 						
		this[j]= this [i]; 
		this[i] = temp; 
	}
	return this; //-> return the shuffled array 
}

var memorCards =	['A','A','B','B','C','C',
					'D','D','E','E','F','F',
					'G','G','H','H','I','I',
					'J','J','K','K','L','L']; 
function memoryLevel_1(){
		memorCards= []; 
	memorCards.push('A','A','B','B','C','C',
					'D','D','E','E','F','F'); 
	document.getElementById('playground').innerHTML = ""; 
	document.getElementById('playground').style.height= '260px'; 
		createCards();			
}
function memoryLevel_2(){
		memorCards= []; 
	memorCards.push('A','A','B','B','C','C',
					'D','D','E','E','F','F',
					'G','G','H','H','I','I',
					'J','J','K','K','L','L'); 
	document.getElementById('playground').innerHTML = ""; 
	document.getElementById('playground').style.height= '520px'; 
		createCards();			
}
function memoryLevel_3(){
		memorCards= []; 
	memorCards.push('A','A','B','B','C','C',
					'D','D','E','E','F','F',
					'G','G','H','H','I','I',
					'J','J','K','K','L','L',
					'M','M','N','N','O','O',
					'P','P','Q','Q','R','R',
					'S','S','T','T','U','U'); 
	document.getElementById('playground').innerHTML = ""; 
	document.getElementById('playground').style.height= '900px'; 
		createCards();			
}

var memoryValues = []; 
var memoryTitleIds = []; 
var titles_flipped = 0; 
/*
alert(memorCards); // MEMORY CARDS NOT MIXED!!! 
var result = memorCards.shuffle(); 

alert(memorCards); // MEMORY CARDS GEMIXED !!!
*/
function createCards() {
	titles_flipped = 0; 
	var card = '';
	memorCards.shuffle(); 
	for(var i = 0 ; i < memorCards.length; i++){
	card = card + '<div id="title_' + i + '" class="'+memorCards[i]+'"onclick="cardSwitch(\''+i+'\',\''
	+memorCards[i]+'\')"></div>';
	memoryValues = [];
	memoryTitleIds = []; 

	}	
		document.getElementById('playground').innerHTML = card; 
}
//alert(memorCards.length);
var countP = 0; 

function cardSwitch(num,val){
	var cardID = document.getElementById('title_'+num); 
	var cardClass= document.getElementsByClassName(val); 
	if (cardID.innerHTML == ""&& memoryTitleIds.length < 2){
		
		countP++; 
		document.getElementById('countPair').innerHTML = 'Umgedrehte Karten: '+countP; 
		
		cardID.innerHTML = val; 
		cardID.style.backgroundColor= '#DCB0B0'; // CARD gets an inner HTML 
		if (memoryValues.length==0){ // if it´s the firdt card 
			memoryValues.push(cardID.innerHTML);
			memoryTitleIds.push(num); 
			}else if (memoryValues.length == 1){
				memoryValues.push(cardID.innerHTML); 
				memoryTitleIds.push(num); 
				
			if (memoryValues[0] == memoryValues[1]){ // wenn zwei aufeinander folgende einträge passen 
				titles_flipped = titles_flipped +2; 
				//Clearing Arrays
				memoryValues = [];
				memoryTitleIds = []; 
				
				if (titles_flipped == memorCards.length){
				
					document.getElementById('end').style.display ='block';
					document.getElementById('newGame').style.display='block';
					document.getElementById('start').style.display='none';
					
					}
					
				}	
				
			}
				//alert('Values: '+memoryValues); 
			//alert('titles: '+memoryTitleIds);
		} else {
			if (memoryValues[0] != memoryValues[1]){
			function flipBack(){
				var flippedFirst = document.getElementById('title_'+memoryTitleIds[0]);
				var flippedSecond = document.getElementById('title_'+memoryTitleIds[1]);
				flippedFirst.style.background = '#743636';
				flippedFirst.innerHTML=""; 
				flippedSecond.style.background ='#743636';
				flippedSecond.innerHTML=""; 
				//clear both arrays 
					memoryValues = [];
					memoryTitleIds = [];
				}
			setTimeout(flipBack, 1); 
			}
		}
	
}
function gameEnd(){
		document.getElementById('newGame').style.display='none';
		document.getElementById('playground').innerHTML = ""; 
		createCards(); 
		countP = 0; 
		document.getElementById('end').style.display ='none';
		document.getElementById('start').style.display='block';
		

					}
