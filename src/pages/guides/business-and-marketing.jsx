import React from "react"
import { Link } from "gatsby"

import Layoutg from "../../components/layoutguides"
import SEO from "../../components/seo"

const BusinessPage = () => (
  <Layoutg>
    <SEO title="Business & Marketing Guides" description="Tips and Tricks for marketing your Game and running a games business."/>
    <h1>Business and Marketing Guides</h1>
    <div className="guideHeaders">
        <Link to="ip/">
            The Strength of Intellectual Property
        </Link>
        <p>
            Discover the benefits of making games as an Intellectual Property built around your company's Brand.
        </p>
        <Link to="youtube/">
            Building a Successful YouTube Channel
        </Link>
        <p>
            Tips on how to build a Video Game focused YouTube channel.
        </p>
        <Link to="tactics/">
            Indie Business Tactics
        </Link>
        <p>
            A list of tactics business and marketing for running a successful Indie Studio.
        </p>
        <Link to="kickstarter/">
            Making a Successful at Kickstarter
        </Link>
        <p>
            Tips on how to increase the likelihood that your Kickstarter Campaign will be a success.
        </p>
        <Link to="pr/">
            Public Relations and Marketing
        </Link>
        <p>
            Learn how to get the most out of traditional Public Relations and Marketing.
        </p>
    </div>
  </Layoutg>
)
export default BusinessPage