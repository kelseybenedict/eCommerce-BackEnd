const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    // get all tag data from product model, with the product tag
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    })
    res.status(200).json(tags)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    // finding tag based on id in the product model where producttag exists
    const tags = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    })
    res.status(200).json(tags)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tags = await Tag.create(req.body);
    res.status(200).json(tags);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tags = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    // deleting tag by id
    const tags = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    // if user enters tag that doesn't exist, return error
    if (!tags) {
      res.status(404).json({ message: 'No tag found' });
      return;
    }

    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
