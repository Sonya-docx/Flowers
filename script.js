const burger = document.getElementById("burger");
const menu = document.querySelector(".page-navigation");

burger.onclick = () => {
    burger.classList.toggle("open");
    menu.classList.toggle("active");
};