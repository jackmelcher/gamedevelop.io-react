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
                      fontawesomeicons
                      linkslug
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
                                  <Link to={`/resources/${resourceSection.linkslug}/`}
                                        className="button button_main flex-item-resources-inner">
                                      <div className={"flex-container column justify-content-space-between flex-padding-rs"}>
                                          <h3>{resourceSection.title}</h3>
                                          <div className={"flex-item-padding"}></div>
                                          <div className={""}>
                                              {
                                                  resourceSection.fontawesomeicons.map(fontawesomeicon => {
                                                      return (
                                                          <img src={fontawesomeicon}></img>
                                                      );
                                                  })
                                              }
                                          </div>
                                      </div>
                                  </Link>
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