
document.querySelector('.auth-buttons button:nth-child(1)').addEventListener('click', function() {
    document.querySelector('.modal-login').style.display = 'block';
});

document.querySelector('.auth-buttons button:nth-child(2)').addEventListener('click', function() {
    document.querySelector('.modal-signup').style.display = 'block';
});

document.querySelectorAll('.modal-close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        document.querySelector('.modal-login').style.display = 'none';
        document.querySelector('.modal-signup').style.display = 'none';
    });
});


document.querySelectorAll('.accordion-header').forEach(function(header) {
    header.addEventListener('click', function() {
        const item = header.parentElement;
        const content = item.querySelector('.accordion-content');
        const allContents = document.querySelectorAll('.accordion-content');
        
        allContents.forEach(function(content) {
            if (content !== content) {
                content.style.display = 'none';
            }
        });

        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

function updateCarousel() {
    const carouselTrack = document.querySelector('.carousel-track');
    carouselTrack.style.transform = `translateX(-${currentSlide * (slides[0].offsetWidth + 20)}px)`;
}

prevButton.addEventListener('click', function() {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateCarousel();
});

nextButton.addEventListener('click', function() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateCarousel();
});
