import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./New.scss";

const News = (props) => {
  return (
    <div className="news">
      <Link to="/">
        <div className="news-image">
          <img src={props.item.image} alt="" />
        </div>
        <div className="news-title">
          <h3>{props.item.title}</h3>
        </div>
        <div className="news-description">
          <p>{props.item.description}</p>
        </div>
        <div className="news-date">
          <i className="far fa-clock"></i>
          <span>{props.item.date}</span>
        </div>
      </Link>
    </div>
  );
};

export default News;
