const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

let items = [];
let workItems = [];

app.use(express.static("css"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs")

const check = (element, list) => {
    for (item of list) {
        if (item === element)
            return true;
    }
    return false;
}

app.get("/", (req, res) => {
    res.render("list", { listTitle: date.getDate(), items: items });
})

app.post("/", (req, res) => {
    let item = req.body.newTask;
    if (item != "") {
        if (req.body.list === "Work" && !check(item, workItems)) {
        workItems.push(item);
            res.redirect("/work");
        }
        else if (req.body.list === "Work" && check(item, workItems)) {
            res.redirect("/work");
        }
        else if (!check(item, items)) {
            items.push(item);
            res.redirect("/");
        } else {
            res.redirect("/")
        }
    }
})

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work", items: workItems });
})

app.post("/work", (req, res) => {
    let item = req.body.newTask;
    if (item != "" && !check(item, workItems)) {
        workItems.push(item);
    }
    res.redirect("/work");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.listen(3000, () => {
    console.log("server running on port 3000");
})

