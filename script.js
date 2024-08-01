window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const image = document.getElementById('movingImage');
    image.style.transform = `translate(-50%, -${scrollPosition * 0.5}px)`;
});