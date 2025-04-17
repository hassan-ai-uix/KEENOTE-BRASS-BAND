// script.js
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector('.loader');

    // Simulate a delay (e.g., fetching data)
    setTimeout(() => {
        loader.style.display = 'none';
    }, 3000); // Hide the loader after 3 seconds
});