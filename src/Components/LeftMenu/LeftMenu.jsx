import React from "react";
import logo from "../../Images/Logotype.png";
import CloseIcon from "../../Images/CloseIcon.png";
import ArrowDown from "../../Images/Arrow-down.png";
import "./LeftMenu.scss"



export default function LeftMenu({show, setShow} ) {
    const onClose = ()=>{
        setShow(false)  
    }
  return (
    
    <div className={`leftMenu ${show ? "": "hidden"}`}>
    <div className="left-menu-wrapper">
    <div className="top-section">
        <img src={logo} alt="logo-picture" />
        <img src={CloseIcon} alt="close-icon-picture" onClick={onClose} />
    </div>
      <ul className="leftNavList">
        <li className="item">
          <span>Demos</span>
          <img src={ArrowDown} alt="ArrowDown-pictures" />
        </li>
        <li className="item">
          <span>Post</span>
          <img src={ArrowDown} alt="ArrowDown-pictures" />
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
    </div>
    </div>
  );
}
