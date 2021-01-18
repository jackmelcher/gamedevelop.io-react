// Need React Helmet to use react to modify head info. There is a plugin for it in Gatsby JS

function Init({children})
{
    React.useEffect(() => {    
        // Initialize Theme 
        themeMode(localStorage.getItem("site-theme"));
    });

    return (
        <>
            {children}
        </>
    );
}

function themeMode(isDarkMode)
{
    const htmlTag = document.getElementsByTagName("html")[0];
    if (!isDarkMode) {
        htmlTag.removeAttribute("data-theme");
        localStorage.removeItem("site-theme");
    }
    else{
        htmlTag.setAttribute("data-theme", "dark");
        localStorage.setItem("site-theme", "dark");
    }
}

function Navbar()
{
    const [open, setOpen] = React.useState(false);

    return (
        <div className="navbar">
            <span id="sidebutton">

            </span>
            <a href="/" className="button button_logo">
                <img src="images/logo.svg" alt="logo" className="logoimg"/>
            </a>
            <a href="resources.html" className="button button_nav">
                Resources
            </a>
            <a href="guides.html" className="button button_nav">
                Guides
            </a>
            <button className="button settingsnavbutton" onClick={() => setOpen(!open)}>
                <i className="menuicon fas fa-cog"></i>
            </button>
            {
                open && <Settings />
            }
        </div>
    );
}


function Settings()
{
    const [theme,setTheme] = React.useState(localStorage.getItem("site-theme") ? true : false);

    React.useEffect(() => {    
        themeMode(theme);
    },[theme]);

    return (
        <div className="settingsnav">
            <p>
                <span id="themetext">{theme ? "Dark " : "Light "}Mode:</span>
                <label className="switch">
                    <input type="checkbox" checked={theme} id="theme-toggle" onClick={()=> setTheme(!theme)} />
                    <span className="slider round"></span>
                </label>
            </p>
        </div>
    );
}

function Body()
{
    return (
        <Init>
            <Navbar />
            <div id="content"/>
            <div id="footer"/>
        </Init>
    );
}
ReactDOM.render(<Body />, document.getElementById("root"));