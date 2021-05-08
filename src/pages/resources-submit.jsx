import { Link } from "gatsby"
import React, {useState} from "react"
import { useForm } from "react-hook-form"

import Layout from "../components/layout"
import SEO from "../components/seo"

import axios from "axios"

const SubmitResource = () => {

    const{ register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data, e) => {console.log(data);postData(data);setSubmessage(true);window.scrollTo(0, 0);reset();}

    const postData = async (data) => {
        // Passing data object from useForm to axios post        
        const response = await axios.post('/.netlify/functions/resourcesubmit',data);
        console.log(response);
    }

    const [submessage,setSubmessage] = useState(false);

    return(
        <Layout>
            <SEO title="Submit Resource" description="Submit a resource to the database"/>
                <h1 className="header">Submit a Resource</h1>
                <h3 className="textcenter">
                    Got a resource you want others to know about? Submit a resource to the user submitted database!
                    <br/>
                    <br/>
                    Submissions will get reviewed and may be featured in the Resource Database.
                    <br/>
                    <br/>
                    <Link to="/resources-pending/" className="button button_main">View Pending Submissions</Link>
                    {
                    submessage && 
                    <div>
                        <h2>Resource submitted!</h2>
                        <button className="button button_main" onClick={() => setSubmessage(false)}>Click Here to Submit Another Resource?</button>
                    </div>
                    }
                </h3>
                { 
                !submessage && <div className="flex-container">
                    <div className="contact">
                        <form name="resource" onSubmit={handleSubmit(onSubmit)}>
                            <p>
                                <label>Name: *Required<br/> <input {...register("name", {required: true})} type="text" name="name"/></label>   
                            </p>
                            {errors.name && "Please provide a name"}
                            <p>
                                <label>Link: *Required<br/> <input {...register("link", {required: true})} type="link" name="link"/></label>
                            </p>
                            {errors.link && "Please provide a URL"}
                            <p>
                                <label>Category: *Required<br/>
                                <select {...register("category", {required: true})} name="category">
                                    <option value="">Select A Category</option>
                                    <optgroup label="Art Tools">
                                        <option value="2D Art">2D Art</option>
                                        <option value="3D Art">3D Art</option>
                                        <option value="Other Art">Other Art</option>
                                        <option value="Audio">Audio</option>
                                        <option value="Video">Video</option>
                                    </optgroup>
                                    <optgroup label="Design Tools">
                                        <option value="Design">Design</option>
                                        <option value="Accessibility">Accessibility</option>
                                        <option value="Narrative Writing">Narrative Writing</option>
                                        <option value="Diagramming">Diagramming</option>
                                    </optgroup>
                                    <optgroup label="Engineering Tools">
                                        <option value="Engines and Frameworks">Engines and Frameworks</option>
                                        <option value="SDKs, APIs, and Libraries">SDKs, APIs, and Libraries</option>
                                        <option value="Modding & Creation Platforms">Modding & Creation Platforms</option>
                                        <option value="Backend Services">Backend Services</option>
                                        <option value="Security">Security</option>
                                        <option value="Other Engineering">Other Engineering</option>
                                    </optgroup>
                                    <optgroup label="DevOps Tools">
                                        <option value="Version Control Systems">Version Control Systems</option>
                                        <option value="CI / CD">CI / CD</option>
                                    </optgroup>
                                    <optgroup label="Production Tools">
                                        <option value="Communication">Communication</option>
                                        <option value="Office and Cloud Storage">Office and Cloud Storage</option>
                                        <option value="Tasking and Collaboration">Tasking and Collaboration</option>
                                    </optgroup>
                                    <optgroup label="Business Tools">
                                        <option value="Analytics">Analytics</option>
                                        <option value="Business & Marketing">Business & Marketing</option>
                                        <option value="Monetization">Monetization</option>
                                        <option value="Websites">Websites</option>
                                    </optgroup>
                                    <optgroup label="Assets & Services">
                                        <option value="Assets">Assets</option>
                                        <option value="Services">Services</option>
                                    </optgroup>
                                    <optgroup label="Publishing & Distribution">
                                        <option value="Publishers">Publishers</option>
                                        <option value="Funding Options">Funding Options</option>
                                        <option value="Hosting & Storefronts">Hosting & Storefronts</option>
                                        <option value="Ratings Boards">Ratings Boards</option>
                                        <option value="News Outlets">News Outlets</option>
                                    </optgroup>
                                    <optgroup label="Events">
                                        <option value="Conventions & Events">Conventions & Events</option>
                                        <option value="Awards">Awards</option>
                                        <option value="Game Jams">Game Jams</option>
                                    </optgroup>
                                    <optgroup label="Communities & Career">
                                        <option value="Communities">Communities</option>
                                        <option value="Social Media Groups">Social Media Groups</option>
                                        <option value="Job Boards">Job Boards</option>
                                        <option value="Coworking Space">Coworking Space</option>
                                    </optgroup>
                                    <optgroup label="Education & Learning">
                                        <option value="Schools & Courses">Schools & Courses</option>
                                        <option value="Learning Websites">Learning Websites</option>
                                        <option value="YouTube Channels">YouTube Channels</option>
                                    </optgroup>
                                    <optgroup label="Hardware & Peripherals">
                                        <option value="PC, Mobile, and XR Devices">PC, Mobile, and XR Devices</option>
                                        <option value="PC Components">PC Components</option>
                                        <option value="Peripherals">Peripherals</option>
                                    </optgroup>
                                </select>
                                </label>
                            </p>
                            {errors.category && "Please select a Category"}
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
                                            <input {...register("platforms")} type="checkbox" name="platforms" value="Web"/>
                                            Web
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
                                <label>Tags: (Separate Multiple Tags with Commas)<br/> <input {...register("tags")} type="text" name="tags"/></label>
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
                }
        </Layout>
    )
}
export default SubmitResource