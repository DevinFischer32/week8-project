const express = require("express");
const path = require("path");

const app = express();

// Endpoint for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

//Endpoint for CSS
app.use("/css", express.static(path.join(__dirname, "../style.css")))



// const port = huriku port if it doesn't exisit then port will be 4005
const port = process.env.PORT || 4005;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})