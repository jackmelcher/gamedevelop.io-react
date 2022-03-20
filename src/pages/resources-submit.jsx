import { Link } from "gatsby"
import React, {useState} from "react"
import { useForm } from "react-hook-form"

import Layout from "../components/layout"
import Seo from "../components/seo"

import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha";

const TEST_SITE_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY;

// Atm not using this page. Might replace page with Google Form.
const SubmitResource = () => {

    const{ register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data, e) => {console.log(data);postData(data);setSubmessage(true);window.scrollTo(0, 0);reset();}

    const postData = async (data) => {
        // Passing data object from useForm to axios post        
        const response = await axios.post('/.netlify/functions/resourcesubmit',data);
        console.log(response);
    }

    const [submessage,setSubmessage] = useState(false);
    const [recaptchaValid,setRecaptchaValid] = useState(false);
    const recaptchaRef = React.createRef();
    function onChange(value) {
        if(value === null){
            setRecaptchaValid(false);
        }
        else{
            console.log("Captcha value:", value);
            setRecaptchaValid(true);
        }
    }

    return(
        <Layout>
            <Seo title="Submit Resource" description="Submit a resource to the database"/>
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
                        <button className="button button_main" onClick={() => {setSubmessage(false); setRecaptchaValid(false);recaptchaRef.current.reset();}}>Click Here to Submit Another Resource?</button>
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
                                    <option value="2D & 3D Art">2D & 3D Art</option>
                                    <option value="Audio & Video">Audio & Video</option>
                                    <option value="Design & Writing">Design & Writing</option>
                                    <option value="Engineering & DevOps">Engineering & DevOps</option>
                                    <option value="Business, Marketing, & Production">Business, Marketing, & Production</option>
                                    <option value="Publishing, Funding, & Distribution">Publishing, Funding, & Distribution</option>
                                    <option value="Events & Game Jams">Events & Game Jams</option>
                                    <option value="Communities & Organization">Communities & Organization</option>
                                    <option value="Career & Education">Career & Education</option>
                                    <option value="Hardware & Peripherals">Hardware & Peripherals</option>
                                    <option value="Assets">Assets</option>
                                    <option value="Services">Services</option>
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
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={TEST_SITE_KEY}
                                onChange={onChange}
                            />
                            </p>
                            {recaptchaValid &&
                            <p>
                            <button type="submit" className="button button_main">Submit</button>
                            </p>
                            }
                            
                        </form>
                    </div>
                </div>
                }
        </Layout>
    )
}
export default SubmitResource