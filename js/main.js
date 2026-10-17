/* ============================================
SiteForge - JavaScript Generado
Generado automáticamente. No editar manualmente.
==================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Inicializar carruseles
  initCarousels();

  // Inicializar galerías con lightbox
  initGalleries();

  // Inicializar validación de formularios
  initFormValidation();

  // Activar los efectos "sf-fx-scroll-*" al entrar en pantalla
  initScrollEffects();
});

// Efectos visuales de entrada al hacer scroll (ver effectsPresets.ts,
// panel "Efectos" del editor) — agrega la clase 'sf-fx-visible' la
// PRIMERA vez que cada elemento entra en el viewport; una vez revelado
// deja de observarlo (no se re-oculta al volver a scrollear hacia arriba).
function initScrollEffects() {
  const targets = document.querySelectorAll(
    '.sf-fx-scroll-fade, .sf-fx-scroll-slide-up, .sf-fx-scroll-slide-left, .sf-fx-scroll-zoom'
  );
  if (targets.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    // Navegador muy antiguo sin soporte: mostrar todo directo, sin animación.
    targets.forEach((el) => el.classList.add('sf-fx-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('sf-fx-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach((el) => observer.observe(el));
}

function initCarousels() {
  const carousels = document.querySelectorAll('[data-carousel], .carousel');
  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-nav.prev, [data-carousel-prev]');
    const nextBtn = carousel.querySelector('.carousel-nav.next, [data-carousel-next]');
    const dots = carousel.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    let autoplayInterval = null;

    function goToSlide(index) {
      if (!track || !slides.length) return;
      currentSlide = ((index % slides.length) + slides.length) % slides.length;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
      nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    }

    if (dots.length > 0) {
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
      });
    }

    // Autoplay
    const interval = parseInt(carousel.getAttribute('data-interval') || carousel.getAttribute('data-autoplay-delay') || '5000');
    function startAutoplay() {
      autoplayInterval = setInterval(() => goToSlide(currentSlide + 1), interval);
    }
    function stopAutoplay() {
      if (autoplayInterval) clearInterval(autoplayInterval);
    }

    startAutoplay();
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
  });
}

function initGalleries() {
  const galleries = document.querySelectorAll('[data-gallery], .gallery');
  if (galleries.length === 0) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'gallery-lightbox';
  lightbox.style.cssText = `
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.9);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    cursor: zoom-out;
  `;
  lightbox.innerHTML = '<button class="lightbox-close">&times;</button><img class="lightbox-img" src="" alt="">';
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    }
  });

  galleries.forEach(gallery => {
    const items = gallery.querySelectorAll('.gallery-item img, [data-gallery-item] img');
    items.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.style.display = 'flex';
      });
    });
  });
}

function initFormValidation() {
  document.querySelectorAll('form.contact-form').forEach(form => {
    form.querySelectorAll('[required]').forEach(input => {
      input.addEventListener('invalid', () => {
        input.classList.add('input-invalid');
      });
      input.addEventListener('input', () => {
        if (input.validity.valid) input.classList.remove('input-invalid');
      });
    });

    const webhookUrl = form.getAttribute('data-webhook-url') || '';
    const successMessage = form.getAttribute('data-success-message') || '¡Mensaje enviado correctamente!';
    const successDiv = form.querySelector('.form-success-msg');
    const errorDiv = form.querySelector('.form-error-msg');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (successDiv) successDiv.style.display = 'none';
      if (errorDiv) errorDiv.style.display = 'none';

      if (!webhookUrl) {
        console.warn('Formulario sin webhook configurado: el envío no se realizó. Configura la URL del webhook en el editor (panel Ajustes del formulario).');
        if (errorDiv) errorDiv.style.display = 'block';
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      try {
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        // Con mode:'no-cors' la respuesta es opaca (no se puede leer status);
        // se asume éxito si fetch no lanzó excepción de red.
        if (successDiv) {
          successDiv.textContent = successMessage;
          successDiv.style.display = 'block';
        }
        form.reset();
      } catch (error) {
        console.error('Error enviando formulario:', error);
        if (errorDiv) errorDiv.style.display = 'block';
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  });
}
