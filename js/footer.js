// footer.js - Génération et injection du footer

document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner l'ancien footer pour le remplacer
    const oldFooter = document.querySelector('.site-footer');
    
    if (oldFooter) {
        // Créer le nouveau footer
        const newFooter = document.createElement('footer');
        newFooter.className = 'site-footer';
        
        // Contenu HTML du footer
        newFooter.innerHTML = `
            <div class="footer-content">
                <div class="footer-section">
                    <h3 class="footer-title">Le Club</h3>
                    <div class="footer-contact">
                        <p>Club D'Échecs de Sion</p>
                        <p>Rue des Châteaux 2</p>
                        <p>1950 Sion</p>
                    </div>
                </div>

                <div class="footer-section links-section">
                    <h3 class="footer-title">Liens Fédérations</h3>
                    <div class="footer-links-grid">
                        <a href="https://uve-wsb.ch" class="footer-link">Union Valaisanne des Échecs</a>
                        <a href="https://swisschess.ch" class="footer-link">Fédération Suisse des Échecs</a>
                        <a href="https://www.fide.com" class="footer-link">Fédération Internationale des Échecs</a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <span>© ${new Date().getFullYear()} Club d'Échecs de Sion. Tous droits réservés.</span>
                    <span class="webmaster-info">Webmaster : Duc Jeremy</span>
                </div>
            </div>
        `;
        
        // Remplacer l'ancien footer par le nouveau
        oldFooter.parentNode.replaceChild(newFooter, oldFooter);
        
        // Ajouter le style pour l'information du webmaster
        const style = document.createElement('style');
        style.textContent = `
            .webmaster-info {
                color: rgba(255, 255, 255, 0.7);
            }
            
            .footer-bottom-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 2rem;
                color: rgba(255, 255, 255, 0.7);
                font-size: 0.9rem;
            }
            
            @media (max-width: 768px) {
                .footer-bottom-content {
                    flex-direction: column;
                    gap: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
});