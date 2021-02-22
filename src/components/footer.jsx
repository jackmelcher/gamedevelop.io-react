import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <div className="footer">
    <Link to="/about/">About</Link>
    <Link to="/about/#support">Support Us</Link>
    <Link to="/about/#discord">Discord</Link>
    <Link to="/about/#contact">Contact</Link>
    <p>© 2020 GameDevelop.io All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</p>
  </div>
)

export default Footer
