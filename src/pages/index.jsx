import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/home.css"

const IndexPage = () => {
    const data = useStaticQuery(
        graphql`
            query Home{
                contentfulHome(title:{eq:"Home"}){
                    title
                    description
                    header
                    subheader
                    sectionResources {
                        childMarkdownRemark {
                            html
                        }
                    }
                    sectionGuides {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        `
    );
    return(
    <Layout>
        <SEO title={data.contentfulHome.title} description={data.contentfulHome.description}/>
            <div className="home">
                <h1 className="header">{data.contentfulHome.header}</h1> 
                <img src="https://ik.imagekit.io/ucxasjyuy/logo1.svg" alt="logo" className="logomain"/>
                <h1 className="subheader">{data.contentfulHome.subheader}</h1>
            </div>
            <div className="home" dangerouslySetInnerHTML={{
                    __html: data.contentfulHome.sectionResources.childMarkdownRemark.html,
                  }}/>
            <div className="home">
                <Link to="/resources/" className="button button_main">
                    VIEW RESOURCES
                </Link>
            </div>
            <div className="home" dangerouslySetInnerHTML={{
                    __html: data.contentfulHome.sectionGuides.childMarkdownRemark.html,
                  }}/>
            <div className="home">
                <Link to="/guides/" className="button button_main">
                    VIEW GUIDES
                </Link>
            </div>
    </Layout>
    )
}
export default IndexPage
