let currentIndex = 0;
const cards = document.querySelectorAll('.project-card');
const projectsRow = document.getElementById('projects-row');

const updateCurrentCard = (selectedCard) => {
    // Remover a classe 'current' de todos os cards
    cards.forEach(card => card.classList.remove('current'));

    // Adicionar a classe 'current' ao card clicado
    selectedCard.classList.add('current');

    // Scroll automático para o card selecionado
    selectedCard.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    });
};

// Adiciona o evento de clique para cada card
cards.forEach(card => {
    card.addEventListener('click', () => {
        updateCurrentCard(card);
    });
});

// Inicializa o primeiro card como o 'current'
updateCurrentCard(cards[0]);
