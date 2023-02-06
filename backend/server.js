const express = require("express");
const dotenv = require("dotenv");

const users = require("./routes/users");
const messagesPrivate = require("./routes/PrivateMessages");
const messagesGroup = require("./routes/GroupMessages");

const app = express();
dotenv.config();

app.get("/", (req, res, next) => {
  res.send("API Status: Running");
});

app.get("/api/users", (req, res, next) => {
  res.send(users);
});

app.get("/api/PrivateMessages", (req, res, next) => {
  res.send(messagesPrivate);
});

app.get("api/GroupMessages", (req, res, next) => {
  res.send(messagesGroup);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
