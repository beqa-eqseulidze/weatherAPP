
import {elements} from "./htmlElemets.js";
import { getHour,getDate } from "./helper.js";
import { dayOrNIght } from "./dayOrNight.js";


export const renderNextTwentyfourHoursData= function(data){

    let sunrise=data[0].sys.sunrise;
    let sunset=data[0].sys.sunset;
    
    for(let i=0;i<8; i++){
        let time=data[1].list[i].dt;
        let dayOrNight=dayOrNIght(sunrise,sunset,time)
        let perent;// : perent=elements.secondFour
        if(i<4) {
            perent=elements.firstFour
            perent.innerHTML+=`
                <div class="Am10 first4">
                <h3 class="clock">${getHour(data[1].list[i].dt).asString}</h3>
                <div class="cloud"><img src="../components/${dayOrNight}_${data[1].list[i].weather[0].main}.png" title="${data[1].list[i].weather[0].main}" alt="${data[1].list[i].weather[0].main}" /></div>
                <h3>${Math.round(data[1].list[i].main.temp)}<sup>°</sup></h3>
                </div>`
        }
        else{
            perent=elements.secondFour
            perent.innerHTML+=`
                <div class="Am10 last4">
                <h3 class="clock">${getHour(data[1].list[i].dt).asString}</h3>
                <div class="cloud"><img src="../components/${dayOrNight}_${data[1].list[i].weather[0].main}.png" title="${data[1].list[i].weather[0].main}" alt="${data[1].list[i].weather[0].main}" /></div>
                <h3>${Math.round(data[1].list[i].main.temp)}<sup>°</sup></h3>
                </div>`
        }
    }
}



   
