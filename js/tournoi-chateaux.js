/**
 * tournoi-chateaux.js - Script pour la page du tournoi des Châteaux
 * Gère le formulaire d'inscription et l'interaction avec l'interface
 */

document.addEventListener('DOMContentLoaded', function() {
    // Variables pour les éléments DOM
    const inscriptionBtn = document.getElementById('inscription-btn');
    const formModal = document.getElementById('form-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const formContainer = document.getElementById('form-container');
    
    // URL du formulaire Google (à remplacer par votre URL)
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfY9im2mz7e1IZcpwyLEAH9u-quZYmv3fdrJS3UdM8dBHle7g/viewform?usp=header';
    
    // Animation de parallaxe pour l'image de fond (subtile)
    const parallaxEffect = () => {
        const scrollY = window.scrollY;
        const backgroundImage = document.querySelector('.background-image');
        
        if (backgroundImage) {
            // Effet de décalage subtil
            const yPos = scrollY * 0.2;
            backgroundImage.style.transform = `translateY(-${yPos}px)`;
        }
    };
    
    // Fonction pour ouvrir le modal avec le formulaire
    const openFormModal = () => {
        formModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Empêcher le défilement
        
        // Charge le formulaire Google dans un iframe
        if (!formContainer.querySelector('iframe')) {
            const iframe = document.createElement('iframe');
            iframe.src = googleFormUrl;
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('marginheight', '0');
            iframe.setAttribute('marginwidth', '0');
            iframe.setAttribute('title', 'Formulaire d\'inscription au tournoi');
            iframe.textContent = 'Chargement...';
            
            formContainer.appendChild(iframe);
        }
    };
    
    // Fonction pour fermer le modal
    const closeFormModal = () => {
        formModal.style.display = 'none';
        document.body.style.overflow = ''; // Rétablir le défilement
    };
    
    // Ajout des écouteurs d'événements
    if (inscriptionBtn) {
        inscriptionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openFormModal();
        });
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeFormModal);
    }
    
    // Fermer le modal en cliquant à l'extérieur
    window.addEventListener('click', (e) => {
        if (e.target === formModal) {
            closeFormModal();
        }
    });
    
    // Fermer le modal avec la touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && formModal.style.display === 'block') {
            closeFormModal();
        }
    });
    
    // Activer l'effet de parallaxe au défilement si l'écran est assez grand
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', parallaxEffect);
    }
    
    // Ajuster la hauteur de l'iframe lors du redimensionnement
    window.addEventListener('resize', () => {
        const iframe = formContainer.querySelector('iframe');
        if (iframe) {
            const viewportHeight = window.innerHeight;
            const modalHeaderHeight = 80; // Hauteur approximative de l'en-tête du modal
            const padding = 60; // Padding total
            
            iframe.style.height = (viewportHeight - modalHeaderHeight - padding) + 'px';
        }
    });
    
    // Animation subtile des cartes au survol
    const animateCards = () => {
        const cards = document.querySelectorAll('.schedule-day, .prize-category');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = getComputedStyle(document.documentElement).getPropertyValue('--shadow-md');
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
        });
    };
    
    // Initialiser les animations
    animateCards();
});