// JavaScript for interactivity

        // Handling form submissions (as a simple example)
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message sent!');
        });

        document.getElementById('portfolioForm').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Portfolio item added!');
        });