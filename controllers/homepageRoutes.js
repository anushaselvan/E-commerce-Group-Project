const {Product, Category} = require("../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    res.render("login", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/products", async (req, res) => {
  console.log(`homepage hit`, req.body);
  try {
    const productData = await Product.findAll(
      {
        include : {model: Category, attributes:["category_name"]},
      }
    );    
    const products = productData.map((product) => product.get({ plain: true }));

    console.log()
    res.render("products", { products });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/products/:id", async (req, res) => {
  console.log(`homepageRoutes hit`,req.body);
  try {
    const productData = await Product.findByPk(req.params.id, {
      
    });
    const product = productData.get({ plain: true });
    console.log(product);
    res.render("product",  product );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
