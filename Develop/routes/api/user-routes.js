const router = require("express").Router();
const { response } = require("express");
const { User } = require("../../models");

// get all products
router.get("/", (req, res) => {

  User.find({
   
  }).then(data => {
    res.json(data)
  })
});

// get one product
router.get("/:id", (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  // Product.findOne({
  //   where: { id: req.params.id },
  //   include: [{ model: Category }, { model: Tag, as: "tagged_products" }],
  // }).then((data) => {
  //   res.json(data);
  // });
});

// create new product
router.post("/", (req, res) => {
  User.create(req.body).then((user) => {
    res.json(user);
  }).catch((error) => {
    res.status(404).json(error);
  })

});


router.put("/", (req, res) => {
  User.updateOne({ username: req.body.username }, { email: req.body.email }).then((user) => {
    res.json(user);
  }).catch((error) => {
    res.status(404).json(error);
  })

});

router.delete("/", (req, res) => {
  User.deleteOne({ username: req.body.username }).then((user) => {
    res.json(user);
  }).catch((error) => {
    res.status(404).json(error);
  })

});

module.exports = router;
