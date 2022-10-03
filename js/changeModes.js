import {elements} from "./htmlElemets.js";

export const changeModes = function(){
    elements.toggle.addEventListener("change", () => {

        if(localStorage.getItem('mode')){
            localStorage.removeItem('mode')
        }else{
            localStorage.setItem('mode','dark') 
         }
        elements.body.classList.toggle("dark");
        elements.sunIcon.className = elements.sunIcon.className == "fa-regular fa-sun" ? "fa-regular fa-sun" : "fa-regular fa-sun";
        elements.moonIcon.className = elements.moonIcon.className == "fa-regular fa-moon" ? "fa-regular fa-moon" : "fa-regular fa-moon";

});
window.addEventListener('load',()=>{
    if(localStorage.getItem('mode'))
        elements.body.classList.add("dark")
    })
};