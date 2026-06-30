function flipCard(card) {
    const cardInner = card.querySelector('.card-inner');
    cardInner.classList.toggle('flipped');
}

const cards = document.querySelectorAll('.flip-card');

cards.forEach(card => {
    card.addEventListener('click', event => {
        event.stopPropagation();
        const cardInner = card.querySelector('.card-inner');
        cardInner.classList.toggle('flipped');
    });
});

const messageButtons = document.querySelectorAll('.message-button');
messageButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.stopPropagation();
        const popupId = button.dataset.popup;
        const popup = document.getElementById(popupId);
        popup.classList.add('open');
    });
});

const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.stopPropagation();
        const popup = button.closest('.popup');
        popup.classList.remove('open');
    });
});