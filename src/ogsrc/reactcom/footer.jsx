function Footer ()
{
    return (
        <div className="footer">
            <a href="/about.html">About</a>
            <a href="/suggestion.html">Make a Suggestion</a>
            <a href="/contact.html">Contact</a>
            <a href="https://www.patreon.com/jackmelcher" target="_blank">Patreon</a>
            <a href="https://www.ko-fi.com/jackmelcher" target="_blank">Ko-fi</a>
            <p>© 2020 GameDevelop.io All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</p>
        </div>
    );
}
ReactDOM.render(<Footer />, document.getElementById("footer"));