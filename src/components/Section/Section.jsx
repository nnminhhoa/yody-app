import React, { useRef } from "react";
import Products from "../Products/Products";
import Slider from "react-slick";
import "./Section.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Grid from "../Grid/Grid";
import News from "../News/News";
import { Link } from "react-router-dom";
import removeAccents from "../../utils/removeAccents";

const Section = (props) => {
  const bg = props.backgroundColor ? "bg-" + props.backgroundColor : "bg-main";
  return <div className={`section ${bg}`}>{props.children}</div>;
};

Section.propTypes = {
  backgroundColor: PropTypes.string,
};

export const SectionTitle = (props) => {
  return <div className="section__title">{props.children}</div>;
};
export const SectionBanner = (props) => {
  return (
    <div className="section__banner container">
      <img src={props.banner} alt="" />
    </div>
  );
};

export const SectionBody = (props) => {
  const SliderProductsRef = useRef();
  const SliderNewsRef = useRef();

  const nextSlider = () => {
    SliderProductsRef.current.slickPrev();
  };

  const prevSlider = () => {
    SliderProductsRef.current.slickNext();
  };

  const nextSliderNews = () => {
    SliderNewsRef.current.slickPrev();
  };

  const prevSliderNews = () => {
    SliderNewsRef.current.slickNext();
  };

  const settingsSliderProducts = {
    className: "section-slider__products",
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  const settingsDataNews = {
    className: "section-slider__news",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      {props.dataProduct ? (
        <>
          <div className="section__body">
            <Slider ref={SliderProductsRef} {...settingsSliderProducts}>
              {props.dataProduct?.map((item) => (
                <Products slider key={item.id} item={item} />
              ))}
            </Slider>
            <div className="section__body-slider_button">
              <div className="button__left" onClick={nextSlider}>
                <i className="fas fa-arrow-left"></i>
              </div>
              <div className="button__right" onClick={prevSlider}>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
            <Button>Xem thêm</Button>
          </div>
        </>
      ) : (
        ""
      )}
      {props.dataNew ? (
        <>
          <div className="section__body">
            <Slider ref={SliderNewsRef} {...settingsDataNews}>
              {props.dataNew?.map((item) => (
                <News key={item.id} item={item} />
              ))}
            </Slider>
            <div className="section__body-slider_button">
              <div className="button__left" onClick={nextSliderNews}>
                <i className="fas fa-arrow-left"></i>
              </div>
              <div className="button__right" onClick={prevSliderNews}>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
            <Button>Xem thêm</Button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export const SectionProduct = (props) => {
  return (
    <div className="container">
      <div className="section-product">
        <Grid col={5} mdCol={4} smCol={2} gap={20}>
          {props.dataProduct?.map((item, index) => (
            <Products key={index} item={item} />
          ))}
        </Grid>
      </div>
      <Button>Xem thêm</Button>
    </div>
  );
};

export const SectionCategory = (props) => {
  return (
    <div className="container">
      <Grid col={4} mdCol={3} smCol={2} gap={20}>
        {props.dataCategory?.map((item, index) => (
          <Link to="/" key={index}>
            <div className="section-category">
              <img src={item.image} alt="" />
              <span>{item.title}</span>
              {item.hot ? (
                <span className={`hot ${item.hot === "sale" ? "sale" : ""}`}>
                  {item.hot}
                </span>
              ) : (
                ""
              )}
            </div>
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export const SectionCateStyle = (props) => {
  return (
    <div className="container">
      <div className="section-catestyle">
        <Grid col={2} mdCol={1} smCol={1} gap={10}>
          {props.dataBannerCate?.map((item, index) => (
            <figure className="section-catestyle__left" key={index}>
              {item.banner1?.map((item, index) => (
                <div className="section-catestyle__left-item" key={index}>
                  <img key={index} src={item.image} alt={item.title} />
                  <figcaption>
                    <div className="text-figcaption">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                    <Link to="#"></Link>
                  </figcaption>
                </div>
              ))}
            </figure>
          ))}
          <div className="section-catestyle__right">
            {props.dataBannerCate?.map((item, index) => (
              <Grid key={index} col={2} mdCol={2} smCol={1} gap={10}>
                {item.banner2?.map((item, index) => (
                  <figure key={index} className="section-catestyle__right-item">
                    <img src={item.image} alt={item.title} />
                    <figcaption>
                      <div className="text-figcaption">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <Link to="#"></Link>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </Grid>
            ))}
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Section;
