import React from "react"

const Footer = () => {
    let date = new Date();
    return (
        <div className="footer">
            <p>© {date.getFullYear()} GameDevelop.io. All trademarks and registered trademarks are the property of their respective
                owners. <a href={"https://icons8.com/"} className={"underline"}>Icons provided by Icons8</a>
            </p>
        </div>
    )
}

export default Footer
