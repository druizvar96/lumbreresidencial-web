// ==========================================================================
// LUMBRE RESIDENCIAL SL - LÓGICA JAVASCRIPT ESTÁTICA
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Selector de tamaño de letra accesible (A / A+)
  const btnFont = document.getElementById('btn-toggle-font');
  if (btnFont) {
    btnFont.addEventListener('click', () => {
      if (document.body.classList.contains('font-large')) {
        document.body.classList.remove('font-large');
        document.body.classList.add('font-xlarge');
        btnFont.textContent = 'A++';
      } else if (document.body.classList.contains('font-xlarge')) {
        document.body.classList.remove('font-xlarge');
        btnFont.textContent = 'A';
      } else {
        document.body.classList.add('font-large');
        btnFont.textContent = 'A+';
      }
    });
  }

  // 2. Control de Modales (Valoración y Asistente)
  const modalVal = document.getElementById('modal-valoracion');
  const openValButtons = document.querySelectorAll('.js-open-valoracion');
  const closeButtons = document.querySelectorAll('.js-close-modal');

  openValButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalVal) modalVal.classList.add('active');
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeModal = btn.closest('.modal-overlay');
      if (activeModal) activeModal.classList.remove('active');
    });
  });

  // Cerrar al pulsar fondo oscuro o Escape
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('active');
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    }
  });

  // 3. Menú Móvil
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav-panel');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    });
  }

  // 4. Formulario de valoración
  const formVal = document.getElementById('form-valoracion');
  if (formVal) {
    formVal.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('val-nombre')?.value || 'Usuario';
      const telefono = document.getElementById('val-telefono')?.value || '';
      alert(`¡Gracias ${nombre}! Hemos registrado tu solicitud de valoración gratuita. Un coordinador de Lumbre Residencial te llamará al ${telefono} en menos de 24 horas.`);
      if (modalVal) modalVal.classList.remove('active');
      formVal.reset();
    });
  }

  // 5. Gestión del banner de cookies (LSSI / RGPD)
  const cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner && !localStorage.getItem('lumbre_cookies')) {
    cookieBanner.style.display = 'block';
  }

  const btnAcceptCookies = document.getElementById('btn-accept-cookies');
  const btnRejectCookies = document.getElementById('btn-reject-cookies');

  if (btnAcceptCookies) {
    btnAcceptCookies.addEventListener('click', () => {
      localStorage.setItem('lumbre_cookies', 'accepted');
      if (cookieBanner) cookieBanner.style.display = 'none';
    });
  }

  if (btnRejectCookies) {
    btnRejectCookies.addEventListener('click', () => {
      localStorage.setItem('lumbre_cookies', 'rejected');
      if (cookieBanner) cookieBanner.style.display = 'none';
    });
  }
});
