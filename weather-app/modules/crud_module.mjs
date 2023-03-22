import * as fs from "fs";
import path from 'path'
import {fileURLToPath} from 'node:url'
import { weatherData } from "./weather-db.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

// const loc = "peru";
// const result = weatherData.find(
//   (item) => item.location.toLowerCase() == loc.toLowerCase()
// );
let filename ='database.txt';
let format='utf8';

function readDb(filename , format){
    const data= fs.readFileSync(path.join(__dirname,filename), format);
     let weatherData =  JSON.parse(data);
    return weatherData;
}

function write(filename , weatherData){
  fs.writeFileSync(path.join(__dirname,filename), JSON.stringify(weatherData), function (err, weatherData) {
    if (err) {
       return console.error(err);
    }
  });
}

const obj = {
  location: "",
  tempC: "",
  tempF: "",
  condition: {
    text: "",
    feelsLikeC: "",
    feelsLikeF: "",
  },
};

// add("kolkata", 30, 72, "mist");

export function add(loc, tempC, tempF, text) {
  let data= readDb(filename, format);
  if (
    !data.find(
      (item) => item.location.toLowerCase() == loc.toLowerCase()
    )
  ) {
    obj.location = loc;
    obj.tempC = tempC;
    obj.tempF = tempF;
    obj.condition.text = text;
    data.push(obj);
    write(filename,data)
  } else {
    console.log("location already present");
  }

}
// console.log(obj);

// console.log(weatherData);
// read("singapore")
export function read(loc) {
  let data= readDb(filename, format);
  let objMain = data.find(
    (item) => item.location.toLowerCase() == loc.toLowerCase()
  );
  return objMain;
  // if (objMain) 
  // console.log(objMain);
  // else 
  // console.log("not found");
}

export function getData() {
  const cities = [];
  for (let i = 0; i < weatherData.length; i++) {
    cities.push(weatherData[i].location);
  }
  console.log(cities);
}

export function update(loc, tempC, tempF, text) {
  let data= readDb(filename, format);
  let objMain = data.find(
    (item) => item.location.toLowerCase() == loc.toLowerCase()
  );
  if (
    data.find((item) => item.location.toLowerCase() == loc.toLowerCase())
  ) {
    objMain.location = loc;
    objMain.tempC = tempC;
    objMain.tempF = tempF;
    objMain.condition.text = text;
    write(filename,data)
  } else {
    console.log("location not found!");
  }
}
// update("kolkata", "74", 70, "none");

export function deleteObj(loc) {
  let data= readDb(filename, format);
  let objMain = data.findIndex(
    (item) => item.location.toLowerCase() == loc.toLowerCase()
  );
  // console.log(objMain);
  
  if (objMain!=-1)
  { 
    data.splice(objMain, 1);
    write(filename,data)
  }
  else 
  {
    console.log("not found");
  }
}

// deleteObj("Kolkata");

// console.log(weatherData);


