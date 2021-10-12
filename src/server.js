import express from "express";
const app = express();
const PORT = 4000;

app.get("/", () => console.log("somebody is trying to go home!"))

const handelListening = () => console.log(`server listening on port https://localhost:${PORT}`);

app.listen(PORT, handelListening);