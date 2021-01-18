import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/guides.css"

const Guides = () => (
    <Layout>
        <SEO title="Guides" description="Explore GameDevelop.io's various guides on game development."/>
        <div className="sidenav">
                    
        </div>
        <div className="guideflex-container">
            <div id="overview" class="guideflex">
                <h1>Game Development Guides</h1>
                <div className="guideHeaders">
                    <Link to="/guides/introductory">
                        Introductory Guides
                    </Link>
                    <p>
                        Learn how to develop a game from start to finish.
                    </p>
                    <Link to="guides/industry">
                        The Computer and Video Game Industry
                    </Link>
                    <p>
                        A collection of articles about the Video Game Industry. Topics cover industry trends, careers, and culture.
                    </p>
                    <Link to="guides/business-and-marketing">
                        Business and Marketing Guides
                    </Link>
                    <p>
                        Discover more in-depth business and marketing strategies to run a successful games studio.
                    </p>
                </div>
            </div>
        </div>
    </Layout>
)

export default Guides