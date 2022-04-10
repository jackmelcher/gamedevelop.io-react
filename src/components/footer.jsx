import React from "react"

const Footer = () => {
    let date = new Date();
    return (
        <div className="footer">
            <p>© {date.getFullYear()} GameDevelop.io. All trademarks and registered trademarks are the property of their respective
                owners.</p>
        </div>
    )
}

export default Footer
