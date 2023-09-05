import jsonService from "../utils/jsonService.js";
import { randomUUID } from "crypto";

//Mock data for post requests
const defaultVideoData = {
  views: "1,001,023",
  likes: "110,985",
  duration: "5:01",
};

//
const DB_PATH = "../data/videos.json";

//Get videos
const getVideos = (req, res) => {
  const data = jsonService.loadJSON("../data/videos.json");
  if (data) {
    let videos = data.map((video) => {
      const { id, title, channel, image } = video;
      return { id, title, channel, image };
    });
    return res.status(200).json(videos);
  } else {
    return res.status(500).json({ message: "Server error, no videos found." });
  }
};

//Get video
const getVideo = (req, res) => {
  let { id } = req.params;
  const data = jsonService.loadJSON("../data/videos.json");
  if (data && id) {
    let [video] = data.filter((video) => {
      return video.id === id;
    });
    if (video) {
      return res.status(200).json(video);
    } else {
      return res.status(400).json({ message: `No video found for id: ${id}.` });
    }
  }
};

//Post video
const postVideo = (req, res) => {
  const data = jsonService.loadJSON(DB_PATH);
  const { title, channel, image, description } = req.body;
  const newVideo = {
    id: randomUUID(),
    title,
    channel,
    image,
    description,
    ...defaultVideoData,
    timestamp: new Date(),
  };

  //If some data is missing return an error message
  for (let key in newVideo) {
    if (!newVideo[key]) {
      return res.status(400).json({ message: `Request body missing ${key}` });
    }
  }
  //
  data.push(newVideo);
  jsonService.writeJSON(DB_PATH, data);
  return res.status(201).json(newVideo);
};
export default { getVideos, getVideo, postVideo };
