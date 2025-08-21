import UserAuth from "./UserAuth.js";

// Initialize auth system
const userAuth = new UserAuth();

const createUsersIfNotExist = () => {
  localStorage.setItem("users", {});
};

// Check if already logged in
const checkLoggin = () => {
  const users = userAuth.getUsers();
  for (let user in users) {
    if (user.loggedin) {
      window.location.href = "./Profile.html";
    }
  }
};

createUsersIfNotExist();
checkLoggin();

// Handle signup form submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const createdAt = new Date().toISOString();
  const success = userAuth.signup(username, email, password, createdAt);

  if (success) {
    window.location.href = "./Profile.html";
  } else {
    alert("Error creating profile...please try again...");
  }
});
