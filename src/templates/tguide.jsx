/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */


import React from "react"
import { Link, graphql } from "gatsby"

import Layoutg from "../components/layoutguides"
import Seo from "../components/seo"

export const query = graphql`
    query($linkslug: String!){
        contentfulGuide(linkslug: {eq: $linkslug}) {
            title
            image
            excerpt
            body{
                childMarkdownRemark{
                    html
                }
            }
            resourcenames
            resourcelinks
        }
    }
`

const Guides = (props) => {

    return(
        <Layoutg>
            <Seo title={props.data.contentfulGuide.title} description={props.data.contentfulGuide.excerpt}/>
            {
                <div className="guideItem">
                    <div className={"inline-block vertical-align"}>
                        <img className={"guideItemImage"} src={props.data.contentfulGuide.image} alt={"Decorative Icon"} onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://ik.imagekit.io/ucxasjyuy/placeholder.png";
                        }}/>
                    </div>
                    <h1 className={"guideItemTextBlock vertical-align"}>
                        {props.data.contentfulGuide.title}
                    </h1>
                </div>
            }
            {
                <div dangerouslySetInnerHTML={{
                    __html: props.data.contentfulGuide.body.childMarkdownRemark.html,
                  }}
                /> 
            }
            {props.data.contentfulGuide.resourcenames && <div><h2>Resources</h2></div>}
            {
                props.data.contentfulGuide.resourcelinks && 
                props.data.contentfulGuide.resourcelinks.map((resourcelink, index1) => {
                    return (
                        <p>
                            <Link to={`/resources/${resourcelink}`}>
                            {
                                props.data.contentfulGuide.resourcenames.map((resourcename,index2) => {
                                    if(index1 === index2)
                                    {
                                        return (
                                            <>
                                            {resourcename}
                                            </>
                                        )
                                    }
                                    else
                                    {
                                        return (<></>);
                                    }
                                })
                            }
                            </Link>
                        </p>
                    )
                })
            }
        </Layoutg>
    );
}
export default Guides


