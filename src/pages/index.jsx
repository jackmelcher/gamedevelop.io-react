import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

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
        <Seo title={data.contentfulHome.title} description={data.contentfulHome.description}/>
        <div className="home">
            <div>
                <h1 className="header">{data.contentfulHome.header}</h1>
                <img src="https://ik.imagekit.io/ucxasjyuy/logo.svg" alt="logo" className="logomain"/>
                <h1 className="subheader">{data.contentfulHome.subheader}</h1>
            </div>
            <div dangerouslySetInnerHTML={{
                __html: data.contentfulHome.sectionResources.childMarkdownRemark.html,
            }}/>
            <div>
                <Link to="/resources/" className="button button_main">
                    <h3>VIEW RESOURCES</h3>
                    <i className="fas fa-icons"></i>
                    <i className="fas fa-tools"></i>
                    <i className="fas fa-comments-dollar"></i>
                </Link>
            </div>
            <div dangerouslySetInnerHTML={{
                __html: data.contentfulHome.sectionGuides.childMarkdownRemark.html,
            }}/>
            <div>
                <Link to="/guides/" className="button button_main">
                    <h3>VIEW GUIDES</h3>
                    <i className="fas fa-file-alt"></i>
                    <i className="fas fa-list-ol"></i>
                </Link>
            </div>
        </div>
    </Layout>
    )
}
export default IndexPage
