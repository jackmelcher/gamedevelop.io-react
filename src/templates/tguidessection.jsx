import React from "react"
import { Link } from "gatsby"

import Layoutg from "../../components/layoutguides"
import SEO from "../../components/seo"

const GuideSection = () => {
    /*
    const data = useStaticQuery(
        graphql`
          query($linkslug: String!){
            allContentfulGuide(filter: {category: {eq: $linkslug}}) {
              edges {
                node {
                  title
                  linkslug
                  category
                  excerpt
                }
              }
            }
          }
        `
    )
    const data2 = useStaticQuery(
        graphql`
            query($linkslug: String!){
                contentfulGuideSection(linkslug:{eq:$linkslug}){
                    title
                    excerpt
                }
            }
        `
    )
    */

    return(
        <Layoutg>
            <SEO title={data2.title} description={data2.excerpt}/>
            <h1>{data2.title}</h1>
            <div className="guideHeaders">
                {
                    data.allContentfulGuideSection.edges.map(edge => {
                        return (
                            <>
                                <Link to={`/guides/${edge.node.category}/${edge.node.linkslug}/`}>{edge.node.title}</Link>
                                <p className="excerpt">
                                    {edge.node.excerpt}
                                </p>
                            </>
                        )
                    })
                }
            </div>
        </Layoutg>
    );
}
export default GuideSection