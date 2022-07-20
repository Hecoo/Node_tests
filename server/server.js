let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.send({
    error: "Page Not Found",
    name: "Node js v123",
  });
});

app.get("/users", (req, res) => {
  res.send([
    { name: "Mohamed", age: 24 },
    { name: "Marwan", age: 27 },
    { name: "abdualla", age: 29 },
  ]);
});

app.listen(2000, () => {
  console.log(`App is listening on port 3000`);
});

module.exports.app = app;
