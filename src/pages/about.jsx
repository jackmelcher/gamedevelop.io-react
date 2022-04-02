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
                <div className="about container-padding" dangerouslySetInnerHTML={{
                    __html: data.contentfulPage.body.childMarkdownRemark.html,
                  }}/>
        </Layout>
    )
}
export default About
