import { weatherData } from "./weather-db.mjs";

//console.log(weatherData);



const loc = 'peru';
const result = weatherData.find((item)=> item.location.toLowerCase() == loc.toLowerCase());
    // 

    const obj = {
        location: '',
        tempC: '',
        tempF: '',
        condition: {
            text: '',
            feelsLikeC: '',
            feelsLikeF: ''
        }
        
    }


    
add('peru',30 ,72,"mist");

function add(loc, tempC , tempF ,text){
    if (!weatherData.find((item)=> item.location.toLowerCase() == loc.toLowerCase())) {
    obj.location = loc;
    obj.tempC = tempC;
    obj.tempF = tempF;
    obj.condition.text = text;
    weatherData.push(obj);
    }
    else{
        console.log("location already present");
    }
};

// console.log(obj);

console.log(weatherData);
// read("singapore")
function read(loc){
   let objmain = weatherData.find((item)=> item.location.toLowerCase() == loc.toLowerCase());
   if(!objmain)
    console.log( objmain);
    else
    console.log("not found");
};

function getData() {
    const cities = [];
    for (let i = 0; i < weatherData.length; i++) {
        cities.push(weatherData[i].location)
    }
    console.log(cities);
}

function update(loc, tempC , tempF ,text){
   let objmain=weatherData.find((item)=> item.location.toLowerCase() == loc.toLowerCase());
    if (weatherData.find((item)=> item.location.toLowerCase() == loc.toLowerCase())) {
        objmain.location = loc;
        objmain.tempC = tempC;
        objmain.tempF = tempF;
        objmain.condition.text = text;
    }
    else{
        console.log("location not found!");
    }
};
update('kolkata','0',0,'none')

function deleteObj(loc){
    let objmain = weatherData.findIndex((item)=> item.location.toLowerCase() == loc.toLowerCase());
    if(objmain)
    weatherData.splice(objmain,1);
    else
    console.log("not found");
};

deleteObj("tokyo")

console.log(weatherData);