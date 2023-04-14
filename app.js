const express = require("express");

const bodyParser = require("body-parser");

const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {

    fs.readFile("username.txt", (err, data) => {

        if (err) {
            console.log(err);

        } else {
            console.log(data.toString());


        
        }
    });
  res.send(
    `<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/product" method="POST">
        <input id="username" type="text" name="title">
        <button type="submit">Send</button>
      </form>`
  
  );
});

app.post("/", (req, res) => {
  console.log(req.body.username);
  console.log("req.body.message");
  fs.writeFile(
    "username.txt",
    `${req.body.username}: ${req.body.message}`,{flag: 'a'},
    (err) => (err ? console.log(err) : res.redirect("/"))
  );
});

       




app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

