const express = require("express");
const {fetchERC20TokenAndBalance} = require("../../controller/ERC20/index");

const router = express.Router();

router.get("/tokenAndBalance", fetchERC20TokenAndBalance);

module.exports = router;