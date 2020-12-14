const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/api/interaction", async (req, res) => {
  try {
    const interaction = await db.Interaction.create(req.body);
    res.json(interaction);
  } catch (err) {
    res.send(err);
  }
});

router.get("/api/interaction/:userId/:billId", async (req, res) => {
  try {
    const interaction = await db.Interaction.findOne({
      where: { userId: req.params.userId, billId: req.params.billId},
    });
    res.json(interaction);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
