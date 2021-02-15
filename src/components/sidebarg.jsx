import { Link } from "gatsby"
import React from "react"
import {useState, useEffect} from "react"

import "../css/guides.css"

const SidebarG = () => {

  const [pageURL,setPageURL] = useState(window.location.href);

    useEffect(() => {
      makeAnchorList();
    });



  return (
    <div className="sidenav">
      <div className="guidelink">
        <Link to="/guides/introductory" className="bold">Introductory Guides</Link>
        <ul className="nobullets">
          <li>
            <Link to="/guides/introductory/concept" className="pagelink">Conceptualizing a Video Game</Link>
          </li>
          
          <li>
            <Link to="/guides/introductory/business" className="pagelink">Making a Business Strategy</Link>
          </li>
          <li>
            <Link to="/guides/introductory/tools" className="pagelink">Selecting a Toolkit</Link>
          </li>
          <li>
            <Link to="/guides/introductory/team" className="pagelink">Forming a Team</Link>
          </li>
          <li>
            <Link to="/guides/introductory/production" className="pagelink">Producing a Video Game</Link>
          </li>
        </ul>
        <Link to="/guides/industry" className="bold">The Computer and Video Game Industry</Link>
        <ul className="nobullets">
          <li>
            <Link to="/guides/industry/overview" className="pagelink">Games Industry Market Overview</Link>
          </li>
          <li>
            <Link to="/guides/industry/jobs" className="pagelink">Jobs in the Games Industry</Link>
          </li>
          <li>
            <Link to="/guides/industry/testing" className="pagelink">Publisher QA Testing</Link>
          </li>
          <li>
            <Link to="/guides/industry/culture" className="pagelink">Games Industry Work Culture</Link>
          </li>
        </ul>
        <Link to="/guides/business-and-marketing" className="bold">Business and Marketing Guides</Link>
        <ul className="nobullets">
          <li>
            <Link to="/guides/business-and-marketing/ip" className="pagelink">The Strength of Intellectual Property</Link>
          </li>
          <li>
            <Link to="/guides/business-and-marketing/youtube" className="pagelink">Building a Successful YouTube Channel</Link>
          </li>
          <li>
            <Link to="/guides/business-and-marketing/tactics" className="pagelink">Indie Business Tactics</Link>
          </li>
          <li>
            <Link to="/guides/business-and-marketing/kickstarter" className="pagelink">How to be Successful at Kickstarter</Link>
          </li>
          <li>
            <Link to="/guides/business-and-marketing/pr" className="pagelink">Public Relations and Marketing</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default SidebarG

function makeAnchorList()
{
  let pages = document.getElementsByClassName("pagelink");
  let pageurl = window.location.href.split("/").slice(-1).toString()

  for(let i = 0; i < pages.length; i++)
  {
    if(pages[i].getAttribute("href").endsWith(pageurl) && window.location.href.split("/").length > 5)
    {
      let list = document.createElement("ul");
      list.classList.add("nobullets");

      var litem;
      var anchor;

      let ids = document.getElementsByClassName("guideflex")[0].getElementsByTagName("div");
      let headers = document.getElementsByClassName("guideflex")[0].getElementsByTagName("h3");
      for(let j = 0; j < headers.length; j++)
      {
        litem = document.createElement("li");
        anchor = document.createElement("a");
        anchor.onclick = function(){handleAnchorLink(ids[j].id)};
        anchor.textContent = headers[j].textContent;
        litem.appendChild(anchor);
        list.appendChild(litem);
      }
      pages[i].parentElement.insertAdjacentElement("afterend",list);
      break;
    }
  }
}

function handleAnchorLink(id)
{
  document.getElementById(id).scrollIntoView();
  window.scrollBy(0,-64);
}