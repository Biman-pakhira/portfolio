 
        var typed = new Typed(".multiple-text", {
            strings: [
                "specializing in React & Node.js",
                "building scalable APIs",
                "creating responsive UIs", 
                "optimizing databases",
                "deploying on AWS"
            ],
            typeSpeed: 80,
            backSpeed: 60,
            backDelay: 1500,
            loop: true
        });

        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const body = document.body;

        const currentTheme = localStorage.getItem('theme') || 'dark';
        if (currentTheme === 'light') {
            body.classList.add('light-mode');
            themeIcon.classList.replace('bx-moon', 'bx-sun');
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            if (body.classList.contains('light-mode')) {
                themeIcon.classList.replace('bx-moon', 'bx-sun');
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.classList.replace('bx-sun', 'bx-moon');
                localStorage.setItem('theme', 'dark');
            }
        });

        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.getElementById('navbar');

        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });

        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
            });
        });

        const tabBtns = document.querySelectorAll('.tab-btn');
        const skillsContents = document.querySelectorAll('.skills-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                skillsContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === targetTab) {
                        content.classList.add('active');
                    }
                });
            });
        });

        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.navbar a');
            const scrollTop = document.getElementById('scroll-top');
            
            if (window.scrollY > 300) {
                scrollTop.classList.add('active');
            } else {
                scrollTop.classList.remove('active');
            }
            
            // Active nav link
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        document.getElementById('scroll-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const name = form[0].value;
            const email = form[1].value;
            const subject = form[2].value;
            const message = form[3].value;
            
            window.location.href = `mailto:bimanpakhira2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.project-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
   