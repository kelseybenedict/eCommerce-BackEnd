const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    // find all categories
    const categories = await Category.findAll();
    // be sure to include its associated Products
    const products = await Product.findAll();
    res.status(200).json(categories, products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try{
     // find one category by its `id` value
     //TODO: do I include a model here?
     const categories = await Category.findByPk(req.params.id);
  // be sure to include its associated Products
  res.status(200).json(categories);
  }catch(err){
    res.status(500).json(err);
  }
 
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const categories = await Category.create(req.body);
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categories = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categories) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;