        // Language Toggle
        const langToggle = document.getElementById('langToggle');
        let currentLang = 'en';

        function updateLanguage(lang) {
            currentLang = lang;
            langToggle.textContent = lang === 'en' ? 'NL' : 'EN';
            
            document.querySelectorAll('[data-en][data-nl]').forEach(el => {
                const key = lang === 'en' ? 'data-en' : 'data-nl';
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // Don't change input values
                    return;
                }
                el.textContent = el.getAttribute(key);
            });
        }

        langToggle.addEventListener('click', () => {
            updateLanguage(currentLang === 'en' ? 'nl' : 'en');
        });

        // Navbar Shadow on Scroll
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow');
            } else {
                navbar.classList.remove('shadow');
            }
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Scroll Reveal
        const revealElements = document.querySelectorAll('.reveal');
        
        function checkReveal() {
            const windowHeight = window.innerHeight;
            const revealPoint = 100;
            
            revealElements.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                
                if (elementTop < windowHeight - revealPoint) {
                    el.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', checkReveal);
        window.addEventListener('load', checkReveal);

        // Form Submit (mailto)
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            const mailtoLink = `mailto:info@pztechniek.nl?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`)}`;
            
            window.location.href = mailtoLink;
        });
