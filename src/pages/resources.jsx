import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/home.css"

const ResourcePages = () => (
  <Layout>
    <SEO title="Resources" description="Explore a Database full of game development tools, assets, and services."/>
    <div className="flex-container-resources">
        <div className="flex-item-resources-padding" />
        <h1>Resources</h1>
        <div className="flex-item-padding" />
    </div>
    <div className="flex-container-resources">
        <div className="flex-item-resources-padding" />
        <div className="flex-item-resources flex-container-resources-inner">
            <Link to="/resources/art/" className="button button_main flex-item-resources-inner">
                2D & 3D Art
            </Link>
            <Link to="/resources/design/" className="button button_main flex-item-resources-inner">
                Design & Writing
            </Link>
            <Link to="/resources/av/" className="button button_main flex-item-resources-inner">
                Audio & Video
            </Link>
            <Link to="/resources/engineering/" className="button button_main flex-item-resources-inner">
                Engineering & DevOps 
            </Link>
            <Link to="/resources/business/" className="button button_main flex-item-resources-inner">
                Business, Marketing, & Production
            </Link>
            <Link to="/resources/publishing/" className="button button_main flex-item-resources-inner">
                Publishing, Funding, & Distribution
            </Link>
            <Link to="/resources/events/" className="button button_main flex-item-resources-inner">
                Events & Game Jams
            </Link>
            <Link to="/resources/social/" className="button button_main flex-item-resources-inner">
                Communities & Organizations
            </Link>
            <Link to="/resources/career/" className="button button_main flex-item-resources-inner">
                Career & Education
            </Link>
            <Link to="/resources/assets/" className="button button_main flex-item-resources-inner">
                Assets
            </Link>
            <Link to="/resources/services/" className="button button_main flex-item-resources-inner">
                Services
            </Link>
        </div>
        <div className="flex-item-padding" />

    </div>
  </Layout>
)
export default ResourcePages