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

const Layout = ({ children }) => {

    return (
        <div className="flex-container column main-container">
            <Navbar/>
            <div className="flex-item">
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
