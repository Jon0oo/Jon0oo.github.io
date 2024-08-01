window.addEventListener('scroll', function() {
    const content = document.querySelector('.content');
    if (window.scrollY > 100) { // Adjust the scroll value as needed
        content.classList.add('scrolled');
    } else {
        content.classList.remove('scrolled');
    }
});