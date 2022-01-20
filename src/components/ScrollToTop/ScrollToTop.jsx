import React, { useEffect, useRef } from "react";
import "./ScrollToTop.scss";

const ScrollToTop = () => {
  const scrollToTop = useRef();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const visibleScroll = () => {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      scrollToTop.current.classList.add("visible");
    } else {
      scrollToTop.current.classList.remove("visible");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", visibleScroll);
    return () => {
      window.removeEventListener("scroll", visibleScroll);
    };
  }, []);

  return (
    <div className="scroll-top" ref={scrollToTop} onClick={handleScrollToTop}>
      <i className="fas fa-arrow-up"></i>
    </div>
  );
};

export const MessContact = () => {
  return (
    <div className="mess-contact">
      <i className="far fa-comments"></i>
    </div>
  );
};

export default ScrollToTop;
