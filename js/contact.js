function copyEmail() {
    const email = 'vladpopescu314@gmail.com';
    const button = document.querySelector('.copy-button');
    
    // Ajouter l'effet ripple
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    button.appendChild(ripple);

    navigator.clipboard.writeText(email).then(() => {
        // Ajouter la classe copied au bouton
        button.classList.add('copied');
        
        // Afficher la notification
        const notification = document.querySelector('.copy-notification');
        notification.classList.add('show');

        // Cacher la notification et réinitialiser le bouton après 3 secondes
        setTimeout(() => {
            notification.classList.remove('show');
            button.classList.remove('copied');
        }, 3000);

        // Nettoyer l'effet ripple
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }).catch(err => {
        console.error('Erreur lors de la copie :', err);
    });
}