let slideIndex = 0;

// Show the initial slide
showSlide(slideIndex);

// Function to show the correct slide
function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  // Reset index if out of range
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides and remove active class from dots
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Show the active slide and highlight the correct dot
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

// Function to move to a specific slide
function currentSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
}

// Auto slide every 3 seconds
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 30000);
