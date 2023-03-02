function getWeatherData(){
    const weatherData= [
        {
            location: "Kolkata",
            lat : '22',
            lng: '12',
            condition:{
                feelslike_c:29.8,
                feelslike_f:85.6,
                gust_kph:16.2
                
                

            }
        }
    ]


    // const result = weatherData[0].location;
    const result = weatherData.find((item)=> item.location = "kolkata");
    console.log( result);
    return result;
}
getWeatherData();
