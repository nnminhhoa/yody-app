import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import DataSlider, { DataSliderMd } from "../../assets/data/dataSlider";
import "./HeroSlider.scss";

const HeroSlider = () => {
  const ref = useRef();
  const toggleRef = useRef();
  const handleScroll = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      toggleRef.current.classList.add("toggle-slider");
    } else {
      toggleRef.current.classList.remove("toggle-slider");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nextSlider = () => {
    ref.current.slickPrev();
  };

  const prevSlider = () => {
    ref.current.slickNext();
  };
  const settings = {
    className: "section-outstanding__slider",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    rows: 1,
    dots: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider__main big_slider" ref={toggleRef}>
        <Slider ref={ref} {...settings}>
          {DataSlider.map((item, index) => (
            <div className="slider__main__content" key={index}>
              <img src={item.image} alt="imageSlider" />
            </div>
          ))}
        </Slider>
        <div className="slider__button">
          <div className="slider__button__left" onClick={nextSlider}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="slider__button__right" onClick={prevSlider}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <div className="slider__main md_slider">
        <Slider {...settings}>
          {DataSliderMd.map((item, index) => (
            <div className="slider__main__content" key={index}>
              <img src={item.image} alt="imageSlider" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HeroSlider;
