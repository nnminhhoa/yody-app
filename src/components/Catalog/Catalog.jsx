import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dataProducts from "../../assets/data/dataProducts";
import numberWithCommas from "../../utils/numberWithCommas";
import Helmet from "../Helmet/Helmet";
import "./Catalog.scss";
import iconCheckSize from "../../assets/images-icon/tick.png";
import imgGuideSize from "../../assets/images-icon/size.png";
import imgTickProperties from "../../assets/images-icon/tick-line.bmp";
import Servicer from "../Servicer/Servicer";
import YouTube from "react-youtube";
import Section, { SectionProduct, SectionTitle } from "../Section/Section";
import Slider from "react-slick";
import { dataSocial } from "../../assets/data/dataCategorySection";

const Catalog = () => {
  const { pathname } = useLocation();
  const [product, setProduct] = useState([]);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [valueInputQty, setValueInputQty] = useState(1);

  const [valueRangeHeight, setValueRangeHeight] = useState(145);
  const [valueRangeWeight, setValueRangeWeight] = useState(40);

  const [valueBgRangeHeight, setValueBgRangeHeight] = useState();
  const [valueBgRangeWeight, setValueBgRangeWeight] = useState();

  useEffect(() => {
    const data = dataProducts.getProductBySlug(pathname.replace("/", ""));
    setProduct(data);
    setColor(data.color[0]);
    setSize(data.size[0]);
  }, [pathname]);

  const sale = product.sale;
  const priceSale = product.price * ((100 - sale) / 100);

  const handleClickBtn = (type) => {
    if (type === "+") {
      setValueInputQty(valueInputQty + 1);
    } else {
      setValueInputQty(valueInputQty === 1 ? valueInputQty : valueInputQty - 1);
    }
  };

  const styleRangeHeight = {
    background: `linear-gradient(to right, rgb(247, 71, 46) 0%, rgb(247, 71, 46) ${valueBgRangeHeight}%, rgb(242, 242, 242) ${valueBgRangeHeight}%, rgb(242, 242, 242) 100%)`,
  };

  const styleRangeWeight = {
    background: `linear-gradient(to right, rgb(247, 71, 46) 0%, rgb(247, 71, 46) ${valueBgRangeWeight}%, rgb(242, 242, 242) ${valueBgRangeWeight}%, rgb(242, 242, 242) 100%)`,
  };
  const inputRangeHeightRef = useRef();
  const inputRangeWeightRef = useRef();

  const handleRangeHeight = (e) => {
    setValueRangeHeight(e.target.value);
    const min = inputRangeHeightRef.current.min;
    const max = inputRangeHeightRef.current.max;
    const x = ((e.target.value - min) / (max - min)) * 100;
    setValueBgRangeHeight(x);
  };

  const handleRangeWeight = (e) => {
    setValueRangeWeight(e.target.value);
    const min = inputRangeWeightRef.current.min;
    const max = inputRangeWeightRef.current.max;
    const x = ((e.target.value - min) / (max - min)) * 100;
    setValueBgRangeWeight(x);
  };

  const sizeChartRef = useRef();
  const handleClickSizeChart = () => {
    sizeChartRef.current.classList.toggle("current");
  };

  const opts = {
    height: "350px",
    width: "60%",
    playerVar: {
      autoplay: 1,
      origin: window.location.href,
    },
  };

  const settings = {
    className: "section-outstanding__slider",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 4000,
    rows: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          rows: 1,
        },
      },
    ],
  };

  const modalReviewRef = useRef();
  const modalReviewOpacityRef = useRef();

  const handleModalReview = () => {
    modalReviewRef.current.classList.toggle("active");
    modalReviewOpacityRef.current.classList.toggle("active");
  };

  return (
    <Helmet title={product.title}>
      <div className="catalog">
        <div className="catalog-header">
          <div className="container-medium">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Trang chủ</Link>
                <span>/</span>
              </li>
              <li>
                <Link to="/">Sản phẩm</Link>
                <span>/</span>
              </li>
              <li>
                <strong>{product.title}</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-medium">
          <div className="catalog-product">
            <div className="catalog-product_left">
              <div className="gallery">
                <button className="gallery-btn">
                  <i className="fas fa-chevron-up"></i>
                </button>
                <div className="gallery-slick">
                  <div className="gallery-slick_image">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="gallery-slick_image">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="gallery-slick_image">
                    <img src={product.image} alt="" />
                  </div>
                </div>
                <button className="gallery-btn">
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
              <div className="catalog-product_left__image">
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className="catalog-product_detail">
              <h1 className="title-head">{product.title}</h1>
              <div className="product-info">
                <div className="product-info_top">
                  <div className="product-info_top__sku">
                    Mã: <span>PHM3000-DOD-L</span>
                  </div>
                  <div
                    className="product-info_top__review"
                    title="Not rated yet!"
                  >
                    <div className="sapo-product">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <span>(2 nhận xét)</span>
                  </div>
                </div>
                <div className="product-info_price">
                  <div className="product-info_price__special">
                    <span>
                      {numberWithCommas(Math.round(priceSale / 10000) * 10000)}đ
                    </span>
                  </div>
                  <div className="product-info_price__old">
                    <span>{numberWithCommas(Number(product.price))}đ</span>
                  </div>
                </div>
                <div className="product-info_form">
                  <div className="select-color">
                    <div className="select-color_title">
                      <h2>
                        Màu sắc: <span>{color}</span>
                      </h2>
                    </div>
                    <div className="select-color_list">
                      {product.color?.map((item, index) => (
                        <div
                          className={`select-color_list__item bg-${item} ${
                            color === item ? "active" : ""
                          }`}
                          key={index}
                          onClick={() => setColor(item)}
                          title={item}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="select-size">
                    <div className="select-size_title">
                      <h2>
                        Kích cỡ: <span>{size}</span>
                      </h2>
                    </div>
                    <div className="select-size_list">
                      {product.size?.map((item, index) => (
                        <div
                          className={`select-size_list__item ${
                            size === item ? "active" : ""
                          }`}
                          key={index}
                          onClick={() => setSize(item)}
                        >
                          <span>
                            {item}
                            <img src={iconCheckSize} alt="" />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="product-info_add">
                  <div className="form-input_title">
                    <h2>Chọn số lượng:</h2>
                  </div>
                  <div className="form-input_product">
                    <button
                      className="form-input_product__btn"
                      onClick={() => handleClickBtn("-")}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={valueInputQty}
                      onChange={(e) => setValueInputQty(Number(e.target.value))}
                    />
                    <button
                      className="form-input_product__btn"
                      onClick={() => handleClickBtn("+")}
                    >
                      +
                    </button>
                  </div>
                  <div className="size-guide-box">
                    <div
                      className="size-guide-box_left"
                      onClick={handleClickSizeChart}
                    >
                      <img src={imgGuideSize} alt="" />
                      <p>Gợi ý tìm size </p>
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="size-guide-box_right">
                      <Link to="/">Bảng size chuẩn</Link>
                    </div>
                  </div>
                  <div className="size-chart" ref={sizeChartRef}>
                    <div className="size-chart_modal">
                      <div className="form-slide">
                        <p>Chiều cao</p>
                        <div className="form-slide_item">
                          <input
                            ref={inputRangeHeightRef}
                            type="range"
                            min={145}
                            max={185}
                            value={valueRangeHeight}
                            onChange={(e) => handleRangeHeight(e)}
                            style={styleRangeHeight}
                          />
                        </div>
                        <div className="form-slide_value">
                          <span>{valueRangeHeight}cm</span>
                        </div>
                      </div>
                      <div className="form-slide">
                        <p>Cân nặng</p>
                        <div className="form-slide_item">
                          <input
                            ref={inputRangeWeightRef}
                            type="range"
                            min={40}
                            max={80}
                            value={valueRangeWeight}
                            onChange={(e) => handleRangeWeight(e)}
                            style={styleRangeWeight}
                          />
                        </div>
                        <div className="form-slide_value">
                          <span>{valueRangeWeight}kg</span>
                        </div>
                      </div>
                      <div className="result-size">
                        <p>Gợi ý cho bạn:</p>
                        <span>S</span>
                      </div>
                      <div className="close-form_size">
                        <span onClick={handleClickSizeChart}>Đóng</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-btn">
                    <Link to="cart" className="addtocart">
                      <button>
                        <i className="fa-solid fa-cart-plus"></i>
                        <span>Thêm vào giỏ hàng</span>
                      </button>
                    </Link>
                    <Link to="/" className="buynow">
                      <button>
                        <span>Mua ngay</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="catalog-list_service">
                <Servicer
                  col={2}
                  mdCol={2}
                  smCol={2}
                  gap={15}
                  servicerCatalog
                />
              </div>
              <div className="product-properties">
                <h2 className="product-properties_title">Đặc điểm sản phẩm:</h2>
                <div className="product-properties_list">
                  {product.detail?.map((item, index) => (
                    <div key={index} className="product-properties_list__item">
                      <img src={imgTickProperties} alt="" />
                      <p>{item.make}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="catalog-content">
            <div className="catalog-content_title">
              <h2>Chi tiết sản phẩm</h2>
            </div>
            <div className="catalog-content_ytb">
              <YouTube opts={opts} videoId="581v_t3eafE" />
            </div>
            <div className="catalog-content_review">
              <div className="catalog-content_review__title">
                Đánh giá <span>{product.title}</span>
              </div>
              <div className="catalog-content_review__form">
                <div className="review-box_empty">
                  <p>
                    Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành
                    người đầu tiên đánh giá cho sản phẩm này!
                  </p>
                  <div
                    className="review-box_empty__btn"
                    onClick={handleModalReview}
                  >
                    <button>Gửi đánh giá của bạn</button>
                  </div>
                </div>
                <div
                  className="modal-review-opacity"
                  ref={modalReviewOpacityRef}
                  onClick={handleModalReview}
                ></div>
                <div className="review-box_content" ref={modalReviewRef}>
                  <div className="form-review">
                    <div
                      className="form-review_close"
                      onClick={handleModalReview}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="form-review_title">
                      <h2>Đánh giá sản phẩm</h2>
                      <p>{product.title}</p>
                    </div>
                    <div className="form-review_rating">
                      <div className="form-review_rating__title">
                        <p>Đánh giá của bạn về sản phẩm:</p>
                      </div>
                      <div className="form-review_rating__group">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <div className="form-review_contact">
                      <div className="form-review_contact__input">
                        <input type="text" placeholder="Nhập họ tên của bạn" />
                      </div>
                      <div className="form-review_contact__input">
                        <input type="email" placeholder="Nhập email của bạn" />
                      </div>
                      <div className="form-review_contact__texta">
                        <textarea
                          placeholder="Nhập nội dung đánh giá của sản phẩm này"
                          id=""
                          cols="30"
                          rows="6"
                        ></textarea>
                      </div>
                      <div className="form-review_contact__btn">
                        <button onClick={handleModalReview}>
                          Gửi đánh giá
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Section>
          <SectionTitle>CÓ THỂ BẠN MUỐN MUA</SectionTitle>
          <SectionProduct
            dataProduct={dataProducts.getProductSale(8)}
            containerMd
            col={4}
            mdCol={3}
            smCol={2}
          />
        </Section>
        <div className="footer-social">
          <Section>
            <SectionTitle>KẾT NỐI VỚI CHÚNG TÔI</SectionTitle>
            <div className="container-medium">
              <Slider {...settings}>
                {dataSocial.getImageSocial().map((item, index) => (
                  <Link to="/" className="footer-social_image" key={index}>
                    <img src={item.image} alt="" />
                  </Link>
                ))}
              </Slider>
            </div>
          </Section>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
