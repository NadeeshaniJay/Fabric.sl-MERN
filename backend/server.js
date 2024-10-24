const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const fabricRouter = require("./routes/fabrics");
const authRouter = require("./routes/users");

const PORT = process.env.PORT || 8081;
const URL = process.env.MONGODB_URL;

app.use(cors(
    {
        origin: ["https://fabric-sl-mern.vercel.app"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
));
app.use(bodyParser.json());

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "MongoDB Connection Error:"));
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
});

app.get("/", (req, res) => {
    res.send("Welcome to Fabric Store API");
});

app.use("/fabric",fabricRouter);
app.use("/users",authRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});