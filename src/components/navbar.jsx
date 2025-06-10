import { Link } from "gatsby"
import React, {useState, useEffect} from "react"



function Navbar()
{
    return (
        <div className="navbar-container">
            <MobileNav/>
            <DesktopNav/>
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

const DesktopNav = () => {
    return(
        <span className="navbar flex-container row">
            <span className="navbar-desktop">
                <LogoNav/>
                <Resources/>
                <Guides/>
                <About/>
            </span>
            <span className="flex-item-padding"/>
            <Theme/>
        </span>
    );
}

function Theme()
{
    const [isDarkTheme,setIsDarkTheme] = useState(()=>{
        if (typeof window !== 'undefined') {
            if(localStorage.getItem("site-theme")){
                return true;
            }
            else {
                return false;
            }
        }
    });

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
function ThemeMobile()
{
    const [isDarkTheme,setIsDarkTheme] = useState(()=>{
        if (typeof window !== 'undefined') {
            if(localStorage.getItem("site-theme")){
                return true;
            }
            else {
                return false;
            }
        }
    });
        
    useEffect(() => {    
        themeMode(isDarkTheme);
    },[isDarkTheme]);

    return (
        <button className="navbar-button flex-item-navbar" onClick={()=> setIsDarkTheme(!isDarkTheme)}>
        {
            isDarkTheme && 
            <>
                <i className="menuicon fas fa-moon"></i>
                <p>Dark</p>
            </>
        }
        {
            !isDarkTheme && 
            <>
                <i className="menuicon fas fa-sun"></i>
                <p>Light</p>
            </>
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

function MobileNav()
{
    return(
        <span className="navbar-mobile">
            <HomeMobile/>
            <ResourcesMobile/>
            <GuidesMobile/>
            <AboutMobile/>
            <ThemeMobile/>
        </span>
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

const ResourcesMobile = () => {
    return(
        <Link to="/resources/" className="navbar-button flex-item-navbar mobile">
            <i class="fas fa-database"></i>
            <p>Resources</p>
        </Link>
    )
}
const GuidesMobile = () => {
    return(
        <Link to="/guides/" className="navbar-button flex-item-navbar mobile">
            <i class="fas fa-file-alt"></i>
            <p>Guides</p>
        </Link>
    )
}
const AboutMobile = () => {
    return(
        <Link to="/about/" className="navbar-button flex-item-navbar mobile">
            <i class="fas fa-info-circle"></i>
            <p>About</p>
        </Link>
    )
}
const HomeMobile = () => {
    return(
        <Link to="/" className="navbar-button flex-item-navbar mobile">
            <img src="https://ik.imagekit.io/ucxasjyuy/logo1.svg" alt="Logo" className="logoimg"/>
            <p>Home</p>
        </Link>
    )
}


export default Navbar