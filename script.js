const menub = document.querySelector(".menuitem");
const menuElement = document.querySelector(".menuopen");

function toggleMenu() {
    const currentDisplay = window.getComputedStyle(menuElement).display;

    if (currentDisplay === "none") {
        menuElement.style.display = "flex";
    } else {
        menuElement.style.display = "none";
    }
}

menub.addEventListener("click", toggleMenu);
