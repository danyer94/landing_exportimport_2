// Smooth Scroll para navegación
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Animación del formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-submit');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
        alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        this.reset();
        btn.textContent = 'Lanzar Mensaje';
        btn.disabled = false;
    }, 1000);
});

// Animación de entrada para las tarjetas de servicios
const serviceCards = document.querySelectorAll('.service-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

serviceCards.forEach(card => observer.observe(card));

// Estilo dinámico para la animación de entrada
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .service-card {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .service-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
`);

const translations = {
    es: {
        // Navegación
        nav: {
            inicio: "Inicio",
            servicios: "Servicios",
            "sobre-nosotros": "Historia",
            contacto: "Contacto"
        },
        // Hero Section
        hero: {
            title: "Comercio <span>Sin Fronteras</span>",
            text: "Impulsa tu negocio al mundo con soluciones globales de importación y exportación.",
            cta: "Explora el Futuro"
        },
        // Servicios
        services: {
            title: "Nuestros Pilares",
            import: {
                title: "Importación",
                desc: "Productos del mundo a tu puerta con velocidad y precisión."
            },
            export: {
                title: "Exportación",
                desc: "Tu marca conquistando mercados internacionales."
            },
            logistics: {
                title: "Logística",
                desc: "Flujo perfecto desde el origen hasta el destino."
            }
        },
        // Historia
        about: {
            title: "Nuestra Historia",
            timeline: {
                2013: {
                    title: "El Comienzo",
                    desc: "Nacimos con una visión global en Barcelona, España. Un equipo de 5 personas y un sueño: revolucionar el comercio internacional.",
                    stat: "5 empleados",
                    icon: "fa-solid fa-rocket-launch"
                },
                2018: {
                    title: "Expansión Global",
                    desc: "Alcanzamos presencia en 20 países, estableciendo centros logísticos clave en Europa, Asia y América. Más de 1000 clientes confían en nosotros.",
                    stat: "1000+ clientes",
                    icon: "fa-solid fa-earth-americas"
                },
                2025: {
                    title: "Innovación Continua",
                    desc: "Lideramos la transformación digital del comercio internacional con IA y blockchain. Facilitando más de 50,000 operaciones anuales.",
                    stat: "50K+ operaciones/año",
                    icon: "fa-solid fa-chart-line"
                }
            }
        },
        // Contacto
        contact: {
            title: "Conecta con Nosotros",
            form: {
                name: "Tu Nombre",
                email: "Tu Email",
                message: "¿Cómo te ayudamos?",
                submit: "Enviar Mensaje"
            }
        },
        // Footer
        footer: "GlobalLift © 2025 | info@globallift.com | +1 234 567 890"
    },
    en: {
        // Navigation
        nav: {
            inicio: "Home",
            servicios: "Services",
            "sobre-nosotros": "Story",
            contacto: "Contact"
        },
        // Hero Section
        hero: {
            title: "Trade <span>Without Borders</span>",
            text: "Boost your business worldwide with global import and export solutions.",
            cta: "Explore the Future"
        },
        // Services
        services: {
            title: "Our Pillars",
            import: {
                title: "Import",
                desc: "World products to your door with speed and precision."
            },
            export: {
                title: "Export",
                desc: "Your brand conquering international markets."
            },
            logistics: {
                title: "Logistics",
                desc: "Perfect flow from origin to destination."
            }
        },
        // About
        about: {
            title: "Our Journey",
            timeline: {
                2013: {
                    title: "The Beginning",
                    desc: "Born with a global vision in Barcelona, Spain. A team of 5 people and one dream: revolutionizing international trade.",
                    stat: "5 employees",
                    icon: "fa-solid fa-rocket-launch"
                },
                2018: {
                    title: "Global Expansion",
                    desc: "Reached presence in 20 countries, establishing key logistics centers in Europe, Asia and America. Over 1000 clients trust us.",
                    stat: "1000+ clients",
                    icon: "fa-solid fa-earth-americas"
                },
                2025: {
                    title: "Continuous Innovation",
                    desc: "Leading digital transformation in international trade with AI and blockchain. Facilitating over 50,000 operations annually.",
                    stat: "50K+ ops/year",
                    icon: "fa-solid fa-chart-line"
                }
            }
        },
        // Contact
        contact: {
            title: "Connect with Us",
            form: {
                name: "Your Name",
                email: "Your Email",
                message: "How can we help?",
                submit: "Send Message"
            }
        },
        // Footer
        footer: "GlobalLift © 2025 | info@globallift.com | +1 234 567 890"
    }
};

function changeLanguage() {
    const selectedLanguage = document.getElementById("language-selector").value;
    
    // Actualizar navegación
    document.querySelectorAll('.nav ul li a').forEach(link => {
        const key = link.getAttribute('href').replace('#', '');
        link.textContent = translations[selectedLanguage].nav[key];
    });

    // Actualizar hero section
    document.querySelector(".hero-content h1").innerHTML = translations[selectedLanguage].hero.title;
    document.querySelector(".hero-content p").textContent = translations[selectedLanguage].hero.text;
    document.querySelector(".btn-hero").textContent = translations[selectedLanguage].hero.cta;

    // Actualizar servicios
    document.querySelector(".services h2").textContent = translations[selectedLanguage].services.title;
    document.querySelector("[data-service='import'] h3").textContent = translations[selectedLanguage].services.import.title;
    document.querySelector("[data-service='import'] p").textContent = translations[selectedLanguage].services.import.desc;
    document.querySelector("[data-service='export'] h3").textContent = translations[selectedLanguage].services.export.title;
    document.querySelector("[data-service='export'] p").textContent = translations[selectedLanguage].services.export.desc;
    document.querySelector("[data-service='logistics'] h3").textContent = translations[selectedLanguage].services.logistics.title;
    document.querySelector("[data-service='logistics'] p").textContent = translations[selectedLanguage].services.logistics.desc;

    // Actualizar historia
    document.querySelector(".about h2").textContent = translations[selectedLanguage].about.title;
    document.querySelectorAll('.timeline-item').forEach(item => {
        const year = item.getAttribute('data-year');
        const content = translations[selectedLanguage].about.timeline[year];
        
        item.querySelector('h3').textContent = content.title;
        item.querySelector('p').textContent = content.desc;
        item.querySelector('.stat-number').textContent = content.stat.split(' ')[0];
        item.querySelector('.stat-label').textContent = content.stat.split(' ')[1];
    });

    // Actualizar contacto
    document.querySelector(".contact h2").textContent = translations[selectedLanguage].contact.title;
    document.querySelector("input[type='text']").placeholder = translations[selectedLanguage].contact.form.name;
    document.querySelector("input[type='email']").placeholder = translations[selectedLanguage].contact.form.email;
    document.querySelector("textarea").placeholder = translations[selectedLanguage].contact.form.message;
    document.querySelector(".btn-submit").textContent = translations[selectedLanguage].contact.form.submit;

    // Actualizar footer
    document.querySelector(".footer p").textContent = translations[selectedLanguage].footer;

    // Actualizar el título de la página
    document.title = selectedLanguage === 'es' ? 
        "GlobalLift - Comercio Sin Fronteras" : 
        "GlobalLift - Trade Without Borders";

    // Guardar preferencia de idioma
    localStorage.setItem('preferredLanguage', selectedLanguage);
}

// Cargar el idioma preferido al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        document.getElementById('language-selector').value = savedLanguage;
        changeLanguage();
    }

    // Forzar la animación inicial del timeline
    timelineItems.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('animate-in');
        }
    });
});

// Animación para los elementos del timeline
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

timelineItems.forEach(item => timelineObserver.observe(item));

// Función auxiliar para verificar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}