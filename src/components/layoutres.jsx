/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Footer from "./footer"

import "../css/guides.css"

const Layoutr = ({ children }) => {

  return (
    <div className="flex-main">
        <div className="flex-main-content">
            {children}
        </div>
        <Footer/>
    </div>
  )
}
export default Layoutr