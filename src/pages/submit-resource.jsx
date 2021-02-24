import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SubmitResource = () => (
    <Layout>
        <SEO title="Submit Resource" description="Submit a resource to the database"/>
            <h1 className="header">Submit a Resource</h1>
            <p className="textcenter">
                <b>Got a resource you think others should know about? </b>
                <br/>
                <b>Submit a resource to the user submitted database. and we will review it.</b>
                <br/>
                <b>If e will review it.</b>
                <br/>
                <Link to="/pending-resources/" className="button button_main">View User Submitted Resources</Link>
            </p>
            <div className="flex-container">
                <div className="contact">
                    <form name="resource" method="POST" data-netlify="true" data-netlify-recaptcha="true">
                        <p>
                            <label>Name: <br/> <input type="text" name="name"/></label>   
                        </p>
                        <p>
                            <label>Link: <br/> <input type="link" name="link"/></label>
                        </p>
                        <p>
                            <label>Categories: <br/> <input type="text" name="categories"/></label>
                        </p>
                        <p>
                            <label>Pricing: <br/> <input type="text" name="pricing"/></label>
                        </p>
                        <p>
                            <label>Platform: <br/> <input type="text" name="platforms"/></label>
                        </p>
                        <p>
                            <label>Tags: <br/> <input type="text" name="tags"/></label>
                        </p>
                        <p>
                            <label>Description: <br/> <textarea name="description"></textarea></label>
                        </p>
                        <div data-netlify-recaptcha="true"></div>
                        <p>
                            <button type="submit" className="button button_main">Submit</button>
                        </p>
                    </form>
                </div>
            </div>
    </Layout>
)
export default SubmitResource