import React, { useRef } from "react";
import Products from "../Products/Products";
import Slider from "react-slick";
import "./Section.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";

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
  const ref = useRef();
  const nextSlider = () => {
    ref.current.slickPrev();
  };

  const prevSlider = () => {
    ref.current.slickNext();
  };
  const settings = {
    className: "section-outstanding__slider",
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
  return (
    <div className="container">
      <div className="section__body">
        <Slider ref={ref} {...settings}>
          {props.data.map((item) => (
            <Products key={item.id} item={item} />
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
      </div>
      <Button>Xem thêm</Button>
    </div>
  );
};

export default Section;
