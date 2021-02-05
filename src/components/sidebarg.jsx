import { Link } from "gatsby"
import React from "react"

import "../css/guides.css"

const SidebarG = () => {

  return (
    <div className="sidenav">
      <div className="guidelink">
        <Link to="/guides/introductory" className="bold">Introductory Guides</Link>
        <ul className="nobullets">
          <li>
            <Link to="/guides/introductory/concept">Conceptualizing a Video Game</Link>
          </li>
          <li>
            <Link to="/guides/introductory/business">Making a Business Strategy</Link>
          </li>
          <li>
            <Link to="/guides/introductory/tools">Selecting a Toolkit</Link>
          </li>
          <li>
            <Link to="/guides/introductory/team">Forming a Team</Link>
          </li>
          <li>
            <Link to="/guides/introductory/production">Producing a Video Game</Link>
          </li>
        </ul>
        <Link to="/guides/industry" className="bold">The Computer and Video Game Industry</Link>
        <ul className="nobullets">
          <li>
            <Link to="/guides/industry/overview">Games Industry Market Overview</Link>
          </li>
          <li>
            <Link to="/guides/industry/jobs">Jobs in the Games Industry</Link>
          </li>
          <li>
            <Link to="/guides/industry/testing">Publisher QA Testing</Link>
          </li>
          <li>
            <Link to="/guides/industry/culture">Games Industry Work Culture</Link>
          </li>
        </ul>
        <Link to="/guides/business-and-marketing" className="bold">Business and Marketing Guides</Link>
        <ul className="nobullets">
          <li>
            <Link to="/guides/business-and-marketing/ip">The Strength of Intellectual Property</Link>
          </li>
          <li>
            <Link to="/guides/business-and-marketing/youtube">Building a Successful YouTube Channel</Link>
          </li>
          <li>
            <Link to="/guides/business-and-marketing/tactics">Indie Business Tactics</Link>
          </li>
          <li>
            <Link to="/guides/business-and-marketing/kickstarter">How to be Successful at Kickstarter</Link>
          </li>
          <li>
            <Link to="/guides/business-and-marketing/pr">Public Relations and Marketing</Link>
          </li>
        </ul>
      </div>
                   
    </div>
  )
}
export default SidebarG