import bannerNav_01 from "../images/link_image_3_1.jpg";
import bannerNav_02 from "../images/link_image_3_2.jpg";
import bannerNav_03 from "../images/link_image_5_1.jpg";
import bannerNav_04 from "../images/link_image_5_2.jpg";
import bannerNav_05 from "../images/link_image_4_1.jpg";
import bannerNav_06 from "../images/link_image_4_2.jpg";
import bannerNav_07 from "../images/link_image_7_1.jpg";
import image_collection_08 from "../images/link_image_6_1.jpg";
import image_collection_09 from "../images/link_image_6_2.jpg";
import image_collection_10 from "../images/link_image_6_3.jpg";
import image_collection_11 from "../images/link_image_6_4.jpg";

const navHeader = [
  {
    display: "Mua sắm",
    path: "/",
  },
  {
    display: "Nam",
    path: "/product-male",
    megaMenu: [
      {
        bannerNav: bannerNav_01,
        path: "/",
      },
      {
        product: "Áo",
        path: "/",
        productParent: [
          {
            name: "Áo polo nam",
            path: "/",
          },
          {
            name: "Áo sơ mi nam",
            path: "/",
          },
          {
            name: "Áo khoác nam",
            path: "/",
          },
          {
            name: "Áo vest nam",
            path: "/",
          },
        ],
      },
      {
        product: "Quần",
        path: "/",
        productParent: [
          {
            name: "Quần jeans nam",
            path: "/",
          },
          {
            name: "Quần tây nam",
            path: "/",
          },
          {
            name: "Quần kaki nam",
            path: "/",
          },
        ],
      },
      {
        product: "Đồ mặc trong",
        path: "/",
        productParent: [
          {
            name: "Đồ lót",
            path: "/",
          },
        ],
      },
      {
        product: "Phụ kiện",
        path: "/",
        productParent: [
          {
            name: "Ví nam",
            path: "/",
          },
          {
            name: "Mũ nam",
            path: "/",
          },
          {
            name: "Phụ kiện khác",
            path: "/",
          },
        ],
      },
      {
        bannerNav: bannerNav_02,
        path: "/node_modules",
      },
    ],
  },
  {
    display: "Nữ",
    path: "/product-female",
    megaMenu: [
      {
        bannerNav: bannerNav_05,
        path: "/",
      },
      {
        product: "Áo",
        path: "/",
        productParent: [
          {
            name: "Áo polo nữ",
            path: "/",
          },
          {
            name: "Áo sơ mi nam",
            path: "/",
          },
          {
            name: "Áo thun nữ",
            path: "/",
          },
          {
            name: "Áo khoác nữ",
            path: "/",
          },
        ],
      },
      {
        product: "Quần",
        path: "/",
        productParent: [
          {
            name: "Quần jeans nữ",
            path: "/",
          },
          {
            name: "Quần tâu nữ",
            path: "/",
          },
          {
            name: "Quần kaki nữ",
            path: "/",
          },
        ],
      },
      {
        product: "Chân váy",
        path: "/",
        productParent: [
          {
            name: "Chân váy",
            path: "/",
          },
          {
            name: "Váy liền thân",
            path: "/",
          },
        ],
      },
      {
        product: "Phụ kiện",
        path: "/",
        productParent: [
          {
            name: "Túi xách",
            path: "/",
          },
          {
            name: "Phụ kiện khác",
            path: "/",
          },
        ],
      },
      {
        bannerNav: bannerNav_06,
        path: "/",
      },
    ],
  },
  {
    display: "Trẻ em",
    path: "/product-children",
    megaMenu: [
      {
        bannerNav: bannerNav_03,
        path: "/",
      },
      {
        product: "Áo",
        path: "/",
        productParent: [
          {
            name: "Áo polo",
            path: "/",
          },
          {
            name: "Áo sơ mi",
            path: "/",
          },
          {
            name: "Áo khoác",
            path: "/",
          },
        ],
      },
      {
        product: "Quần",
        path: "/",
        productParent: [
          {
            name: "Quần jeans",
            path: "/",
          },
          {
            name: "Quần dài",
            path: "/",
          },
        ],
      },
      {
        product: "Váy đầm trẻ em",
        path: "/",
        productParent: [
          {
            name: "Chân váy",
            path: "/",
          },
        ],
      },
      {
        bannerNav: bannerNav_04,
        path: "/",
      },
    ],
  },
  {
    display: "Bộ sưu tập",
    path: "/collection",
    megaMenu: [
      {
        product: "BST thời trang thu đông",
        path: "/",
        collection: [
          {
            collection_image: image_collection_08,
          },
        ],
      },
      {
        product: "BST Áo phao",
        path: "/",
        collection: [
          {
            collection_image: image_collection_09,
          },
        ],
      },
      {
        product: "BST Áo gió",
        path: "/",
        collection: [
          {
            collection_image: image_collection_10,
          },
        ],
      },
      {
        product: "Áo Polo Yody",
        path: "/",
        collection: [
          {
            collection_image: image_collection_11,
          },
        ],
      },
    ],
  },
  {
    display: "Yody love",
    path: "/",
    megaMenu: [
      {
        product: "Yody news",
        path: "/",
        productParent: [
          {
            name: "Tin hot",
            path: "/",
          },
          {
            name: "Trải nghiệm khách hàng",
            path: "/",
          },
          {
            name: "Showroom yody",
            path: "/",
          },
          {
            name: "Văn hóa yody",
            path: "/",
          },
        ],
      },
      {
        product: "Phong cách thời trang",
        path: "/",
        productParent: [
          {
            name: "Mix and Match",
            path: "/",
          },
          {
            name: "Mẹo hay",
            path: "/",
          },
          {
            name: "Xu hướng thời trang",
            path: "/",
          },
          {
            name: "Phong thủy",
            path: "/",
          },
        ],
      },
      {
        product: "Stories",
        path: "/",
        productParent: [
          {
            name: "Nhân vật",
            path: "/",
          },
          {
            name: "Theo dòng thời trang",
            path: "/",
          },
        ],
      },
      {
        product: "Chất liệu sản phẩm",
        path: "/",
        productParent: [
          {
            name: "Chất liệu",
            path: "/",
          },
          {
            name: "Sản phẩm",
            path: "/",
          },
        ],
      },
      {
        product: "Ưu đãi",
        path: "/",
        productParent: [
          {
            name: "Ưu đãi",
            path: "/",
          },
          {
            name: "Dịch vụ",
            path: "/",
          },
          {
            name: "Chính sách",
            path: "/",
          },
        ],
      },
      {
        bannerNav: bannerNav_07,
        path: "/",
      },
    ],
  },
  {
    display: "Đồng phục",
    path: "/",
  },
  {
    display: "Ưu đãi",
    path: "/offer",
  },
];

export default navHeader;
