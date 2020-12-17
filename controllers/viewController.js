const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/legislation", (req, res) => {
  res.render("legislation");
});

router.get("/account", (req, res) => {
  res.render("account");
});

router.get("/create", (req, res) => {
  console.log("inside server");
  res.render("create");
});

module.exports = router;
