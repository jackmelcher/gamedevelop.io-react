import { Link } from "gatsby"
import React from "react"
import { useForm } from "react-hook-form"

import Layout from "../components/layout"
import SEO from "../components/seo"

import axios from "axios"

const SubmitResource = () => {

    const{ register, handleSubmit } = useForm();
    const onSubmit = data => {console.log(data);postData(data);}

    const postData = async (data) => {
        // Passing data object from useForm to axios post        
        const response = await axios.post('/.netlify/functions/resourcesubmit',data);
        console.log(response);
    }

    return(
        <Layout>
            <SEO title="Submit Resource" description="Submit a resource to the database"/>
                <h1 className="header">Submit a Resource</h1>
                <p className="textcenter">
                    <b>Got a resource you want others to know about? </b>
                    <br/>
                    <b>Submit a resource to the user submitted database</b>
                    <br/>
                    <b>Submissions will get reviewed and might be added to the Resource Database.</b>
                    <br/>
                    <Link to="/resources-pending/" className="button button_main">View User Submitted Resources</Link>
                </p>
                <div className="flex-container">
                    <div className="contact">
                        <form name="resource" onSubmit={handleSubmit(onSubmit)}>
                            <p>
                                <label>Name: *Required<br/> <input {...register("name", {required: true})} type="text" name="name"/></label>   
                            </p>
                            <p>
                                <label>Link: *Required<br/> <input {...register("link", {required: true})} type="link" name="link"/></label>
                            </p>
                            <p>
                                <label>Category: *Required<br/>
                                <select {...register("category", {required: true})} name="category">
                                <option value="">Select A Category</option>
                                <optgroup label="Art Tools">
                                    <option value="2d">2D Art</option>
                                    <option value="3d">3D Art</option>
                                    <option value="oart">Other Art</option>
                                    <option value="audio">Audio</option>
                                    <option value="video">Video</option>
                                </optgroup>
                                <optgroup label="Design Tools">
                                    <option value="design">Design</option>
                                    <option value="accessibility">Accessibility</option>
                                    <option value="narrative">Narrative Writing</option>
                                    <option value="diagram">Diagramming</option>
                                </optgroup>
                                <optgroup label="Engineering Tools">
                                    <option value="engine">Engines and Frameworks</option>
                                    <option value="sdk">SDKs, APIs, and Libraries</option>
                                    <option value="mod">Modding & Creation Platforms</option>
                                    <option value="backend">Backend Services</option>
                                    <option value="security">Security</option>
                                    <option value="oengine">Other Engineering</option>
                                </optgroup>
                                <optgroup label="DevOps Tools">
                                    <option value="vcs">Version Control Systems</option>
                                    <option value="ci-cd">CI / CD</option>
                                </optgroup>
                                <optgroup label="Production Tools">
                                    <option value="communication">Communication</option>
                                    <option value="office">Office and Cloud Storage</option>
                                    <option value="tasking">Tasking and Collaboration</option>
                                </optgroup>
                                <optgroup label="Business Tools">
                                    <option value="analytics">Analytics</option>
                                    <option value="business">Business & Marketing</option>
                                    <option value="monetization">Monetization</option>
                                    <option value="website">Websites</option>
                                </optgroup>
                                <optgroup label="Assets & Services">
                                    <option value="assets">Assets</option>
                                    <option value="services">Services</option>
                                </optgroup>
                                <optgroup label="Publishing & Distribution">
                                    <option value="publisher">Publishers</option>
                                    <option value="funding">Funding Options</option>
                                    <option value="gamehosts">Hosting & Storefronts</option>
                                    <option value="ratings">Ratings Boards</option>
                                    <option value="news">News Outlets</option>
                                </optgroup>
                                <optgroup label="Events">
                                    <option value="conventions">Conventions & Events</option>
                                    <option value="awards">Awards</option>
                                    <option value="jams">Game Jams</option>
                                </optgroup>
                                <optgroup label="Communities & Career">
                                    <option value="communities">Communities</option>
                                    <option value="social">Social Media Groups</option>
                                    <option value="jobs">Job Boards</option>
                                    <option value="space">Coworking Space</option>
                                </optgroup>
                                <optgroup label="Education & Learning">
                                    <option value="schools">Schools & Courses</option>
                                    <option value="learning">Learning Websites</option>
                                    <option value="youtube">YouTube Channels</option>
                                </optgroup>
                                <optgroup label="Hardware & Peripherals">
                                    <option value="hardware">PC, Mobile, and XR Devices</option>
                                    <option value="hardwareparts">PC Components</option>
                                    <option value="peripherals">Peripherals</option>
                                </optgroup>
                            </select>
                            </label>
                            </p>
                            <p>
                                Pricing:
                                <ul className="nobullets">
                                    <li>
                                        <label>
                                            <input {...register("pricing")} type="checkbox" name="pricing" value="Free"/>
                                            Free
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input {...register("pricing")} type="checkbox" name="pricing" value="Trial"/>
                                            Trial
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input {...register("pricing")} type="checkbox" name="pricing" value="Subscription"/>
                                            Subscription
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input {...register("pricing")} type="checkbox" name="pricing" value="Paid"/>
                                            Paid
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input {...register("pricing")} type="checkbox" name="pricing" value="License"/>
                                            License
                                        </label>
                                    </li>
                                </ul>
                            </p>
                            <p>
                                Platforms:
                                <ul className="nobullets">
                                    <li>
                                        <label>
                                            <input {...register("platforms")} type="checkbox" name="platforms" value="Windows"/>
                                            Windows
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input {...register("platforms")} type="checkbox" name="platforms" value="Mac"/>
                                            Mac
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input {...register("platforms")} type="checkbox" name="platforms" value="Linux"/>
                                            Linux
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input {...register("platforms")} type="checkbox" name="platforms" value="iOS"/>
                                            iOS
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input {...register("platforms")} type="checkbox" name="platforms" value="Android"/>
                                            Android
                                        </label>
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <label>Tags: *(Separate Multiple Tags with Commas)<br/> <input {...register("tags")} type="text" name="tags"/></label>
                            </p>
                            <p>
                                <label>Description: <br/> <textarea {...register("description")} name="description"></textarea></label>
                            </p>
                            <p>
                                <button type="submit" className="button button_main">Submit</button>
                            </p>
                        </form>
                    </div>
                </div>
        </Layout>
    )
}
export default SubmitResource