// cve.js
document.addEventListener('DOMContentLoaded', function() {
    // Gestion des sections dépliables
    const seasonHeaders = document.querySelectorAll('.season-header');
    
    // Ouvrir la première section par défaut
    const firstSeasonContent = seasonHeaders[0]?.nextElementSibling;
    if (firstSeasonContent) {
        firstSeasonContent.style.display = 'block';
    }

    // Fermer toutes les autres sections
    seasonHeaders.forEach((header, index) => {
        if (index !== 0) {
            header.classList.add('collapsed');
            const content = header.nextElementSibling;
            if (content) {
                content.classList.add('collapsed');
            }
        }

        header.addEventListener('click', function() {
            // Toggle la classe collapsed sur le header
            this.classList.toggle('collapsed');
            
            // Toggle l'affichage du contenu
            const content = this.nextElementSibling;
            if (content) {
                if (content.classList.contains('collapsed')) {
                    content.classList.remove('collapsed');
                    // Animer l'ouverture
                    content.style.display = 'block';
                } else {
                    content.classList.add('collapsed');
                    // Animer la fermeture
                    setTimeout(() => {
                        if (content.classList.contains('collapsed')) {
                            content.style.display = 'none';
                        }
                    }, 300);
                }
            }
        });
    });

    // Ajout de la gestion des liens actifs dans la navigation
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') && currentPage.includes(link.getAttribute('href'))) {
            link.classList.add('active');
            // Si le lien est dans un dropdown, activer aussi le parent
            const dropdownParent = link.closest('.nav-dropdown');
            if (dropdownParent) {
                const parentLink = dropdownParent.querySelector('.nav-link');
                if (parentLink) {
                    parentLink.classList.add('active');
                }
            }
        }
    });
});