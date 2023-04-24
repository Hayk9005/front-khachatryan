import React, { useState } from "react";
import "./Header.scss";
import logo from "../../Images/Logotype.png";
import search from "../../Images/search.png";
import menuIcon from "../../Images/Menu Icon.png";
import LeftMenu from "../LeftMenu/LeftMenu";


export default function Header() {
  const [show, setShow] = useState(false)
  const onShow = () =>{
    setShow(true)
  }
  return (
    <div className="header">
      <img src={logo} alt="logo-picture" />
      <img src={search} alt="search-picture" className="search-icon"/>
      <img src={menuIcon} alt="menu-icon-picture" className="menu-icon" onClick={onShow} />
      <LeftMenu show = {show} setShow = {setShow}/>
    </div>
  );
}
