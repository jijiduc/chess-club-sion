// Données des actualités
const news = [
    {
        date: new Date('2025-03-28T12:00:00'),
        title: "6ème ronde du CVE",
        text: `Sion 1 c'est imposé 4 - 0 face à Riddes 1.\n\n` +
              `Cette victoire conclut la lutte serrée avec l'équipe de Sierre 1 pour la première place du groupe et la qualification en finale.\n\n` +
              `Le match pour le titre opposera donc Martigny 1 à Sion 1.\n\n` +
              `De son côté, Sion 2 n'a pas résisté à Monthey et s'est incliné d'un demi-point sur le score de 1.5 - 2.5.\n\n` +
              `Après une deuxième phase de groupe plus compliquée, Sion 2 affrontera Riddes 1 dans le match pour la 7ᵉ place.\n\n` +
              `La ronde finale se déroulera le 3 mai.`,
        icon: "trophy",
        hasLink: true,
        link: "cve.html",
        linkText: "Plus d'informations sur le CVE"
    },
    {
        date: new Date('2025-03-22T12:00:00'),
        title: "1ère ronde du CSE 2025",
        text: `Lors de la 1ère journée du Championnat Suisse par Equipe 2025, Sion 1 s'est incliné 1½:6½ face à Grand Echiquier Lausanne.\n\n` +
              `Sion 2 s'est également incliné 2-4 face à Montana.\n\n` +
              `Une première journée difficile pour nos équipes, qui chercheront à se relancer dès la prochaine ronde, le 5 avril.`,
        icon: "trophy",
        hasLink: true,
        link: "cse.html",
        linkText: "Plus d'informations sur le CSE"
    },
    {
    date: new Date('2025-03-13T12:00:00'),
        title: "5ème ronde du CVE",
        text: `Sion 1 c'est imposé 3.5 - 0.5 face à Montana 1.\n\n` +
              `Une victoire importante pour Sion 1 qui reste dans la course pour la 1ère place de son groupe.\n\n` +
              `Le score du match n'est cependant pas encore certains, car une procédure est en cours auprès du tribunal de l'UVE.\n\n` +
              `Sion 2 c'est incliné 1.5 - 2.5 face à Port-Valais.\n\n` +
              `Avec cette défaite, Sion 2 est désormais dernier de son groupe et devra se gagner lors de la 6ème ronde pour chercher une 3ème place de son groupe.`,
        icon: "trophy",
        hasLink: true,
        link: "cve.html",
        linkText: "Plus d'informations sur le CVE"
    },
    {
        date: new Date('2025-03-01T12:00:00'),
        title: "1er Tournoi fermé des Châteaux",
        text: `Le Club d'Échecs de Sion organise son premier Tournoi fermé des Châteaux du 18 au 20 avril 2025.\n\n` +
              `Ce tournoi, qui se déroulera en deux catégories (Valère pour Elo 1800-2000 et Tourbillon pour Elo <1800), ` +
              `vise à offrir aux joueurs valaisans l'opportunité de disputer des parties lentes cotées FIDE dans notre canton.\n\n` +
              `Format: tournoi fermé à 6 joueurs par catégorie, 5 rondes en système Berger selon les règles de la FIDE.\n\n` +
              `Cadence: 90 minutes + 30 secondes d'incrément par coup.\n\n`,
        icon: "trophy",
        hasLink: true,
        link: "tournoi_chateaux.html",
        linkText: "Plus d'informations et inscriptions"
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.news-section');
    if (!container) {
        console.error('Conteneur d\'actualités non trouvé');
        return;
    }

    // Supprimer le contenu existant
    const oldCarousel = container.querySelector('.news-carousel');
    if (oldCarousel) {
        oldCarousel.remove();
    }

    // Fonction pour obtenir un texte formaté de la date
    function getFormattedDateString(date) {
        const options = { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        };
        return date.toLocaleDateString('fr-FR', options);
    }

    // Obtenir les icônes pour les marqueurs
    function getIconSvg(iconName) {
        const icons = {
            "trophy": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>',
            "graduation-cap": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>',
            "award": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/></svg>'
        };
        return icons[iconName] || icons["trophy"];
    }

    // Créer la nouvelle structure du timeline
    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline-container';
    
    const timeline = document.createElement('div');
    timeline.className = 'timeline';
    
    // Ajouter les éléments d'actualité au timeline
    news.forEach(item => {
        const formattedDate = getFormattedDateString(item.date);
        
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-marker" title="${formattedDate}">
                ${getIconSvg(item.icon)}
            </div>
            <div class="timeline-date">${formattedDate}</div>
            <div class="timeline-content">
                <h3 class="timeline-title">${item.title}</h3>
                <div class="timeline-text">
                    ${item.text
                        .split('\n\n')
                        .filter(para => para.trim())
                        .map(para => `<p>${para.trim()}</p>`)
                        .join('')}
                    ${item.hasLink ? `<p class="timeline-link"><a href="${item.link}">${item.linkText}</a></p>` : ''}
                </div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
    
    timelineContainer.appendChild(timeline);
    container.appendChild(timelineContainer);
});