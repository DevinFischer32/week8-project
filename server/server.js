const express = require("express");
const path = require("path");

const app = express();

// Endpoint for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

//Endpoint for CSS
app.use("/logo", express.static(path.join(__dirname, "../client/Logo")));
app.use("/favicon", express.static(path.join(__dirname, "../favicon.ico")));
app.use("/css", express.static(path.join(__dirname, "../client/style.css")));

app.use("/js", express.static(path.join(__dirname, "../client/index.js")));

// const port = huriku port if it doesn't exisit then port will be 4005
const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Transcribing on port ${port}`);
});
