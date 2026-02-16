// const express = require("express");
import express from "express";
import {connectDB} from "./mongooseConnect.js";
// const connectDB  = require("./mongooseConnect");

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});
app.post("/add", (req, res) => {
  res.send("This is the add page.");
});
app.put("/update", (req, res) => {
  res.send("This is the update page.");
});
app.delete("/delete", (req, res) => {
  res.send("This is the delete page.");
});

app.get("/file", (req, res) => {
  try {
    res.sendFile( "C:/4thsemClass/fds_30-1/backend2-2/file.html");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
