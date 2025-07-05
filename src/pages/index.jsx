import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import '@fortawesome/fontawesome-free/css/all.css'
import "@fontsource/roboto-slab";
import "@fontsource/roboto-slab/600.css"; // Specify weight
import "../css/home.css"

const IndexPage = () => {
    const query = useStaticQuery(
        graphql`
            query {
                Home: contentfulHome(title:{eq:"Home"}){
                    title
                    description
                    header
                    subheader
                    sectionResources {
                        childMarkdownRemark {
                            html
                        }
                    }
                    sectionGuides {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
                Site: site {
                  siteMetadata {
                    title
                    description
                    author
                  }
                }
            }
        `
    );

    return(
    <Layout>
        <Seo title={query.Home.title} description={query.Home.description}/>
        <div className="home">
            <div className=" homeHeaderBackground">
                <div className="home-image-background home-overlay"></div>
                <div className="homeLandingSection">
                    <div className="homeHeader home-shadow-text">{query.Site.siteMetadata.title}</div>
                    <img src="https://ik.imagekit.io/ucxasjyuy/logo.svg" alt="logo" className="logomain home-shadow-box"/>
                    <div className="homeSubHeader home-shadow-text">{query.Home.subheader}</div>
                    <Link to="/resources/" className="button button_main homeHeaderButton home-shadow-box">
                        <div>VIEW RESOURCES</div>
                    </Link>
                    <Link to="/guides/" className="button button_main homeHeaderButton home-shadow-box">
                        <div>VIEW GUIDES</div>
                    </Link>
                </div>
            </div>
            {/*<div dangerouslySetInnerHTML={{
                __html: query.Home.sectionResources.childMarkdownRemark.html,
            }}/>*/}
            <div>
                <div className="homeSection">
                    <div className="homeSectionHeader">Resources Database</div>
                    <div className="flex-container row wrap justify-content-center align-items-center">
                        <div className="flex-item-home">
                            <div className="home-image">
                                <img src="https://img.icons8.com/fluency/96/000000/maintenance.png" alt="Wrench and Screwdriver"/>
                            </div>
                            <p>
                                Explore a comprehensive database of tools, assets, and services used by game developers
                                around the world.
                            </p>
                        </div>
                        <div className="flex-item-home">
                            <div className="home-image">
                                <img src="https://img.icons8.com/fluency/96/000000/conference-background-selected.png" alt="Group of people"/>
                            </div>
                            <p>
                                Find communities to share development progress, learn from each other, and team up for
                                group projects.
                            </p>
                        </div>
                        <div className="flex-item-home">
                            <div className="home-image">
                                <img src="https://img.icons8.com/fluency/96/000000/initiate-money-transfer.png" alt="Money transfer"/>
                            </div>
                            <p>
                                Discover publishers and funding options that can help take your game idea to the next
                                level.
                            </p>
                        </div>
                        {/*<div className="flex-item-home">
                        <div dangerouslySetInnerHTML={{
                            __html: query.Home.sectionResources.childMarkdownRemark.html,
                        }}/>
                        <div className="home-image">
                            <i className="fas fa-icons"></i>
                            <i className="fas fa-tools"></i>
                            <i className="fas fa-comments-dollar"></i>
                        </div>
                        <Link to="/resources/" className="button button_main">
                            <div>VIEW RESOURCES</div>
                        </Link>
                    </div>*/}
                    </div>
                    <Link to="/resources/" className="button button_main homeSectionButton">
                        <div>VIEW RESOURCES</div>
                    </Link>
                </div>
            </div>
            <div className="altBackground">
                <div className="homeSection ">
                    <div className="homeSectionHeader">Game Development Guides</div>
                    <div className="flex-container row wrap justify-content-center align-items-center">
                        <div className="flex-item-home">
                            <div className="home-image">
                                <img src="https://img.icons8.com/fluency/96/000000/copybook--v2.png" alt="Notebook"/>
                            </div>
                            <p>
                                Get introduced to game development, from conceptualization to release.
                            </p>
                        </div>
                        <div className="flex-item-home">
                            <div className="home-image">
                                <img src="https://img.icons8.com/fluency/96/000000/analytics.png" alt="Bar chart"/>
                            </div>
                            <p>
                                Gain insight into Game Industry trends, career options, and work culture.
                            </p>
                        </div>
                        <div className="flex-item-home">
                            <div className="home-image">
                                <img src="https://img.icons8.com/fluency/96/000000/critical-thinking.png" alt="A brain with cog wheels"/>
                            </div>
                            <p>
                                Acquire specialized knowledge on business and marketing techniques.
                            </p>
                        </div>
                        <div className="flex-container row wrap justify-content-center align-items-center">
                            {/*<div className="flex-item-home">
                            <div dangerouslySetInnerHTML={{
                                __html: query.Home.sectionGuides.childMarkdownRemark.html,
                            }}/>
                            <div className="home-image">
                                <i className="fas fa-project-diagram"></i>
                                <i className="fas fa-file-alt"></i>
                                <i className="fas fa-list-ol"></i>
                            </div>
                            <Link to="/guides/" className="button button_main">
                                <div>VIEW GUIDES</div>
                            </Link>
                        </div>*/}
                        </div>
                    </div>
                    <Link to="/guides/" className="button button_main homeSectionButton">
                        <div>VIEW GUIDES</div>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
    )
}
export default IndexPage
