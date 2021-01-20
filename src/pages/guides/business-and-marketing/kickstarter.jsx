import React from "react"
import { Link } from "gatsby"

import Layoutg from "../../../components/layoutguides"
import SEO from "../../../components/seo"

const KickstarterPage = () => (
  <Layoutg>
    <SEO title="Making a Successful at Kickstarter" description="Tips on how to increase the likelihood that your Kickstarter Campaign will be a success."/>
    <h1 id="top">How to be successful at Kickstarter</h1>
    <div id="research">
        <h3>Before You Start a Campaign</h3> 
        <p>
            Research successful campaigns and Research failed campaigns.
        </p>
        <p>
            <ul>
                <li>
                    Compare presentation, selling points, funding goal, call to actions, incentives, support tiers, stretch goals, etc.
                </li>
                <li>
                    Investigate your game’s marketing potential.
                </li>
                <li>
                    Use your findings to formulate a potentially successful campaign.
                </li>
            </ul>
        </p>
    </div>
    <div id="tips">
        <h3>Tips for Success</h3>
        <p>
            The stronger the presentation of your Campaign, the more likely it will succeed.
        </p>
        <p>
            <ul>
                <li>
                    Advertise to your Community. The initial support from them will encourage other people that stumble upon the campaign to contribute.
                </li>
                <li>
                    Be focused, clear, concise, and marketable.
                </li>
                <li>
                    Market using strong copy, images, and trailers.
                </li>
                <li>
                    Put in the time and the hussle. Leverage your network. Post about your campaign on social media. 
                </li>
                <li>
                    Sell that you will be successful. Instill confidence of execution and that the game will ship.
                </li>
                <li>
                    Incentivize by offering meaningful support tiers and stretch goals.
                </li>
            </ul>
        </p>
        <p>
            Use the results of your campaign to Test the Market. It will indicate what the demand is for your game.
        </p>
    </div>
    <div id="money">
        <h3>How Much Money Do I Ask for?</h3>
        <p>
            Ask for a reasonable amount of money for your Funding Goal.
            Strike a balance between the minimum amount needed to start development and the amount needed to fully fund development.
        </p>
        <p>
            <ul>
                <li>
                    If you ask for too much, people may feel that the goal is outrageous. They will be less likely to support the campaign, and it will be more difficult to reach your goal to secure funds.
                </li>
                <li>
                    If you ask too little, the secured funds may not be enough to actually support development. 
                </li>
            </ul>
        </p>
    </div>
    <div id="incentives">
        <h3>How To Incentivize Backers to Support the Campaign?</h3>
        <p>
            <ul>
                <li>
                    Put backers names in the credits
                </li>
                <li>
                    Offer early / discounted pricing to backers. Offer extra game keys
                </li>
                <li>
                    Offer goods such as art, soundtracks, and merchandise. (Deluxe / Collectors additions)
                </li>
                <li>
                    Have stretch goals to include additional content as more funding is raised past the initial campaign goal. (Characters, levels, bosses, game modes, story, etc.)
                </li>
                <li>
                    Include the backers in the creative process for new game content. (Add them in as a character, easter egg, let them make and item, etc.)
                </li>
            </ul>
        </p>
        <p>
            Sources:
            <br/>
            <a href="https://igda.org/about-us/staff-and-board/">Renee Gittens - Executive Director of IGDA</a>
        </p>
    </div>
    <div class="lastmodified">
        Last Modified: 2020/12/28
    </div>
  </Layoutg>
)
export default KickstarterPage