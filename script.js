// AOS Animation Initialization
AOS.init();

// Optional: Smooth scroll (if you want it)
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
