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
    // Store user data in localStorage
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        email: email,
        name: userData[email].name,
        profilePicture: userData[email].profilePicture,
      })
    );

    // Redirect to home page
    window.location.href = "terms.html";
  } else {
    alert("Email not found");
  }
}
