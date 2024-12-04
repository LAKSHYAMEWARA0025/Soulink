document.addEventListener("DOMContentLoaded", () => {
    // Profile Hover
    const profilePicture = document.querySelector(".profile-picture");
    const profileInfo = document.querySelector(".profile-info");
  
    profilePicture.addEventListener("click", () => {
      profileInfo.classList.toggle("hidden");
    });
});