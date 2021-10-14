import express from "express";
import morgan from "morgan";
import globalRouter from "../routers/globalRouter";
import userRouter from "../routers/userRouter";
import videoRouter from "../routers/videoRouter";


const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

app.get("/", () => console.log("somebody is trying to go home!"));

const handelListening = () => console.log(`server listening on port https://localhost:${PORT}`);

app.listen(PORT, handelListening);