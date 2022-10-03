
// fatch weather data from openweathermap.org API
//first parameter is wanted coords[latitude,longitude] 
// if we want to search data by the city name we must pass
//first parameter '' and second parameter wanted city name 
//if firs parameter will '' and second parameta is omitted
// this function will return Tbilisi's data 

export  const getWeatherData=async(coords,city='Tbilisi')=>{

    const weatherKey=`2c3bf07437d44f8eba9978441edb91a5`
    try{
        if(coords==''){
            //fetch data paralel from two API 
            let weatherData=await Promise.allSettled([
                //get curent weather data        
                await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=metric`) ,
               //get next five days weather data
                await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherKey}&units=metric`)
               ])    
               //console.log(weatherData)
               let [res1,res2]=weatherData
               return [await res1.value.json(),await res2.value.json()]
            } 
            else if(coords!=''){
                //fetch data paralel from two API 
                let weatherData=await Promise.allSettled([
                    //get curent weather data                            
                    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${weatherKey}&units=metric`) ,
                   //get next five days weather data
                    await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0]}&lon=${coords[1]}&appid=${weatherKey}&units=metric`)
                   ])    
                   //console.log(weatherData)
                   let [res1,res2]=weatherData
                    return [await res1.value.json(),await res2.value.json()]
                }         
        }
     catch(err){
         console.error(err)
     }
 }
           
     
            

