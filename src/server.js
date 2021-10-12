import express from "express";
const app = express();
const PORT = 4000;

const handelListening = () => console.log(`server listening on port https://localhost:${PORT}`);

app.listen(PORT, handelListening);