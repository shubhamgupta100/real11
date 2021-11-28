const Product = require("../model/product");

const cloudinary = require("cloudinary");

module.exports.createProduct = async (req, res) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "products",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  const product = await Product.create(req.body);
  res.status(201).json({
    message: "Product is created",
    product,
    success: true,
  });
};

// Get All Product
module.exports.getAllProducts = async (req, res, next) => {
  const productCount = await Product.countDocuments();
  const products = await Product.find();

  return res.status(200).json({
    success: true,
    productCount,
    products,
  });
};

module.exports.getProductDetail = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
};
