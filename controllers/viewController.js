const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/account", (req, res) => {
  res.render("account");
});

router.get("/create", (req, res) => {
  console.log("inside server");
  res.render("create");
});

module.exports = router;
