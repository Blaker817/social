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
  User.find({
    _id: req.params.id
  }).then(data => {
    res.json(data)
  }).catch((error) => {
    res.status(404).json(error);
  })
});

// create new product
router.post("/", (req, res) => {
  User.create(req.body).then((user) => {
    res.json(user);
  }).catch((error) => {
    res.status(404).json(error);
  })

});
router.post("/:userId/friends/:friendId", (req, res) => {
  User.updateOne({ _id: req.params.userId}, {$push: { friends: req.params.friendId } }).then((user) => {
    res.json(user);
  }).catch((error) => {
    res.status(404).json(error);
  })

});

router.put("/:id", (req, res) => {
  User.updateOne({ _id: req.params.id}, { email: req.body.email, username:req.body.username }).then((user) => {
    res.json(user);
  }).catch((error) => {
    res.status(404).json(error);
  })

});

router.delete("/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id }).then((user) => {
    res.json(user);
  }).catch((error) => {
    res.status(404).json(error);
  })

});

module.exports = router;
