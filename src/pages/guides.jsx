import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layoutg from "../components/layoutguides"
import SEO from "../components/seo"

const Guides = () => {
    const data = useStaticQuery(
        graphql`
            query GuideSection {
                introductory: allContentfulGuide(filter: {category: {eq: "introductory"}} sort: {fields: createdAt}) {
                    edges {
                        node {
                            title
                            linkslug
                            excerpt
                        }
                    }
                }
                industry:  allContentfulGuide(filter: {category: {eq: "industry"}} sort: {fields: createdAt}) {
                    edges {
                        node {
                            title
                            linkslug
                            excerpt
                        }
                    }
                }
                business:  allContentfulGuide(filter: {category: {eq: "business-and-marketing"}} sort: {fields: createdAt}) {
                    edges {
                        node {
                            title
                            linkslug
                            excerpt
                        }
                    }
                }
            }
        `
    );
    return(
    <Layoutg>
        <SEO title="Guides" description="Explore GameDevelop.io's various guides on game development."/>
        <h1>Game Development Guides</h1>
        <div className="guideSection">
            <div className="guideSectionHeader">Introductory Guides</div>
            {
                data.introductory.edges.map(edge => {
                    return (
                        <div className="guideItem">
                            <Link className="guideItemLink" to={`/guides/${edge.node.linkslug}/`}>{edge.node.title}</Link>
                            <div className="guideItemExcerpt">
                                {edge.node.excerpt}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="guideSection">
            <div className="guideSectionHeader">Games Industry Guides</div>
            {
                data.industry.edges.map(edge => {
                    return (
                        <div className="guideItem">
                            <Link className="guideItemLink" to={`/guides/${edge.node.linkslug}/`}>{edge.node.title}</Link>
                            <div className="guideItemExcerpt">
                                {edge.node.excerpt}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="guideSection">
            <div className="guideSectionHeader">Business and Marketing Guides</div>
            {
                data.business.edges.map(edge => {
                    return (
                        <div className="guideItem">
                            <Link className="guideItemLink" to={`/guides/${edge.node.linkslug}/`}>{edge.node.title}</Link>
                            <div className="guideItemExcerpt">
                                {edge.node.excerpt}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </Layoutg>
    );
}
export default Guides