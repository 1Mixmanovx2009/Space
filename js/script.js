let toggleMenu = document.querySelector(".header__burger");
let menu = document.querySelector(".header__nav--list");
let body = document.querySelector("body")
let header = document.querySelector(".site-header")

toggleMenu.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    toggleMenu.classList.toggle("toggle")
    body.classList.toggle("no-scroll")
    header.classList.toggle("header-blur")
})
