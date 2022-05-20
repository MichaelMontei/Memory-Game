
//select all the cards
const cards = document.querySelectorAll(".cards");

//function to flip all cards with a forEach
function flipCard() {
    this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

let lockBoard;
let firstCard;
let secondCard;

function getMatch(){
    if(firstCard === secondCard){
        lockBoard = true;
    }else if(firstCard != secondCard){
        lockBoard = false;
        unFlipCards();
    }
}

function unFlipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
}, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
})();