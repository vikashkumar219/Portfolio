document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});
// ========== DARK MODE TOGGLE ==========
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Load saved theme from LocalStorage
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️"; // Change button icon to Sun
}

// Toggle Dark Mode
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.textContent = "☀️"; // Sun icon when in dark mode
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.textContent = "🌙"; // Moon icon when in light mode
    }
});
