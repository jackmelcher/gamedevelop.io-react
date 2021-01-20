import React from "react"
import { Link } from "gatsby"

import Layoutg from "../components/layoutguides"
import SEO from "../components/seo"

const Guides = () => (
    <Layoutg>
        <SEO title="Guides" description="Explore GameDevelop.io's various guides on game development."/>
        <h1>Game Development Guides</h1>
        <div className="guideHeaders">
            <Link to="introductory">
                Introductory Guides
            </Link>
            <p>
                Learn how to develop a game from start to finish.
            </p>
            <Link to="industry">
                The Computer and Video Game Industry
            </Link>
            <p>
                A collection of articles about the Video Game Industry. Topics cover industry trends, careers, and culture.
            </p>
            <Link to="business-and-marketing">
                Business and Marketing Guides
            </Link>
            <p>
                Discover more in-depth business and marketing strategies to run a successful games studio.
            </p>
        </div>
    </Layoutg>
)
export default Guides