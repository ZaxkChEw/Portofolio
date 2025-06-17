// Navbar
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Slider
    const sliderTrack = document.querySelector('.slider-track');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.querySelector('.nav-prev');
    const nextBtn = document.querySelector('.nav-next');
    const cardWidth = cards[0].offsetWidth + 30;
    let currentIndex = 0;
    let visibleCards = Math.floor(document.querySelector('.slider-container').offsetWidth / cardWidth);
    let maxIndex = cards.length - visibleCards;

    function updateSlider() {
        const distance = -(cardWidth * currentIndex);
        sliderTrack.style.transform = `translateX(${distance}px)`;
        updateButtons();
    }

    function updateButtons() {
        prevBtn.disabled = currentIndex <= 0;
        nextBtn.disabled = currentIndex >= maxIndex;
        prevBtn.style.opacity = prevBtn.disabled ? '0.3' : '1';
        nextBtn.style.opacity = nextBtn.disabled ? '0.3' : '1';
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    window.addEventListener('resize', () => {
        visibleCards = Math.floor(document.querySelector('.slider-container').offsetWidth / (cards[0].offsetWidth + 30));
        maxIndex = cards.length - visibleCards;
        currentIndex = Math.min(currentIndex, maxIndex);
        updateSlider();
    });

    updateSlider();
});
