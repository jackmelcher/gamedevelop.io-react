import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const NotFoundPage = () => {
    const data = useStaticQuery(
        graphql`
            query notFound{
                contentfulPage(title:{eq:"404"}){
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
            <SEO title={data.contentfulPage.title} description={data.contentfulPage.description}/>
            <div className="flex-container">
                <div class="home" dangerouslySetInnerHTML={{
                        __html: data.contentfulPage.body.childMarkdownRemark.html,
                    }}/>
            </div>
        </Layout>
    )
}

export default NotFoundPage
