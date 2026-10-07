document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú hamburguesa móvil
  const menuBtn = document.querySelector('#menu-btn');
  const navMenu = document.querySelector('#nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('activo');
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
      menuBtn.setAttribute('aria-expanded', !expanded);
    });
  }

  // 2. Control de Modo Oscuro (Dark Mode)
  const toggleBtn = document.querySelector('#dark-mode-toggle');
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      toggleBtn.textContent = isDark ? '☀️' : '🌙';
    });
  }

  // 3. Validación y envío del formulario
  const form = document.querySelector('#formulario-contacto');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias por tu mensaje! El formulario ha sido procesado correctamente.');
      form.reset();
    });
  }
});