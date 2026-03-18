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
    'Colección Happy Hippo': {
        description: 'La fusión perfecta del clásico Kinder Happy Hippo en un postre artesanal muy crujiente y dulce.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Variedad de Autor': {
        description: 'Una selección exclusiva de nuestras mejores cookies, perfectas para probar diferentes sabores con el toque característico de Amargo.',
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
        description: 'La receta clásica horneada lentamente para conseguir un interior sedoso, con una sutil capa tostada por encima que aporta el contraste perfecto en cada cucharada.',
        allergens: ['grains', 'milk']
    },
    'Cheesecake de Pistacho': {
        description: 'Una versión premium de nuestro cheesecake clásico elaborada con crema pura de pistacho de máxima calidad y trocitos que aportan textura.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Cheesecake Lotus': {
        description: 'El equilibrio soñado: nuestro suave queso crema sobre una base crujiente de galleta Lotus Biscoff, bañada en su característica crema caramelizada.',
        allergens: ['grains', 'milk']
    },
    'Cheesecake Ferrero': {
        description: 'Para esos momentos donde solo el chocolate sirve. Delicado cheesecake coronado con praliné de avellanas, chocolate fundido y crujiente Rocher.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Mundo de Ensueño': {
        description: 'Tartas diseñadas para transportarte a un cuento de hadas. Personalizamos cada detalle, desde personajes favoritos hasta decoraciones hechas a mano en azúcar. El límite es tu imaginación.',
        allergens: ['grains', 'milk']
    },
    'Elegancia Violeta': {
        description: 'Una tarta sofisticada que destaca por su color y sabor. Relleno de frutos rojos y crema ligera de vainilla, decorada con un degradado en tonos violeta y detalles dorados.',
        allergens: ['grains', 'milk']
    },
    'Estilo y Carácter': {
        description: 'Para quienes buscan algo diferente. Tartas con texturas geométricas y acabados modernos, ideales para eventos corporativos o celebraciones con un toque de autor.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Jardín de Dulzura': {
        description: 'Nuestra tarta más romántica. Adornada con flores frescas seleccionadas y pétalos comestibles, con capas de sabor delicado que evocan un jardín en plena primavera.',
        allergens: ['grains', 'milk', 'flowers']
    },
    'Kinder': {
        description: 'Una cookie espectacular coronada con el sabor inconfundible de Kinder. La mezcla perfecta de masa artesana con un corazón súper cremoso.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Lotus': {
        description: 'El sabor caramelizado de Biscoff llevado al siguiente nivel con base de galleta y nuestra crema especial. Para los verdaderos amantes del Lotus.',
        allergens: ['grains', 'milk']
    },
    'Cookie Monster': {
        description: 'Nuestra divertida e icónica cookie azul, crujiente por fuera y súper tierna por dentro. Coronada y rellena de auténtica galleta.',
        allergens: ['grains', 'milk']
    },
    'Oreo': {
        description: 'Para los incondicionales del cookies & cream: masa artesana con trozos de galleta y crema de la clásica galleta negra y blanca.',
        allergens: ['grains', 'milk']
    },
    'Dubai': {
        description: 'Inspirada en el sabor viral. Masa de cacao intenso que esconde un interior crujiente de fina knafeh y crema de pistacho.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Chocolate blanco y pistacho': {
        description: 'Una masa suave y crujiente llena de pepitas de chocolate blanco, horneada a la perfección para abrazar un corazón fluido de pura crema de pistacho.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Chocolate y pistacho': {
        description: 'Masa dorada elaborada con trozos fundidos del mejor chocolate, que contrasta maravillosamente con su relleno cremoso 100% de pistacho.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'Red velvet': {
        description: 'Nuestra versión del clásico postre americano en formato cookie. Masa roja aterciopelada y un jugoso centro de suave crema de vainilla.',
        allergens: ['grains', 'milk']
    },
    'Nutella': {
        description: 'El clásico indiscutible que nunca falla. Masa artesanal con un centro muy abundante de crema de avellanas con cacao (¡Nutella real!) que se derrite al partirla.',
        allergens: ['grains', 'milk', 'nuts']
    },
    'White Macadamia': {
        description: 'Masa suave y dorada llena de dulces pepitas de chocolate blanco que contrarrestan el toque tostado y crujiente de las nueces de macadamia.',
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
});
