import React from "react";
import "./SuspenseFallback.scss";

const SuspenseFallback = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SuspenseFallback;
