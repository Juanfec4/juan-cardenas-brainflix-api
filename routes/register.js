import express from "express";
import registerController from "../controllers/register.js";

const router = express.Router();

router.get("/", (req, res) => {
  return registerController.getKey(req, res);
});

export default router;
