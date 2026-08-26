const createProduct = async (req, res) => {
  const { productName, description, price } = req.body;

  if (!productName) {
    return res.status(400).json({
      success: false,
      msg: "Product Name is required",
    });
  }

  if (!price) {
    return res.status(400).json({
      success: false,
      msg: "Product price is required",
    });
  }

  const product = await Product.create({
    productName,
    price,
    description,
  });

  res.json({
    success: true,
    data: product,
  });
};

export { createProduct };


// const { productName, description, price } = req.body;

//   if (productName === "")
//     res.status(400).json({
//       success: false,
//       msg: "Product Name is required",
//     });

//   if (price === "")
//     res.status(400).json({
//       success: false,
//       msg: "Product price is required",
//     });

//   const product = await Product.create({ productName, price, description });

//   res.json({ success: true, data: product });

//   export {productName, description, price}