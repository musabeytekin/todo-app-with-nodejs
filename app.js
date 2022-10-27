const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs")

const getDayName = (date) => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

app.get("/", (req, res) => {
    var today = new Date();
    res.render("list", {dayName: getDayName(today), items: items});
})

app.post("/", (req, res) => {
    var item = req.body.newTask;
    items.push(item);
    res.redirect("/")
})

app.listen(3000, () => {
    console.log("server running on port 3000");
})

