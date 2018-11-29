
/**
 * Converts the definitions in model-schema.json to a file of JSDoc custom types.
 *
 * This file can be imported in other projects to get Intellisense for
 * the NIEM objects defined by this project.
 */

const fs = require("fs");
const jsdoc = require("json-schema-to-jsdoc");
const schema = require("../schemas/model-schema.json");

let jsDocs = "\n";
let str = "";

for( let key in schema.definitions ) {

  // Get the JSDoc representation of the schema definition
  str = jsdoc(schema.definitions[key]);

  // Format the name for the JSDoc @typedef parameter (e.g., ModelType => NIEMModel)
  let name = "NIEM" + key;

  // Update the JSDoc to replace the empty @name parameter with @typedef
  str = str.replace("@name", "@typedef {Object} " + name);

  // Update the JSDoc manually to use the correct type for related objects
  str = str.replace("{array} [versions]", "{NIEMVersion[]} [versions]");

  jsDocs += str + "\n\n";
}

jsDocs += `

/** @type {NIEMModelType} */
let NIEMModel;

/** @type {NIEMVersionType} */
let NIEMVersion;

module.exports = {
  NIEMModel,
  NIEMVersion
}
`;

fs.writeFileSync("jsdocs/index.js", jsDocs);
console.log("Updated jsdocs");
