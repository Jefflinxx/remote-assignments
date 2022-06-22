const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(cookieParser());

//request handling
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/getData", (req, res) => {
  let { number } = req.query;
  if (number === "") {
    res.send("Lack of Parameter");
  } else if (isNaN(number)) {
    res.send("Wrong Parameter");
  } else if (number < 0) {
    res.send("Parameter is negative.");
  } else {
    const cal = function () {
      result = 0;
      for (let i = 1; i <= number; i++) {
        result += i;
      }
    };
    cal(number);
    res.send(
      `Thanks for sending data. Your number is ${number}. Result is ${result}. `
    );
  }
});

app.get("/myName", (req, res) => {
  let { name } = req.cookies;
  console.log(name);
  if (name === "") {
    res.sendFile(path.join(__dirname, "public/cookie.html"));
  } else if (name !== undefined) {
    res.send(name + ", Welcome!");
  } else {
    res.redirect("/cookie.html");
  }
});

app.get("/trackName", (req, res) => {
  let { name } = req.query;
  //console.log(name);
  res.cookie("name", name);
  res.redirect("/myName");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
