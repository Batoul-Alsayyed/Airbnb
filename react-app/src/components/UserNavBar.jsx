import React from "react";
import logo from "../../src/airbnb_logo_detail.jpg";
import "../index.css";
import { FaApple } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import { CgDribbble } from "react-icons/cg";

import { CgMenu } from "react-icons/cg";
export default function userNavBar() {
  return (
    <div className="navbar">
      <div className="row">
        <div className="nav-container">
          <div className="nav-container-items">
            <img src={logo}></img>
          </div>
          <div className="nav-container-items">
            <div className="search-bar">
                search bar
            </div>
          </div>
          <div className="nav-container-items">
            <div className="item"><p>Become a host</p></div>
            <div className="item"><CgDribbble/></div>
            <div className="box-item">
                <CgMenu/>
                <FaUserCircle className="user"/>
                </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
