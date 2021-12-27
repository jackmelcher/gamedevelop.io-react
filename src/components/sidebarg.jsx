import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import {useEffect} from "react"
import "../css/guides.css"

const SidebarG = () => {

  useEffect(() => {
    makeUnderlines("pagelink");
    makeUnderlines("guidelink");
    makeAnchorList();
  });

  function toggleSidebarEvent(){
    toggleSidebar();
  }

  const data = useStaticQuery(
        graphql`
            query guidesSidebar {
              contentfulGuidesHome {
                guideSections {
                  title
                  guides {
                    title
                    linkslug
                  }
                }
              }
            }
        `
    );

    return (
        <>
            <div className="selectbar selectbarGuide">
            <button onClick={(e) => toggleSidebarEvent()}>
                <i className="menuicon fas fa-list"></i>
                <span>Table of Contents</span>
            </button>
            </div>
            <div className="sidenav">
                <div className="guidelink-container">
                {
                    data.contentfulGuidesHome.guideSections.map(guideSection => {
                        return[
                            <div className="guidelink">{guideSection.title}</div>,
                            <ul className="nobullets">
                              {
                                guideSection.guides.map(guide=>{
                                  return(
                                      <li>
                                        <Link className="pagelink" to={`/guides/${guide.linkslug}/`}>{guide.title}</Link>
                                      </li>
                                  );
                                })
                              }
                            </ul>
                        ];
                    })
                }
                </div>
            </div>
        </>
    )
}
export default SidebarG

function makeAnchorList()
{
  let pages = document.getElementsByClassName("pagelink");
  let pageurl = window.location.href.split("/")[5]+"/";
  //console.log(window.location.href)
  //console.log(pageurl)
  
  let pageAnchorList = document.getElementsByClassName("pageAnchorList");
  if(pageAnchorList.length > 0)
  {
    pageAnchorList[0].remove();
  }

  for(let i = 0; i < pages.length; i++)
  {
    if(pages[i].getAttribute("href").endsWith(pageurl) && window.location.href.split("/").length > 5)
    {
      let list = document.createElement("ul");
      list.classList.add("nobullets","pageAnchorList");

      var litem;
      var anchor;

      let ids = document.getElementsByClassName("guideflex")[0].getElementsByTagName("div");
      let headers = document.getElementsByClassName("guideflex")[0].getElementsByTagName("h3");
      /*
      for(let j = 0; j < headers.length; j++)
      {
        litem = document.createElement("li");
        anchor = document.createElement("a");
        anchor.href = "javascript:";
        anchor.onclick = function(){handleAnchorLink(ids[j].id)};
        anchor.textContent = headers[j].textContent;
        litem.appendChild(anchor);
        litem.classList.add("pageAnchor");
        list.appendChild(litem);
      }
      */
      pages[i].parentElement.insertAdjacentElement("afterend",list);
      break;
    }
  }
}

function handleAnchorLink(id)
{
  document.getElementById(id).scrollIntoView();
  if(window.innerWidth <= 768)
  {
    window.scrollBy(0,-120);
  }
  else
  {
    window.scrollBy(0,-64);
  }
  toggleSidebar();

}

function makeUnderlines(className)
{
  let links = document.getElementsByClassName(className);
  console.log();

  for(let i=0;i<links.length;i++)
  {
    console.log(links[i].textContent);

    if(window.location.href.includes(links[i].href))
    {
      links[i].classList.add("underline");
    }
  }
}

function toggleSidebar()
{
  var side = document.getElementsByClassName("sidenav")[0];
  if(side.style.display === "none" || side.style.display === "")
  {
    side.style.display = "block";
    //document.body.style.overflow = "hidden";
  }
  else
  {
    side.style.display = "";
    //document.body.style.overflow = "";
  }
}