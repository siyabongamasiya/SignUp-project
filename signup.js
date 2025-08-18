// Initialize auth system
const userAuth = new UserAuth();

// Check if already logged in
document.addEventListener("DOMContentLoaded", function () {
  if (userAuth.isLoggedIn()) {
    window.location.href = "profile.html";
  }
});

// Handle signup form submission
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const result = userAuth.signup(username, email, password);

  if (result.success) {
    showMessage("signupMessage", result.message, "success");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    showMessage("signupMessage", result.message, "error");
  }
});
