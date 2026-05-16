// Smooth nav active state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// Contact form — Formspree submission
document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const form = this;
  const btn = form.querySelector('button[type="submit"]');
  const success = document.getElementById('form-success');

  btn.disabled = true;
  btn.textContent = 'Sending...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.querySelectorAll('input, select, textarea, button').forEach(el => el.disabled = true);
      success.classList.add('visible');
      showToast('Message sent! I\'ll be in touch within 48 hours.');
    } else {
      btn.disabled = false;
      btn.textContent = 'Send message';
      showToast('Something went wrong — please try again.', true);
    }
  } catch {
    btn.disabled = false;
    btn.textContent = 'Send message';
    showToast('Something went wrong — please try again.', true);
  }
});

function showToast(message, isError = false) {
  const toast = document.createElement('div');
  toast.className = 'toast' + (isError ? ' toast--error' : '');
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast--visible'));
  setTimeout(() => {
    toast.classList.remove('toast--visible');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// Mobile menu toggle (simple show/hide)
document.querySelector('.hamburger').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  const isOpen = links.style.display === 'flex';
  links.style.display = isOpen ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '68px';
  links.style.left = '0';
  links.style.right = '0';
  links.style.background = 'var(--cream)';
  links.style.padding = '16px 32px 24px';
  links.style.borderBottom = '1px solid var(--sand)';
  links.style.gap = '16px';
});
