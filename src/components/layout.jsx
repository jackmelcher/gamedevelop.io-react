/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import "../css/global.css"
import  "../css/fontawesome-free-5.13.1-web/css/all.min.css"

const Layout = ({ children }) => {

  return (
    <div className="flex-main">
      <Navbar/>
      <div className="flex-main-content">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
