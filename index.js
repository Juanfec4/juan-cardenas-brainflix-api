import "dotenv/config";
import express from "express";
import ip from "ip";

//Middleware
import CORS from "./middleware/cors.js";
import logger from "./middleware/morgan.js";
import auth from "./middleware/auth.js";

//Routers
import registerRouter from "./routes/register.js";
import videoRouter from "./routes/video.js";

const app = express();
const PORT = process.env.PORT;

app.use(CORS);
app.use(express.json());
app.use("/", logger);

// Auth is disabled for this sprint, although I did implement it.
// app.use("/", auth);

//Static images
app.use(express.static("public"));

//Routers
app.use("/register", registerRouter);
app.use("/videos", videoRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on http://${ip.address()}:${PORT}`);
});
