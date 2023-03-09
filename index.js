const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

// const categories = require("./data/categories.json");
// const courses = require("./data/courses.json");

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id === "01") {
    res.send(courses);
  }
  //
  else {
    const courseList = courses.filter((n) => n.category_id === id);
    res.send(courseList);
  }
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const singleCourse = courses.find((n) => n.id === id);
  res.send(singleCourse);
});

app.get("/", (req, res) => {
  res.send("Vercel Api running");
});

app.listen(port, () => {
  console.log("project server port 5000");
});
