// Make sure your logo has an id, e.g., <img id="logo" src="logo.png" alt="Logo">

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");

    if (logo) {
        logo.addEventListener("click", () => {
            location.reload(); // Reloads the page
        });
    }
});
