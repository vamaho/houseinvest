/* ═══════════════════════════════════════════════
   navbar.js – inyecta el navbar y footer en cada página
═══════════════════════════════════════════════ */

(function () {
  const navbarHTML = `
  <nav class="navbar">
    <a href="index.html" class="navbar-logo">
      HouseInvest<span class="logo-dot"></span>Market
    </a>
    <ul class="navbar-links" id="navLinks">
      <li><a href="proyectos.html">Proyectos</a></li>
      <li><a href="como-funciona.html">Cómo funciona</a></li>
      <li><a href="asesoria.html">Asesoría</a></li>
      <li><a href="panel.html">Mi cuenta</a></li>
    </ul>
    <div class="navbar-cta">
      <a href="login.html" class="btn btn-outline btn-sm">Iniciar sesión</a>
      <a href="login.html#registro" class="btn btn-primary btn-sm">Registrarse</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </nav>`;

  const footerHTML = `
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="footer-logo navbar-logo">
          HouseInvest<span class="logo-dot"></span>Market
        </a>
        <p class="footer-brand-text">
          Plataforma digital que conecta inversionistas con proyectos
          inmobiliarios en Colombia, con asesoría legal, financiera
          y comercial integrada. 100% digital, 100% remoto.
        </p>
        <div class="footer-socials">
          <a href="#" class="social-btn">in</a>
          <a href="#" class="social-btn">ig</a>
          <a href="#" class="social-btn">fb</a>
          <a href="#" class="social-btn">yt</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Plataforma</h5>
        <ul>
          <li><a href="proyectos.html">Proyectos</a></li>
          <li><a href="como-funciona.html">Cómo funciona</a></li>
          <li><a href="asesoria.html">Asesoría</a></li>
          <li><a href="panel.html">Mi panel</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Empresa</h5>
        <ul>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Prensa</a></li>
          <li><a href="#">Trabaja con nosotros</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contacto</h5>
        <ul>
          <li><a href="mailto:contacto@houseinvest.com.co">contacto@houseinvest.com.co</a></li>
          <li><a href="tel:+573001234567">+57 300 123 4567</a></li>
          <li><a href="asesoria.html">Solicitar asesoría</a></li>
          <li><a href="#">Centro de ayuda</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 HouseInvest Market. Todos los derechos reservados.</p>
      <div class="footer-legal">
        <a href="#">Términos y condiciones</a>
        <a href="#">Política de privacidad</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </footer>
  <button id="scrollTop" title="Volver arriba">↑</button>
  <div id="toast" class="toast"></div>`;

  // Inyectar navbar al inicio del body
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  // Inyectar footer al final del body
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
