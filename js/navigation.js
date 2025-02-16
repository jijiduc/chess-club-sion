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
    };

    /**
     * Gestion de l'effet de scroll
     */
    const handleScroll = () => {
        const scrolled = window.scrollY > SCROLL_THRESHOLD;
        navbar?.classList.toggle('scrolled', scrolled);
    };

    /**
     * Gestion des dropdowns sur mobile et desktop
     */
    const initDropdowns = () => {
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
    };

    /**
     * Met à jour l'état du lien actif
     */
    const updateActiveLink = () => {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll('.nav-link, .dropdown-content a');

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath.split('/').pop() || 
                (currentPath.endsWith('/') && href === '')) {
                link.classList.add('active');
                // Si le lien actif est dans un dropdown, ajoute la classe active au parent
                const parentDropdown = link.closest('.nav-dropdown');
                if (parentDropdown) {
                    parentDropdown.querySelector('.nav-link').classList.add('active');
                }
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
                dropdown.classList.remove('open');
            });
        }
    };

    // Initialisation
    const init = () => {
        initMobileMenu();
        initDropdowns();
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