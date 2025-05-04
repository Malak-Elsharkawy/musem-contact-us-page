const slides = document.querySelectorAll('.slider-container img') ;
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

dots.forEach(dot => {
    dot.addEventListener('click' , () => {
        showSlide(parseInt(dot.getAttribute('data-slide')));
    });
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

document.getElementById('contactForm').addEventlistener('submit' , function(e) {
   e.preventDefault();
   alert('Thank you for your message! we will contact you soon.');
   this.reset();
});