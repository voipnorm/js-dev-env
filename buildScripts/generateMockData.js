/* This Script generate mock data for local development
this way you dont have to point to an actual API
but you can enjoy realistic bit randomized data and rapid page loads due to local
data.
 */

/*eslint-disable no-console*/

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err){
  if(err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock Data Generated...."))
  }
});
