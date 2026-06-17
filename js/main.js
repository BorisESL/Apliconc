// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

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
ticker.innerHTML += ticker.innerHTML;

// Envío del formulario sin recargar
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
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
  }
});
