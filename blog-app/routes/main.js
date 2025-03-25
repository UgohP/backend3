const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  const locals = {
    title: 'Nodejs Blog App',
    description: 'Nodejs Blog App built with Nodejs, Expressjs and MongoDB'
  }
  res.render('index', locals);
});

router.get("/about", (req, res) => {
    res.render("about");
  });

module.exports = router