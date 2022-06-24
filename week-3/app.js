const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(cookieParser());

//request handling
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  const { number } = req.query;
  if (number === "" || number === undefined) {
    res.send("Lack of Parameter");
  } else if (isNaN(number)) {
    res.send("Wrong Parameter");
  } else if (number < 0) {
    res.send("Parameter is negative.");
  } else {
    const cal = function () {
      let result = 0;
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
  const { name } = req.cookies;
  if (name === "") {
    res.sendFile(__dirname + "/public/cookie.html");
  } else if (name !== undefined) {
    res.send(name + ", Welcome!");
  } else {
    res.redirect("/cookie.html");
  }
});

app.get("/trackName", (req, res) => {
  const { name } = req.query;
  res.cookie("name", name);
  res.redirect("/myName");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000.");
});
