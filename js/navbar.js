// navigation.js - Gestion complète de la navigation
// Génère la barre de navigation et implémente toutes les fonctionnalités interactives

document.addEventListener('DOMContentLoaded', () => {
    // Injecter la navbar
    injectNavbar();
    
    // Initialiser les fonctionnalités de la navbar
    // Sera appelé après l'injection de la navbar
});

/**
 * Génère et injecte la barre de navigation
 */
function injectNavbar() {
    // Sélectionner l'élément où injecter la navbar
    const oldNavbar = document.querySelector('.nav-bar');
    const targetElement = oldNavbar || document.querySelector('header');
    
    if (targetElement) {
        // Créer la nouvelle navbar
        const newNavbar = document.createElement('nav');
        newNavbar.className = 'nav-bar';
        
        // Contenu HTML de la navbar
        newNavbar.innerHTML = `
            <div class="nav-container">
                <a href="index.html" class="nav-brand">
                    <div class="nav-logo">
                        <img src="static/pieces/wK.svg" alt="Logo" />
                    </div>
                    <span class="brand-text">Club d'échecs de Sion</span>
                </a>

                <button class="mobile-menu-button">
                    <svg class="mobile-menu-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" />
                    </svg>
                </button>

                <div class="nav-links">
                    <a href="index.html" class="nav-link">Accueil</a>

                    <div class="nav-dropdown">
                        <a href="#" class="nav-link">Le club</a>
                        <div class="dropdown-content">
                            <a href="club.html">Présentation du club</a>
                            <a href="comite.html" class="separator-top">Le comité</a>
                            <a href="membre.html">Liste des membres</a>
                            <a href="club.html#devenir-membre" class="separator-top">Devenir membre</a>
                            <a href="comite.html#contact">Prendre contact</a>
                            <a href="club.html#local-jeu">Local de jeu</a>
                        </div>
                    </div>

                    <a href="programme.html" class="nav-link">Programme</a>

                    <div class="nav-dropdown">
                        <a href="#" class="nav-link">Compétitions</a>
                        <div class="dropdown-content">
                            <a href="cse.html">Championnat Suisse par Equipes</a>
                            <a href="csg.html">Championnat Suisse par Groupe</a>
                            <a href="cve.html">Championnat Valaisan par Équipes</a>
                            <a href="tournoi_interne.html">Tournoi interne</a>
                        </div>
                    </div>

                    <a href="ecole.html" class="nav-link">Ecole d'échecs</a>
                </div>
            </div>
        `;
        
        // Si on a trouvé une ancienne navbar, la remplacer
        if (oldNavbar) {
            oldNavbar.parentNode.replaceChild(newNavbar, oldNavbar);
        } 
        // Sinon l'insérer au début du header
        else if (targetElement) {
            targetElement.insertBefore(newNavbar, targetElement.firstChild);
        }
        
        // Une fois la navbar injectée, initialiser ses fonctionnalités
        initNavbarFunctionality(newNavbar);
    }
}

/**
 * Initialise toutes les fonctionnalités interactives de la navbar
 */
function initNavbarFunctionality(navbar) {
    // Sélection des éléments
    const mobileMenuButton = navbar.querySelector('.mobile-menu-button');
    const navLinks = navbar.querySelector('.nav-links');
    const dropdowns = navbar.querySelectorAll('.nav-dropdown');

    // Configuration
    const SCROLL_THRESHOLD = 50;
    const MOBILE_BREAKPOINT = 768;

    /**
     * Gestion du menu mobile
     */
    mobileMenuButton?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuButton.classList.toggle('active');
        
        // Ferme tous les dropdowns quand on ferme le menu
        if (!navLinks.classList.contains('active')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('open');
            });
        }
    });

    // Ferme le menu mobile lors du clic sur un lien (sauf pour les dropdowns)
    navLinks?.addEventListener('click', (e) => {
        if (window.innerWidth <= MOBILE_BREAKPOINT && 
            e.target.classList.contains('nav-link') && 
            !e.target.parentElement.classList.contains('nav-dropdown')) {
            navLinks.classList.remove('active');
            mobileMenuButton.classList.remove('active');
        }
    });

    /**
     * Gestion des dropdowns sur mobile et desktop
     */
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');
        
        // Gestion des clics sur les liens de dropdown
        dropdownLink?.addEventListener('click', (e) => {
            if (window.innerWidth <= MOBILE_BREAKPOINT) {
                e.preventDefault();
                // Ferme tous les autres dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('open');
                    }
                });
                // Toggle le dropdown actuel
                dropdown.classList.toggle('open');
            }
        });

        // Gestion des clics sur les liens dans le dropdown
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent?.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                dropdown.classList.remove('open');
                if (window.innerWidth <= MOBILE_BREAKPOINT) {
                    navLinks.classList.remove('active');
                    mobileMenuButton.classList.remove('active');
                }
            }
        });
    });

    /**
     * Gestion de la navigation au clavier
     */
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const dropdownItems = dropdownContent?.querySelectorAll('a');

        dropdownLink?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dropdown.classList.add('open');
                dropdownItems?.[0]?.focus();
            }
        });

        // Navigation dans le dropdown avec les flèches
        dropdownItems?.forEach((item, index) => {
            item.addEventListener('keydown', (e) => {
                switch (e.key) {
                    case 'Escape':
                        dropdown.classList.remove('open');
                        dropdownLink?.focus();
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        const prevItem = dropdownItems[index - 1] || dropdownItems[dropdownItems.length - 1];
                        prevItem?.focus();
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        const nextItem = dropdownItems[index + 1] || dropdownItems[0];
                        nextItem?.focus();
                        break;
                }
            });
        });
    });

    /**
     * Met à jour l'état du lien actif
     */
    updateActiveLinks();

    /**
     * Gestion de l'effet de scroll
     */
    const handleScroll = () => {
        const scrolled = window.scrollY > SCROLL_THRESHOLD;
        navbar?.classList.toggle('scrolled', scrolled);
    };

    /**
     * Gestion du redimensionnement de la fenêtre
     */
    const handleResize = () => {
        if (window.innerWidth > MOBILE_BREAKPOINT) {
            navLinks?.classList.remove('active');
            mobileMenuButton?.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('open');
            });
        }
    };

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // État initial
    handleScroll();
}

/**
 * Met à jour les liens actifs dans la navigation
 */
function updateActiveLinks() {
    // Obtenir le nom de la page actuelle depuis l'URL
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // Sélectionner tous les liens de navigation
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-content a');
    
    // Parcourir tous les liens et activer celui correspondant à la page actuelle
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentPage || 
            (currentPath.endsWith('/') && href === 'index.html') ||
            (href && href !== '#' && currentPage.includes(href))) {
            
            link.classList.add('active');
            
            // Si le lien actif est dans un dropdown, ajouter la classe active au parent
            const parentDropdown = link.closest('.nav-dropdown');
            if (parentDropdown && !link.classList.contains('nav-link')) {
                const parentLink = parentDropdown.querySelector('.nav-link');
                if (parentLink) {
                    parentLink.classList.add('active');
                }
            }
        }
    });
}