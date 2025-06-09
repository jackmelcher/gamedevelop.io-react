/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Layout from "./layout"
import "../css/guides.css"

const Layoutg = ({ children }) => {

    return (
        <Layout>
            <div className="flex-container row container-padding justify-content-center">
                {/*<SidebarG/>*/}
                <div className={"guide"}>
                    {children}
                </div>
            </div>
        </Layout>
    )
}
export default Layoutg


