/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"

import SidebarG from "./sidebarg"
import Navbar from "./navbar"
import Footer from "./footer"

import "../css/guides.css"

const Layoutg = ({ children }) => {

  const [openSide, setOpenSide] = useState(true);

  useEffect(() =>{
  });

  function toggleSidebarEvent(){
    toggleSidebar();
  }

  return (
    <div className="flex-main">
      <Navbar>
      <div className="selectbar selectbarGuide">
        <button onClick={(e) => toggleSidebarEvent()}>
          <i className="menuicon fas fa-list"></i>
          <span>Table of Contents</span>
        </button>
      </div>
      {
        openSide && <SidebarG/>
      }
      </Navbar>
      <div className="flex-main-content">
        <div className="guideflex-container">
          <div id="overview" className="guideflex">
            {children}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Layoutg


function toggleSidebar()
{
  var side = document.getElementsByClassName("sidenav")[0];
  if(side.style.display === "none" || side.style.display === "")
  {
      side.style.display = "block";
  }
  else
  {
      side.style.display = "";
  }
}