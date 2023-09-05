import { randomBytes, randomUUID } from "crypto";
import jsonService from "./jsonService.js";

const PATH = "../data/keys.json";
const KEYS = jsonService.loadJSON(PATH);

//Creates a new API KEY
const generateKey = (size = 32, format = "base64") => {
  const buffer = randomBytes(size);
  return [buffer.toString(format), randomUUID()];
};

//Adds a key to the json file
const storeKey = (id, key) => {
  const obj = { id, key };
  KEYS.push(obj);
  jsonService.writeJSON(PATH, KEYS);
};

//checks if KEY exists within the json file
const validateKey = (key) => {
  const matches = KEYS.filter((obj) => {
    return obj.key === key;
  });
  if (matches.length) {
    return true;
  }
  return false;
};

export default { generateKey, storeKey, validateKey };
