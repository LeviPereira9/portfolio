const miniMenu = document.querySelector("#miniMenu");
const miniContent = document.querySelector("#miniMenu__content");
const aboutName = document.querySelector(".about__top__container__title__name");

miniMenu.addEventListener("click", ()=>{
    miniContent.classList.toggle("showContent");
})