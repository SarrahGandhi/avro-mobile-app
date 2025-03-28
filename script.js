let slideIndex = 0;

// Show the initial slide
showSlide(slideIndex);

// Function to show the correct slide
function showSlide(index) {
  const slides = document.querySelectorAll(".slide");

  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Show the correct slide
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].classList.add("active");
}

// Function to move slides
function moveSlide(step) {
  slideIndex += step;
  showSlide(slideIndex);
}

// Auto slide every 3 seconds
