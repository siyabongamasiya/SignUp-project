// Initialize auth system
// const userAuth = new UserAuth();

// Check if already logged in
// document.addEventListener("DOMContentLoaded", function () {
//   if (userAuth.isLoggedIn()) {
//     window.location.href = "profile.html";
//   }
// });

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // const result = userAuth.login(username, password);
  window.location.href = "Profile.html";

  // if (result.success) {
  //   showMessage("loginMessage", result.message, "success");
  //   setTimeout(() => {
      
  //   }, 1000);
  // } else {
  //   showMessage("loginMessage", result.message, "error");
  // }
});
