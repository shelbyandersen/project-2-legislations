const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/api/bill", async (req, res) => {
  try {
    const bill = await db.Bill.create(req.body);
    res.json(bill);
  } catch (err) {
    res.send(err);
  }
});

router.get("/api/bill/:id", async (req, res) => {
  try {
    const bill = await db.Bill.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(bill);
  } catch (err) {
    res.send(err);
  }
});

router.put("/api/bill/:id", async (req, res) => {
  try {
    const billsUpdated = await db.Bill.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(billsUpdated);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
