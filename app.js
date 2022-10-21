const miniMenu = document.querySelector("#miniMenu");
const miniContent = document.querySelector("#miniMenu__content");
const knowContent = document.querySelectorAll(".knowledge__content__info");
const knowStart = document.querySelector(".knowledge__content__start");
let knowStatus = false;



miniMenu.addEventListener("click", ()=>{
    miniContent.classList.toggle("showContent");
});

const changeContent = (index)=>{
    knowStatus = true;
    
    if(knowStatus){
        knowStart.classList.add("hideContent");
    }
    
    for(c = 0; c < knowContent.length ; c++){
        knowContent[c].classList.remove("showContent");
        knowContent[c].classList.add("hideContent");
    }

    knowContent[index].classList.add("showContent");
}