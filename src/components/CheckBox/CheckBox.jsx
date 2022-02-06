import React, { useRef } from "react";
import "./CheckBox.scss";

const CheckBox = (props) => {
  const inputRef = useRef();
  return (
    <label className="custom-checkbox">
      <input type="checkbox" ref={inputRef} />
      <span>{props.children}</span>
    </label>
  );
};

export default CheckBox;
