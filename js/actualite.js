// Données des actualités
const news = [
    {
        date: "8 février 2025",
        title: "Matchs de la 6ème ronde du CSG",
        text: `Valais 1 a perdu 6.5 - 1.5 face à Nyon.\n\n` +
              `Valais 3 c'est incliné 2.5 - 3.5 face à La Béroche 1, leur rival de fond de classement.\n\n` +
              `Aucune de nos deux équipes n'est encore sauve d'un relégation, la dernière ronde promet d'être palpitante.`,
        image: "../../static/picture/actualite/local_club.jpg"
    },
    {
        date: "31 janvier 2025",
        title: "Matchs de la 4ème ronde du CVE",
        text: `Sion 1 n'a pas réussi à s'imposer face à Sierre 1, résultat 2 - 2.\n\n` +
              `Sion 2 s'est incliné 0.5 - 3.5 face aux favoris de leur groupe, Martigny 1.`,
        image: "../../static/picture/actualite/chess_pieces.jpg"
    },
    {
        date: "25 janvier 2025",
        title: "Matchs de la 5ème ronde du CSG",
        text: `Valais 1 a perdu 2.5 - 5.5 face à Kirchberg 1.\n\n` +
              `Se relançant après 3 défaites consécutives, Valais 3 à pris le meilleur de Neuchâtel 1 sur le score de 3.5 à 2.5.`,
        image: "../../static/picture/actualite/ajedrez.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.news-slider');
    const indicators = document.querySelector('.news-indicators');
    const prevButton = document.querySelector('.news-prev');
    const nextButton = document.querySelector('.news-next');
    const SLIDE_INTERVAL = 25000; // 25 secondes
    
    if (!slider || !indicators) {
        console.error('Éléments du carrousel non trouvés');
        return;
    }

    // Génère les slides avec la structure pour les retours à la ligne
    // Dans la partie de génération des slides
    slider.innerHTML = news.map((item, index) => `
        <article class="news-card ${index === 0 ? 'active' : ''}" data-index="${index}">
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <div class="news-content">
                <time class="news-date">${item.date}</time>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-text">${item.text
                    .split('\n\n') // Sépare par les doubles retours à la ligne
                    .filter(para => para.trim()) // Enlève les paragraphes vides
                    .map(para => `<span>${para.trim()}</span>`) // Entoure chaque paragraphe
                    .join('')}</p>
            </div>
        </article>
    `).join('');

    // Génère les indicateurs
    indicators.innerHTML = news.map((item, index) => `
        <button class="news-indicator ${index === 0 ? 'active' : ''}" 
                data-index="${index}"
                aria-label="Actualité : ${item.title}">
        </button>
    `).join('');

    let currentSlide = 0;
    let isAnimating = false;
    let autoPlayInterval;

    // Fonction pour changer de slide avec gestion des animations
    function showSlide(index, direction = 'next') {
        if (isAnimating || index === currentSlide) return;
        isAnimating = true;

        const currentCard = document.querySelector('.news-card.active');
        const nextCard = document.querySelector(`.news-card[data-index="${index}"]`);
        
        // Mise à jour des indicateurs
        document.querySelectorAll('.news-indicator').forEach(ind => ind.classList.remove('active'));
        document.querySelector(`.news-indicator[data-index="${index}"]`).classList.add('active');
        
        // Animation de transition
        currentCard.style.animation = `fadeOut 0.3s ease-out`;
        setTimeout(() => {
            currentCard.classList.remove('active');
            nextCard.classList.add('active');
            nextCard.style.animation = `fadeIn 0.3s ease-in`;
            
            setTimeout(() => {
                isAnimating = false;
            }, 300);
        }, 300);

        currentSlide = index;
        resetAutoPlay(); // Réinitialise le timer à chaque changement de slide
    }

    // Gestionnaires d'événements pour les boutons
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            showSlide((currentSlide - 1 + news.length) % news.length, 'prev');
        });

        nextButton.addEventListener('click', () => {
            showSlide((currentSlide + 1) % news.length, 'next');
        });
    }

    // Gestionnaire pour les indicateurs
    indicators.addEventListener('click', (e) => {
        if (e.target.classList.contains('news-indicator')) {
            const newIndex = parseInt(e.target.dataset.index);
            showSlide(newIndex, newIndex > currentSlide ? 'next' : 'prev');
        }
    });

    // Gestion du défilement automatique avec réinitialisation
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            if (!document.hidden) {
                showSlide((currentSlide + 1) % news.length, 'next');
            }
        }, SLIDE_INTERVAL);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Pause lors du survol
    const carousel = document.querySelector('.news-carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    carousel.addEventListener('mouseleave', () => {
        // Réinitialise le timer quand la souris quitte le carousel
        resetAutoPlay();
    });

    // Gestion de la visibilité de la page
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(autoPlayInterval);
        } else {
            resetAutoPlay(); // Réinitialise le timer quand la page redevient visible
        }
    });

    // Démarrage initial du défilement automatique
    startAutoPlay();
});