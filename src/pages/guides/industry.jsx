import React from "react"
import { Link } from "gatsby"

import Layoutg from "../../components/layoutguides"
import SEO from "../../components/seo"

const IndustryPage = () => (
  <Layoutg>
    <SEO title="Industry Guides" description="Articles about the Games Industry."/>
    <h1>The Computer and Video Game Industry</h1>
    <div class="guideHeaders">
        <Link to="overview">
            Games Industry Market Overview
        </Link>
        <p>
            A breakdown of the markets and trends in the Games Industry.
        </p>
        <Link to="jobs">
            Games Industry Jobs
        </Link>
        <p>
            Learn about the type of jobs in the Games Industry as well as how to improve your chances at starting a career.
        </p>
        <Link to="testing">
            Publisher QA Testing
        </Link>
        <p>
            Learn what it's like to work as a QA Tester for a Publisher.
        </p>
        <Link to="culture">
            Games Industry Work Culture
        </Link>
        <p>
            Get a better understanding of the work culture in the Games Industry.
        </p>
    </div>
  </Layoutg>
)
export default IndustryPage