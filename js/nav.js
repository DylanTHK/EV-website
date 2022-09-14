const menuButton = document.querySelector(".menu-btn");
const backdrop = document.querySelector(".backdrop");
const navigationBar = document.querySelector(".navigation");
const closeNavigation = document.querySelector(".navigation-close-btn");

const openMenu = () => {
    navigationBar.className = "navigation active";
    backdrop.className = "backdrop active"
}

const closeMenu = () => {
    navigationBar.className = "navigation";
    backdrop.className = "backdrop"
}

menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    openMenu();
})

closeNavigation.addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu();
})

backdrop.addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu();
})