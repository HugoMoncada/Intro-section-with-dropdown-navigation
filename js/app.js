const hamburger = document.querySelector(".hamburguer");
const navItems = document.querySelector(".nav__items");
const cover = document.querySelector(".cover");
const navItemContentList = document.querySelectorAll(".nav__item_content");
const navButtons = document.querySelectorAll(".nav__button");
const arrows = document.querySelectorAll(".arrow");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("hamburguer--active"); 
   navItems.classList.toggle("nav__items--active"); 
   cover.classList.toggle("cover--active");
})

navButtons.forEach( button => button.addEventListener("click", () => {
    if(button.textContent.includes("Features")){
        navItemContentList[0].classList.toggle("nav__item_content--active");
        arrows[0].classList.toggle("arrow--active");
    }
    if(button.textContent.includes("Company")){
        navItemContentList[1].classList.toggle("nav__item_content--active");
        arrows[1].classList.toggle("arrow--active");
    }
}))

