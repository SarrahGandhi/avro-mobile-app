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
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");

  // Get current user data
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const currentUserEmail = localStorage.getItem("currentUserEmail");

  console.log("currentUser from localStorage:", currentUser);
  console.log("currentUserEmail from localStorage:", currentUserEmail);

  let mealPlanBalance = null;

  // Prioritize getting data from currentUser in localStorage
  if (currentUser && currentUser.mealPlanBalance !== undefined) {
    // Get data from currentUser object in localStorage
    mealPlanBalance = currentUser.mealPlanBalance;
    console.log(
      "Using mealPlanBalance from currentUser in localStorage:",
      mealPlanBalance
    );
  }
  // Then try to get it directly from userData using the email
  else if (currentUserEmail && userData && userData[currentUserEmail]) {
    mealPlanBalance = userData[currentUserEmail].mealPlanBalance;
    console.log(
      "Using mealPlanBalance from userData.js via email:",
      mealPlanBalance
    );
  }
  // Fallback to a default user if needed
  else if (typeof userData !== "undefined") {
    const firstUserEmail = Object.keys(userData)[0];
    if (firstUserEmail && userData[firstUserEmail]) {
      mealPlanBalance = userData[firstUserEmail].mealPlanBalance;
      console.log(
        "Using fallback mealPlanBalance from first user in userData:",
        mealPlanBalance
      );
    }
  }

  // If we have a meal plan balance, update the UI
  if (mealPlanBalance !== null) {
    // Format balance as currency
    const mealFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    const formattedBalance = mealFormatter.format(mealPlanBalance);

    // Update the balance display
    const balanceElement = document.getElementById("mealPlanBalanceAmount");
    if (balanceElement) {
      balanceElement.textContent = formattedBalance;
      console.log("Updated balance display:", formattedBalance);
    }

    // Also update the plan details
    const planValue = 2500.0;
    const usedAmount = planValue - mealPlanBalance;

    // Update plan value
    const planValueElement = document.querySelector(
      ".flex-row:nth-child(1) .info-value"
    );
    if (planValueElement) {
      planValueElement.textContent = mealFormatter.format(planValue);
    }

    // Update used amount
    const usedElement = document.querySelector(
      ".flex-row:nth-child(2) .info-value"
    );
    if (usedElement) {
      usedElement.textContent = mealFormatter.format(usedAmount);
    }

    // Update remaining amount
    const remainingElement = document.querySelector(
      ".flex-row:nth-child(3) .info-value"
    );
    if (remainingElement) {
      remainingElement.textContent = formattedBalance;
    }
  } else {
    console.error("Could not find mealPlanBalance for current user");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded - Printing Page");

  // Get current user data
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const currentUserEmail = localStorage.getItem("currentUserEmail");

  console.log("currentUser from localStorage:", currentUser);
  console.log("currentUserEmail from localStorage:", currentUserEmail);

  let printingBalance = null;

  // Prioritize getting data from currentUser in localStorage
  if (currentUser && currentUser.printingBalance !== undefined) {
    // Get data from currentUser object in localStorage
    printingBalance = currentUser.printingBalance;
    console.log(
      "Using printingBalance from currentUser in localStorage:",
      printingBalance
    );
  }
  // Then try to get it directly from userData using the email
  else if (currentUserEmail && userData && userData[currentUserEmail]) {
    printingBalance = userData[currentUserEmail].printingBalance;
    console.log(
      "Using printingBalance from userData.js via email:",
      printingBalance
    );
  }
  // Fallback to a default user if needed
  else if (typeof userData !== "undefined") {
    const firstUserEmail = Object.keys(userData)[0];
    if (firstUserEmail && userData[firstUserEmail]) {
      printingBalance = userData[firstUserEmail].printingBalance;
      console.log(
        "Using fallback printingBalance from first user in userData:",
        printingBalance
      );
    }
  }

  // If we have a printing balance, update the UI
  if (printingBalance !== null) {
    // Format balance as currency
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    const formattedBalance = formatter.format(printingBalance);

    // Update the balance display
    const balanceElement = document.getElementById("printingBalanceAmount");
    if (balanceElement) {
      balanceElement.textContent = formattedBalance;
      console.log("Updated printing balance display:", formattedBalance);
    }

    // Set pages data
    const pagesPrinted = Math.floor(Math.random() * 50) + 10; // Random number for demo
    const freePages = 100 - pagesPrinted;

    document.getElementById("pagesPrinted").textContent = pagesPrinted;
    document.getElementById("freePages").textContent = freePages;
  } else {
    console.error("Could not find printingBalance for current user");
  }
});
