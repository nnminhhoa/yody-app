import image_product_01 from "../images-products/products_1.jpg";
import image_product_02 from "../images-products/products_2.jpg";
import image_product_03 from "../images-products/products_3.jpg";
import image_product_04 from "../images-products/products_4.jpg";
import image_product_05 from "../images-products/products_5.jpg";
import image_product_06 from "../images-products/products_6.jpg";
import image_product_07 from "../images-products/products_7.jpg";
import image_product_08 from "../images-products/products_8.jpg";
import image_product_09 from "../images-products/products_9.jpg";
import image_product_10 from "../images-products/products_10.jpg";
import image_product_11 from "../images-products/products_11.jpg";
import image_product_12 from "../images-products/products_12.jpg";
import image_product_13 from "../images-products/products_13.jpg";
import image_product_14 from "../images-products/products_14.jpg";
import image_product_15 from "../images-products/products_15.jpg";
import image_product_16 from "../images-products/products_16.jpg";
import image_product_17 from "../images-products/products_17.jpg";
import image_product_18 from "../images-products/products_18.jpg";
import image_product_19 from "../images-products/products_19.jpg";
import image_product_20 from "../images-products/products_20.jpg";

const products = [
  {
    id: 1,
    title: "Áo Phao Nữ Bông Mỡ Dáng Dài Mũ Lông Siêu Ấm",
    image: image_product_01,
    price: 1289000,
    sale: 60,
    hot: true,
  },
  {
    id: 2,
    title: "Áo Phao Nữ Bông Mỡ Dáng Dài Rút Eo Siêu Ấm",
    image: image_product_02,
    price: 1289000,
    hot: true,
    sale: 60,
  },
  {
    id: 3,
    title: "Áo Khoác Phao Nam Có Mũ Siêu Nhẹ",
    image: image_product_03,
    price: 1259000,
    sale: 30,
  },
  {
    id: 4,
    title: "Áo Polo Nam Cafe Phối Nẹp Thấm Hút Mồ Hôi",
    image: image_product_04,
    price: 379000,
    hot: true,
    sale: 22,
  },
  {
    id: 5,
    title: "Áo Polo Nữ Cafe Phối Nẹp Siêu Nhẹ Siêu Mát",
    image: image_product_05,
    price: 329000,
    sale: 10,
  },
  {
    id: 6,
    title: "Áo Phao Nam Siêu Nhẹ Có Mũ Siêu Ấm",
    image: image_product_06,
    price: 689000,
    sale: 28,
  },
  {
    id: 7,
    title: "Áo Phao Nữ Dáng Dài Siêu Nhẹ",
    image: image_product_07,
    price: 989000,
    hot: true,
    sale: 60,
  },
  {
    id: 8,
    title: "Áo Phao Nam Có Mũ Siêu Nhẹ Hai Mặt",
    image: image_product_08,
    price: 1259000,
    sale: 30,
  },
  {
    id: 9,
    title: "Áo Sơ Mi Nam Tay Dài Vải Vỏ Hàu",
    image: image_product_09,
    price: 499000,
    sale: 60,
  },
  {
    id: 10,
    title: "Váy Chữ A Đuôi Cá Tay Bèo",
    image: image_product_10,
    price: 799000,
    sale: 60,
  },
  {
    id: 11,
    title: "Chân Váy Chữ A Họa Tiết",
    image: image_product_11,
    price: 299000,
    hot: true,
    sale: 50,
  },
  {
    id: 12,
    title: "Áo Phao Nam Có Mũ Siêu Nhẹ Siêu Ấm",
    image: image_product_12,
    price: 689000,
    sale: 28,
  },
  {
    id: 13,
    title: "Áo Phao Nữ Yody Có Mũ Siêu Nhẹ Siêu Ấm",
    image: image_product_13,
    price: 689000,
    hot: true,
    sale: 28,
  },
  {
    id: 14,
    title: "Váy Voan Liền Thân Chữ A",
    image: image_product_14,
    price: 699000,
    sale: 60,
  },
  {
    id: 15,
    title: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
    image: image_product_15,
    price: 689000,
    sale: 28,
  },
  {
    id: 16,
    title: "Áo Khoác Nam Có Mũ Chống Ngấm Nước",
    image: image_product_16,
    price: 689000,
    sale: 28,
  },
  {
    id: 17,
    title: "Đầm Chữ A Tay Phồng Kèm Đai",
    image: image_product_17,
    price: 679000,
    sale: 60,
  },
  {
    id: 18,
    title: "Áo Khoác Gió Nam Thể Thao Súp Sườn",
    image: image_product_18,
    price: 549000,
    hot: true,
    sale: 28,
  },
  {
    id: 19,
    title: "Áo Khoác Gió Nam Thể Thao Phối Lưng",
    image: image_product_19,
    price: 549000,
    sale: 28,
  },
  {
    id: 20,
    title: "Áo Khoác Gió Nữ Loang Màu Có Mũ",
    image: image_product_20,
    price: 499000,
    hot: true,
    sale: 60,
  },
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const dataProducts = {
  getAllProducts,
  getProducts,
};

export default dataProducts;
