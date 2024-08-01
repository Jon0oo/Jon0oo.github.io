window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.body.style.backgroundPosition = 'center ' + (scrolled * 0.25) + 'px';
});