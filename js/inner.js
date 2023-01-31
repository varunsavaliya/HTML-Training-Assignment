let actualBtn = document.getElementById("getFile");
let fileName = document.getElementById("fileName");
console.log(fileName.innerText)
actualBtn.addEventListener("change", function () {
    fileName.innerText = this.files[0].name;
})

let btnContainer = document.getElementById("allBtn");
let btns = btnContainer.getElementsByClassName("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    })
}

// toggle menu and analysis grid 

const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menu-icon");

function openCloseMenu() {
    let on = document.querySelector(".on");
    let analysisMargin = document.querySelector(".analysis");
    let analysis = document.querySelector(".analysis-big");
    if (menu.classList.contains("showMenu")) {
        analysis.classList.add("col-12");
        analysisMargin.classList.add("analysis-big-design");
        analysis.classList.add("container");
        analysis.classList.remove("col-9");
        on.classList.remove("col-3");
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        analysis.classList.remove("col-12");
        analysis.classList.add("col-9");
        analysisMargin.classList.remove("analysis-big-design");
        menu.classList.add("showMenu");
        on.classList.add("col-3");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

// upload name showing functionality

