/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */


import React from "react"
import { graphql } from "gatsby"

import Resources from "../components/resources"

export const query = graphql`
    query ($linkslug: String!) {
      contentfulResourceSections (linkslug: {eq: $linkslug}) {
        title
        resourceSubsections {
          title
          resourceSheets {
            csvlink
            title
            optionvalue
          }
        }
        popularSheet {
          csvlink
          optionvalue
          title
        }
      }
    }
`

const ResourceSection = (props) => {

    return(
        // props.pageContext.resourceMap comes from gatsby-node.js during Create Pages.
        <Resources map={props.pageContext.resourceMap} title={props.pageContext.title}>
            {
                // (props.data.contentfulResourceSections.popularSheet != null)
                //     ?<option value={props.data.contentfulResourceSections.popularSheet.optionvalue}>{props.data.contentfulResourceSections.popularSheet.title}</option>
                //     :""
            }
            {
                // props.data.contentfulResourceSections.resourceSubsections.map(resourceSubsection => {
                //     return(
                //         <optgroup label={resourceSubsection.title} key={resourceSubsection.title}>
                //         {
                //             resourceSubsection.resourceSheets.map(resourceSheets => {
                //                 return(
                //                     <option value={resourceSheets.optionvalue} key={resourceSheets.optionvalue}>{resourceSheets.title}</option>
                //                 );
                //             })
                //         }
                //         </optgroup>
                //     );
                // })
            }
        </Resources>
    );
}
export default ResourceSection


