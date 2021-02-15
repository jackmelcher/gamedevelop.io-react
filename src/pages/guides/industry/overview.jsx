import React from "react"

import Layoutg from "../../../components/layoutguides"
import SEO from "../../../components/seo"

const IndustryPage = () => (
  <Layoutg>
    <SEO title="Games Industry Market Overview" description="A breakdown of the markets and trends in the Games Industry."/>
    <h1 id="top">Games Industry Market Overview</h1>
    <div id="highlights">
        <h3>Market Highlights</h3>
        <p>
            The Video Game Industry is a subset of the entertainment industry.
            In 2018, the Games Industry achieved a global market value of $134 Billion dollars.
            It brings in more revenue than the Film ($41B), Video Streaming ($22B), and Music ($19B) industries combined.
            Individuals, small teams, and large studios have seen huge success in creating games for the masses to enjoy.
        </p>
        <p>
            The Games Industry is broken up into 4 markets. Mobile (47%), Console (28%), PC (22%), and Web (3%).
            Serious Games are often sold on PCs and Consoles, while Casual Games are usually distributed on mobile devices and web platforms.
        </p>
        <p>
            Sources:<br/>
            <a href="https://www.gamesindustry.biz/articles/2018-12-18-global-games-market-value-rose-to-usd134-9bn-in-2018">Global Games Market Value Rose to $134.9 Billion in 2018</a><br/>
            <a href="https://lpesports.com/e-sports-news/the-video-games-industry-is-bigger-than-hollywood ">The Video Games Industry is Bigger than Hollywood</a><br/>
            <a href="https://www.statista.com/outlook/206/100/video-streaming--svod-/worldwide">Statista: Video Streaming worldwide</a>
        </p>
    </div>
    <div id="pc">
        <h3>PC Market</h3>
        <p>
            The PC market offers a variety of casual and serious games, and PC games generate revenue through a variety of business models.
            A majority of games are distributed via Steam because it was the first digital distribution platform for PC games.
            Since then, other distribution platforms emerged, such as the Microsoft Store, Epic Games Store, GOG, and Itch.io. 
            Large AAA publishers have also launched their own distribution platforms.
        </p>
    </div>
    <div id="console">
        <h3>Console Market</h3>
        <p>
            The Console market is very similar to the PC market in terms of the variety of games available to play.
            The current console platforms are Xbox, PlayStation, and Nintendo.
            Console sales and adoption is mostly driven by offering exclusive games and online subscription services.
        </p>
    </div>
    <div id="mobile">
        <h3>Mobile Market</h3>
        <p>
            Mobile market focuses heavily on casual games from a handful of genres (Arcade, Puzzle, Idle/Clicker, Collectible RPG, Tower Defense, City Builder).
            Mobile games tend to be released for free and generate revenue with microtransactions or in-game ads.
            Yet smartphones are very powerful devices and are capable of supporting serious games (MMORPG, FPS, MOBA).
            Almost all mobile games are distributed through Apple's App Store (iOS) and Google's Play Store (Android).
            Mobile Games has the largest market share because there are billions of smartphone users.
        </p>
    </div>
    <div id="web">
        <h3>Web Market</h3>
        <p>
            The Web market has been in decline since the rise in the Mobile market.
            It consists mostly of casual games, with Facebook currently being the largest web games platform.
            Other popular web games platforms are Armor Games, Kongregate, Miniclip, and Addicting Games.
            A lot of recently successful web games are casual, multiplayer games that are hosted on a dedicated website.
            Many web games today are designed to be compatible with mobile browsers.
        </p>
    </div>
    <div className="lastmodified">
        Last Modified: 2020/09/07
    </div>
  </Layoutg>
)
export default IndustryPage