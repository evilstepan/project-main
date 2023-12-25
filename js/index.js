var slideIndex = 0;
showTextSlide();

function showTextSlide() {
    var i;
    var slides = document.querySelectorAll('.text-slide');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showTextSlide, 3000); // Переключать каждые 3 секунды
}