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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        function updateSize() {
            setWindowWidth(window.innerWidth);
          }
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', updateSize);
    });
    return (
        <div className="navbar flex-container-navbar">
            {
                windowWidth < 768 && 
                <>
                    <CollapsedMenu/>
                    <div className="flex-item-padding" />
                </>
            }

            <Link to="/" className="button button_nav flex-item-navbar small">
                <img src="https://ik.imagekit.io/ucxasjyuy/logo.svg" alt="logo" className="logoimg"/>
            </Link>
            {
                windowWidth > 768 && 
                <>
                    <Link to="/resources/" className="button button_nav flex-item-navbar mid">
                    <p>Resources</p>
                    </Link>
                    <Link to="/guides/" className="button button_nav flex-item-navbar mid">
                        <p>Guides</p>
                    </Link>
                    <Link to="/about/" className="button button_nav flex-item-navbar mid">
                        <p>About</p>
                    </Link>
                    <Link to="/resources-submit/" className="button button_nav flex-item-navbar big">
                        <p>Submit a Resource</p>
                    </Link>
                    <div className="flex-item-padding" />
                    <a href="https://www.patreon.com/jackmelcher" className="button button_nav flex-item-navbar big" target="_blank" rel="noopener noreferrer">
                        <p><i className="fab fa-patreon"></i> Become a Patron</p>
                    </a>
                    <Theme />
                </>
            }
            {
                windowWidth < 768 && 
                <>
                    <div className="flex-item-padding" />
                    <Theme />
                </>
            }
            
            
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

function Theme()
{
    const [theme,setTheme] = useState(localStorage.getItem("site-theme") ? true : false);
    useEffect(() => {    
        themeMode(theme);
    },[theme]);
    return (
        <button className="button button_nav flex-item-navbar small" onClick={()=> setTheme(!theme)}>
        {
            theme && <i className="menuicon fas fa-moon"></i>
        }
        {
            !theme && <i className="menuicon fas fa-sun"></i>
        }
        </button>
    );
    
}

function CollapsedMenu()
{
    const [menu,setMenu] = useState(false);
    return(
        <>
            <button className="button button_nav flex-item-navbar small" onClick={()=> setMenu(!menu)}>
                {
                    !menu && <i className="fas fa-bars"></i>
                }
                {
                    menu && <i className="fas fa-times"></i>
                }
                
            </button>
            {
                menu &&
                <div className="collapsed-navbar">
                    <Link to="/resources/" className="button button_nav flex-item-navbar">
                        <p>Resources</p>
                    </Link>
                    <Link to="/guides/" className="button button_nav flex-item-navbar">
                        <p>Guides</p>
                    </Link>
                    <Link to="/about/" className="button button_nav flex-item-navbar">
                        <p>About</p>
                    </Link>
                    <Link to="/resources-submit/" className="button button_nav flex-item-navbar">
                        <p>Submit a Resource</p>
                    </Link>
                    <a href="https://www.patreon.com/jackmelcher" className="button button_nav patreon flex-item-navbar" target="_blank" rel="noopener noreferrer">
                        <p><i className="fab fa-patreon"></i> Become a Patron</p>
                    </a>
                </div>
            }
        </>
    );
}
export default Navbar