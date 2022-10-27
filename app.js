const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    var today = new Date();
    var currentDay = today.getDay();

    currentDay === 6 || currentDay === 0 ? res.sendFile(__dirname + "/weekend.html") : res.sendFile(__dirname + "/weekday.html");

})

app.listen(3000, () => {
    console.log("server running on port 3000");
})