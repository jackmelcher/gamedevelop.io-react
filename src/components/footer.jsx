import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <div className="footer">
    <Link to="/about/">About</Link>
    <Link to="/about/#support">Become a Patron</Link>
    <Link to="/about/#discord">Discord</Link>
    <Link to="/about/#contact">Contact</Link>
    <Link to="/resources-submit/">Submit a Resource</Link>
    <p>© 2021 GameDevelop.io All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</p>
  </div>
)

export default Footer
