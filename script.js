const express = require("express");
const { generatePerson } = require("./faker");

const app = express();

// set EJS as view engine
app.set("view engine", "ejs");

app.get("/user", (req, res) => {
  const person = generatePerson();
  res.render("index", { person });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
