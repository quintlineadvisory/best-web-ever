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

// Contact form — demo handler (replace with real endpoint)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const success = document.getElementById('form-success');
  this.querySelectorAll('input, select, textarea, button').forEach(el => el.disabled = true);
  success.classList.add('visible');
});

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
