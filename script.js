<script>
  // AOS Animation Initialization
  AOS.init();

  // Smooth scroll for navbar links
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

  // Email send logic
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = `New Inquiry from ${name}`;
    const body = `Full Name: ${name}%0DEmail: ${email}%0D%0DMessage:%0D${message}`;
    const mailtoLink = `mailto:tasogaresaya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });
</script>
