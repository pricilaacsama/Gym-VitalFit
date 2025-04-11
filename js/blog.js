// Scroll reveal efecto
const posts = document.querySelectorAll('.post');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

posts.forEach(post => observer.observe(post));
