import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type from "../../assets/data/dataCategoryFilter";
import style, {
  colors,
  material,
  price,
  size,
} from "../../assets/data/dataCategoryFilter";
import dataProducts from "../../assets/data/dataProducts";
import CheckBox from "../CheckBox/CheckBox";
import Grid from "../Grid/Grid";
import Products from "../Products/Products";
import "./Shop.scss";

const Shop = () => {
  const { pathname } = useLocation();
  const topRef = useRef();

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

  const data = dataProducts.getProductByPath(pathname);

  const [productFilter, setProductFilter] = useState(false);
  const [colorFilter, setColorFilter] = useState(false);
  const [materialFiler, setMaterialFilter] = useState(false);
  const [sizeFilter, setSizeFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);

  const [toggleProduct, setToggleProduct] = useState(false);
  const [toggleMaterial, setToggleMaterial] = useState(false);
  const [toggleColor, setToggleColor] = useState(false);

  return (
    <div className="shop" ref={topRef}>
      <div className="shop-header">
        <div className="shop-header__content">
          <Link to="/">Trang chủ</Link>
          <h3>Thời trang nam bán chạy</h3>
        </div>
      </div>
      <div className="container">
        <div className="shop-section">
          <div className="sidebar">
            <div className={`sidebar-filter ${productFilter ? "active" : ""}`}>
              <div
                className="sidebar-filter__title"
                onClick={() => setProductFilter(!productFilter)}
              >
                <h2>Loại sản phẩm</h2>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="sidebar-filter__content">
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
            <div className={`sidebar-filter ${colorFilter ? "active" : ""}`}>
              <div
                className="sidebar-filter__title"
                onClick={() => setColorFilter(!colorFilter)}
              >
                <h2>Màu sắc</h2>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="sidebar-filter__content">
                <ul
                  className={`filter-group ${toggleColor ? "max-height" : ""}`}
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
            <div className={`sidebar-filter ${materialFiler ? "active" : ""}`}>
              <div
                className="sidebar-filter__title"
                onClick={() => setMaterialFilter(!materialFiler)}
              >
                <h2>Chất liệu</h2>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="sidebar-filter__content">
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
            <div className={`sidebar-filter ${sizeFilter ? "active" : ""}`}>
              <div
                className="sidebar-filter__title"
                onClick={() => setSizeFilter(!sizeFilter)}
              >
                <h2>Kích thước</h2>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="sidebar-filter__content">
                <ul className={`filter-group`}>
                  {size.map((item, index) => (
                    <li key={index}>
                      <CheckBox>{item.display}</CheckBox>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`sidebar-filter ${priceFilter ? "active" : ""}`}>
              <div
                className="sidebar-filter__title"
                onClick={() => setPriceFilter(!priceFilter)}
              >
                <h2>Khoảng giá (VNĐ)</h2>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="sidebar-filter__content">
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
          <div>
            <Grid col={4} mdCol={3} smCol={2} gap={20}>
              {data?.map((item, index) => (
                <Products item={item} key={index} />
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shop;
