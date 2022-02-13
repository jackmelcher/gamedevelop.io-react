import { Link } from "gatsby"
import React, {useState, useEffect, useMemo} from "react"



function Navbar({children})
{
    //const [open, setOpen] = useState(false);

    return (
        <div className="navbar-container">
            <div className="navbar navbar-desktop flex-container-navbar">
                <DesktopNav/>
            </div>
            <span className="navbar navbar-mobile flex-container-navbar">
                <MobileNav/>
            </span>
            {/*
            <button className="button settingsnavbutton button_nav flex-item-navbar" onClick={() => setOpen(!open)}>
                <i className="menuicon fas fa-cog"></i>
            </button>
            <a href="https://www.buymeacoffee.com/gamedevelop" className="button_nav_patreon button button_logo settingsnavbutton button_nav " target="_blank" rel="noopener noreferrer">
                <img src="https://ik.imagekit.io/ucxasjyuy/patreon-navbar.png" alt="Patreon Logo"/>Become a Patron
            </a>
            <div>
            {
                open && <Settings />
            }
            </div>
            */}
        </div>
    );
}

const LogoNav = () => {
    return(
        <Link to="/" className="navbar-button flex-item-navbar">
            <img src="https://ik.imagekit.io/ucxasjyuy/logo1.svg" alt="Logo" className="logoimg"/>
        </Link>
    );
}

const MobileNav = ({children}) => {
    return(
        <>
            <CollapsedMenu/>
            <div className="flex-item-padding" />
            <LogoNav/>
            <div className="flex-item-padding" />
            <Theme />
        </>
    );
}

const DesktopNav = () => {
    return(
        <>
            <LogoNav/>
            <Resources/>
            <Guides/>
            <About/>
            <div className="flex-item-padding" />
            <Patreon/>
            <Theme />
        </>
    );
}

function Theme()
{
    //const [theme,setTheme] = useState(localStorage.getItem("site-theme") ? true : false);
    const [theme,setTheme] = useState(true);

    useEffect(() => {    
        themeMode(theme);
    },[theme]);

    return (
        <button className="navbar-button flex-item-navbar small" onClick={()=> setTheme(!theme)}>
        {
            theme && <i className="menuicon fas fa-moon"></i>
        }
        {
            !theme && <i className="menuicon fas fa-sun"></i>
        }
        </button>
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

function CollapsedMenu()
{
    const [menu,setMenu] = useState(false);
    return(
        <>
            <button className="navbar-button flex-item-navbar small" onClick={()=> setMenu(!menu)}>
                {
                    !menu && <i className="fas fa-bars"></i>
                }
                {
                    menu && <i className="fas fa-times"></i>
                }
                
            </button>
            {
                menu &&
                <div className="navbar-collapsed">
                    <Resources/>
                    <Guides/>
                    <About/>
                    <Patreon/>
                </div>
            }
        </>
    );
}

const Resources = () => {
    return(
        <Link to="/resources/" className="navbar-button flex-item-navbar">
            <p><i className="fas fa-database"></i> Resources</p>
        </Link>
    )
}
const Guides = () => {
    return(
        <Link to="/guides/" className="navbar-button flex-item-navbar">
            <p><i className="fas fa-list-alt"></i> Guides</p>
        </Link>
    )
}
const About = () => {
    return(
        <Link to="/about/" className="navbar-button flex-item-navbar">
            <p><i className="fas fa-info-circle"></i> About</p>
        </Link>
    )
}
const Submit = () => {
    return(
        <Link to="/resources-submit/" className="navbar-button flex-item-navbar">
            <p><i className="fas fa-clipboard-list"></i> Submit a Resource</p>
        </Link>
    )
}
const Patreon = () => {
    return(
        <a href="https://www.patreon.com/jackmelcher" className="navbar-button flex-item-navbar big" target="_blank" rel="noopener noreferrer">
            <p><i className="fab fa-patreon"></i> Become a Patron</p>
        </a>
    )
}


export default Navbar