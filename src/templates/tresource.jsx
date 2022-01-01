/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */


import React from "react"
import { Link, graphql } from "gatsby"

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

    let resourceMap = new Map();
    if(props.data.contentfulResourceSections.popularSheet != null)
    {
        resourceMap.set(props.data.contentfulResourceSections.popularSheet.optionvalue,props.data.contentfulResourceSections.popularSheet.csvlink);
    }
    props.data.contentfulResourceSections.resourceSubsections.map(resourceSubsection => {
        resourceSubsection.resourceSheets.map(resourceSheet => {
            resourceMap.set(resourceSheet.optionvalue,resourceSheet.csvlink);
        });
    });

    /*props.data.contentfulResourceSections.resourceSubsections.resourceSheets.map(resourceSheet => {
        resourceMap.set(resourceSheet.optionvalue,resourceSheet.csvlink);
    });*/

    return(
        <Resources map={resourceMap}>
            {
                props.data.contentfulResourceSections.popularSheet &&
                <option value={props.data.contentfulResourceSections.popularSheet.optionvalue}>{props.data.contentfulResourceSections.popularSheet.title}</option>
            }
            {
                props.data.contentfulResourceSections.resourceSubsections.map(resourceSubsection => {
                    return(
                        <optgroup label={resourceSubsection.title}>
                        {
                            resourceSubsection.resourceSheets.map(resourceSheets => {
                                return(
                                    <option value={resourceSheets.optionvalue}>{resourceSheets.title}</option>
                                );
                            })
                        }
                        </optgroup>
                    );
                })
            }
        </Resources>
    );
}
export default ResourceSection

