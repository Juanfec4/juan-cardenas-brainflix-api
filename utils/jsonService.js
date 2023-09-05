import fs from "fs";

//Open up and load json file.
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

//Add data to json file.
const writeJSON = (path, data) =>
  fs.writeFileSync(new URL(path, import.meta.url), JSON.stringify(data));

export default { loadJSON, writeJSON };
