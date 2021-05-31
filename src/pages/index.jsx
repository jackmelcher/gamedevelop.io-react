import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/home.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="A Resource Website for Game Development."/>
    <div className="flex-container">
        <div className="home">
            <h1 className="header">Welcome to GameDevelop.io</h1> 
            <img src="https://ik.imagekit.io/ucxasjyuy/logo1.svg" alt="logo" className="logomain"/>
            <h1 className="subheader">A Resource Website for Game Development.</h1>
            <h2>Resources Database</h2>
            <p>
                Explore a comprehensive database of tools, assets, and services used by game developers around the world. <br/>
                Find communities to share development progress, learn from each other, and team up for group projects.<br/>
                Discover publishers and funding options that can help take your game idea to the next level.
            </p>
            <Link to="/resources/" className="button button_main">
                VIEW RESOURCES
            </Link>
            <h2 >Game Development Guides</h2>
            <p>
                Learn about every aspect of game development, from conceptualization to release.<br/>
                Gain insight into Game Industry trends, career options, and work culture.<br/>
                Acquire specialized knowledge on business and marketing techniques.
            </p>
            <Link to="/guides/" className="button button_main">
                VIEW GUIDES
            </Link>
        </div>
    </div>
  </Layout>
)

export default IndexPage
