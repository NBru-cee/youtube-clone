const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const categories = document.querySelector(".categories");
const banner = document.querySelector(".banner");
menuIcon.onclick = (e) => {
    e.preventDefault();
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    categories.classList.toggle("large-categories");
    banner.classList.toggle("big-banner");
};

const moreIcon = document.querySelector("#more");
const subscribedList = document.querySelector(".subscribed-list");
moreIcon.addEventListener("click", (e) => {
    e.preventDefault();
    subscribedList.classList.toggle("hide-subscribed-list");
});
