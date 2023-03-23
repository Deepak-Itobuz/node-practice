import * as fs from "fs";
import path from 'path'
import { fileURLToPath } from 'node:url';
import getFileName from "./crud_module_new.mjs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

let filename = getFileName();
let format = 'utf8';

function readDb(filename, format) {
  const data = fs.readFileSync(path.join(__dirname, filename), format);
  let weatherData = JSON.parse(data);
  return weatherData;
}

function write(filename, weatherData) {
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(weatherData), function (err, weatherData) {
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

// add("zamia", 30, 72, "mist"); to add weather details of a location
export function add(loc, tempC, tempF, text) {
  let data = readDb(filename, format);
  if (
    !data.find(
      (item) => item.location.toLowerCase() === loc.toLowerCase()
    )
  ) {
    obj.location = loc;
    obj.tempC = tempC;
    obj.tempF = tempF;
    obj.condition.text = text;
    data.push(obj);
    write(filename, data)
  } else {
    console.log("location already present");
  }

}
// console.log(read("singapore"))  to use read function
export function read(loc) {
  let data = readDb(filename, format);
  let objMain = data.find(
    (item) => item.location.toLowerCase() === loc.toLowerCase()
  );
  return objMain;
}

export function update(loc, tempC, tempF, text) {
  let data = readDb(filename, format);
  let objMain = data.find(
    (item) => item.location.toLowerCase() === loc.toLowerCase()
  );
  if (
    data.find((item) => item.location.toLowerCase() === loc.toLowerCase())
  ) {
    objMain.location = loc;
    objMain.tempC = tempC;
    objMain.tempF = tempF;
    objMain.condition.text = text;
    write(filename, data)
  } else {
    console.log("location not found!");
  }
}
// update("kolkata", "74", 70, "none"); use this syntax to update details in the DB

export function deleteObj(loc) {
  let data = readDb(filename, format);
  let objMain = data.findIndex(
    (item) => item.location.toLowerCase() === loc.toLowerCase()
  );

  if (objMain != -1) {
    data.splice(objMain, 1);
    write(filename, data)
  }
  else {
    console.log("not found");
  }
}
// deleteObj("Kolkata"); use this syntax to delete a location details



