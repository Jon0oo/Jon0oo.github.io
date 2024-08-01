window.addEventListener('scroll', function() {
    const box = document.querySelector('.box');
    const scrollPosition = window.scrollY;
    box.style.transform = `translateY(${scrollPosition * 0.1}px)`;
  });

  let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    dropdowns.forEach(dropdown => {
      dropdown.style.display = 'none';
    });
  }
  lastScrollTop = scrollTop;
});