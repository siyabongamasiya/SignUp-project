// Initialize auth system
// const userAuth = new UserAuth();

// Check authentication and redirect if not logged in
// document.addEventListener("DOMContentLoaded", function () {
//   if (!userAuth.isLoggedIn()) {
//     window.location.href = "index.html";
//     return;
//   }
//   displayProfile();
// });

// Display user profile information
function displayProfile() {
  const profile = userAuth.getProfile();
  if (profile) {
    const profileInfo = document.getElementById("profileInfo");
    const createdDate = new Date(profile.createdAt).toLocaleDateString();
    const statusClass = profile.loggedIn ? "status-online" : "status-offline";
    const statusText = profile.loggedIn ? "Online" : "Offline";

    profileInfo.innerHTML = `
                    <p><strong>Username:</strong> ${profile.username}</p>
                    <p><strong>Email:</strong> ${profile.email}</p> 
                    <p><strong>Account Created:</strong> ${createdDate}</p>
                    <p><strong>Status:</strong> <span class="${statusClass}">${statusText}</span></p>
                `;
  }
}

signout.onclick = () => {
  window.location.href = "SignIn.html";
  // const result = userAuth.logout();
  // if (result.success) {

  // }
};
