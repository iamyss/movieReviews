const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  bodyParser.json({
    limit: "1024kb",
  })
);

app.get("/", function (req, res) {
  let query = req.query;
  if (query.username !== "yash" || query.password !== "iamyss") {
    res.status(400).json({
      error: "Invalid username or password!",
    });
  } else {
    res.status(200).json({
      message: "Welcome Yash!",
    });
  }
});

app.post("/", function (req, res) {
  try {
    let body = req.body;
    if (body.username !== "yash" || body.password !== "iamyss") {
      res.status(400).json({
        error: "Invalid username or password!",
      });
    } else {
      res.status(200).json({
        message: "Welcome Yash!",
      });
    }
  } catch (ex) {
    console.log(ex);
    res.status(400).json(ex);
  }
});

app.listen(3000, "localhost", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("runing on port 3000");
  }
});
//http://localhost:3000/
