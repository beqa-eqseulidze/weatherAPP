import {elements} from "./htmlElemets.js" 


// PASS Seconds(წამები) NUMBER AS AN ARGUMENT 
// AND RETURNS TWO VALUE HOURS AS A STRING LIKE THIS "05:15" 
//AND ALSO RETURNS AS NUMBER LIKE THIS 515:

export const getHour=function(secunds){
    const d = new Date(secunds*1000);
    let hour= d.toString().split(' ')[4].split(':').splice(0,2).join(':')
    return {
        asNumber:Number(hour.split(':').join('')),
        asString:hour
    }
    }


// convert seconds since 01-01-1970 T 00:00:00 to date:
export const getDate=function(seconds){
    const d=new Date(seconds*1000);
    const date=d.getDate();
    return date

}
// convert seconds since 01-01-1970 T 00:00:00 to weekday:

export const getWeekDay=function(secunds){
    const weekday = ["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]
    const d = new Date(secunds*1000);
    return weekday[d.getDay()]
}


//


// FUNCTION CREATES LIST ITEMS FOR FIVE DAY'S DATA  RENDERING
// const createListElement=function(x,el,date){
//     let li=document.createElement('li');
//     li.classList.add(`date${x}`);
//     html.nextDays.appendChild(li);        
//     let spanDate=document.createElement('span');
//     document.querySelector(`.date${x}`).appendChild(spanDate);
//     spanDate.innerText=`${date} ის ამინდი: `;
//    let spanTemp=document.createElement('span');
//    spanTemp.innerHTML=`${Math.round(el.main.temp)}<sup>o</sup>;`
//    document.querySelector(`.date${x}`).appendChild(spanTemp);

// }

//render html for times
//  const renderHtmlForHours=function(arr){
//    let times='<span> საათი წუთი : </span>'
//    for(let i=1;i<24; i+=3){
//     times+=`<span>${i}:00  </span>`
//    }
//     html.nextDays.innerHTML+=`<li>${times}</li>`;
//  }
// export const renderFiveDaysdata=function(arr,currentDate){
//     renderHtmlForHours(arr)
//     let x=0;
//     let prevDate=currentDate-1;
//     let date    
//     arr.forEach(el=>{     
//      date=getDate(el.dt)
//      if(date==prevDate+1){
//        x+=1
//        createListElement(x,el,date)    
//        prevDate=date;

//     }else if(date==prevDate){
//         document.querySelector(`.date${x}`).innerHTML+=`<span>${Math.round(el.main.temp)} <sup>o</sup>;</span>`
//      }else if(date==1 && date!=prevDate){
//          x+=1
//         createListElement(x,el,date)
//         prevDate=date;
//     }

//     })
// }

        

