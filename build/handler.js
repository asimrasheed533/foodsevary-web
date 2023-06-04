import express from "express";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
const schema$3 = new mongoose.Schema({
  name: String,
  img: String
});
const Category = mongoose.model("Category", schema$3);
const router$3 = express.Router();
router$3.get("/", async (req, res) => {
  try {
    const category = await Category.find();
    res.send(category);
  } catch (err) {
    console.log(err);
  }
});
router$3.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.send(category);
  } catch (err) {
    console.log(err);
  }
});
router$3.post("/", async (req, res) => {
  try {
    const imagePath = uploadImage(req.body.img, req.body.name);
    const category = new Category({
      name: req.body.name,
      img: imagePath
    });
    await category.save();
    res.send(category);
  } catch (err) {
    console.log(err);
  }
});
router$3.put("/:id", async (req, res) => {
  try {
    const imagePath = uploadImage(req.body.img, req.body.name);
    const category = await Category.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      img: imagePath
    });
    await category.save();
    res.send(category);
  } catch (err) {
    console.log(err);
  }
});
router$3.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.send(category);
  } catch (err) {
    console.log(err);
  }
});
const schema$2 = new mongoose.Schema({
  banner: Array,
  address: String,
  phone: String,
  email: String,
  map: String
});
const Content = mongoose.model("Content", schema$2);
const router$2 = express.Router();
router$2.get("/", async (req, res) => {
  try {
    const content = await Content.find();
    res.send(content);
  } catch (err) {
    console.log(err);
  }
});
router$2.get("/:id", async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    res.send(content);
  } catch (err) {
    console.log(err);
  }
});
router$2.post("/", async (req, res) => {
  try {
    const content = new Content(req.body);
    await content.save();
    res.send(content);
  } catch (err) {
    console.log(err);
  }
});
router$2.put("/:id", async (req, res) => {
  try {
    const content = await Content.findByIdAndUpdate(req.params.id, req.body);
    await content.save();
    res.send(content);
  } catch (err) {
    console.log(err);
  }
});
router$2.delete("/:id", async (req, res) => {
  try {
    const content = await Content.findByIdAndDelete(req.params.id);
    res.send(content);
  } catch (err) {
    console.log(err);
  }
});
const schema$1 = new mongoose.Schema({
  username: String,
  email: String,
  phone: String,
  address: String,
  products: Array,
  total: Number,
  status: String,
  cardNumber: String,
  cardName: String,
  cardDate: String,
  cardCvv: String
});
const Order = mongoose.model("Order", schema$1);
const router$1 = express.Router();
router$1.get("/", async (req, res) => {
  try {
    const order = await Order.find();
    res.send(order);
  } catch (err) {
    console.log(err);
  }
});
router$1.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.send(order);
  } catch (err) {
    console.log(err);
  }
});
router$1.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.send(order);
  } catch (err) {
    console.log(err);
  }
});
router$1.put("/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body);
    await order.save();
    res.send(order);
  } catch (err) {
    console.log(err);
  }
});
router$1.delete("/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAbdDelete(req.params.id);
    res.send(order);
  } catch (err) {
    console.log(err);
  }
});
const schema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  img: String,
  stock: Number,
  category: String,
  description: String,
  isFeatured: Boolean,
  isActive: Boolean
});
const Product = mongoose.model("Product", schema);
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (err) {
    console.log(err);
  }
});
router.post("/", async (req, res) => {
  try {
    const imagePath = uploadImage(req.body.img, req.body.name);
    const product = new Product({
      name: req.body.name,
      brand: req.body.brand,
      price: req.body.price,
      img: imagePath,
      stock: req.body.stock,
      category: req.body.category,
      description: req.body.description,
      isFeatured: req.body.isFeatured,
      isActive: req.body.isActive
    });
    await product.save();
    res.send(product);
  } catch (err) {
    console.log(err);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const imagePath = uploadImage(req.body.img, req.body.name);
    const product = await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      brand: req.body.brand,
      price: req.body.price,
      img: imagePath,
      stock: req.body.stock,
      category: req.body.category,
      description: req.body.description,
      isFeatured: req.body.isFeatured,
      isActive: req.body.isActive
    });
    await product.save();
    res.send(product);
  } catch (err) {
    console.log(err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.send(product);
  } catch (err) {
    console.log(err);
  }
});
const cloudinaryConfig = cloudinary.v2;
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://admin:admin211@cluster0.2m0xfnl.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("db connected");
});
app.get("/api/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API food delivery"
  });
});
app.use("/api/products", router);
app.use("/api/categories", router$3);
app.use("/api/content", router$2);
app.use("/api/orders", router$1);
function uploadImage(path, name) {
  try {
    cloudinaryConfig.config({
      cloud_name: "dsxbqyjwo",
      api_key: "388348617117396",
      api_secret: "oP7WdFsRN33EBa_hxvQe8c-aQBk"
    });
    const res = cloudinaryConfig.uploader.upload(path, {
      public_id: name,
      overwrite: false
    });
    res.then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
    const url = cloudinaryConfig.url(name, {
      Crop: "fill"
    });
    return url;
  } catch (err) {
    console.log(err);
  }
}
const handler = app;
export {
  handler,
  uploadImage
};
