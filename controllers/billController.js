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
    res.render("legislation", {legislation: bills, bill: bills[0]});
  } catch (err) {
    res.send(err);
  }
})

router.get("/legislation/:id", async (req, res) => {
  try {
    const bills = await db.Bill.findAll();
    const bill = await db.Bill.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.render("legislation", {legislation: bills, bill: bill.dataValues});
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
