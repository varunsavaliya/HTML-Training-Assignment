// active class changing

let btnContainer = document.getElementById("allBtn");
let btns = btnContainer.getElementsByClassName("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";

        let img = btns[i].getElementsByTagName("img").src;
        // let res = img.replace("default", "active");
        console.log(btns[i]);
    })
}

// toggle menu and dashboard grid 

const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menu-icon");

function openCloseMenu() {
    let on = document.querySelector(".on");
    let dashboardMargin = document.querySelector(".dashboard");
    let dashboard = document.querySelector(".dashboard-big");
    if (menu.classList.contains("showMenu")) {
        dashboard.classList.add("col-12");
        dashboardMargin.classList.add("dashboard-big-design");
        dashboard.classList.add("container");
        dashboard.classList.remove("col-9");
        on.classList.remove("col-3");
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        dashboard.classList.remove("col-12");
        dashboard.classList.add("col-9");
        dashboardMargin.classList.remove("dashboard-big-design");
        menu.classList.add("showMenu");
        on.classList.add("col-3");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
