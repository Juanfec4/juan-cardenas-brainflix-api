import express from "express";
import authService from "../utils/authService.js";

const middleware = new express.Router();

//Check if API key is present and valid
middleware.use((req, res, next) => {
  if (req.path == "/register") return next();

  let API_KEY = null;

  //If api key present, check it
  if (req?.headers?.["x-api-key"]) {
    API_KEY = req.headers["x-api-key"];
  }

  //If no api key or api key is invalid, return error
  if (!API_KEY || !authService.validateKey(API_KEY)) {
    res.status(401).json({
      error: `API key is invalid, please visit /register to generate a key. USAGE => headers : {'x-api-key': 'key'}`,
    });
  } else {
    return next();
  }
});

export default middleware;
