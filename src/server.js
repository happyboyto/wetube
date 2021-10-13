import express from "express";
import morgan from "morgan";

const app = express();
const morganMiddleware = morgan("dev");
const PORT = 4000;

app.use(morganMiddleware);
app.get("/", () => console.log("somebody is trying to go home!"));

const handelListening = () => console.log(`server listening on port https://localhost:${PORT}`);

app.listen(PORT, handelListening);