// Helper to hide loader
const hideLoader = () => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader && loader.style.visibility !== 'hidden') {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.visibility = 'hidden';
            // Start hero animations
            document.querySelectorAll('.hero .reveal-text').forEach(el => {
                el.classList.add('active');
            });
        }, 500);
    }
};

// Hide loader when page is fully loaded
window.addEventListener('load', hideLoader);

// Fallback: hide loader after 3 seconds anyway if it hasn't hidden yet
setTimeout(hideLoader, 3000);

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Mouse Glow Effect
const glow = document.querySelector('.mouse-glow');
if (glow) {
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Product Details Data
const productDetails = {
    'Lotus Cheesecake': {
        description: 'Una de nuestras cheesecakes más queridas, hecha con el inconfundible sabor a Lotus Biscoff y una textura espectacular.',
        allergens: ['grains', 'milk']
    },
    'Happy Hippo': {
        description: 'El Chocolate kinder más querido convertido en cookie, relleno, cremoso de avellana, junto con chocolate y Happy Hippo',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Cookies': {
        description: 'Nuestras icónicas NY style cookies de 150gr con un exterior crujiente e interior suave rellenas de distintos sabores',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Tiramisú Amargo': {
        description: 'Nuestra reinterpretación del postre italiano clásico, con café de especialidad y capas de crema mascarpone irresistible.',
        allergens: ['grains', 'milk']
    },
    'Nutella Heart': {
        description: 'Un corazón rebosante de auténtica Nutella que fluye desde el primer bocado. Totalmente irresistible.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Cheesecake Clásica': {
        description: 'La de toda la vida, simple y con sabor a queso suave que se adapta a todos los paladares',
        allergens: ['grains', 'milk']
    },
    'Cheesecake Chocolate blanco y pistacho': {
        description: 'Sabor suave de pistacho que combina perfectamente con la dulzura del chocolate blanco, perfecta para los amantes del dulce',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Cheesecake de Pistacho': {
        description: 'Una versión premium de nuestro cheesecake clásico elaborada con crema pura de pistacho de máxima calidad y trocitos que aportan textura.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Cheesecake Lotus': {
        description: 'Nuestra tarta de queso, rellena de auténtica crema de Lotus Bisscoff',
        allergens: ['grains', 'milk']
    },
    'Cheesecake Ferrero': {
        description: 'Para esos momentos donde solo el chocolate sirve. Delicado cheesecake coronado con praliné de avellanas, chocolate fundido y crujiente Rocher.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Cheesecake Happy Hippo': {
        description: 'Nuestra tarta rellena de crema de avellanas con un crujiente de chocolate blanco combinado con la cremosidad de la tarta transmite una experiencia en boca increíble',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Cumpleaños': {
        description: 'Nuestras tartas de cumpleaños combinan sabor y diseño para hacer tu día aún más especial. Elige entre diferentes sabores y personalízala a tu gusto para sorprender.',
        allergens: ['grains', 'milk']
    },
    'Tartas para bodas': {
        description: 'Creamos tartas de boda elegantes y únicas, diseñadas a medida para reflejar vuestro estilo. Un equilibrio perfecto entre estética y sabor en un día inolvidable.',
        allergens: ['grains', 'milk']
    },
    'Tartas para comuniones': {
        description: 'Tartas delicadas y personalizadas para un momento tan especial como la comunión. Diseños cuidados y sabores irresistibles que encantarán a todos.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Tartas infantiles': {
        description: 'Tartas divertidas y llenas de color, pensadas para los más pequeños. Diseños temáticos y sabores deliciosos que harán su celebración mágica.',
        allergens: ['grains', 'milk']
    },
    'Kinder': {
        description: 'Nuestra cookie de vainilla rellena con una crema de avellana blanca y kinder',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Lotus': {
        description: 'El sabor más viral de los últimos tiempos, junto con trocitos de chocolate blanco, creando una combinación mágica',
        allergens: ['grains', 'milk']
    },
    'Cookie Monster': {
        description: 'Una icónica cookie azul, crujiente por fuera rellena de queso crema, oreo y chips ajoy',
        allergens: ['grains', 'milk']
    },
    'Oreo': {
        description: 'Para los amantes de estas clásicas galletas, nuestra masa de vainilla, rellena de crema de cookies and Cream y oreo',
        allergens: ['grains', 'milk']
    },
    'Dubai': {
        description: 'Inspirada en el sabor viral. Masa de cacao intenso que esconde un interior crujiente de fina knafeh y crema de pistacho.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Chocolate blanco y pistacho': {
        description: 'Uno de nuestros bestsellers, crema de pistacho con chocolate blanco junto con trocitos de chocolate blanco',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Chocolate y pistacho': {
        description: 'Para los amantes del pistacho y del chocolate, la combinación perfecta, crema de pistacho, cremosa y trocitos de chocolate',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Red velvet': {
        description: 'Un clásico, masa con un toque, ligero de cacao y un relleno de chocolate blanco y queso crema',
        allergens: ['grains', 'milk']
    },
    'Nutella': {
        description: 'Uno de los bestsellers, una cookie simple, pero ganadora, rellena el auténtica crema nutella',
        allergens: ['grains', 'milk', 'nuts']
    },
    'White Macadamia': {
        description: 'Masa suave y dorada llena de dulces pepitas de chocolate blanco que contrarrestan el toque tostado y crujiente de las nueces de macadamia.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Milkshake Oreo': {
        description: 'Batido cremoso de helado de vainilla y leche mezclado con trozos de galleta Oreo, coronado con nata montada y sirope de chocolate.',
        allergens: ['grains', 'milk']
    },
    'Milkshake Happy Hippo': {
        description: 'Nuestro batido más crujiente con el sabor inconfundible de Kinder Happy Hippo, crema de avellanas y nata.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Milkshake Kinder': {
        description: 'La suavidad del chocolate Kinder en un batido ultra-cremoso. Una experiencia dulce y refrescante única.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Milkshake Especial': {
        description: 'Nuestra combinación especial del día. Pregunta por los sabores disponibles y déjate sorprender.',
        allergens: ['grains', 'milk']
    },
    'Cookie con Helado': {
        description: 'La mejor manera de comerte una cookie con calor.\nElige tu cookie favorita con 2 bolas de helado de vainilla y acompañada de tu sirope favorito',
        allergens: ['grains', 'milk', 'nuts']
    }
};

const allergenInfo = {
    grains: { icon: '🌾', name: 'Gluten' },
    milk: { icon: '🥛', name: 'Lácteos' },
    eggs: { icon: '🥚', name: 'Huevos' },
    nuts: { icon: '🥜', name: 'Frutos Secos' },
    fruit: { icon: '🍓', name: 'Frutas' },
    flowers: { icon: '🌸', name: 'Flores' }
};

// Modal Elements
const modal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalAllergens = document.getElementById('modal-allergens');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close-modal');

// Open Modal logic for cards
document.querySelectorAll('.product-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        openProductModal(title, card.querySelector('img').src);
    });
});

// Open Modal logic for belt items
document.querySelectorAll('.belt-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = img.alt;
        openProductModal(title, img.src);
    });
});
// Open Modal for featured Cookie con Helado
const cookieIceCream = document.querySelector('.cookie-icecream-featured');
if (cookieIceCream) {
    cookieIceCream.style.cursor = 'pointer';
    cookieIceCream.addEventListener('click', () => {
        const title = cookieIceCream.querySelector('h3').innerText;
        const img = cookieIceCream.querySelector('img').src;
        openProductModal(title, img);
    });
}

// Open Modal for Milkshake Spotlight main image
document.querySelectorAll('.main-featured-image').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
        const img = el.querySelector('img');
        if (img) {
            const title = img.alt;
            openProductModal(title, img.src);
        }
    });
});

function openProductModal(title, imageSrc) {
    const details = productDetails[title];

    if (details) {
        modalTitle.innerText = title;
        modalDesc.innerText = details.description;
        modalImg.src = imageSrc;
        modalImg.alt = title;

        // Clear and add allergens with labels
        modalAllergens.innerHTML = '';
        details.allergens.forEach(type => {
            const info = allergenInfo[type];
            if (info) {
                const item = document.createElement('div');
                item.className = 'allergen-item';
                item.innerHTML = `
                    <span class="allergen-icon">${info.icon}</span>
                    <span class="allergen-name">${info.name}</span>
                `;
                modalAllergens.appendChild(item);
            }
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close Modal logic
if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Close on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Countdown for Semana Santa
const initCountdown = () => {
    // Reveal date: Tuesday, March 31, 2026 at 10:00 AM
    const countdownDate = new Date("March 31, 2026 10:00:00").getTime();
    let revealed = false;

    const revealContent = () => {
        if (revealed) return;
        revealed = true;

        const revealImg = document.getElementById('semana-santa-reveal-img');
        const statusText = document.getElementById('semana-santa-status-text');
        const revealMsg = document.getElementById('semana-santa-reveal-msg');

        if (revealImg) {
            revealImg.parentElement.classList.add('reveal-celebration', 'reveal-pulse');
            if (revealImg.dataset.revealSrc) {
                revealImg.src = revealImg.dataset.revealSrc;
                revealImg.style.filter = 'none';
                revealImg.style.opacity = '1';
            }
        }

        if (statusText) statusText.style.display = 'none';
        if (revealMsg) revealMsg.style.display = 'block';
    };

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            // Fill with zeros
            document.querySelectorAll('.count').forEach(el => el.innerText = "00");
            revealContent();
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl) daysEl.innerText = days < 10 ? "0" + days : days;
        if (hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
        if (minutesEl) minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
        if (secondsEl) secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();
};

// Hero Background Carousel Logic
const initHeroCarousel = () => {
    const slides = document.querySelectorAll('.hero-bg-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
};

// Initialize carousels and observers
document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
    initCountdown();
});
