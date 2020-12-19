const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("../config/passport");

router.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

router.post("/api/signup", function(req, res) {
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  })
    .then(function() {
      res.redirect(307, "/api/login");
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/api/user", async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (err) {
    res.send(err);
  }
});

router.get("/api/user/:username", passport.authenticate("local"), async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: {
        username: req.params.username,
      },
    });
    res.render("account", user.dataValues);
  } catch (err) {
    res.send(err);
  }
});

router.put("/api/user/:username", async (req, res) => {
  try {
    const usersUpdated = await db.User.update(req.body, {
      where: { username: req.params.username },
    });
    res.json(usersUpdated);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/api/user/:username", async (req, res) => {
  try {
    const usersDeleted = await db.User.destroy({
      where: { username: req.params.username },
    });
    res.json(usersDeleted);
  } catch (err) {
    res.send(err);
  }
});


module.exports = router;
