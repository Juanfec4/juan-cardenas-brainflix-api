import express from "express";
import morgan from "morgan";

const middleware = new express.Router();

//Custom tokens
morgan.token("json", (req) => {
  if (req) {
    return `JSON: ${JSON.stringify(req.body)}`;
  }
  return " ";
});

middleware.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.json(req),
    ].join(" ");
  })
);

export default middleware;
