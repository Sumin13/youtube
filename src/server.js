import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`someone is going to : ${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>not allowed</h1>");
  }
  console.log("allowed, you may continue");
  next();
};
const handleHome = (req, res, next) => {
  return res.send("i love middlewares");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`your server http://localhost:${PORT}`);

app.listen(PORT, handleListening);
