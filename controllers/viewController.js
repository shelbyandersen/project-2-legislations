const express = require("express");
const router = express.Router();
const db = require("../models");
const axios = require("axios");
const API_KEY = "1746e141194bb3c5a7187530792f8912";
const STATE = "GA";

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/legislation", (req, res) => {
  axios({
    method: 'get',
    url: `https://api.legiscan.com/?key=${API_KEY}&op=search&state=${STATE}`,
  })
    .then(function (response) {
  res.render("legislation", {
    bills: Object.values(response.data.searchresult)
  });
    });
});

router.get("/account", (req, res) => {
  res.render("account");
});

router.get("/create", (req, res) => {
  console.log("inside server");
  res.render("create");
});

module.exports = router;
