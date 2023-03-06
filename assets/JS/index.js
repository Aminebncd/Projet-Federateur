const dropdownToggle = document.querySelector(".dropdown-navbar");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("mouseenter", function() {
    dropdownMenu.classList.add("show");
});

dropdownToggle.addEventListener("mouseleave", function() {
    dropdownMenu.classList.remove("show");
});

dropdownMenu.addEventListener("mouseenter", function() {
    dropdownMenu.classList.add("show");
});

dropdownMenu.addEventListener("mouseleave", function() {
    dropdownMenu.classList.remove("show");
});
