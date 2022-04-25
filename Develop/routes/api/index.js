const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtsRoutes = require("./thoughts-routes");
// const tagRoutes = require('./tag-routes');

router.use("/users", userRoutes);
router.use("/thoughts", thoughtsRoutes);
// router.use('/tags', tagRoutes);

module.exports = router;
