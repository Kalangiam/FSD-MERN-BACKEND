import express from "express";
import { getallProductsBySearch, getallProducts, getProductById, addFunction, deleteProductById, updateProducts } from "../helper.js";

const router = express.Router()

//Routes

//get all products from mongoDB
router.get('/', async (req, res) => {

  // console.log(req.params, id)
  const pro = await getallProducts();
  // const productId = parseInt(id);
  // const product = products.find((pd) => pd.id === productId);
  // products.find((pd) => pd.id === id);
  res.send(pro);


  // get products by ID from mongoDB
router.get('/products/:id', async (req, res) => {

    const { id } = req.params;
    // console.log(req.params, id)
    const product = await getProductById(id);
    // const productId = parseInt(id);
    // const product = products.find((pd) => pd.id === productId);                    // get all products by ID from array
    // products.find((pd) => pd.id === id);
    res.send(product);

    //product? res.send(product) : res.status(404).send({message : "No product found"}) 
  });
});
//get all products by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params; // body at post method
  console.log(req.params, id);
  const product = await getProductById(id);

  res.send(product);
});
//get products based on search query
//filter by brand and rating using '&'            // /products to / to avoid repetition(/products/products)
router.get('/', async (req, res) => {
  const { title } = req.query;
  const result = await getallProductsBySearch(req);


  // let filteredProducts = products;
  // if (brand) {
  //   filteredProducts = filteredProducts.filter((pd) => pd.brand === brand)
  // }
  // if (rating) {
  //   filteredProducts = filteredProducts.filter((pd) => pd.rating === +rating)
  // }
  // res.send(filteredProducts)
  res.send(result);
});
//add products
router.post('/', async (req, res) => {
  const newproducts = req.body; // body at post method
  console.log(newproducts);
  const product = await addFunction(newproducts);

  res.send(product);
});
//delete products
router.delete('/:id', async (req, res) => {
  const { id } = req.params; // body at post method
  console.log(req.params, id);
  const product = await deleteProductById(id);

  res.send(product);
});
//update products - add + get 
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedproducts = req.body; // body at post method
  const product = await updateProducts(id, updatedproducts); // parameter order should be same as in the function
  res.send(product);
});


export const productsRoute = router