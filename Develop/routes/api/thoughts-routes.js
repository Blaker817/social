const router = require("express").Router();
const {} = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // Category.findAll({}).then((data) => {
  //   res.json(data);
  // });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  // find one category by its `id` value
  // be sure to include its associated Products
  // Category.findAll({
  //   where: { id: req.params.id },
  //   include: [{ model: Product }],
  // }).then((data) => {
  //   res.json(data);
  // });
});

router.post("/", (req, res) => {
  // create a new category
  console.log(req.body);
  // Category.create({ category_name: req.body.category_name }).then((data) => {
  //   res.json(data);
  // });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  // Category.update(
  //   { category_name: req.body.category_name },
  //   {
  //     where: { id: req.params.id },
  //   }
  // ).then((data) => {
  //   res.json(data);
  // });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  // Category.destroy({
  //   where: { id: req.params.id },
  // }).then((data) => {
  //   res.json(data);
  // });
});

module.exports = router;
