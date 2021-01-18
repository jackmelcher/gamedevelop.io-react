function Home()
{
    return(
        <div className="flex-container">
            <div className="home">
                <h1 className="header">Welcome to GameDevelop.io</h1> 
                <img src="images/logo1.svg" alt="logo" className="logomain"/>
                <h1 className="subheader">A Resource Website for Game Development.</h1>
                <h2>Resources Database</h2>
                <p>
                    Explore a comprehensive database of tools, assets, and services used by game developers around the world. <br/>
                    Find communities to learn from each other, share development progress, and team up for group projects.<br/>
                    Discover publishers and funding options that can help take your game idea to the next level.
                </p>
                <a href="resources.html" className="button button_main">
                    VIEW RESOURCES
                </a>

                <h2 >Game Development Guides</h2>
                <p>
                    Learn about the every aspect of game development, from conception to release.<br/>
                    Gain insight into Game Industry trends, career options, and work culture.<br/>
                    Acquire specialized knowledge for business, marketing, and social media.
                </p>
                <a href="guides.html" className="button button_main">
                    VIEW GUIDES
                </a>
            </div>
        </div>
    );
}
ReactDOM.render(<Home />, document.getElementById('content'));