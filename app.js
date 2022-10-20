const miniMenu = document.querySelector("#miniMenu");
const miniContent = document.querySelector("#miniMenu__content");

miniMenu.addEventListener("click", ()=>{
    miniContent.classList.toggle("showContent");
})