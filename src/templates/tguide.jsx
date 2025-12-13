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
            updatedAt
            createdAt
        }
    }
`

const Guides = (props) => {
    const createdDate = new Date(props.data.contentfulGuide.createdAt)
    const updatedDate = new Date(props.data.contentfulGuide.updatedAt)
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return(
        <Layoutg>
            <Seo title={props.data.contentfulGuide.title} description={props.data.contentfulGuide.excerpt}/>
            {
                <div className="guideItem">
                    <div className={"inline-block vertical-align"}>
                        <img className={"guideImage"} src={props.data.contentfulGuide.image} alt={"Decorative Icon"} onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://ik.imagekit.io/ucxasjyuy/placeholder.png";
                        }}/>
                    </div>
                    <h1 className={"guideItemTextBlock vertical-align"}>
                        {props.data.contentfulGuide.title}
                    </h1>
                    <div className="updatedDate">
                        Last Updated: {updatedDate.toLocaleDateString('en-US',options).toString()}
                    </div>
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
                        <div key={index1}>
                            <Link to={`/resources/${resourcelink}`}>
                            {
                                props.data.contentfulGuide.resourcenames.map((resourcename,index2) => {
                                    if(index1 === index2)
                                    {
                                        return (
                                            <p key={index2}>
                                                {resourcename}
                                            </p>
                                        )
                                    }
                                    else
                                    {
                                        return (<p key={index2}></p>);
                                    }
                                })
                            }
                            </Link>
                        </div>
                    )
                })
            }
            <div className="publishedDate">
                Originally Published: {createdDate.toLocaleDateString('en-US',options).toString()}
            </div>
        </Layoutg>
    );
}
export default Guides


