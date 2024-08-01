window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});