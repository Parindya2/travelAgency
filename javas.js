document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(document.querySelectorAll('.carousel-card'));
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    let currentIndex = 0; // Tracks the index of the first visible card

    function updateCarousel() {
        // Calculate the width of one card
        const cardWidth = cards[0].offsetWidth + 20; // 20 for margin (adjust as needed)
        // Move the track by the correct amount
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 4) { // Ensure at least 4 cards remain visible
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) { // Ensure not to go beyond the first card
            currentIndex--;
            updateCarousel();
        }
    });
});
