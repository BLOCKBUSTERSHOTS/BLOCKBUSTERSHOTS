
// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");

  // Add hover effect with shadow
  const movieCards = document.querySelectorAll('.movie-card');
  movieCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
    });
  });

  // Optional: Smooth scroll on links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Example future popup for Play Trailer button
  const buttons = document.querySelectorAll('.play-trailer');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert("Trailer feature coming soon!");
    });
  });
});
