const typeProduct = [
  {
    path: "/product-male",
    style: [
      {
        display: "Áo khoác nam",
      },
      {
        display: "Áo hoodie - Áo nỉ nam",
      },
      {
        display: "Áo Giữ nhiệt nam",
      },
      {
        display: "Áo len nam",
      },
      {
        display: "Áo polo nam",
      },
      {
        display: "Áo sơ mi nam",
      },
      {
        display: "Áo thun nam",
      },
      {
        display: "Áo phông nam",
      },
      {
        display: "Quần jean nam",
      },
    ],
  },
  {
    path: "/product-female",
    style: [
      {
        display: "Áo khoác nữ",
      },
      {
        display: "Áo hoodie - Áo nỉ nữ",
      },
      {
        display: "Áo giữ nhiệt nữ",
      },
      {
        display: "Áo len nữ",
      },
      {
        display: "Áo polo nữ",
      },
      {
        display: "Áo sơ mi nữ",
      },
      {
        display: "Áo thun nữ",
      },
      {
        display: "Áo phông nữ",
      },
      {
        display: "Quần kaki nữ",
      },
      {
        display: "Đồ bộ nữ mặc nhà",
      },
    ],
  },
  {
    path: "/product-children",
    style: [
      {
        display: "Áo khoác trẻ em",
      },
      {
        display: "Áo hoodie - Áo nỉ trẻ em",
      },
      {
        display: "Áo len cho bé",
      },
      {
        display: "Áo polo trẻ em",
      },
      {
        display: "Áo sơ mi trẻ em",
      },
      {
        display: "Áo thun trẻ em",
      },
      {
        display: "Áo phông trẻ em",
      },
      {
        display: "Bộ đồ trẻ em",
      },
      {
        display: "Chân váy trẻ em",
      },
      {
        display: "Đầm bé gái",
      },
      {
        display: "Quần dài cho bé",
      },
      {
        display: "Quần jean kid",
      },
      {
        display: "Yếm trẻ em",
      },
    ],
  },
];

const getCateTypeFilter = (path) => {
  const item = [];
  typeProduct.filter((e) => {
    if (e.path === path) item.push(e);
    return item;
  });
  return item[0].style;
};

const type = {
  getCateTypeFilter,
};

export default type;

export const colors = [
  {
    display: "Hồng",
  },
  {
    display: "Xanh",
  },
  {
    display: "Đỏ",
  },
  {
    display: "Tím than",
  },
  {
    display: "Vàng",
  },
  {
    display: "Trắng",
  },
  {
    display: "Xanh navy",
  },
  {
    display: "Đen",
  },
  {
    display: "Xanh lá",
  },
  {
    display: "Nâu",
  },
  {
    display: "Xanh mint",
  },
  {
    display: "Be",
  },
  {
    display: "Cam",
  },
  {
    display: "Tím",
  },
  {
    display: "Xanh cổ vịt",
  },
  {
    display: "Họa tiết",
  },
];

export const material = [
  {
    display: "Cotton",
  },
  {
    display: "Umi",
  },
  {
    display: "Nỉ",
  },
  {
    display: "Vỏ hàu",
  },
  {
    display: "Tuyết mưa",
  },
  {
    display: "Nano",
  },
  {
    display: "Bamboo",
  },
  {
    display: "Vải tơ",
  },
  {
    display: "Chiffon",
  },
  {
    display: "Vải chéo",
  },
  {
    display: "PU",
  },
  {
    display: "Microfiber",
  },
  {
    display: "Organza",
  },
  {
    display: "Modal",
  },
  {
    display: "Cool Airism",
  },
  {
    display: "Lụa",
  },
  {
    display: "Da bò",
  },
  {
    display: "Habutai",
  },
  {
    display: "Viscose",
  },
  {
    display: "Rayon",
  },
  {
    display: "Vải 79",
  },
  {
    display: "Filagen",
  },
  {
    display: "Đũi",
  },
  {
    display: "Tuýt si",
  },
];

export const size = [
  {
    display: "XS",
  },
  {
    display: "S",
  },
  {
    display: "M",
  },
  {
    display: "L",
  },
  {
    display: "XL",
  },
  {
    display: "2XL",
  },
  {
    display: "3XL",
  },
  {
    display: "4XL",
  },
];

export const price = [
  {
    display: "Dưới 100.000đ",
  },
  {
    display: "Từ 100.000đ - 300.000đ",
  },
  {
    display: "Từ 300.000đ - 500.000đ",
  },
  {
    display: "Từ 500.000đ - 700.000đ",
  },
  {
    display: "Trên 700.000đ",
  },
];
