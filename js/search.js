
// import { getWeatherData } from "./getWeatherData.js";
// import {html} from "./htmlElements.js"
// import {getHour,renderFiveDaysdata,getDate} from "./helper.js"

// search data using city name  
export const search=function(){
    html.searchBtn.addEventListener('click',async (e)=>{
        try{
            e.preventDefault();
            let value=html.searchInput.value;  // ინფუთზე ვალიდაცია არის გასაკეთებელი 
            html.searchInput.value='';
            console.log(value)
           let weather=await getWeatherData('',value);
           let fiveDaysdata=weather[1].value.data.list;
           let currentDate=getDate(weather[1].value.data.list[0].dt); 
           console.log(`current Date : ${currentDate}`)
           //console.log(cityNames[0])
           html.location.innerHTML=weather[0].value.data.name 
           html.curentTemp.innerHTML=Math.round(weather[0].value.data.main.temp);
           html.sunrise.innerHTML=getHour(weather[0].value.data.sys.sunrise);
           html.sunset.innerHTML=getHour(weather[0].value.data.sys.sunset)
           console.log(fiveDaysdata)
           html.nextDays.innerHTML=''
           renderFiveDaysdata(fiveDaysdata,currentDate)
        }
        catch(err){
            //alert(err.message);
            alert('ეგეთი ქალაქი არ მოიძებნა ძმაო')
        }

          
    })
}


