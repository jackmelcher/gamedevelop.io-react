function About()
{
    return(
        <div className="flex-container">
            <div className="about">
                <h1 className="header">About</h1> 
                <img src="images/logo1.svg" alt="logo" className="logomain"/>
                <h2 className="subheader">GameDevelop.io strives to give Game Developers of any skill level with the information and resources necessary to develop Video Games.</h2>
                <p>
                    The Resource Database is designed to be a complete and up to date collection of tools, assets, communities, and services commonly used by game developers.<br/><br/>
                    The Guides provide critical knowledge for game developers to tackle both the production and business sides of game development.
                </p>
                <br/>
                <h2>Team</h2>
                <h3>Jack Melcher</h3>
                <img src="images/profile.jpg" alt="profile" className="imgprofile"/>
                <h3>Founder<br/>Lead Developer</h3>
                <p>
                    A lifelong fan of Video Games and a professional in the Games Industy, Jack is building GameDevelop.io to make it easier for Game Developers to discover the right tools and learn valueable information.
                </p>
                <br/>
                <h2>History</h2>
                <p>
                    GameDevelop.io was originally conceived as a job aggregator for the Video Games Industry.
                    After discovering several well made aggregators, it became apparent that there was a lack of a well maintained database for game development resoruces.
                    So, GameDevelop.io pivoted to be a resource website for game development.<br/><br/>
                    During the construction of the resource database, it also became apparent that indie developers needed guidance in other aspects of development.
                    So guides were written about production, business, as well as marketing.<br/><br/>
                    GameDevelop.io plans to continue expanding the resource database, and to provide insightful and helpful guides.
                </p>
                <br/>
                <h2>Support Us</h2>
                <p>
                    If you'd like to support the development efforts of GameDevelop.io, then consider donating through Patreon or Ko-fi. 
                </p>
                <a href="https://www.patreon.com/jackmelcher" target="_blank" className="button button_support patreon">
                    <img src="/images/resources/www.patreon.com.png"/>Patreon</a>
                <a href="https://www.ko-fi.com/jackmelcher" target="_blank" className="button button_support kofi">
                    <img src="/images/resources/ko-fi.com.png"/>Ko-fi</a>
            </div>
        </div>
    );
}
ReactDOM.render(<About />, document.getElementById("content"));