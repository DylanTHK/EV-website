const menuButton = document.querySelector(".menu_btn");
const backdrop = document.querySelector(".backdrop");
const navigationBar = document.querySelector(".navigation");
const closeNavigation = document.querySelector(".navigation-close-btn");

const openMenu = () => {
    navigationBar.style.right = 0;
    backdrop.style.display = "inline";
}

const closeMenu = () => {
    navigationBar.style.right = "-20vw";
    backdrop.style.display = "none";
}

menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    openMenu();
})

closeNavigation.addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu();
})