const router = require('express').Router();
const { Category, Product } = require('../../models');

  // GET - find all categories
router.get('/', (req, res) => {

  Category.findAll({
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"]
    }]
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
    
  // GET - find one category by its `id` value
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ["category_id"]
    }
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  // POST - create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  // PUT - update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update({
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    if(!categoryData) {
      res.status(404).json({ message: "No category found with that ID!" });
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  // DELETE a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    if(!categoryData) {
      res.status(404).json({ message: "No category found with that ID!"});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
 