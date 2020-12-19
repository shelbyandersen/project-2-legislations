const express = require("express");
const router = express.Router();
const db = require("../models");

const isAuthenticated = require("../config/middleware/isAuthenticated");

router.post("/api/bill", async (req, res) => {
  try {
    const bills = await db.Bill.bulkCreate(req.body.bills, {
      updateOnDuplicate: ["status"],
    });
    res.json(bills)
  } catch (err) {
    res.send(err);
  }
});

router.get("/legislation", isAuthenticated, async (req, res) => {
  try {
    const bills = await db.Bill.findAll();
    res.render("legislation", {legislation: bills});
  } catch (err) {
    res.send(err);
    alert("Log in first!");
  }
})

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
