const cards = document.querySelectorAll('.card');
let hasFlipperCard = false;
let fisrCard, seconCard;
let lockBoard = false;


//virar carta
function flipCard() {
    if(lockBoard) return;
    if(this === fisrCard) return;

    this.classList.add('flip');
    if(!hasFlipperCard) {
        hasFlipperCard = true;
        fisrCard = this;
        return;
    }
    seconCard = this;
    hasFlipperCard = false;
    checkForMath();
}

//checar se as cartas são iguais
function checkForMath() {
    if(fisrCard.dataset.card === seconCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}

//desbilita cartas
function disableCards() {
    fisrCard.removeEventListener('click', flipCard);
    seconCard.removeEventListener('click', flipCard);
    resetBoard();
}

//desvira as cartas
function unflipCards() {
    lockBoard = true;

    setTimeout(()=> {
        fisrCard.classList.remove('flip');
        seconCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

//reseta o tabuleiro
function resetBoard() {
    [hasFlipperCard, lockBoard] = [false, false]
    [fisrCard, seconCard] = [null, null]
}

//vai rodar as cartas aleatoria
(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})();



cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})



