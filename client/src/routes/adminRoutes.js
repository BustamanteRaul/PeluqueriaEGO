const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.render("admin/dashboard");
});

router.get("/editarTurnos", (req, res) => {
  res.render("admin/editarTurnos");
});

module.exports = router;