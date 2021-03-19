const express = require("express");
const router = express.Router();
const Form = require("../models/form");
const path = require("path");

router.post("/createForm", async (req, res, next) => {
  const data = req.body;
  data.approved = false;
  data.ready = false;
  await Form.create(data);

  res.json({
    status: true,
  });
});

router.post("/sendForm", async (req, res, next) => {
  const data = req.body;
  data.approved = false;
  data.ready = true;
  await Form.update(
    {
      assignedPerson: req.body.assignedPerson,
    },
    {
      ...data,
    }
  );

  res.json({
    status: true,
  });
});
router.post("/formApproval", async (req, res, next) => {
  const form = await Form.findOne({
    assignedPerson: req.body.assignedPerson,
  });
  if (form) {
    form.approved = true;
    form.ready = true;
    await form.save();
    res.json({
      status: true,
    });
  }
});
router.post("/formDetail", async (req, res, next) => {
  const form = await Form.findOne({
    assignedPerson: req.body.assignedPerson,
  });
  res.json(form);
});

router.get("/approvedList", async (req, res, next) => {
  const form = await Form.find({
    approved: true,
    ready: true,
  });
  res.json(form);
});
router.get("/toBeApprovedList", async (req, res, next) => {
  const form = await Form.find({
    approved: false,
    ready: true,
  });
  res.json(form);
});

module.exports = router;
