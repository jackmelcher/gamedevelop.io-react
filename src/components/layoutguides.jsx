/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import SidebarG from "./sidebarg"
import Layout from "./layout"
import Navbar from "./navbar"
import Footer from "./footer"

import "../css/guides.css"

const Layoutg = ({ children }) => {

    return (
        <Layout>
            <div className="flex-container row container-padding justify-content-center">
                {/*<SidebarG/>*/}
                <div className="flex-item guide">
                    {children}
                </div>
            </div>
        </Layout>
    )
}
export default Layoutg


