import * as fs from 'fs';
import { add, update, deleteObj, read } from './crud_module.mjs'; //we can use these functions to modify the database
//You can change filename(database name) in crud_module.mjs

try {
  // add("zamia", "31", "51", "warm");
  // deleteObj("zamia");
  // update("zamia", "35", "56", "clear");
  // read("zamia");
}
catch (err) {
  console.log(err);
}

