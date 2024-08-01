window.addEventListener('scroll', function() {
    const box = document.querySelector('.box');
    const scrollPosition = window.scrollY;
    box.style.transform = `translateY(${scrollPosition * 0.2}px)`;
  });
  