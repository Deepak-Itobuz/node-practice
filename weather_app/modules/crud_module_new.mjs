import * as fs from 'fs';
import { add, update, deleteObj, read } from './crud_module.mjs'; //we can use these functions to modify the database

export default function getFileName(){
  return "database.txt";
  //You can change filename(database name) here
}

try {
  // add("zamia", "31", "51", "warm");
  // deleteObj("zamia");
  // update("zamia", "35", "56", "clear");
  // read("zamia");
}
catch (err) {
  console.log(err);
}

