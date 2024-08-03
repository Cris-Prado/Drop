const hamburger = document.querySelector(".mobileMenu");
const navMenu = document.querySelector(".list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})