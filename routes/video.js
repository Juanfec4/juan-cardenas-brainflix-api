import express from "express";
import videoController from "../controllers/video.js";

const router = express.Router();

//Get videos
router.get("/", (req, res) => {
  return videoController.getVideos(req, res);
});

//get video
router.get("/:id", (req, res) => {
  return videoController.getVideo(req, res);
});

//Upload video
router.post("/", (req, res) => {
  return videoController.postVideo(req, res);
});

export default router;
