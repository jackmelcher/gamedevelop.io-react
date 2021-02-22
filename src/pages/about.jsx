import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/about.css"

const About = () => (
    <Layout>
        <SEO title="About" description="Learn about GameDevelop.io's mission, history, and team."/>
        <div className="flex-container">
            <div className="about">
                <h1 className="header">About</h1> 
                <img src="/images/logo1.svg" alt="GameDevelop.io logo" className="logomain"/>
                <h2 className="subheader">GameDevelop.io's mission is to provide Game Developers of any skill level with the resources and knowledge necessary to develop Video Games.</h2>
                <p>
                    The Resource Database is designed to be a complete and up to date collection of tools, assets, communities, and services commonly used by game developers.<br/><br/>
                    The Guides are designed to contain critical information for tackling both the production and business sides of game development.
                </p>
                <br/>
                <h2>Team</h2>
                <h3>Jack Melcher</h3>
                <img src="images/profile.jpg" alt="Jack Melcher's profile" className="imgprofile"/>
                <h3>Founder<br/>Lead Developer</h3>
                <p>
                    A lifelong fan of Video Games and a professional in the Games Industy, Jack is building GameDevelop.io to make it easier for Game Developers to discover the right tools and learn valueable information.
                </p>
                <br/>
                <h2>History</h2>
                <p className="textleft">
                    GameDevelop.io was originally conceived as a job aggregator for the Video Game Industry.
                    After discovering several well made job aggregators, it became apparent that there weren't any well maintained databases for game development resources.
                    So, GameDevelop.io pivoted to become a Resource Database for game development.
                    <br/><br/>
                    To compliment the resource database, Guides were written to help indie developers learn more about games production, business, and marketing.
                    <br/><br/>
                    GameDevelop.io plans to continue expanding the resource database, and to provide insightful and helpful guides.
                    <br/><br/>
                    In the future, GameDevelop.io will provide its own set of tools to help developers come together and collaborate remotely.
                </p>
                <br/>
                <h2>On-going Plans</h2>
                <p>
                    Update Resource entries with relevant or missing information 
                    <br/>
                    Improve the presentation and structure of Guides
                </p>
                <br/>
                <h2>Current Plans</h2>
                <p>
                    Remake Website with React and CSS Grid
                    <br/>
                    Port the Resource Database to a Postgresql server
                    <br/>
                    Refactor various Resource lists for better filtering
                    <br/>
                </p>
                <br/>
                <h2>Future Plans</h2>
                <p>
                    
                    Add a Sign Up and Login so users can directly submit changes to the Resource Database
                    <br/>
                    Let users build out profiles and create a list of the Resources they use
                    <br/>
                    Build out services to connect independent developers together
                </p>
                <br id="support"/>
                <br/>
                <br/>
                <h2>Support Us</h2>
                <p>
                    If you'd like to support the development of GameDevelop.io, then consider becoming a supporter on: 
                    <br/> <br/>
                    <a href="https://www.buymeacoffee.com/gamedevelop" className="button button_support bcm" target="_blank" rel="noopener noreferrer">
                        <img src="/images/about/Button_orange.png" alt="Buymeacoffee support page"/>
                    </a>
                </p>
                
                <br id="discord"/>
                <br/>
                <br/>
                <h2 >Join the Discord Server</h2>
                <p>
                    Got feedback about GameDevelop.io? Want to submit a resource to the database?
                    <br/>
                    Join GameDevelop.io's discord server and make suggestions for the website.
                    
                </p>
                <a href="https://discord.gg/xZPUrKR" className="button button_support discord" target="_blank" rel="noopener noreferrer">
                    <img src="/images/about/discord.com.png" alt="Gamedevelop.io's Discord server"/>
                </a>
                <br/>
                <br/>
                <br/>
                <h2 >Source Code</h2>
                <p>
                    GameDevelop.io is open source and the repository is available on Github.
                    <br/>
                    If you would like to contribute to the development of GameDevelop.io, get in-touch with developers on the discord server.
                    <br/>
                </p>
                <a href="https://github.com/jackmelcher/gamedevelop.io-react" className="button button_support github" target="_blank" rel="noopener noreferrer">
                    <img src="/images/about/github-logo.svg" alt="GameDevelop.io's source on Github"/>
                </a>
            </div>
        </div>
        <br id="contact"/>
        <h1 className="header">Contact</h1>
        <p className="textcenter">
            <b>For all enquiries, please fill out the Form below.</b>
        </p>
        <div className="flex-container">
            <div className="contact">
                <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
                    <p>
                        <label>Name: <br/> <input type="text" name="name"/></label>   
                    </p>
                    <p>
                        <label>Email: <br/> <input type="email" name="email"/></label>
                    </p>
                    <p>
                        <label>Subject: <br/> <input type="subject" name="subject"/></label>
                    </p>
                    <p>
                        <label>Message: <br/> <textarea name="message"></textarea></label>
                    </p>
                    <div data-netlify-recaptcha="true"></div>
                    <p>
                        <button type="submit" className="button button_main">Submit</button>
                    </p>
                </form>
            </div>  
        </div>
        <br/>
        <br/>
        <br/>
    </Layout>
)

export default About