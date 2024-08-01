window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.body.style.backgroundPosition = 'center top ' + (scrolled * 0.001) + 'px';
});