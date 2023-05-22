import categories from "./router/categories";
import cloudinary from "cloudinary";
import content from "./router/content";
import express from "express";
import monogoose from "mongoose";
import orders from "./router/orders";
import products from "./router/products";

const cloudinaryConfig = cloudinary.v2;

//api config
const app = express();

//middleware
app.use(express.json());

//DB config
monogoose.connect(import.meta.env.VITE_MONGO_URL).then(() => {
  console.log("db connected");
});

//api endpoints
app.get("/api/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API food delivery",
  });
});

app.use("/api/products", products);
app.use("/api/categories", categories);
app.use("/api/content", content);
app.use("/api/orders", orders);

export function uploadImage(path, name) {
  try {
    cloudinaryConfig.config({
      cloud_name: import.meta.env.VITE_CLOUDINARY_NAME,
      api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
      api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
    });

    const res = cloudinaryConfig.uploader.upload(path, {
      public_id: name,
      overwrite: false,
    });

    res
      .then((data) => {
        console.log(data);
        // console.log(data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });

    const url = cloudinaryConfig.url(name, {
      Crop: "fill",
    });

    return url;
  } catch (err) {
    console.log(err);
  }
}

//listen
export const handler = app;
