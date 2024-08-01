window.addEventListener('scroll', function() {
    const box = document.querySelector('.box');
    const scrollPosition = window.scrollY;
    box.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`;
});