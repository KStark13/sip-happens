const router = require("express").Router();
const winesRoutes = require("./wines");

// wine routes
router.use("/wines", winesRoutes);

module.exports = router;
