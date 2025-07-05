// app.js
const path = require("node:path");

const express = require('express');
const app = express();

// app.js
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

app.post("/new", (req, res) => {
  messages.push({text:req.body.messageText, user: req.body.authorText, added: new Date() });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});