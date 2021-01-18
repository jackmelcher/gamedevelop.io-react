function GuidesHome()
{
    return (
        <div id="overview" className="guideflex">
            <h1>Game Development Guides</h1>
            <div className="guideHeaders">
                <a href="guides/introductory.html">
                    Introductory Guides
                </a>
                <p>
                    Learn all about the game development process from start to finish.
                </p>
                <a href="guides/industry.html">
                    The Computer and Video Game Industry
                </a>
                <p>
                    A collection of articles about the Video Game Industry. Topics cover industry trends, careers, and culture.
                </p>
                <a href="guides/business.html">
                    Business and Marketing Guides
                </a>
                <p>
                    Discover more in-depth business and marketing strategies to run a successful games studio.
                </p>
            </div>
        </div>
    );
}
ReactDOM.render(<GuidesHome />, document.getElementById("guide"));