import React from "react";
import classes from "./BreadcrumbMenu.module.css";
const BreadcrumbMenu = () => {
  return (
    <div>
      <ul className={classes.breadcrumb}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Clothing</a>
        </li>
        <li>
          <a href="/">Mens Clothing</a>
        </li>
        <li>All Mens Clothing</li>
      </ul>
    </div>
  );
};

export default BreadcrumbMenu;
