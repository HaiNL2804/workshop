import Product from "../models/product";
import slugify from "slugify";
import Attribute from "../models/attribute";

export const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { name, attributes } = req.body;

    // Kiểm tra xem sản phẩm với tên này đã tồn tại chưa
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res
        .status(400)
        .json({ message: "Sản phẩm với tên này đã tồn tại" });
    }

    const productAttributes = await Attribute.find({
      _id: { $in: attributes },
    });
    if (productAttributes.length !== productAttributes.length) {
      return res
        .status(400)
        .json({ message: "Một hoặc nhiều thuộc tính không tìm thấy" });
    }

    // Tạo slug từ tên sản phẩm
    const slug = slugify(name, { lower: true });

    const product = await Product.create({ ...req.body, slug });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Hàm để thêm một sản phẩm mới
// export const createProduct = async (req, res) => {
//   try {
//     // Tạo slug từ tên sản phẩm
//     const slug = slugify(name, { lower: true });
//     const product = await Product.create({ ...req.body, slug });
//     res.status(201).json(product);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// Xoas 1 san pham theo ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    res.status(200).json({ message: "Xoa San Pham Thanh Cong" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Cap nhat 1 sp theo id
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, res.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Khong tim thay san pham nao" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//  Lay thong tin chi tiet 1 san pham theo id

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { _embed } = req.query;
    let query = Product.findById(id);

    if (_embed) {
      const embeds = _embed.split(",");
      embeds.forEach((embed) => {
        query = query.populate(embed);
      });
    }

    const product = await query.exec();
    if (!product) {
      return res.status(404).json({ message: "Khong tim Thay san pham" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy giá trị form
// axios.post(`API/products`, { name: "Dat"})
// req.body : { name: "Dat"}

// axios.get(`API/product/:id`)
// req.params: { id: 10}

// axios.get(`API/products?page=10&limit=20`)
// req.query = { page: 10, limit: 20}
