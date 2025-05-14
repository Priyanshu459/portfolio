// Smooth scrolling
        document.querySelectorAll('nav a').forEach(a => {
            a.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Simple form handling
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent! (Demo only)');
            this.reset();
        });