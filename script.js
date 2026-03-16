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
        description: 'Nuestra Lotus Cheesecake es una explosión de texturas. Base crujiente de galleta Lotus Biscoff, crema de queso sedosa infusionada con crema de Lotus y un topping generoso de galleta triturada. Preparada diariamente con ingredientes premium.',
        allergens: ['🌾', '🥛', '🥚', '🥜'],
        image: 'assets/lotus-multi.png'
    },
    'Tiramisú Amargo': {
        description: 'El clásico italiano con el toque Amargo. Bizcocho savoiardi empapado en café de especialidad recién tostado, capas de crema de mascarpone auténtico y una lluvia final de cacao puro. Elegancia en cada cucharada.',
        allergens: ['🌾', '🥛', '🥚'],
        image: 'assets/tiramisu-multi.png'
    },
    'Biscoff Delight': {
        description: 'La máxima expresión del sabor Biscoff. Un postre individual diseñado para los amantes del caramelo, con un corazón líquido de crema de galleta y una cobertura suave tipo mousse.',
        allergens: ['🌾', '🥛', '🥜'],
        image: 'assets/biscoff-jars.png'
    },
    'Edición Amargo': {
        description: 'Nuestra creación insignia. Cambia según la inspiración del chef, pero siempre mantiene el equilibrio perfecto entre lo dulce y lo amargo, utilizando chocolate de origen único y frutas de temporada de Tenerife.',
        allergens: ['🥛', '🥜', '🍓'],
        image: 'assets/postre-top.png'
    },
    'Mundo de Ensueño': {
        description: 'Tartas diseñadas para transportarte a un cuento de hadas. Personalizamos cada detalle, desde personajes favoritos hasta decoraciones hechas a mano en azúcar. El límite es tu imaginación.',
        allergens: ['🌾', '🥛', '🥚'],
        image: 'assets/tarta-osito.png'
    },
    'Elegancia Violeta': {
        description: 'Una tarta sofisticada que destaca por su color y sabor. Relleno de frutos rojos y crema ligera de vainilla, decorada con un degradado en tonos violeta y detalles dorados.',
        allergens: ['🌾', '🥛', '🥚'],
        image: 'assets/tarta-morada.png'
    },
    'Estilo y Carácter': {
        description: 'Para quienes buscan algo diferente. Tartas con texturas geométricas y acabados modernos, ideales para eventos corporativos o celebraciones con un toque de autor.',
        allergens: ['🌾', '🥛', '🥜'],
        image: 'assets/tarta-puro.png'
    },
    'Jardín de Dulzura': {
        description: 'Nuestra tarta más romántica. Adornada con flores frescas seleccionadas y pétalos comestibles, con capas de sabor delicado que evocan un jardín en plena primavera.',
        allergens: ['🌾', '🥛', '🌸'],
        image: 'assets/tarta-flores.png'
    },
    'Variedad de Autor': {
        description: 'Nuestras cookies son famosas por su tamaño y su generoso relleno. Masa artesanal con mantequilla de alta calidad y una mezcla secreta de harinas que las hace irresistibles.',
        allergens: ['🌾', '🥛', '🥚', '🥜'],
        image: 'assets/cookies-grid.png'
    },
    'Oreo Supreme': {
        description: 'La cookie definitiva para los fans de Oreo. Con trozos reales de galleta en la masa y un relleno de crema que se funde en tu boca. Horneada varias veces al día para asegurar frescura máxima.',
        allergens: ['🌾', '🥛', '🥚'],
        image: 'assets/cookies-oreo.png'
    }
};

// Modal Elements
const modal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalAllergens = document.getElementById('modal-allergens');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close-modal');

// Open Modal logic
document.querySelectorAll('.product-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        const details = productDetails[title];

        if (details) {
            modalTitle.innerText = title;
            modalDesc.innerText = details.description;
            modalImg.src = details.image;
            modalImg.alt = title;

            // Clear and add allergens
            modalAllergens.innerHTML = '';
            details.allergens.forEach(icon => {
                const span = document.createElement('span');
                span.innerText = icon;
                span.title = 'Alergeno';
                modalAllergens.appendChild(span);
            });

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scroll
        }
    });
});

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
