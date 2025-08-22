import UserAuth from "./UserAuth.js";

// Initialize auth system
const userAuth = new UserAuth();

// Handle login form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  if (userAuth.login(username, password)) {
    window.location.href = "Profile.html";
  }else{
    alert("Account does not exist!!")
  }
});
