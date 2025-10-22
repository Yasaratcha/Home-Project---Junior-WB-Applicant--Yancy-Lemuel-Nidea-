document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".fa-search");
  const searchOverlay = document.getElementById("search-overlay");
  const closeBtn = document.querySelector(".close-search");

  if (!searchIcon || !searchOverlay || !closeBtn) {
    console.error("Search overlay elements not found!");
    return;
  }

  // Show overlay when search icon is clicked
  searchIcon.addEventListener("click", (e) => {
    e.preventDefault();
    searchOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable background scroll
  });

  // Close overlay when close button is clicked
  closeBtn.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Close overlay when clicking outside the search content
  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      searchOverlay.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});

// Gallery Functionality
const track = document.querySelector(".gallery-track");
const slides = document.querySelectorAll(".gallery-slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
const totalSlides = slides.length;

function updateGallery() {
  const offset = -currentIndex * 100; // shift by full width
  track.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateGallery();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateGallery();
});

// Favorite Icon Toggle
document.querySelectorAll('.favorite-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('active');
    const heart = icon.querySelector('i');
    heart.classList.toggle('fas');
    heart.classList.toggle('far');
  });
});