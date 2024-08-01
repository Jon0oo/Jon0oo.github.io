window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const image = document.getElementById('movingImage');
    image.style.transform = `translate(-50%, calc(-50% - ${scrollPosition}px))`;
});