import imageCateMan_01 from "../images-category/page_nam_cate_icon_1.png";
import imageCateMan_02 from "../images-category/page_nam_cate_icon_2.png";
import imageCateMan_03 from "../images-category/page_nam_cate_icon_3.png";
import imageCateMan_04 from "../images-category/page_nam_cate_icon_4.png";
import imageCateMan_05 from "../images-category/page_nam_cate_icon_5.png";
import imageCateMan_06 from "../images-category/page_nam_cate_icon_6.png";
import imageCateMan_07 from "../images-category/page_nam_cate_icon_7.png";
import imageCateMan_08 from "../images-category/page_nam_cate_icon_8.png";

import imageCateWoman_01 from "../images-category/page_nu_cate_icon_1.png";
import imageCateWoman_02 from "../images-category/page_nu_cate_icon_2.png";
import imageCateWoman_03 from "../images-category/page_nu_cate_icon_3.png";
import imageCateWoman_04 from "../images-category/page_nu_cate_icon_4.png";
import imageCateWoman_05 from "../images-category/page_nu_cate_icon_5.png";
import imageCateWoman_06 from "../images-category/page_nu_cate_icon_6.png";
import imageCateWoman_07 from "../images-category/page_nu_cate_icon_7.png";
import imageCateWoman_08 from "../images-category/page_nu_cate_icon_8.png";
import imageCateWoman_09 from "../images-category/page_nu_cate_icon_9.png";
import imageCateWoman_10 from "../images-category/page_nu_cate_icon_10.png";

import imageCateChildren_01 from "../images-category/page_treem_cate_icon_1.png";
import imageCateChildren_02 from "../images-category/page_treem_cate_icon_2.png";
import imageCateChildren_03 from "../images-category/page_treem_cate_icon_3.png";
import imageCateChildren_04 from "../images-category/page_treem_cate_icon_4.png";
import imageCateChildren_05 from "../images-category/page_treem_cate_icon_5.png";

import imageCateStyle_01 from "../images-category/page_nam_banner_1.jpg";
import imageCateStyle_02 from "../images-category/page_nam_banner_2.jpg";
import imageCateStyle_03 from "../images-category/page_nam_banner_3.jpg";
import imageCateStyle_04 from "../images-category/page_nam_banner_4.jpg";
import imageCateStyle_05 from "../images-category/page_nam_banner_5.jpg";
import imageCateStyle_06 from "../images-category/page_nu_banner_1.jpg";
import imageCateStyle_07 from "../images-category/page_nu_banner_2.jpg";
import imageCateStyle_08 from "../images-category/page_nu_banner_3.jpg";
import imageCateStyle_09 from "../images-category/page_nu_banner_4.jpg";
import imageCateStyle_10 from "../images-category/page_nu_banner_5.jpg";
import imageCateStyle_11 from "../images-category/page_treem_banner_1.jpg";

import imageSocial_01 from "../images-icon/social_1_mb.png";
import imageSocial_02 from "../images-icon/social_2_mb.png";
import imageSocial_03 from "../images-icon/social_3_mb.png";
import imageSocial_04 from "../images-icon/social_4_mb.png";
import imageSocial_05 from "../images-icon/social_5_mb.png";
import imageSocial_06 from "../images-icon/social_6_mb.png";
import imageSocial_07 from "../images-icon/social_7_mb.png";

const imageCategory = [
  {
    path: "/male",
    item: [
      {
        title: "Áo polo",
        image: imageCateMan_01,
        hot: "hot",
      },
      {
        title: "Quần jeans",
        image: imageCateMan_02,
      },
      {
        title: "Áo sơ mi",
        image: imageCateMan_03,
        hot: "sale",
      },
      {
        title: "Quần âu",
        image: imageCateMan_04,
      },
      {
        title: "Áo khoác",
        image: imageCateMan_05,
        hot: "hot",
      },
      {
        title: "Đồ lót",
        image: imageCateMan_06,
        hot: "new",
      },
      {
        title: "Quần kaki",
        image: imageCateMan_07,
      },
      {
        title: "Phụ kiện",
        image: imageCateMan_08,
      },
    ],
  },
  {
    path: "/female",
    item: [
      {
        title: "Áo polo",
        image: imageCateWoman_01,
      },
      {
        title: "Áo sơ mi",
        image: imageCateWoman_02,
      },
      {
        title: "Vấy đầm",
        image: imageCateWoman_03,
      },
      {
        title: "Áo khoác",
        image: imageCateWoman_04,
      },
      {
        title: "Áo thun",
        image: imageCateWoman_05,
      },
      {
        title: "Quần âu",
        image: imageCateWoman_06,
      },
      {
        title: "Chân váy",
        image: imageCateWoman_07,
        page: "woman",
      },
      {
        title: "Quần kaki",
        image: imageCateWoman_08,
      },
      {
        title: "Phụ kiện",
        image: imageCateWoman_09,
      },
      {
        title: "Quần jeans",
        image: imageCateWoman_10,
      },
    ],
  },
  {
    path: "/children",
    item: [
      {
        title: "Áo khoác",
        image: imageCateChildren_01,
      },
      {
        title: "Áo polo",
        image: imageCateChildren_02,
      },
      {
        title: "Áo sơ mi",
        image: imageCateChildren_03,
      },
      {
        title: "Quần dài",
        image: imageCateChildren_04,
      },
      {
        title: "Chân váy",
        image: imageCateChildren_05,
      },
    ],
  },
];

const imageBannerCate = [
  {
    banner1: [
      {
        title: "Thời trang thu đông",
        image: imageCateStyle_01,
        description:
          "Không chỉ riêng nữ giới mà cả các bạn nam cũng có nhiều xu hướng thời trang thú vị để lựa chọn trong mùa thu đông. Từ những trang phục cho đến phụ kiện thời trang hợp thời đều sẽ mang đến cho các bạn nam một phong cách vô cùng ấn tượng và lịch lãm.",
      },
    ],
    banner2: [
      {
        title: "Phong cách công sở",
        image: imageCateStyle_02,
        description:
          "Thời trang công sở là những trang phục được mặc trong môi trường công sở, nơi làm việc hoặc gặp đối tác, họp hành,...",
      },
      {
        title: "Phong cách thể thao",
        image: imageCateStyle_03,
        description:
          "Phong cách thể thao là phong cách kết hợp giữa thể thao và các phong cách thời trang khác.",
      },
      {
        title: "Thời trang basic",
        image: imageCateStyle_04,
        description:
          "Thời trang basic là phong cách basic luôn hướng tới sự đơn giản, không màu mè, màu sắc quen thuộc không quá lòe loẹt như đen, trắng hay xám.",
      },
      {
        title: "Thời trang ở nhà",
        image: imageCateStyle_05,
        description:
          "là một trang phục rất kinh tế nếu tính theo số lần mặc. Bạn có thể mặc một bộ pajama hay váy choàng chất lượng tốt trong nhiều năm.",
      },
    ],
    path: "/male",
  },
  {
    banner1: [
      {
        title: "Thời trang thu đông",
        image: imageCateStyle_06,
        description:
          "Không chỉ riêng nữ giới mà cả các bạn nam cũng có nhiều xu hướng thời trang thú vị để lựa chọn trong mùa thu đông. Từ những trang phục cho đến phụ kiện thời trang hợp thời đều sẽ mang đến cho các bạn nam một phong cách vô cùng ấn tượng và lịch lãm.",
      },
    ],
    banner2: [
      {
        title: "Phong cách công sở",
        image: imageCateStyle_07,
        description:
          "Thời trang công sở là những trang phục được mặc trong môi trường công sở, nơi làm việc hoặc gặp đối tác, họp hành,...",
      },
      {
        title: "Thười trang basic",
        image: imageCateStyle_08,
        description:
          "Thời trang basic là phong cách basic luôn hướng tới sự đơn giản, không màu mè, màu sắc quen thuộc không quá lòe loẹt như đen, trắng hay xám.",
      },

      {
        title: "Thời trang ở nhà",
        image: imageCateStyle_09,
        description:
          "là một trang phục rất kinh tế nếu tính theo số lần mặc. Bạn có thể mặc một bộ pajama hay váy choàng chất lượng tốt trong nhiều năm.",
      },
      {
        title: "Mix & Match",
        image: imageCateStyle_10,
        description:
          "Thời trang basic là phong cách basic luôn hướng tới sự đơn giản, không màu mè, màu sắc quen thuộc không quá lòe loẹt như đen, trắng hay xám.",
      },
    ],
    path: "/female",
  },
  {
    banner1: [
      {
        title: "Thời trang thu đông",
        image: imageCateStyle_11,
        description:
          "Không chỉ riêng nữ giới mà cả các bạn nam cũng có nhiều xu hướng thời trang thú vị để lựa chọn trong mùa thu đông. Từ những trang phục cho đến phụ kiện thời trang hợp thời đều sẽ mang đến cho các bạn nam một phong cách vô cùng ấn tượng và lịch lãm.",
      },
    ],
    banner2: [
      {
        title: "Phong cách công sở",
        image: imageCateStyle_08,
        description:
          "Thời trang công sở là những trang phục được mặc trong môi trường công sở, nơi làm việc hoặc gặp đối tác, họp hành,...",
      },
      {
        title: "Thười trang basic",
        image: imageCateStyle_09,
        description:
          "Thời trang basic là phong cách basic luôn hướng tới sự đơn giản, không màu mè, màu sắc quen thuộc không quá lòe loẹt như đen, trắng hay xám.",
      },
      {
        title: "Thời trang ở nhà",
        image: imageCateStyle_06,
        description:
          "là một trang phục rất kinh tế nếu tính theo số lần mặc. Bạn có thể mặc một bộ pajama hay váy choàng chất lượng tốt trong nhiều năm.",
      },
      {
        title: "Mix & Match",
        image: imageCateStyle_07,
        description:
          "Thời trang basic là phong cách basic luôn hướng tới sự đơn giản, không màu mè, màu sắc quen thuộc không quá lòe loẹt như đen, trắng hay xám.",
      },
    ],
    path: "/children",
  },
];

const imageSocial = [
  {
    image: imageSocial_01,
  },
  {
    image: imageSocial_02,
  },
  {
    image: imageSocial_03,
  },
  {
    image: imageSocial_04,
  },
  {
    image: imageSocial_05,
  },
  {
    image: imageSocial_06,
  },
  {
    image: imageSocial_07,
  },
];

const getImageSocial = () => imageSocial;

export const dataSocial = {
  getImageSocial,
};

const getImageCateByPath = (path) => {
  const images = [];
  imageCategory.filter((e) => {
    if (e.path === path) {
      images.push(e);
    }
    return images[0];
  });
  return images[0].item;
};

const dataCategorySection = {
  getImageCateByPath,
};

export default dataCategorySection;

const getBannerCateByPath = (path) => {
  const images = [];
  imageBannerCate.filter((e) => {
    if (e.path === path) {
      images.push(e);
    }
    return images;
  });
  return images[0];
};

export const dataBannerCate = {
  getBannerCateByPath,
};
