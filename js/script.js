"use strict"
//import { elements } from "./htmlElemets.js";
import {changeModes} from "./changeModes.js";
import {getWeatherData} from "./getWeatherData.js";
import {renderCurrentData} from "./renderCurreantData.js";
import {getLocationCoords} from "./getLocationCoords.js";
import {spiner} from "./spiner.js"
import {renderNextTwentyfourHoursData} from "./renderNextTwentyfourHoursData.js"
import {renderNextFiveDaysdata} from "./renderNextFiveDaysdata.js"
let coords

//render spiner 
 spiner('start')


// this function switchs UI dark and light mode ;
    changeModes();

 // this function using geoLocation  saves curent coords in the sessionStorage;   
    getLocationCoords()
   
    
 //  function getLocationCoords() is a like asynchronous fonction and it tacks cople of miliseconds 
 // wihle saves current cooords in the sesionStorage 
 // that's why we need to weight for a while (without current coords this app not works propely) 
    setTimeout(
        async function(){ 
        // IF CURRENT position coords exist in the sessionStorage 
        // coords will set from sessionStorage if sessionStorage is empty 
        // coords default are Tbilis's latidude and longitude;  
        sessionStorage.getItem('lat')? coords=[sessionStorage.getItem('lat'),sessionStorage.getItem('lon')]:coords=[41.0015,39.012345]; 
      
        let weather = await getWeatherData(coords);

        console.log(weather)
        weather? spiner('stop'):null;
        renderCurrentData(weather);
        renderNextTwentyfourHoursData(weather);
        renderNextFiveDaysdata(weather)
    }
    ,500 )
        













// //Slider

// const arrowRight = document.getElementById("arrowRight");
// const arrowLeft = document.getElementById("arrowLeft");

// arrowRight.addEventListener("click", function () {
//     document.getElementById("first4").style.display = "none";
//     document.getElementById("last4").style.display = "flex";
//     arrowLeft.classList.add("visible");
//     arrowLeft.classList.remove("invisible");
//     arrowRight.classList.add("invisible");
//     arrowRight.classList.remove("visible");
// });

// arrowLeft.addEventListener("click", function () {
//     document.getElementById("first4").style.display = "flex";
//     document.getElementById("last4").style.display = "none";
//     arrowLeft.classList.remove("visible");
//     arrowLeft.classList.add("invisible");
//     arrowRight.classList.remove("invisible");
//     arrowRight.classList.add("visible");
// });


// // search

// document.querySelector(".fa-magnifying-glass").addEventListener("click", function(){
//     console.log(document.getElementById("search").value);
// })

// document.querySelector("#search").addEventListener("keydown", function(e){
//     if(e.key === "Enter") {
//         console.log(document.getElementById("search").value)
//     }
// })