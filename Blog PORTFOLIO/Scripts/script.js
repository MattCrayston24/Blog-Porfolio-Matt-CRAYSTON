document.addEventListener('DOMContentLoaded', () => {
    // Gérer le menu
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('header ul');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('open');
            menuIcon.classList.toggle('open');
        });
    }

    // Gérer le formulaire de contact
    if (typeof emailjs !== 'undefined') {
        emailjs.init("rwuXCRNGgWiYFkXEP");

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            const templateParams = {
                from_name: name,
                from_email: email,
                message_html: message
            };

            emailjs.send('service_pwxku0d', 'template_gp7ng4h', templateParams)
                .then(function(response) {
                    document.getElementById('response-message').innerText = 'Votre message a été envoyé avec succès !';
                    document.getElementById('contact-form').reset(); 
                }, function(error) {
                    document.getElementById('response-message').innerText = 'Une erreur est survenue. Veuillez réessayer.';
                    console.error('Erreur:', error); 
                });
        });
    } else {
        console.error('Le script EmailJS n\'est pas chargé.');
    }

    const toggleButton = document.querySelector('.toggle-details');
    const details = document.querySelector('.details');

    if (toggleButton && details) {
        toggleButton.addEventListener('click', () => {
            details.classList.toggle('open');
            toggleButton.textContent = details.classList.contains('open') ? 'Afficher moins' : 'Afficher plus';
        });
    }

    const toggleButton2 = document.querySelector('.toggle-details2');
    const details2 = document.querySelector('.details2');

    if (toggleButton2 && details2) {
        toggleButton2.addEventListener('click', () => {
            details2.classList.toggle('open');
            toggleButton2.textContent = details2.classList.contains('open') ? 'Afficher moins' : 'Afficher plus';
        });
    }
});
