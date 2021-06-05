/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useEffect } from "react"

import SidebarG from "./sidebarg"
import Navbar from "./navbar"
import Footer from "./footer"

import "../css/guides.css"

const Layoutg = ({ children }) => {


  useEffect(() =>{
  });

  

  return (
    <div className="flex-main">
      <SidebarG/>
      <Navbar/>
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


