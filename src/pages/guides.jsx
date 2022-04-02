import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layoutg from "../components/layoutguides"
import Seo from "../components/seo"

const Guides = () => {
    const data = useStaticQuery(
        graphql`
            query guidesHome {
              contentfulGuidesHome {
                guideSections {
                  title
                  guides {
                    title
                    excerpt
                    linkslug
                  }
                }
              }
            }
        `
    );
    return(
        <Layoutg>
            <Seo title="Guides" description="Explore various guides on game development."/>
            <h1 className="header">Guides</h1>
            {
                data.contentfulGuidesHome.guideSections.map(guideSection => {
                    return[
                        <div className="guideSection">
                            <div className="guideSectionHeader">{guideSection.title}</div>
                            {
                                guideSection.guides.map(guide=>{
                                    return(
                                        <div className="guideItem">
                                            <Link className="guideItemLink" to={`/guides/${guide.linkslug}/`}>{guide.title}</Link>
                                            <div className="guideItemExcerpt">
                                                {guide.excerpt}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    ];
                })
            }
        </Layoutg>
    );
}
export default Guides