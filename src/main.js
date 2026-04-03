import './style.css'

// Add scroll animation observer
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.hero-content, .price-card, .about-text');
  animatedElements.forEach(el => observer.observe(el));

  // Mobile Menu Toggle Logic
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('nav ul li a');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Pricing Selection Logic
  const pricingTiers = document.querySelectorAll('.tier');

  pricingTiers.forEach(tier => {
    tier.addEventListener('click', () => {
      const card = tier.closest('.price-card');
      const allTiers = card.querySelectorAll('.tier');
      const orderBtn = card.querySelector('.order-btn');
      const bottleSize = card.querySelector('h3').textContent.trim();
      const quantity = tier.querySelector('.quantity').textContent.trim();

      // Remove active/best-value from all tiers in this card
      allTiers.forEach(t => t.classList.remove('active', 'best-value'));

      // Add active to the clicked tier
      tier.classList.add('active');

      // Update WhatsApp link
      const message = `Hello! I'd like to order the ${quantity} of ${bottleSize}.`;
      const encodedMessage = encodeURIComponent(message);
      orderBtn.setAttribute('href', `https://wa.me/2348071420591?text=${encodedMessage}`);
    });
  });
});
