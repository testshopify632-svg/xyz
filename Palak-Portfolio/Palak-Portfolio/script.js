// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        const targetId = this.getAttribute('href');

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// Navbar scroll effect

window.addEventListener('scroll', function() {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {

        navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.3)';

    } else {

        navbar.style.boxShadow = 'none';

    }

});


// Scroll reveal animations

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('visible');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.1
});


const revealElements = document.querySelectorAll(
    '.project-card, .service-card, .process-step'
);

revealElements.forEach(element => {

    element.style.opacity = '0';
    element.style.transform = 'translateY(25px)';

    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    observer.observe(element);

});


// Add reveal styling

const revealStyle = document.createElement('style');

revealStyle.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(revealStyle);


// Contact form

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {

    e.preventDefault();

    const name = document.getElementById('clientName').value;

    const email = document.getElementById('clientEmail').value;

    const message = document.getElementById('clientMessage').value;

    const subject = encodeURIComponent(
        'Portfolio Project Inquiry from ' + name
    );

    const body = encodeURIComponent(
        'Name: ' + name +
        '\nEmail: ' + email +
        '\n\nProject Details:\n' + message
    );

    // Replace this with your actual email address
    const yourEmail = 'YOUR_EMAIL@example.com';

    if (yourEmail === 'YOUR_EMAIL@example.com') {

        alert(
            'Your message is ready! ' +
            'Palak needs to add her contact email before publishing.'
        );

        return;
    }

    window.location.href =
        'mailto:' + yourEmail +
        '?subject=' + subject +
        '&body=' + body;

});