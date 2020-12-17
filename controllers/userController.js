const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/api/user", async (req, res) => {
  try {
    console.log(req.body);
    const user = await db.User.create(req.body);
    res.json(user);
  } catch (err) {
    res.send(err);
  }
});

router.get("/api/user", async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (err) {
    res.send(err);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.render("account", user.dataValues);
  } catch (err) {
    res.send(err);
  }
});

router.put("/api/user/:id", async (req, res) => {
  try {
    const usersUpdated = await db.User.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(usersUpdated);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/api/user/:id", async (req, res) => {
  try {
    const usersDeleted = await db.User.destroy({
      where: { id: req.params.id },
    });
    res.json(usersDeleted);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
