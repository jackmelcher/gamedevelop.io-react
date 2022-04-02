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
      <Navbar/>
      <div className="flex-container container-padding guide-container row align-items-flex-start">
        <div className="flex-item guide">
            {children}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Layoutg


