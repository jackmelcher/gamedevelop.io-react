import { Link } from "gatsby"
import React, {useState, useEffect} from "react"



function Navbar({children})
{
    return (
        <div className="navbar-container">
            <div className="navbar navbar-desktop flex-container row wrap">
                <DesktopNav/>
            </div>
            <span className="navbar navbar-mobile flex-container row wrap">
                <MobileNav/>
            </span>
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
            <Theme />
        </>
    );
}

function Theme()
{
    //const [theme,setTheme] = useState(localStorage.getItem("site-theme") ? true : false);
    const [isDarkTheme,setIsDarkTheme] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("site-theme")){
            setIsDarkTheme(true);
        }
    },[]);

    useEffect(() => {    
        themeMode(isDarkTheme);
    },[isDarkTheme]);

    return (
        <button className="navbar-button flex-item-navbar small" onClick={()=> setIsDarkTheme(!isDarkTheme)}>
        {
            isDarkTheme && <i className="menuicon fas fa-moon"></i>
        }
        {
            !isDarkTheme && <i className="menuicon fas fa-sun"></i>
        }
        </button>
    );
}

function themeMode(isDarkTheme)
{
    const htmlTag = document.getElementsByTagName("html")[0];
    if (isDarkTheme) {
        htmlTag.setAttribute("data-theme", "dark");
        localStorage.setItem("site-theme", "dark");
    }
    else {
        htmlTag.removeAttribute("data-theme");
        localStorage.removeItem("site-theme");
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
                </div>
            }
        </>
    );
}

const Resources = () => {
    return(
        <Link to="/resources/" className="navbar-button flex-item-navbar">
            <p>Resources</p>
        </Link>
    )
}
const Guides = () => {
    return(
        <Link to="/guides/" className="navbar-button flex-item-navbar">
            <p>Guides</p>
        </Link>
    )
}
const About = () => {
    return(
        <Link to="/about/" className="navbar-button flex-item-navbar">
            <p>About</p>
        </Link>
    )
}

// Atm not using this page. Might replace page with Google Form.
const Submit = () => {
    return(
        <Link to="/resources-submit/" className="navbar-button flex-item-navbar">
            <p><i className="fas fa-clipboard-list"></i> Submit a Resource</p>
        </Link>
    )
}

export default Navbar