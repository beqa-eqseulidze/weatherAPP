
// get user's current coordintas using geolaocation

export const getLocationCoords= function(){
    if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){
        sessionStorage.setItem('lat',position.coords.latitude);
        sessionStorage.setItem('lon',position.coords.longitude); 
    },
    function(){alert('Turn On Geolocation Servis In Your Browser')})                     
     }
    else{
        alert( "Error : This Browser does not support geolocation services")
    }
}     

    
// ====this function converts latitude and longitude to city name using remote server 
// end retuns english and georgien name of this sity as an arry=== :

// export const getCityName=async (coords)=>{
//      try{
//         //435301040623981301580x93970//extra key // 344583102653020462659x65192
//         const geoKey='344583102653020462659x65192'
//         let res=await axios.get(`https://geocode.xyz/${coords[0]},${coords[1]}?geoit=json&auth=${geoKey}`)
//         console.log(res)
//         if(res.data.error){
//             throw new Error(res.data.error.description) //როცა კოორდინატს ვერ იპოვის მოსაფიქრებელია 
//         } 
//         if(res.data.country=='Georgia'){
//             let cityNameGe=res.data.osmtags.name;
//             let cityNameEn=res.data.osmtags.name_en          
//             return [cityNameGe,cityNameEn];
//         } else{
//             let cityNameEn=res.data.city
//             return [cityNameEn]
//         }
//     }
//     catch(err){
//         console.error(err)                            // ერორ მესიჯის ტექსტი და სად უნდა ჩაჯდეს HTML-ში
//         if(err.message) console.error(err.message)  // მოსაფიქრებელია სად გამოჩნდება ერორ მესიჯი
//         else console.error(err) 
//         return ''                    
        
//     }

// }





