import {weatherData as weatherdb} from "./weather-db.mjs"; 
import * as fs from 'fs';
// var fs=require("fs");
// const { buffer } = require("stream/consumers");
// var data = "Learn Node";
  
// Write data to file
// fs.writeFile('database.txt', JSON.stringify(weatherdb) , 'utf8',
 
//     // Callback function
//     function(err) {
//         if (err) throw err;
 
//         //  If no error
//         console.log("Data is appended to file successfully.")
// });

// fs.open('database.txt', 'r+-', function(err, fd) {
//     if (err) {
//        return console.error(err);
//     }
//     console.log("File open successfully");    
//  });

fs.readFile('database.txt','utf-8', function (err, data) {
    if (err) {
       return console.error(err);
    }
    // console.log(data.toString());
    let WeatherDatabase =   JSON.parse(data);
    console.log(WeatherDatabase);


 });