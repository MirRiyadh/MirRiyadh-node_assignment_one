const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const users = require("./data/data.json");

app.get("/user/all", (req, res) => {
  res.send(single);
});

app.get("/user/random", (req, res) => {
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }

  const result = getRandomItem(users);
  res.json(result);
  res.send(users);
});

app.post("/user/save", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.send(users);
});

app.patch("/user/update", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.send(users);
});

app.patch("/user/bulk-update", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.send(users);
});

app.delete("/user/delete", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.send(users);
});

app.get("/", (req, res) => {
  res.send("Vercel Api running");
});

app.listen(port, () => {
  console.log("project server port 5000");
});
