const express = require('express');
const ccController = require("../controllers/ccController");

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user
  });
});

router.post('/updateMerchant/', function(req, res){
  res.status(200).json({
    message: "You are hitting the correct place"
  })
  //code to ccController here
});

module.exports = router;
