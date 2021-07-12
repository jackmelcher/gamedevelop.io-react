import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../css/home.css"

const ResourcePages = () => (
  <Layout>
    <Seo title="Resources" description="Explore a Database full of game development tools, assets, and services."/>
    <div className="flex-container-resources">
        <h1>Resources</h1>
    </div>
    <div className="flex-container-resources">
        <div className="flex-item-resources flex-container-resources-inner">
            <Link to="/resources/art/" className="button button_main flex-item-resources-inner">
                <h3>2D & 3D Art</h3>
                <i class="fas fa-paint-brush"></i>
                <i class="fas fa-cube"></i>
            </Link>
            <Link to="/resources/av/" className="button button_main flex-item-resources-inner">
                <h3>Audio & Video</h3>
                <i class="fas fa-headphones"></i>
                <i class="fas fa-video"></i>
            </Link>
            <Link to="/resources/design/" className="button button_main flex-item-resources-inner">
                <h3>Design & Writing</h3>
                <i class="fas fa-pencil-ruler"></i>
                <i class="far fa-file-alt"></i>
            </Link>
            <Link to="/resources/engineering/" className="button button_main flex-item-resources-inner">
                <h3>Engineering & DevOps</h3> 
                <i class="fas fa-tools"></i>
                <i class="fas fa-server"></i>
            </Link>
            <Link to="/resources/business/" className="button button_main flex-item-resources-inner">
                <h3>Business, Marketing, & Production</h3>
                <i class="fas fa-list"></i>
                <i class="fas fa-poll"></i>
            </Link>
            <Link to="/resources/publishing/" className="button button_main flex-item-resources-inner">
                <h3>Publishing, Funding, & Distribution</h3>
                <i class="far fa-building"></i>
                <i class="fas fa-dollar-sign"></i>
            </Link>
            <Link to="/resources/events/" className="button button_main flex-item-resources-inner">
                <h3>Events & Game Jams</h3>
                <i class="fas fa-gamepad"></i>
                <i class="far fa-calendar-alt"></i>
            </Link>
            <Link to="/resources/social/" className="button button_main flex-item-resources-inner">
                <h3>Communities & Organizations</h3>
                <i class="fas fa-users"></i>
            </Link>
            <Link to="/resources/career/" className="button button_main flex-item-resources-inner">
                <h3>Career & Education</h3>
                <i class="fas fa-briefcase"></i>
                <i class="fas fa-graduation-cap"></i>
            </Link>
            <Link to="/resources/hardware/" className="button button_main flex-item-resources-inner">
                <h3>Hardware & Peripherals</h3>
                <i class="fas fa-laptop"></i>
                <i class="far fa-keyboard"></i>
            </Link>
            <Link to="/resources/assets/" className="button button_main flex-item-resources-inner">
                <h3>Assets</h3>
                <i class="fas fa-icons"></i>
            </Link>
            <Link to="/resources/services/" className="button button_main flex-item-resources-inner">
                <h3>Services</h3>
                <i class="fas fa-comments-dollar"></i>
            </Link>
        </div>

    </div>
  </Layout>
)
export default ResourcePages