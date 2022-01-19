import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
  const size = props.size ? "btn-" + props.size : "";

  return (
    <button className={`btn ${size}`}>
      <span className="btn__txt">{props.children}</span>
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
};

export default Button;
