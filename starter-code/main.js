console.log("JS file is connected to HTML! Woo!")


var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');


function createCards() {
	for (var i=0; i<cards.length; i++) {
		
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
	}
}
createCards();


function createBoard() {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.addEventListener('click', isTwoCards);
	cardElement.setAttribute('data-card', cards[i]);
					
}
}

function isMatch() {
	if ( cardsInPlay [0] === cardsInPlay [1]) {
	alert ("You Got A Match!");
	} else  {
	alert("Sorry,Try Again.");
	}
	
	
	
}


function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === "king") {
		this.innerHTML = '<img src = "images/king.png" alt="King of Diamonds" />'
	} else {
		this.innerHTML = '<img src = "images/queen.png" alt="Queen of Clubs" />'
	}


	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
		this.innerHTML = " ";
		location.reload();

		
	}
}

createBoard();

