import React from "react";
import "./menu-item.component.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-Image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="title">SHOP NOW </span>
    </div>
  </div>
);

export default MenuItem;
