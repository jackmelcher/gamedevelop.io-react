import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import "../css/about.css"

const About = () => {
    const data = useStaticQuery(
        graphql`
            query About{
                contentfulPage(title:{eq:"About"}){
                    title
                    description
                    body {
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
            <Seo title={data.contentfulPage.title} description={data.contentfulPage.description}/>
            <div className="flex-container">
                <div className="about" dangerouslySetInnerHTML={{
                    __html: data.contentfulPage.body.childMarkdownRemark.html,
                  }}/>
            </div>
        </Layout>
    )
}
export default About
