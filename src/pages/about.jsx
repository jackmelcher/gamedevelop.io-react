import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import "../css/about.css"

const About = () => {
    const data = useStaticQuery(
        graphql`
            query About{
                contentfulPage(title:{eq:"About"}){
                    title
                    description
                    body {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        `
    );

    return(
        <Layout>
            <Seo title={data.contentfulPage.title} description={data.contentfulPage.description}/>
            <div className="flex-container">
                <div className="about" dangerouslySetInnerHTML={{
                    __html: data.contentfulPage.body.childMarkdownRemark.html,
                  }}/>
            </div>
            <br id="contact"/>
            <h1 className="header">Contact</h1>
            <p className="textcenter">
                <b>For all enquiries, please fill out the Form below.</b>
            </p>
            <div className="flex-container">
                <div className="contact">
                    <form name="contact" method="POST" data-netlify="true">
                        <p>
                            <label>Name: <br/> <input type="text" name="name"/></label>   
                        </p>
                        <p>
                            <label>Email: <br/> <input type="email" name="email"/></label>
                        </p>
                        <p>
                            <label>Subject: <br/> <input type="subject" name="subject"/></label>
                        </p>
                        <p>
                            <label>Message: <br/> <textarea name="message"></textarea></label>
                        </p>
                        <div data-netlify-recaptcha="true"></div>
                        <p>
                            <button type="submit" className="button button_main">Submit</button>
                        </p>
                    </form>
                </div>  
            </div>
            <br/>
            <br/>
            <br/>
        </Layout>
    )
}
export default About
