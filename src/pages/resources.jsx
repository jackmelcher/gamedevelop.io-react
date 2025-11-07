import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../css/home.css"

const ResourcePages = () => {

    const data = useStaticQuery(
        graphql`
                query resourcesHome {
                  contentfulRecources {
                    resourceSections {
                      title
                      linkslug
                      resourceSubsections{
                            resourceSheets {
                                title
                                optionvalue
                                icon
                            }
                        }
                    }
                  }
                }
            `
    );

    return(
      <Layout>
        <Seo title="Resources" description="Explore a Database full of game development tools, assets, and services."/>
          <div className="container-padding">
              <div className="margin-center limit-width">
                  <h1 className="header">Resources</h1>
              </div>
              <div className="flex-container row align-items-flex-start justify-content-center">
                  <div className="flex-item-resources rs-container-gap flex-container row wrap justify-content-center limit-width">
                      {
                          data.contentfulRecources.resourceSections.map(resourceSection => {
                            
                              return (
                                  <div to={`/resources/${resourceSection.linkslug}/`}
                                        className="button flex-item-resources-inner" key={resourceSection.linkslug}>
                                      <div className={"flex-container column"}>
                                            <h3>{resourceSection.title}</h3>
                                            <div className={"resource_sheets_lists"}>
                                            {
                                                resourceSection.resourceSubsections.map((resourceSubsection,index) => {
                                                    return (
                                                        resourceSubsection.resourceSheets.map(resourceSheet => {
                                                            return (
                                                                <div key={resourceSheet.optionvalue}>
                                                                    <img src={resourceSheet.icon}></img>
                                                                    <Link to={`/resources/${resourceSheet.optionvalue}/`}>{resourceSheet.title}</Link>
                                                                </div>
                                                            );
                                                        })
                                                    )
                                                })
                                            }
                                            </div>
                                      </div>
                                  </div>
                              );
                          })
                      }
                  </div>
              </div>
          </div>
      </Layout>
    );
}
export default ResourcePages