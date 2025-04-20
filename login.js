// Login form handling
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }
});

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;

  // Check if user exists in mock data
  if (userData[email]) {
    // Store user email in localStorage for direct access to userData
    localStorage.setItem("currentUserEmail", email);

    // Store user data in localStorage
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        email: email,
        name: userData[email].name,
        profilePicture: userData[email].profilePicture,
        points: userData[email].points,
        lives: userData[email].lives,
        printingBalance: userData[email].printingBalance,
        mealPlanBalance: userData[email].mealPlanBalance,
        role: userData[email].role,
      })
    );

    // Redirect to home page
    window.location.href = "terms.html";
  } else {
    alert("Email not found");
  }
}
