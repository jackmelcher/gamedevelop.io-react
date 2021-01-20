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

function Navbar()
{
    useEffect(() => {    
        // Initialize Theme 
        themeMode(localStorage.getItem("site-theme"));
    });

    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">
            <span id="sidebutton">

            </span>
            <Link to="/" className="button button_logo">
                <img src="/images/logo.svg" alt="logo" className="logoimg"/>
            </Link>
            <Link to="/resources" className="button button_nav">
                Resources
            </Link>
            <Link to="/guides" className="button button_nav">
                Guides
            </Link>
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