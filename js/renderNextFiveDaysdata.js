

import {elements} from "./htmlElemets.js";
import { getHour,getDate,getWeekDay} from "./helper.js";
import { dayOrNIght } from "./dayOrNight.js";



export const renderNextFiveDaysdata=function(data){
    let currentDate=getDate(data[0].dt)
    let d=data[1].list;
    let sunrise=data[0].sys.sunrise;
    let sunset=data[0].sys.sunset;
    let x=false;
    let count=1;

    for(let i=0; i<d.length; i++){
        if (getDate(d[i].dt) >= getDate(data[0].dt)+5) break;
        let time=d[i].dt;
        let dayOrNight=dayOrNIght(sunrise,sunset,time)
        if(getDate(d[i].dt)===currentDate+1 || getDate(d[i].dt)===1 && currentDate!=1){            
            elements.maininfo.innerHTML+=
              ` <div class="Today">        
                    <div class="title"> <h2>${getWeekDay((d[i].dt))}</h2> </div>      
                    <div class="Weather" id="Weather">
                        <div id="first4" class="firstdate${getDate(d[i].dt)}">
                            <div class="Am10 first4">
                                <h3 class="clock">${getHour(d[i].dt).asString}</h3>
                                <div class="cloud"><img src="../components/${dayOrNight}_${d[i].weather[0].main}.png" title="${d[i].weather[0].main}" alt="${d[i].weather[0].main}" /></div>
                                <h3>${Math.round(d[i].main.temp)}<sup>°</sup></h3>
                            </div>
                        </div>

                        <div id="last4" class="lastdate${getDate(d[i].dt)}"> 

                        </div>
                    </div>
                    <div id="arrowRight" class="visible"><i class="fa-solid fa-arrow-right"></i></div>
                    <div id="arrowLeft" class="invisible"><i class="fa-solid fa-arrow-left"></i></div>
                </div>`;
            x=true;
            currentDate=getDate(d[i].dt);  
        }else if(getDate(d[i].dt)===currentDate && x===true){
          // getDate(d[i+1].dt)!=currentDate ? x=false : null ; // IF NEXT DATA IS NEW DAY'S CHANGE esle if BLOCK
            if(count<4){
                count++;            
                let perent=document.querySelector(`.firstdate${getDate(d[i].dt)}`)
                perent.innerHTML+=
                `   <div class="Am10 first4">
                        <h3 class="clock">${getHour(d[i].dt).asString}</h3>
                        <div class="cloud"><img src="../components/${dayOrNight}_${d[i].weather[0].main}.png" title="${d[i].weather[0].main}" alt="${d[i].weather[0].main}" /></div>
                        <h3>${Math.round(d[i].main.temp)}<sup>°</sup></h3>
                    </div>`


            }else if(count>3 && count<8){
                count==7 ? count=1: count++;
                let perent=document.querySelector(`.lastdate${getDate(d[i].dt)}`)
                  perent.innerHTML+=
                   ` <div class="Am10 last4">
                        <h3 class="clock">${getHour(d[i].dt).asString}</h3>
                        <div class="cloud"><img src="../components/${dayOrNight}_${d[i].weather[0].main}.png" title="${d[i].weather[0].main}" alt="${d[i].weather[0].main}" /></div>
                        <h3>${Math.round(d[i].main.temp)}<sup>°</sup></h3>
                    </div>`

            }
        
        }
    }
}