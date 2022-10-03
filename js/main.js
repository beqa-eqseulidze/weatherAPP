'use strict';

 import { getIocationCoords,getCityName } from "./getIocationCoords.js";
import { getWeatherData } from "./getWeatherData.js";
import {html} from "./htmlElements.js"
import {search} from "./search.js"
import {getHour,renderFiveDaysdata,getDate} from "./helper.js"
import {changeMode} from "./changeMode.js"


// ლოუდერი სტარტი
changeMode()
//========== get current location end stor it in sessionstorage ================;
getIocationCoords()

// =========  this function wiil call after 50ms (after curent position is already stored in sesssionStorage)============
setTimeout(
    ()=>{

        (async function(){   
            // let coords=[41.0015,39.012345]
            let coords=[sessionStorage.getItem('lat'),sessionStorage.getItem('lon')] ;
           // console.log(coords)  
            let cityNames=''// await getCityName(coords);
            let weather
            coords[0]!=null? weather=await getWeatherData(coords):weather=await getWeatherData('')
           // console.log(weather)
            // ლოუდერი ენდ
            let fiveDaysdata=weather[1].value.data.list
            let currentDate=getDate(weather[1].value.data.list[0].dt)  
            console.log(    `current Date : ${currentDate}`)
            //console.log(cityNames[0])
            !cityNames[0]? html.location.innerHTML=weather[0].value.data.name : html.location.innerHTML=cityNames[0] ;
            html.curentTemp.innerHTML=Math.round(weather[0].value.data.main.temp);
            html.sunrise.innerHTML=getHour(weather[0].value.data.sys.sunrise);
            html.sunset.innerHTML=getHour(weather[0].value.data.sys.sunset)
            console.log(fiveDaysdata)
            renderFiveDaysdata(fiveDaysdata,currentDate)
             search() // სერჩის ღილაკის ქლიქის  ფუნქცია
        })()
    
    }
    ,
    50
 )





     






