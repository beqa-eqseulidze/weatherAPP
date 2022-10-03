import { elements } from "./htmlElemets.js"

export const renderCurrentData=(weather)=>{
    elements.location.innerHTML+=weather[0].name;
    elements.temperature.insertAdjacentHTML("afterbegin",Math.round(weather[0].main.temp))
}