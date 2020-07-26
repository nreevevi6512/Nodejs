const express = require("express");
let app = new express();

app.get("/", function (req, res) {
    res.send("Hello BITCHES");
});

app.get("/About", function (req, res) {
    res.send("Ukinam metten");
});

let port = 1111;
app.listen(port, function () {
    console.log("Server started listening at localhost:" + port)
});