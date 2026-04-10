/* ═══════════════════════════════════════════════
   HOUSEINVEST MARKET – JavaScript principal
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Hamburger menu ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Cerrar al hacer click en un link
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ── Marcar link activo en navbar ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Scroll to top ── */
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Reveal on scroll (IntersectionObserver) ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }

  /* ── Toast helper ── */
  window.showToast = (msg, type = '') => {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.className = 'toast' + (type ? ' toast-' + type : '');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => toast.classList.add('show'));
    });
    setTimeout(() => toast.classList.remove('show'), 3200);
  };

  /* ── Formulario asesoría ── */
  const formAsesoria = document.getElementById('form-asesoria');
  if (formAsesoria) {
    formAsesoria.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = formAsesoria.querySelector('.btn-submit');
      btn.textContent = 'Enviando...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✓ Solicitud enviada';
        btn.style.background = '#059669';
        showToast('¡Solicitud recibida! Te contactamos en menos de 24h.', 'gold');
        setTimeout(() => {
          btn.textContent = 'Enviar solicitud';
          btn.style.background = '';
          btn.disabled = false;
          formAsesoria.reset();
        }, 3000);
      }, 1400);
    });
  }

  /* ── Filtros de proyectos ── */
  const filterSelects = document.querySelectorAll('.filter-select');
  const projectCards  = document.querySelectorAll('.project-card[data-city]');
  if (filterSelects.length && projectCards.length) {
    filterSelects.forEach(sel => {
      sel.addEventListener('change', applyFilters);
    });
  }

  function applyFilters() {
    const city  = document.getElementById('filter-city')?.value  || '';
    const type  = document.getElementById('filter-type')?.value  || '';
    const price = document.getElementById('filter-price')?.value || '';

    projectCards.forEach(card => {
      const matchCity  = !city  || card.dataset.city  === city;
      const matchType  = !type  || card.dataset.type  === type;
      const matchPrice = !price || card.dataset.price === price;
      card.style.display = (matchCity && matchType && matchPrice) ? '' : 'none';
    });
  }

  /* ── Tabs Auth (Login / Registro) ── */
  const authTabs = document.querySelectorAll('.auth-tab');
  if (authTabs.length) {
    authTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.tab;
        document.querySelectorAll('.auth-panel').forEach(p => {
          p.style.display = p.id === target ? 'block' : 'none';
        });
      });
    });
  }

  /* ── Formulario Login ── */
  const formLogin = document.getElementById('form-login');
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = formLogin.querySelector('.btn-submit');
      btn.textContent = 'Verificando...';
      btn.disabled = true;
      setTimeout(() => {
        window.location.href = 'panel.html';
      }, 1200);
    });
  }

  /* ── Formulario Registro ── */
  const formRegister = document.getElementById('form-register');
  if (formRegister) {
    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();
      const pass1 = document.getElementById('reg-pass')?.value;
      const pass2 = document.getElementById('reg-pass2')?.value;
      if (pass1 !== pass2) {
        showToast('Las contraseñas no coinciden.', '');
        return;
      }
      const btn = formRegister.querySelector('.btn-submit');
      btn.textContent = 'Creando cuenta...';
      btn.disabled = true;
      setTimeout(() => {
        showToast('¡Cuenta creada! Redirigiendo…', 'gold');
        setTimeout(() => { window.location.href = 'panel.html'; }, 1500);
      }, 1400);
    });
  }

  /* ── Botón "Invertir ahora" en detalle ── */
  document.querySelectorAll('.btn-invertir').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  });

  /* ── Recuperar contraseña ── */
  const forgotLink = document.getElementById('forgot-link');
  if (forgotLink) {
    forgotLink.addEventListener('click', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email')?.value;
      if (!email) {
        showToast('Ingresa tu correo primero.');
      } else {
        showToast('Enlace de recuperación enviado a ' + email, 'gold');
      }
    });
  }

  /* ── Animación entrada hero ── */
  document.querySelectorAll('.hero h1, .hero-sub, .hero-btns, .hero-stats').forEach(el => {
    el.style.opacity = '1';
  });

  /* ── Simulador de inversión ── */
  const simRange = document.getElementById('sim-amount');
  const simYears = document.getElementById('sim-years');
  const simResult = document.getElementById('sim-result');
  const simRate   = document.getElementById('sim-rate');

  function updateSimulator() {
    if (!simRange || !simResult) return;
    const amount = parseFloat(simRange.value);
    const years  = parseFloat(simYears?.value || 3);
    const rate   = parseFloat(simRate?.value  || 0.16);
    const result = amount * Math.pow(1 + rate, years);
    const gain   = result - amount;
    document.getElementById('sim-amount-display').textContent =
      '$' + amount.toLocaleString('es-CO') + 'M';
    document.getElementById('sim-result-display').textContent =
      '$' + result.toFixed(1).replace('.', ',') + 'M';
    document.getElementById('sim-gain-display').textContent =
      '+$' + gain.toFixed(1).replace('.', ',') + 'M';
  }

  if (simRange) {
    simRange.addEventListener('input', updateSimulator);
    simYears?.addEventListener('change', updateSimulator);
    simRate?.addEventListener('change', updateSimulator);
    updateSimulator();
  }

  /* ── Documentos panel ── */
  document.querySelectorAll('.btn-subir-doc').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Selecciona un archivo para subir.', 'gold');
    });
  });

  /* ── Pago panel ── */
  const btnPago = document.getElementById('btn-pago');
  if (btnPago) {
    btnPago.addEventListener('click', () => {
      showToast('Redirigiendo a pasarela de pago segura…');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1500);
    });
  }

});
