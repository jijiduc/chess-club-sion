// calendar.js - Logique du calendrier et des événements

// Données des événements
const events = {
    "2025-01-31": [
        {
            time: "20h00",
            title: "CVE 2e tour ronde 4",
            category: "competition",
            details: ["Sion 1 - Sierre 1", "Martigny 1 - Sion 2"]
        }
    ],

    "2025-02-07": [
        {
            time: "19h00-20h00",
            title: "Cours d'échecs",
            category: "formation"
        },
        {
            time: "20h00",
            title: "Soirée analyse",
            category: "soiree_club"
        }
    ],
    "2025-02-08": [
        {
            time: "09h00",
            title: "CSG ronde 6",
            category: "competition",
            details: ["Nyon 1 - Valais 1", "Valais 3 - La Béroche 1"]
        }
    ],
    "2025-02-14": [
        {
            time: "20h00",
            title: "Soirée blitz",
            category: "soiree_club"
        }
    ],
    "2025-02-21": [
        {
            time: "19h00-20h00",
            title: "Cours d'échecs",
            category: "formation"
        },
        {
            time: "20h00",
            title: "Tournoi interne",
            category: "competition"
        }
    ],
    "2025-02-22": [
        {
            time: "09h00",
            title: "CSG ronde 7",
            category: "competition",
            details: ["Valais 1 - SG Riehen 1", "Grand Echiquier - Valais 3"]
        }
    ],
    "2025-02-23": [
        {
            time: "09h00",
            title: "Active Chess du Bouveret",
            category: "competition",
            hasLink: true,
            link: "https://echecs-port-valais.ch/active-chess/",  // Ajout de l'URL spécifique
            details: ["7 rondes", "15min + 5sec/coup"]  // Optionnel: ajout de détails
        }
    ],
    "2025-02-28": [
        {
            time: "19h00-20h00",
            title: "Cours d'échecs",
            category: "formation"
        },
        {
            time: "20h00",
            title: "Soirée analyse",
            category: "soiree_club"
        }
    ],

    "2025-03-14": [
        {
            time: "20h00",
            title: "CVE 2e tour ronde 5",
            category: "competition",
            details: ["Sion 1 - Montana 1", "CEPV - Sion 2"]
        }
    ],
    "2025-03-22": [
        {
            time: "14h00",
            title: "CSE ronde 1",
            category: "competition",
            details: ["Sion 1 - Grand Echiquier 1", "Sion 2 - Crans-Montana 2"]
        }
    ],
    "2025-03-28": [
        {
            time: "20h00",
            title: "CVE 2e tour ronde 6",
            category: "competition",
            details: ["Riddes 1 - Sion 1", "Sion 2 - Monthey"]
        }
    ],
    "2025-04-05": [
        {
            time: "14h00",
            title: "CSE ronde 2",
            category: "competition",
            details: ["Fribourg 1 - Sion 1", "Bulle 3 - Sion 2"]
        }
    ],
    "2025-04-18": [
        {
            time: "17h45",
            title: "Tournoi fermé des Châteaux",
            category: "competition",
            details: ["17h45 : acceuil", "18h00 : 1ère ronde"]
        }
    ],
    "2025-04-19": [
        {
            time: "9h00",
            title: "Tournoi fermé des Châteaux",
            category: "competition",
            details: ["9h00 : 2ème ronde", "14h00 : 3ème ronde"]
        }
    ],
    "2025-04-20": [
        {
            time: "9h00",
            title: "Tournoi fermé des Châteaux",
            category: "competition",
            details: ["9h00 : 4ème ronde", "14h00 : 5ème ronde"]
        }
    ],
    "2025-04-26": [
        {
            time: "14h00",
            title: "CSE ronde 3",
            category: "competition",
            details: ["Sion 1 - Köniz-Bubenberg 1", "Sion 2 - Grand Echiquier 2"]
        }
    ],
    "2025-05-03": [
        {
            time: "09h00",
            title: "CVE ronde finale",
            category: "competition",
            details: ["Appariements à venir"]
        }
    ],
    "2025-05-17": [
        {
            time: "14h00",
            title: "CSE ronde 4",
            category: "competition",
            details: ["Sion 1 - Neuchâtel 1", "Valais 2 - Sion 2"]
        }
    ],
    "2025-06-21": [
        {
            time: "14h00",
            title: "CSE ronde 5",
            category: "competition",
            details: ["Valais 1 - Sion 1", "Sion 2 - Monthey 1"]
        }
    ],
    "2025-08-23": [
        {
            time: "14h00",
            title: "CSE ronde 6",
            category: "competition",
            details: ["Echallens 2 - Sion 1", "Sion 2 - Crazy Horse 1"]
        }
    ],
    "2025-09-13": [
        {
            time: "14h00",
            title: "CSE ronde 7",
            category: "competition",
            details: ["Sion 1 - Genève 2", "Payerne 2 - Sion 2"]
        }
    ]
};

// Fonction pour configurer les filtres
function setupFilters() {
    const filterButtons = document.querySelectorAll('#filters .filter-button');
    
    // Vérifier si les boutons existent
    if (!filterButtons || filterButtons.length === 0) {
        console.warn('Boutons de filtre non trouvés');
        return;
    }
    
    // Supprimer les écouteurs existants avant d'en ajouter de nouveaux
    filterButtons.forEach(button => {
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    });
    
    // Récupérer les nouveaux boutons et ajouter les écouteurs
    const newFilterButtons = document.querySelectorAll('#filters .filter-button');
    newFilterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Supprimer la classe active de tous les boutons
            newFilterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');

            const selectedCategory = this.dataset.category;
            
            // Filtrer les cartes d'événements
            const eventCards = document.querySelectorAll('.event-card');
            if (!eventCards || eventCards.length === 0) {
                console.warn('Cartes d\'événements non trouvées');
                return;
            }
            
            eventCards.forEach(card => {
                const group = card.closest('.event-group');
                if (selectedCategory === 'all') {
                    card.style.display = 'block';
                    if (group) group.style.display = 'block';
                } else {
                    if (card.querySelector(`.category-${selectedCategory}`)) {
                        card.style.display = 'block';
                        if (group) group.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                        if (group) {
                            const hasVisibleEvents = Array.from(group.querySelectorAll('.event-card'))
                                .some(c => c.style.display !== 'none');
                            group.style.display = hasVisibleEvents ? 'block' : 'none';
                        }
                    }
                }
            });
        });
    });
}

// Gestionnaire de vues
class ViewManager {
    constructor() {
        // Sélectionner tous les boutons avec l'attribut data-view
        this.viewButtons = document.querySelectorAll('button[data-view]');
        this.calendarView = document.getElementById('calendar-view');
        this.listView = document.getElementById('list-view');
        
        // Vérifier que les éléments essentiels existent
        if (!this.calendarView || !this.listView) {
            console.error('Éléments de vue non trouvés');
            return;
        }
        
        // Vérifier si on est sur mobile (≤ 480px)
        this.isMobile = window.innerWidth <= 480;
        
        // Configuration spécifique pour mobile
        if (this.isMobile) {
            // Sur mobile, forcer la vue liste
            this.calendarView.style.display = 'none';
            this.listView.style.display = 'block';
            // Assurer que la liste est rendue
            renderListView();
        } else {
            // Si pas sur mobile, configurer les écouteurs normalement
            this.setupViewListeners();

            // Initialiser avec la vue correcte en fonction des classes actives
            const activeButton = document.querySelector('button[data-view].active');
            if (activeButton) {
                this.switchView(activeButton);
            } else {
                // Par défaut, activer la vue calendrier si aucun bouton n'est actif
                const calendarButton = document.querySelector('button[data-view="calendar"]');
                if (calendarButton) {
                    calendarButton.classList.add('active');
                    this.switchView(calendarButton);
                }
            }
        }
        
        // Écouter les changements de taille d'écran pour gérer le mode mobile
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
        // Vérifier si on passe en mode mobile ou si on en sort
        const wasMobile = this.isMobile;
        this.isMobile = window.innerWidth <= 480;
        
        // Si on entre en mode mobile
        if (!wasMobile && this.isMobile) {
            // Forcer la vue liste
            this.calendarView.style.display = 'none';
            this.listView.style.display = 'block';
            renderListView();
        } 
        // Si on sort du mode mobile
        else if (wasMobile && !this.isMobile) {
            // Rétablir les écouteurs normaux
            this.setupViewListeners();
            
            // Revenir à la vue par défaut (calendrier)
            const calendarButton = document.querySelector('button[data-view="calendar"]');
            if (calendarButton) {
                calendarButton.classList.add('active');
                this.switchView(calendarButton);
            }
        }
    }

    setupViewListeners() {
        // Vérifier d'abord si les boutons existent
        if (!this.viewButtons || this.viewButtons.length === 0) {
            console.warn('Boutons de vue non trouvés');
            return;
        }
        
        // Supprimer les écouteurs existants avant d'en ajouter de nouveaux
        this.viewButtons.forEach(button => {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
        });
        
        // Récupérer les nouveaux boutons et ajouter les écouteurs
        this.viewButtons = document.querySelectorAll('button[data-view]');
        this.viewButtons.forEach(button => {
            button.addEventListener('click', () => this.switchView(button));
        });
    }

    switchView(selectedButton) {
        // Vérifier que les vues existent
        if (!this.calendarView || !this.listView) {
            console.error('Éléments de vue non trouvés');
            return;
        }
        
        // Ne rien faire si on est en mode mobile
        if (this.isMobile) return;
        
        const view = selectedButton.dataset.view;

        // Mettre à jour tous les boutons avec le même attribut data-view
        document.querySelectorAll(`button[data-view="${view}"]`).forEach(btn => {
            btn.classList.add('active');
        });

        document.querySelectorAll(`button[data-view]:not([data-view="${view}"])`).forEach(btn => {
            btn.classList.remove('active');
        });

        if (view === 'calendar') {
            this.calendarView.style.display = 'block';
            this.listView.style.display = 'none';
        } else {
            this.calendarView.style.display = 'none';
            this.listView.style.display = 'block';
            renderListView();
            setupFilters();
        }
    }
}

// Gestionnaire de calendrier
class CalendarManager {
    constructor(events) {
        this.events = events;
        this.currentDate = new Date(); // Février 2025 (les mois commencent à 0)
        this.calendarGrid = document.querySelector('.calendar-grid');
        
        // Vérifier que l'élément de grille existe
        if (!this.calendarGrid) {
            console.warn('Grille de calendrier non trouvée');
            return;
        }
        
        // Ne pas initialiser le calendrier en mode mobile
        if (window.innerWidth <= 480) return;
        
        this.setupCalendarNavigation();
        this.generateCalendar();
    }

    setupCalendarNavigation() {
        const prevButton = document.querySelector('.calendar-header .prev-month');
        const nextButton = document.querySelector('.calendar-header .next-month');
        
        // Vérifier que les boutons existent
        if (!prevButton || !nextButton) {
            console.warn('Boutons de navigation du calendrier non trouvés');
            return;
        }
        
        // Simplifier les boutons sur mobile
        if (window.innerWidth <= 480) {
            prevButton.innerHTML = '&lt;';
            nextButton.innerHTML = '&gt;';
        }

        prevButton.addEventListener('click', () => this.changeMonth(-1));
        nextButton.addEventListener('click', () => this.changeMonth(1));
    }

    changeMonth(delta) {
        this.currentDate.setMonth(this.currentDate.getMonth() + delta);
        this.generateCalendar();
    }

    generateCalendar() {
        // Vérifier que la grille existe
        if (!this.calendarGrid) {
            console.warn('Grille de calendrier non trouvée');
            return;
        }
        
        // Mise à jour du titre du mois
        const monthTitle = document.querySelector('.calendar-header h2');
        if (monthTitle) {
            monthTitle.textContent = this.currentDate.toLocaleDateString('fr-FR', {
                month: 'long',
                year: 'numeric'
            });
        }

        // Vider le calendrier existant (sauf les en-têtes)
        const headers = document.querySelectorAll('.calendar-day-header');
        this.calendarGrid.innerHTML = '';
        if (headers && headers.length) {
            headers.forEach(header => this.calendarGrid.appendChild(header));
        }

        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        // Jours du mois précédent
        const firstDayOfWeek = firstDay.getDay() || 7;
        for (let i = firstDayOfWeek - 1; i > 0; i--) {
            this.createDayCell(null, true);
        }

        // Jours du mois courant
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const date = new Date(year, month, i);
            this.createDayCell(date);
        }
    }

    createDayCell(date, isOtherMonth = false) {
        if (!this.calendarGrid) return;
        
        const day = document.createElement('div');
        day.className = 'calendar-day';
        if (isOtherMonth) {
            day.classList.add('other-month');
            this.calendarGrid.appendChild(day);
            return;
        }

        // Vérifier si c'est aujourd'hui
        const today = new Date();
        if (date.toDateString() === today.toDateString()) {
            day.classList.add('today');
        }

        // Ajouter le numéro du jour
        const dayNumber = document.createElement('div');
        dayNumber.className = 'calendar-day-number';
        dayNumber.textContent = date.getDate();
        day.appendChild(dayNumber);

        // Formater la date pour correspondre au format des événements
        const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

        if (this.events[dateStr]) {
            day.classList.add('has-event');
            this.addEventsToDay(day, this.events[dateStr]);
        }

        this.calendarGrid.appendChild(day);
    }

    addEventsToDay(dayCell, dayEvents) {
        const eventsList = document.createElement('div');
        eventsList.className = 'calendar-events';

        dayEvents.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = `calendar-event ${event.category}`;
            eventElement.innerHTML = `
                <div class="event-time">${event.time}</div>
                <div class="event-title">${event.title}</div>
            `;
            eventsList.appendChild(eventElement);
        });

        dayCell.appendChild(eventsList);
    }
}

// Gestionnaire de recherche
class SearchManager {
    constructor() {
        this.searchInput = document.querySelector('.search-input');
        if (this.searchInput) {
            this.setupSearchListener();
        }
    }

    setupSearchListener() {
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    }

    handleSearch(searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        const eventCards = document.querySelectorAll('.event-card');

        eventCards.forEach(card => {
            const title = card.querySelector('.event-title').textContent.toLowerCase();
            const isVisible = title.includes(searchTerm);
            card.style.display = isVisible ? 'block' : 'none';
        });
    }
}

function renderListView() {
    const listContainer = document.querySelector('.event-list');
    if (!listContainer) {
        console.error('Container de liste d\'événements non trouvé');
        return;
    }
    
    listContainer.innerHTML = '';

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sortedDates = Object.keys(events)
        .filter(date => new Date(date) >= today)
        .sort();

    if (sortedDates.length === 0) {
        listContainer.innerHTML = '<p class="text-center p-4">Aucun événement à venir.</p>';
        return;
    }

    sortedDates.forEach(date => {
        const eventGroup = document.createElement('div');
        eventGroup.className = 'event-group';

        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        });

        eventGroup.innerHTML = `
            <div class="event-date">${formattedDate}</div>
        `;

        events[date].forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';

            eventCard.innerHTML = `
                <div class="event-time">${event.time}</div>
                <div class="event-title">${event.hasLink && event.link ?
                `<a href="${event.link}" 
                    style="color: var(--color-accent);
                    background: rgba(212, 175, 55, 0.05);
                    padding: 2px 6px;
                    border-radius: 4px;
                    text-decoration: none;
                    transition: all 0.3s ease;"
                    onmouseover="this.style.background='rgba(212, 175, 55, 0.1)'"
                    onmouseout="this.style.background='rgba(212, 175, 55, 0.05)'"
                >${event.title}</a>` :
                event.title
            }
            <span class="category-badge category-${event.category}">${event.category === 'soiree_club' ? 'soirée du club' : event.category}</span>
            </div>
            ${event.details ? `
                <div class="event-details">
                    <ul class="details-list">
                        ${event.details.map(detail => `<li class="detail-item">${detail}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        `;
            eventGroup.appendChild(eventCard);
        });

        listContainer.appendChild(eventGroup);
    });
    
    // Réinitialiser les filtres après avoir rendu la liste
    setupFilters();
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log("Initialisation du calendrier...");
        
        // Vérifier si les éléments essentiels existent
        const calendarView = document.getElementById('calendar-view');
        const listView = document.getElementById('list-view');
        
        if (!calendarView) {
            console.error('Élément #calendar-view non trouvé');
        }
        if (!listView) {
            console.error('Élément #list-view non trouvé');
        }
        
        // Afficher initialement la vue calendrier si pas en mode mobile
        if (window.innerWidth > 480) {
            if (calendarView) calendarView.style.display = 'block';
            if (listView) listView.style.display = 'none';
            
            // Activer le bouton correspondant
            const calendarButton = document.querySelector('button[data-view="calendar"]');
            if (calendarButton) calendarButton.classList.add('active');
        } else {
            // Sur mobile, afficher la vue liste
            if (calendarView) calendarView.style.display = 'none';
            if (listView) listView.style.display = 'block';
        }
        
        // Initialiser les gestionnaires
        new ViewManager();
        new CalendarManager(events);
        new SearchManager();
        
        // Sur mobile, forcer le rendu de la liste et configurer les filtres
        if (window.innerWidth <= 480) {
            renderListView();
        }
        
        // Écouter les redimensionnements
        window.addEventListener('resize', () => {
            const isMobile = window.innerWidth <= 480;
            
            if (isMobile) {
                // En mode mobile
                if (calendarView) calendarView.style.display = 'none';
                if (listView) listView.style.display = 'block';
                
                // Masquer les sélecteurs de vue
                const viewSelector = document.querySelector('.view-selector');
                if (viewSelector) viewSelector.style.display = 'none';
                
                // Configurer les filtres en colonne
                const filters = document.getElementById('filters');
                if (filters) {
                    filters.style.flexDirection = 'column';
                    filters.style.gap = '8px';
                    
                    // Styles pour les boutons de filtre
                    const filterButtons = filters.querySelectorAll('.filter-button');
                    filterButtons.forEach(btn => {
                        btn.style.width = '100%';
                    });
                }
                
                // Assurer que la liste est rendue
                renderListView();
            } else {
                // En mode desktop
                const viewSelector = document.querySelector('.view-selector');
                if (viewSelector) viewSelector.style.display = 'flex';
                
                // Réinitialiser les styles des filtres
                const filters = document.getElementById('filters');
                if (filters) {
                    filters.style.flexDirection = '';
                    filters.style.gap = '';
                    
                    // Réinitialiser les styles des boutons
                    const filterButtons = filters.querySelectorAll('.filter-button');
                    filterButtons.forEach(btn => {
                        btn.style.width = '';
                    });
                }
            }
        });
    } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error);
    }
});