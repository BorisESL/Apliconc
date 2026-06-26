// Marca que el JS está activo (habilita el ocultar/revelar del CSS).
// Si este archivo falla en cargar, los .reveal quedan visibles por defecto.
document.documentElement.classList.add('js');

// Año dinámico
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menú móvil
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  const setMenu = (open) => {
    navLinks.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  };
  burger.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => setMenu(false))
  );
}

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Ticker infinito (duplicar contenido)
const ticker = document.getElementById('ticker');
if (ticker) ticker.innerHTML += ticker.innerHTML;

// Envío del formulario sin recargar
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form && status) form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('[type="submit"]');
  btn.disabled = true;
  status.textContent = 'Enviando…';
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      form.reset();
      status.textContent = 'Mensaje enviado. Te responderemos pronto.';
    } else {
      status.textContent = 'No se pudo enviar. Escríbenos por correo o WhatsApp.';
    }
  } catch {
    status.textContent = 'No se pudo enviar. Escríbenos por correo o WhatsApp.';
  } finally {
    btn.disabled = false;
  }
});