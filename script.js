// Simple interactivity: Watch, Star, Fork buttons
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".actions button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert(button.textContent.trim() + " clicked!");
        });
    });
});
