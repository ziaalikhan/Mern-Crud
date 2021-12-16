const express = require("express");
const route = express.Router();
const User = require("../models/user-schema");

// post APi //
route.post("/send", async (req, res) => {
  const response = await new User({
    name: req.body.name,
    userName: req.body.userName,
    email: req.body.email,
    mobile: req.body.mobile,
    country: req.body.country,
  }).save();
  res.status(200).send(response);
});

// Get APi //
route.get("/get", async (req, res) => {
  const response = await User.find({});
  res.status(200).send(response);
});

// Update APi //
route.post("/update", async (req, res) => {
  const filter = { _id: req.body._id };
  const update = {
    name: req.body.name,
    userName: req.body.userName,
    email: req.body.email,
    mobile: req.body.mobile,
    country: req.body.country,
  };
  let response = await User.findByIdAndUpdate(filter, update);
  res.status(200).send(req.body);
});

// Delete Api //
route.post("/delete", async (req, res) => {
  const filter = { _id: req.body._id };
  const response = await User.deleteOne(filter);
  res.status(200).send(req.body);
});

module.exports = route;
