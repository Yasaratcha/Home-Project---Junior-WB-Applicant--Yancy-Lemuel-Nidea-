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

// ✅ calculate slide width dynamically (including margins)
function updateGallery() {
  const slideWidth = slides[0].getBoundingClientRect().width +  (slides[0].offsetLeft - slides[0].parentElement.offsetLeft);
  const offset = -currentIndex * (slideWidth);
  track.style.transform = `translateX(${offset}px)`;
}

// Button listeners
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateGallery();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateGallery();
});

// Initialize on load
window.addEventListener("resize", updateGallery);
updateGallery();



// Favorite Icon Toggle
document.querySelectorAll('.favorite-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('active');
    const heart = icon.querySelector('i');
    heart.classList.toggle('fas');
    heart.classList.toggle('far');
  });
});

 document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    const inputs = form.querySelectorAll("input, textarea");

    // Email validation helper
    function isValidEmail(email) {
      return email.includes("@") && email.includes(".");
    }

    // Live validation
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const value = input.value.trim();

        // Reset color to black when empty
        if (value === "") {
          input.style.borderColor = "black";
          return;
        }

        let valid = true;

        // Custom validation logic
        if (input.type === "email") {
          valid = isValidEmail(value);
        } else if (input.tagName.toLowerCase() === "textarea") {
          valid = value.length >= 5; // message must have at least 5 chars
        } else if (input.type === "text" && input.previousElementSibling?.innerText.includes("Name")) {
          valid = value.length >= 2; // name must be at least 2 chars
        } else if (input.type === "text" && input.previousElementSibling?.innerText.includes("Phone")) {
          valid = value === "" || /^[0-9+\-()\s]+$/.test(value); // optional field, only numbers/symbols allowed
        }

        // Apply border color
        input.style.borderColor = valid ? "green" : "red";
      });
    });
  });