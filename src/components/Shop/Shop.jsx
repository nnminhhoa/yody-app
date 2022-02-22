import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type from "../../assets/data/dataCategoryFilter";
import {
  colors,
  material,
  price,
  size,
} from "../../assets/data/dataCategoryFilter";
import dataProducts from "../../assets/data/dataProducts";
import CheckBox from "../CheckBox/CheckBox";
import Grid from "../Grid/Grid";
import Helmet from "../Helmet/Helmet";
import Products from "../Products/Products";
import "./Shop.scss";
import iconFilterMb from "../../assets/images-icon/filterico.png";

const optionSort = [
  {
    id: 1,
    title: "Mặc định",
  },
  {
    id: 2,
    title: "Từ A-Z",
  },
  {
    id: 3,
    title: "Từ Z-A",
  },
  {
    id: 4,
    title: "Rẻ nhất",
  },
  {
    id: 5,
    title: "Giá giảm dần",
  },
  {
    id: 6,
    title: "Mới nhất",
  },
];

const Shop = () => {
  const { pathname } = useLocation();
  const topRef = useRef();
  const sideBarRef = useRef();
  const sideBarOpacityRef = useRef();
  const data = dataProducts.getProductByPath(pathname);

  const [productFilter, setProductFilter] = useState(false);
  const [colorFilter, setColorFilter] = useState(false);
  const [materialFiler, setMaterialFilter] = useState(false);
  const [sizeFilter, setSizeFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);

  const [toggleProduct, setToggleProduct] = useState(false);
  const [toggleMaterial, setToggleMaterial] = useState(false);
  const [toggleColor, setToggleColor] = useState(false);

  const [clickedSort, setClickedSort] = useState(false);
  const [itemSort, setItemSort] = useState(optionSort[0]);

  const handleTitleSort = (item) => {
    setItemSort(item);
    setClickedSort(!clickedSort);
  };

  const sortStyle = clickedSort
    ? {
        display: "block",
      }
    : {
        display: "none",
      };

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
      topRef.current.classList.add("scroll-shop");
    } else {
      topRef.current.classList.remove("scroll-shop");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSideBarMb = () => {
    sideBarRef.current.classList.toggle("active");
    sideBarOpacityRef.current.classList.toggle("active");
  };

  return (
    <Helmet title="Tất cả sản phẩm">
      <div className="shop" ref={topRef}>
        <div className="shop-header">
          <div className="shop-header__content">
            <Link to="/">Trang chủ</Link>
            <h3>Thời trang nam bán chạy</h3>
          </div>
          <div className="shop-header__mobile">
            <div className="title">
              <p>
                Đơn hàng trên
                <span>498K</span>
                sẽ được miễn phí vận chuyển
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="shop-section">
            <div className="sidebar">
              <div
                className="sidebar_opacity"
                ref={sideBarOpacityRef}
                onClick={toggleSideBarMb}
              ></div>
              <div className="sidebar_content" ref={sideBarRef}>
                <div className="sidebar_content-header_mb">
                  <span>Bộ lọc</span>
                  <i className="fas fa-times" onClick={toggleSideBarMb}></i>
                </div>
                <div
                  className={`sidebar_content-filter ${
                    productFilter ? "active" : ""
                  }`}
                >
                  <div
                    className="sidebar_content-filter__title"
                    onClick={() => setProductFilter(!productFilter)}
                  >
                    <h2>Loại sản phẩm</h2>
                    <i className="fas fa-chevron-up"></i>
                  </div>
                  <div className="sidebar_content-filter__content">
                    <ul
                      className={`filter-group ${
                        toggleProduct ? "max-height" : ""
                      }`}
                    >
                      {type.getCateTypeFilter(pathname).map((item, index) => (
                        <li key={index}>
                          <CheckBox>{item.display}</CheckBox>
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`showmore ${toggleProduct ? "hide" : ""}`}
                      onClick={() => setToggleProduct(!toggleProduct)}
                    >
                      <p>Xem thêm </p>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                    <div
                      className={`showmore ${toggleProduct ? "show" : "hide"}`}
                      onClick={() => setToggleProduct(!toggleProduct)}
                    >
                      <p>Thu gọn </p>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                  </div>
                </div>
                <div
                  className={`sidebar_content-filter ${
                    colorFilter ? "active" : ""
                  }`}
                >
                  <div
                    className="sidebar_content-filter__title"
                    onClick={() => setColorFilter(!colorFilter)}
                  >
                    <h2>Màu sắc</h2>
                    <i className="fas fa-chevron-up"></i>
                  </div>
                  <div className="sidebar_content-filter__content">
                    <ul
                      className={`filter-group ${
                        toggleColor ? "max-height" : ""
                      }`}
                    >
                      {colors.map((item, index) => (
                        <li key={index}>
                          <CheckBox>{item.display}</CheckBox>
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`showmore ${toggleColor ? "hide" : ""}`}
                      onClick={() => setToggleColor(!toggleColor)}
                    >
                      <p>Xem thêm </p>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                    <div
                      className={`showmore ${toggleColor ? "show" : "hide"}`}
                      onClick={() => setToggleColor(!toggleColor)}
                    >
                      <p>Thu gọn </p>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                  </div>
                </div>
                <div
                  className={`sidebar_content-filter ${
                    materialFiler ? "active" : ""
                  }`}
                >
                  <div
                    className="sidebar_content-filter__title"
                    onClick={() => setMaterialFilter(!materialFiler)}
                  >
                    <h2>Chất liệu</h2>
                    <i className="fas fa-chevron-up"></i>
                  </div>
                  <div className="sidebar_content-filter__content">
                    <ul
                      className={`filter-group ${
                        toggleMaterial ? "max-height" : ""
                      }`}
                    >
                      {material.map((item, index) => (
                        <li key={index}>
                          <CheckBox>{item.display}</CheckBox>
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`showmore ${toggleMaterial ? "hide" : ""}`}
                      onClick={() => setToggleMaterial(!toggleMaterial)}
                    >
                      <p>Xem thêm </p>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                    <div
                      className={`showmore ${toggleMaterial ? "show" : "hide"}`}
                      onClick={() => setToggleMaterial(!toggleMaterial)}
                    >
                      <p>Thu gọn </p>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                  </div>
                </div>
                <div
                  className={`sidebar_content-filter ${
                    sizeFilter ? "active" : ""
                  }`}
                >
                  <div
                    className="sidebar_content-filter__title"
                    onClick={() => setSizeFilter(!sizeFilter)}
                  >
                    <h2>Kích thước</h2>
                    <i className="fas fa-chevron-up"></i>
                  </div>
                  <div className="sidebar_content-filter__content">
                    <ul className={`filter-group`}>
                      {size.map((item, index) => (
                        <li key={index}>
                          <CheckBox>{item.display}</CheckBox>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className={`sidebar_content-filter ${
                    priceFilter ? "active" : ""
                  }`}
                >
                  <div
                    className="sidebar_content-filter__title"
                    onClick={() => setPriceFilter(!priceFilter)}
                  >
                    <h2>Khoảng giá (VNĐ)</h2>
                    <i className="fas fa-chevron-up"></i>
                  </div>
                  <div className="sidebar_content-filter__content">
                    <ul className="filter-custom">
                      {price.map((item, index) => (
                        <li key={index}>
                          <label className="checkbox-shop">
                            <input type="checkbox" />
                            <div className="checkbox-shop__mark">
                              <i className="fas fa-check"></i>
                            </div>
                            <span>{item.display}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-section__product">
              <div className="section_sort">
                <div className="section_sort__left">
                  <span>{data.length} sản phẩm</span>
                </div>
                <div className="section_sort__right">
                  <label onClick={() => setClickedSort(!clickedSort)}>
                    Sắp xếp
                    <span className="text">{itemSort.title}</span>
                    <i className="fas fa-chevron-down"></i>
                  </label>
                  <div className="open-filter_mb" onClick={toggleSideBarMb}>
                    <span>Bộ lọc</span>
                    <img src={iconFilterMb} alt="" />
                  </div>
                  <ul style={sortStyle}>
                    {optionSort.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => handleTitleSort(item)}
                        className={`${item.id === itemSort.id ? "active" : ""}`}
                      >
                        <Link to="">{item.title}</Link>
                        <i className="fas fa-check"></i>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Grid col={4} mdCol={4} smCol={2} gap={20}>
                {data?.map((item, index) => (
                  <Products item={item} key={index} />
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};
export default Shop;
