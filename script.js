let slideIndex = 0;

// Menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-container");
  const backButton = document.querySelector(".back-button");
  const menuPanel = document.querySelector(".menu-panel");
  const body = document.body;

  if (!menuButton || !backButton || !menuPanel) return;

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  body.appendChild(overlay);

  // Function to close menu
  function closeMenu() {
    menuPanel.classList.remove("active");
    overlay.classList.remove("active");
    body.style.overflow = "auto";
  }

  // Function to open menu
  function openMenu() {
    menuPanel.classList.add("active");
    overlay.classList.add("active");
    body.style.overflow = "hidden";
  }

  // Toggle menu
  menuButton.addEventListener("click", openMenu);

  // Close menu when clicking back button
  backButton.addEventListener("click", closeMenu);

  // Close menu when clicking overlay
  overlay.addEventListener("click", closeMenu);

  // Close menu when pressing Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuPanel.classList.contains("active")) {
      closeMenu();
    }
  });
});

// Show the initial slide
showSlide(slideIndex);

// Function to show the correct slide
function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (!slides.length || !dots.length) return;

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

// Notifications panel functionality
document.addEventListener("DOMContentLoaded", function () {
  const notificationsButton = document.querySelector(".icon-link:first-child");
  const notificationsPanel = document.querySelector(".notifications-panel");
  const notificationsOverlay = document.querySelector(".notifications-overlay");
  const markReadButton = document.querySelector(".mark-read");

  if (
    !notificationsButton ||
    !notificationsPanel ||
    !notificationsOverlay ||
    !markReadButton
  )
    return;

  // Toggle notifications panel
  notificationsButton.addEventListener("click", function (e) {
    e.preventDefault();
    notificationsPanel.classList.toggle("active");
    notificationsOverlay.classList.toggle("active");
  });

  // Mark all as read functionality
  markReadButton.addEventListener("click", function () {
    const notificationStatuses = document.querySelectorAll(
      ".notification-status"
    );
    notificationStatuses.forEach((status) => {
      status.style.display = "none";
    });
  });

  // Close notifications panel when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !notificationsPanel.contains(e.target) &&
      !notificationsButton.contains(e.target)
    ) {
      notificationsPanel.classList.remove("active");
      notificationsOverlay.classList.remove("active");
    }
  });
});

// Load user data
document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    window.location.href = "index.html";
    return;
  }

  // Load user's data from mock database
  const user = userData[currentUser.email];

  // Update profile information
  const profilePicture = document.querySelector(".profile-picture");
  if (profilePicture) {
    profilePicture.src = user.profilePicture;
  }

  // Update notifications
  updateNotifications(user.notifications);
});

function updateNotifications(notifications) {
  const unreadCount = notifications.filter((n) => !n.read).length;
  const notificationBadge = document.querySelector(".notification-badge");

  if (notificationBadge) {
    notificationBadge.textContent = unreadCount;
    notificationBadge.style.display = unreadCount > 0 ? "block" : "none";
  }
}

// Add event listener for logout button
document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.querySelector(".logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("currentUser");
      window.location.href = "index.html";
    });
  }
});
