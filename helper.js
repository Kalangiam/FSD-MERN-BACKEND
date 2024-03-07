import { client } from "./index.js";


//Rest End points
export async function getallProducts() {
  return await client.db("simplidb").collection("products").find({}).toArray();
}

async function getallProductsBySearch(req) {
  return await client.db("simplidb").collection("products").find(req.query).toArray();
}

async function getProductById(id) {
  return await client.db("simplidb").collection("products").findOne({ id: id });
}

async function deleteProductById(id) {
  return await client.db("simplidb").collection("products").deleteOne({ id: id });
}

async function addFunction(newproducts) {
  return await client.db("simplidb").collection("products").insertMany(newproducts);
}

async function updateProducts(id, updatedproducts) {
  return await client.db("simplidb").collection("products").updateOne({ id: id }, { $set: updatedproducts });
}

export { getProductById, getallProductsBySearch, deleteProductById, addFunction, updateProducts }
