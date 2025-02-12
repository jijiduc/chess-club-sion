// navigation.js - Gestion de la navigation

document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments
    const navbar = document.querySelector('.nav-bar');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    // Configuration
    const SCROLL_THRESHOLD = 50;
    const MOBILE_BREAKPOINT = 768;

    /**
     * Gestion du menu mobile
     */
    const initMobileMenu = () => {
        mobileMenuButton?.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Ajoute/retire la classe pour l'animation de l'icône
            mobileMenuButton.classList.toggle('active');
        });

        // Ferme le menu mobile lors du clic sur un lien
        navLinks?.addEventListener('click', (e) => {
            if (window.innerWidth <= MOBILE_BREAKPOINT && e.target.classList.contains('nav-link')) {
                navLinks.classList.remove('active');
                mobileMenuButton.classList.remove('active');
            }
        });
    };

    /**
     * Gestion de l'effet de scroll
     */
    const handleScroll = () => {
        const scrolled = window.scrollY > SCROLL_THRESHOLD;
        navbar?.classList.toggle('scrolled', scrolled);
    };

    /**
     * Gestion des dropdowns sur mobile
     */
    const initMobileDropdowns = () => {
        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('.nav-link');
            const dropdownContent = dropdown.querySelector('.dropdown-content');

            // Sur mobile uniquement
            if (window.innerWidth <= MOBILE_BREAKPOINT) {
                dropdownLink?.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Ferme tous les autres dropdowns
                    dropdowns.forEach(other => {
                        if (other !== dropdown) {
                            other.querySelector('.dropdown-content')?.classList.remove('show');
                        }
                    });
                    // Toggle le dropdown actuel
                    dropdownContent?.classList.toggle('show');
                });
            }
        });
    };

    /**
     * Gestion de la navigation au clavier
     */
    const initKeyboardNav = () => {
        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('.nav-link');
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            const dropdownItems = dropdownContent?.querySelectorAll('a');

            dropdownLink?.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    dropdownContent?.classList.add('show');
                    dropdownItems?.[0]?.focus();
                }
            });

            // Navigation dans le dropdown avec les flèches
            dropdownItems?.forEach((item, index) => {
                item.addEventListener('keydown', (e) => {
                    switch (e.key) {
                        case 'Escape':
                            dropdownContent.classList.remove('show');
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
    };

    /**
     * Met à jour l'état du lien actif
     */
    const updateActiveLink = () => {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll('.nav-link');

        links.forEach(link => {
            if (link.getAttribute('href') === currentPath.split('/').pop()) {
                link.classList.add('active');
            }
        });
    };

    /**
     * Gestion du redimensionnement de la fenêtre
     */
    const handleResize = () => {
        if (window.innerWidth > MOBILE_BREAKPOINT) {
            navLinks?.classList.remove('active');
            mobileMenuButton?.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropdown-content')?.classList.remove('show');
            });
        }
    };

    // Initialisation
    const init = () => {
        initMobileMenu();
        initMobileDropdowns();
        initKeyboardNav();
        updateActiveLink();

        // Event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // État initial
        handleScroll();
    };

    // Démarrage
    init();
});