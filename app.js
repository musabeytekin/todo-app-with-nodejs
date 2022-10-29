const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

let items = [];
let workItems = [];

app.use(express.static("css"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("list", { listTitle: date(), items: items });
})

app.post("/", (req, res) => {
    let item = req.body.newTask;
    if (item != "") {
        if (req.body.list === "Work") {
            workItems.push(item);
            res.redirect("/work");
        }
        else {
            items.push(item);
            res.redirect("/");
        }
    }
})

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work", items: workItems });
})

app.post("/work", (req, res) => {
    let item = req.body.newTask;
    if (item != "") {
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

