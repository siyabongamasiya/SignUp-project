import UserAuth from "./UserAuth.js";
// Initialize auth system
const userAuth = new UserAuth();

// Check authentication and redirect if not logged in
document.addEventListener("DOMContentLoaded", function () {
  displayProfile();
});

// Display user profile information
function displayProfile() {
  const profile = userAuth.getProfile(userAuth.getCurrentUser());
  console.log(profile);
  if (profile) {
    const profileInfo = document.getElementById("profileInfo");
    const createdDate = new Date(profile.createdAt).toLocaleDateString();
    const statusClass = profile.loggedin ? "status-online" : "status-offline";
    const statusText = profile.loggedin ? "Online" : "Offline";

    profileInfo.innerHTML = `
                    <p><strong>Username:</strong> ${profile.username}</p>
                    <p><strong>Email:</strong> ${profile.email}</p> 
                    <p><strong>Account Created:</strong> ${createdDate}</p>
                    <p><strong>Status:</strong> <span class="${statusClass}">${statusText}</span></p>
                `;
  }
}

signout.onclick = () => {
  userAuth.logout(userAuth.getCurrentUser());
  window.location.href = "SignIn.html";
};
