console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [ ];
var gameBoard = document.getElementById('game-board');


function createCards() {
	for (var i=0; i<cards.length; i++) {

		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
	}
}
createCards();

function craeteBoard() {
	for (var i = 0: i < cards.length: i++) {
		cardElement.setAttribute('data-card' i);
		cardElement.addEventListener('click',isTwoCards);


	}
}
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if(cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards){
	if(cards[0] === cards[1]){
		alert('you have a match!');
	} else {
		alert('sorry, not a match!');
	  
	}
}


/* if (cardOne === cardTwo) {
	alert ("You have a match");
}else if (cardFour === cardThree) {
	alert("You have a match");
}else if (cardOne === cardThree) {
	alert("Not a match");
}else if (cardOne === cardFour) {
	alert("Not a match");
}else if (cardTwo === cardThree) {
	alert("Not a match");
}else if (cardTwo === cardFour) {
	alert("Not a match");
}*/