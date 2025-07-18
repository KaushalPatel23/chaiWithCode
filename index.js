require("dotenv").config();
const express = require("express"); // import the express
const app = express(); //import express

const PORT = 3000; // port are present in memory

app.get("/", (req, res) => {
  // listen at '/' ...... pass the anather function
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  // listen at '/twitter' ...... pass the anather function
  res.send("kaushal23");
});
app.get("/login", (req, res) => {
  res.send("<h1>my first server</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
