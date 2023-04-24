import React, { useEffect, useState } from "react";
import "./NavMenu.scss";
import ArrowDown from "../../Images/Arrow-down.png";

export default function NavMenu() {

  return (
    <div className="navmenu">
      <hr />
      <ul className="navlist">
        <li className="item">
          <span>Demos</span>
          <img src={ArrowDown} alt="ArrowDown-pictures" />
        </li>
        <li className="item">
          <span>Post</span>
          <img src={ArrowDown} alt="ArrowDown-pictures" />
          <ul>
            <li>
              <span>Post Header</span>
              <img src={ArrowDown} alt="ArrowDown-pictures" />
            </li>
            <li>
              <span>Post Layout</span>
              <img src={ArrowDown} alt="ArrowDown-pictures" />
            </li>
            <li>
              <span>Share Buttons</span>
              <img src={ArrowDown} alt="ArrowDown-pictures" />
            </li>
            <li>
              <span>Gallery Post</span>
              <img src={ArrowDown} alt="ArrowDown-pictures" />
            </li>
            <li>
              <span>Video Post</span>
              <img src={ArrowDown} alt="ArrowDown-pictures" />
            </li>
          </ul>
        </li>
        <li className="item">
          <span>Features</span>
          <img src={ArrowDown} alt="ArrowDown-pictures" />
        </li>
        <li className="item">
          <span>Categories</span>
          <img src={ArrowDown} alt="ArrowDown-pictures" />
        </li>
        <li className="item">
          <span>Shop</span>
          <img src={ArrowDown} alt="ArrowDown-pictures" />
        </li>
        <li className="item">
          <span>Buy Now</span>
        </li>
      </ul>
      <hr />
    </div>
  );
}
