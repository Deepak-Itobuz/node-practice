// import { weatherData } from "./weather-db.mjs";
import * as fs from 'fs';
import {add , update, deleteObj , read} from './crud_module.mjs'
import { weatherData } from './weather-db.mjs';

// let weatherData;



try{
const data= fs.readFileSync('database.txt', 'utf8');
 let weatherData =  JSON.parse(data);
 console.log(weatherData);
 add(weatherData, "cuttack","30","52","warm");
// deleteObj(weatherData ,"cuttack");

// update(weatherData,"kolkata", "54", "72", "none");
// read(weatherData,"Singapore");

 console.log(weatherData);
 fs.writeFile('database.txt', JSON.stringify(weatherData), function (err, data) {
  if (err) {
     return console.error(err);
  }
  // console.log(data.toString());
});

}
catch(err) {
  console.log(err);
}

