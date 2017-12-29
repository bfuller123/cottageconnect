const router = require("express").Router();
const cottageRoutes = require("./cottages");

// Cottage routes
router.use("/cottages", cottageRoutes);

module.exports = router;
