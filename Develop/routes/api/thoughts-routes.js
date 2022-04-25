const router = require("express").Router();
const { Thought } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Thought.find({

  }).then(data => {
    res.json(data)
  })
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  Thought.find({
    _id: req.params.id
  }).then(data => {
    res.json(data)
  }).catch((error) => {
    res.status(404).json(error);
  })
});

router.post("/", (req, res) => {
  Thought.create(req.body).then((thought) => {
    res.json(thought);
  }).catch((error) => {
    res.status(404).json(error);
  })
});

router.put("/:id", (req, res) => {
  Thought.updateOne({ _id: req.params.id }, { thought_text: req.body.thought_text }).then((thought) => {
    res.json(thought);
  }).catch((error) => {
    res.status(404).json(error);
  })
});

router.delete("/:id", (req, res) => {

  Thought.findByIdAndDelete(req.params.id).then((data) => {
    res.json(data);
  })
  .catch((error) => {
    res.status(404).json(error);
  })
});

module.exports = router;
