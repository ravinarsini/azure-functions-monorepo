import express, {Express} from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello Ravi!");
});

app.listen(8080);
