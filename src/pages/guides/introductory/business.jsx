import React from "react"
import { Link } from "gatsby"

import Layoutg from "../../../components/layoutguides"
import SEO from "../../../components/seo"

const BusinessPage = () => (
    <Layoutg>
        <SEO title="Making a Business Strategy" description="Learn about the basic business and marketing strategies for video games."/>
        <h1 id="top"> Making a Business Strategy</h1>
        <div id="bmodel">
            <h3>Pick a Revenue Model</h3>
            <p>
                If you plan on making money with your game, then you are going to need a revenue model.
                A revenue model is a combination of one or more revenue streams.
            </p>
            <b>Typical Revenue Streams:</b>
            <ul>
                <li>
                    Advertisement -
                    Revenue is generated when players click or view ads.
                </li>
                <li>
                    Donations -
                    Development is supported by generous supporters.
                </li>
                <li>
                    Merchandise Sales -
                    Revenue is generated by selling clothes, figurines, art, and soundtracks.
                </li>
                <li>
                    Game Sales -
                    Revenue is generated through direct game sales.
                </li>
                <li>
                    Microtransactions -
                    Revenue is generated through the purchase of in-game currency and digital content.
                </li>
                <li>
                    Subscriptions -
                    Reoccurring payments grants players access to a game or more content within a game on a monthly, seasonally, or yearly basis.
                </li>
            </ul>
            <p>
                Create a revenue model that is best suited for your game.
            </p>
        </div>
        <div id="rmodel">
            <h3>Common Revenue Models</h3>
            <p>
                <b>Indirect Sales</b> <br/>
                Game is released for free, but the main source of revenue is through ads, donations, or merchandise.
            </p>
            <p>
                <b>Free To Play</b> <br/>
                Game is released for free with the intention of getting players to spend money on microtransactions or subscriptions.
                The game is purposefully designed to incentivize players to make purchases with pay-to-win mechanics, cosmetics or skins, gacha or lootboxes, boosters or time savers.
                Typically utilizes limited time events and rewards.
            </p>
            <p>
                <b>Direct Sales</b> <br/>
                Game is sold at a given price point.
                Additional content may be released for free or for a price.
                May include microtransactions.
            </p>
            <p>
                <b>Subscription Model</b> <br/>
                Game is free to download, but all or a majority of the game is locked behind a subscription.
                May include microtransactions.
            </p>
        </div>
        <div id="life">
            <h3>Decide on the Development Lifespan</h3>
            <p>
                How long will you and your team work on the game?
                The revenue model you chose will be indicitive of the Development Lifespan.
            </p>
            <p>
                <b>No Support Post-Launch</b> <br/>
                After the game is released, no further work will be done.
                This was very common before the rise of digital distribution.
            </p>
            <p>
                <b>Hotfix Support</b> <br/>
                Updates are made to patch bugs and glitches in the game.
                May include minor balance changes.
            </p>
            <p>
                <b>Expansions and Content Updates</b> <br/>
                Large updates that introduce new features and content.
                Typically includes bug fixes and balance patches.
            </p>
            <p>
                <b>Live Service</b> <br/>
                Studio is solely dedicated to the development of one game.
                Updates are released regularly in order to retain players and draw in new players.
            </p>
        </div>
        <div id="cost">
            <h3>Evaluate the Cost of Development</h3>
            <p>
                The cost of development includes both time and money.
                To get an idea of the costs, you need to answer the following questions:
            </p>
            <b>Temporal Costs:</b>
            <ul>
                <li>
                    What skills are needed to develop the game?
                    How long will it take to learn those skills?
                </li>
                <li>
                    Will you make the game by yourself, or with a team?
                </li>
                <li>
                    How long will it take to make your game?
                    What is the production schedule?
                    What is your planned release date?
                </li>
                <li>
                    How many platforms are you going to target? 
                </li>
            </ul>
            <b>Monetary Costs:</b>
            <ul>
                <li>
                    Do you need to rent an office or purchase new equipment?
                    What devices are you targeting? 
                </li>
                <li>
                    How will you compensate yourself and your teammates?
                </li>
                <li>
                    What software and web applications will you use?
                    How much are the licenses to use them?
                </li>
                <li>
                    Will you use premade assets, or have them custom made?
                </li>
                <li>
                    Is your game multiplayer? How much will it cost for hosting multiplayer services?
                </li>
                <li>
                    How will you market your game?
                </li>
            </ul>
        </div>
        <div id="roi">
            <h3>Return on Investment</h3>
            <p>
                What will be the Return on Investment (ROI) for developing the game?
                What are the rewards for investing your time and money on the project?
                The return on investment may include one or all of the following:
            </p>
            <p>
                <b>Personal Experience</b> <br/>
                The intention is to improve one's professional skillset.
                The experience can be documented on your resume and social media, which could lead to career opportunities.
            </p>
            <p>
                <b>Business Recognition</b> <br/>
                The intention is to build up the company's brand and ip recognition.
                Completing a successful project can lead to greater success on future projects.
            </p>
            <p>
                <b>Strengthen Partnership</b> <br/>
                Successful projects can boost relationships with partner companies and lead to more business opportunities.
                Could lead to better licensing deals, exclusive contracts, and long-term partnerships.
            </p>
            <p>
                <b>Monetary Gain</b> <br/>
                The intention is to make a large amounts of profit by providing a superb gaming experience.
                Money is distributed among teammates and partners.
                This could either be a one-time monetary gain or reoccurring revenue.
            </p>
        </div>
        <div id="funding">
            <h3>Acquire Funding</h3>
            <p>
                All projects require funding, especially if you need to hire professionals and pay for services.
                There are several ways to raise funds to pay for the development costs.
            </p>
            <b>Funding Options:</b>
            <ul>
                <li>
                    <b>Self-Fund it</b>
                    <ul>
                        <li>
                            Work and Invest with your Savings <br/>
                            <i className="fas fa-piggy-bank fa-5x"></i> <br/>
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Crowdfund it</b>
                    <ul>
                        <li>
                            <a href="https://www.kickstarter.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://ik.imagekit.io/ucxasjyuy/guides/kickstarter-logo.svg" alt="Kickstarter Logo" className="imgguide"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.indiegogo.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://ik.imagekit.io/ucxasjyuy/guides/igg-logo.svg" alt="Indiegogo Logo" className="imgguide"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.patreon.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://ik.imagekit.io/ucxasjyuy/guides/patreon-logo.svg" alt="Patreon Logo" className="imgguide"/>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Apply for Grants</b>
                    <ul>
                        <li>
                            Local Government Grants <br/>
                            <i className="fas fa-university fa-5x"></i> <br/>
                        </li>
                        <li>
                            <a href="https://www.unrealengine.com/en-US/megagrants" target="_blank" rel="noopener noreferrer">
                                <img src="https://ik.imagekit.io/ucxasjyuy/guides/epicgrant-logo.png" alt="Epic Mega Grant Logo" className="imgguide"/>
                            </a>
                        </li>
                        <li>
                            <a href="http://indie-fund.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://ik.imagekit.io/ucxasjyuy/guides/indiefund-logo.png" alt="IndieFund Logo" className="imgguide"/>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Partner with Publishers</b>
                    <ul>
                        <li>
                            <b><Link to="/resources/#publisher">Full List of Publishers</Link></b>
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Join an Investors, Incubator, or Accelerator</b>
                    <ul>
                        <li>
                            <b><Link to="/resources/#funding">Full List of Funding Options</Link></b>
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
            </p>
            <p>
                <b>Picking the right Publisher or Investor</b> <br/>
                Make sure your game aligns with the publisher's portfolio.
                Do your research and find a publisher that publishes games with a similar genre and/or art style as your game.
                Once you've found a publisher or investor that would potentially be a suitable business partner, send them a pitch of your game.
            </p>
            <p>
                <b>Pitching Your Game</b> <br/>
                To get funding from outside sources, you will have to pitch your game.
            </p>
            <p>
                Show a working prototype, a solid concept, concise design descriptions, and captivating screenshots or videos.
                Talk about the team and the people making the project.
                Instill confidence that you are an successful team.
                State a release window, and a breakdown on how the money will be spent.
                If possible, show your community's growth overtime to convey that there is an interested audience.
                If necessary, state a realistic revenue target and the potential Return on Investment.
            </p>
            <p>
                The more clear, detailed, and marketable your pitch is, the greater your chance of success.
            </p>
        </div>
        <div id="mplan">
            <h3>Plan a Marketing Strategy</h3>
            <p>
                Marketing and advertising is critical to a game's success.
                The goal is to convert as many people within your target audience into buyers.
                Your team can make the most amazing game possible, but if nobody knows about it, then no one will play it.
                There are multiple avenues to spreading the word about your game and it’s development.
            </p>
            <b>Marketing Streams:</b>
            <ul>
                <li>
                    Devlogs -
                    Make videos or articles showing development progress on social platforms.
                </li>
                <li>
                    Social Media -
                    Share screenshots, gifs, and videos on social media.
                </li>
                <li>
                    Advertisement -
                    Ads on Television and Social Media Ad platforms.
                </li>
                <li>
                    Website -
                    Host a dedicated website for your studio and games. 
                </li>
                <li>
                    Sponsor Content Creators -
                    Pay a content creator to make videos or stream a game.
                </li>
                <li>
                    Game Trailers -
                    Release a 1 to 2 minute video showing off the game.
                </li>
                <li>
                    News Coverage -
                    Announcements, interviews, and reviews written by media outlets.
                </li>
                <li>
                    Conventions -
                    Get a booth so attendees can demo your game.
                    Get showcased in the digital showcase events.
                </li>
                <li>
                    Beta Testing -
                    Let players play the game early.
                </li>
            </ul>
        </div>
        <div id="marketing">
            <h3>Common Marketing Strategies</h3>
            <p>
                <b>Grassroots & Community Driven</b> <br/>
                If you are taking a more grassroots approach, then start marketing on Day 1.
                Post Devlogs.
                Share progress on social media.
                Make screenshots, gifs, and videos showing off the game.
                Upload alpha builds for the community to demo.
                Word-of-mouth is powerful, and has the potential to make your game go viral.
                Build a community, engage with them, and encourage discussions.
                Your community will be the first to support your crowdfunding efforts.
            </p>
            <p>
                Community engagement will help grow and maintain an audience.
                By making connections with people in your community, they will become more emotionally invested in the development and success of the game.
                Hold active discussions in comments of posts, dedicated forums, or chat rooms.
                If possible, broadcast live streams regularly so you can have live discussions with the community.
                Your community can amplify your marketing efforts by sharing your game and being the first ones to support a crowdfunding campaign.
                They will also be a good predictor as to how successful the game will be when released.
            </p>
            <p>
                <b>Get a Publishing Partner then Let Them Do the Marketing</b> <br/>
                Start pitching to publishing partners once you have a Vertical Slice of your game.
                Focus marketing efforts on making a successful pitch.
                Further marketing will be handled by the publishing partner, which may include getting showcased in digital marketing events.
            </p>
            <p>
                Once you have a publisher, they will assist your studio with traditional marketing and advertising.
                Publishers can get news coverage and reviews of your game through games media outlets.
                Publishers can also showcases your game at conferences, digital events, and on their social media accounts.
                Publishers can assist with creating cinematics, gameplay trailers, and screenshots for your website, store pages, or advertisement on websites.
            </p>
            <p>
                <b>Traditional Marketing</b> <br/>
                If you have the capital to fund a traditional marketing effort or work with a marketing agency, then you can wait until the game is in beta to start marketing the game.
            </p>
            <p>
                Make advertisements on television and social media with top quality trailers and screenshots.
                Partners with content creators and media outlets to showcase your game with early copies.
            </p>
            <p>
                <b>Multiplayer Alpha and Beta Testing</b> <br/>
                It's very common for multiplayer games to host Alpha and Beta Testing sessions.
                They can be a good way to let interested players try the game early and share their experience with others.
                Often times, players will encourage their friends to participate in the betas.
                People that watch a content creator play the game might also be interested in participating.
                Successful testing sessions can increase the potential playerbase growth substantially.
            </p>
            <p>
                Beta Testing sessions also have the added benefit of letting players find major issues in the game.
                You can also use the feedback from the test session to rebalance gameplay or introduce additional quality of life improvements.
            </p>
            <p>
                <b>Go Viral with No Marketing</b> <br/>
                Rarely, games are released with little-to-no marketing and simply go viral because the game is either so good, or so bad, that they want other people to play it.
                You should not expect your game will succeed on its own.
                If you want to ensure your game has a successful launch, market it before and after it releases.
            </p>
        </div>
        <div id="next">
            <h3>What's Next?</h3>
            <p>
                If you need a toolkit, let's pick out some tools.<br/>
                <Link to="/guides/introductory/tools/">Selecting a Toolkit</Link>
            </p>
            <p>
                If you need a team, let's recruit some team members.<br/>
                <Link to="/guides/introductory/team/">Forming a Team</Link>
            </p>
            <p>
                Otherwise, it's time to start producing your game!<br/>
                <Link to="/guides/introductory/production/">Producing a Video Game</Link>
            </p>
        </div>
        <div className="lastmodified">
            Last Modified: 2021/02/20
        </div>
    </Layoutg>
)
export default BusinessPage