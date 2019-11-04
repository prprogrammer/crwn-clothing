import React from "react";
import "./menu-item.component.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${linkUrl}`)}
  >
    <div
      className="background-Image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="title">SHOP NOW </span>
    </div>
  </div>
);

export default withRouter(MenuItem);
