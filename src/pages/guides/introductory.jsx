import React from "react"
import { Link } from "gatsby"

import Layoutg from "../../components/layoutguides"
import SEO from "../../components/seo"

const IntroductoryPage = () => (
    <Layoutg>
        <SEO title="Introductory Guides" description="Introductory Guides on Game Development. Learn how to develop a game from start to finish."/>
        <h1>Introductory Guides</h1>
        <div className="guideHeaders">
            <Link to="concept/">
                Conceptualizing a Video Game 
            </Link>
            <p>
                Learn how to brainstorm a game idea and contain it in a Game Design Doc.
            </p>
            <Link to="business/">
                Making a Business Strategy
            </Link>
            <p>
                Learn about the basic business and marketing strategies for video games.
            </p>
            <Link to="tools/">
                Selecting a Toolkit
            </Link>
            <p>
                Learn about game creation tools and toolkit recommendations.
            </p>
            <Link to="team/">
                Forming a Team
            </Link>
            <p>
                Learn how to recruit team members and effects of a team's composition.
            </p>
            <Link to="production/">
                Producing a Video Game
            </Link>
            <p>
                Learn about standard production practices and techniques.
            </p>
        </div>
    </Layoutg>
)
export default IntroductoryPage
