import express from "express";
import cors from "cors";

const middleware = new express.Router();

middleware.use(
  cors({
    origin: "*",
  })
);

export default middleware;
