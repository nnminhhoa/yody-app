import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import dataProducts from "../../assets/data/dataProducts";

const Catalog = (props) => {
  const { pathname } = useLocation();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dataProducts.getProductBySlug(pathname.replace("/", "")));
  }, [pathname]);
  console.log(data);
  return <div>Male</div>;
};

export default Catalog;
