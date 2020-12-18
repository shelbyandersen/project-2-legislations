const express = require("express");
const router = express.Router();
const db = require("../models");

const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/account", isAuthenticated, (req, res) => {
  res.render("account");
});

router.get("/create", (req, res) => {
  console.log("inside server");
  res.render("create");
});

module.exports = router;
