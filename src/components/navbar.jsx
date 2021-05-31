import { Link } from "gatsby"
import React, {useState, useEffect} from "react"

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

function Navbar({children})
{
    useEffect(() => {    
        // Initialize Theme 
        themeMode(localStorage.getItem("site-theme"));
    });

    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">
            <Link to="/" className="button button_logo button_nav">
                <img src="https://ik.imagekit.io/ucxasjyuy/logo.svg" alt="logo" className="logoimg"/>
            </Link>
            <Link to="/resources/" className="button button_nav">
                Resources
            </Link>
            <Link to="/guides/" className="button button_nav">
                Guides
            </Link>
            <button className="button settingsnavbutton button_nav" onClick={() => setOpen(!open)}>
                <i className="menuicon fas fa-cog"></i>
            </button>
            {/*
            <a href="https://www.buymeacoffee.com/gamedevelop" className="button_nav_patreon button button_logo settingsnavbutton button_nav " target="_blank" rel="noopener noreferrer">
                <img src="https://ik.imagekit.io/ucxasjyuy/patreon-navbar.png" alt="Patreon Logo"/>Become a Patron
            </a>
            */}
            {children}
            <div>
            {
                open && <Settings />
            }
            </div>
        </div>
    );
}

function Settings()
{
    const [theme,setTheme] = useState(localStorage.getItem("site-theme") ? true : false);

    useEffect(() => {    
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
export default Navbar