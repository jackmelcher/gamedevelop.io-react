import React from "react"
import { Link } from "gatsby"

import Layoutg from "../../../components/layoutguides"
import SEO from "../../../components/seo"

const TeamPage = () => (
    <Layoutg>
        <SEO title="Forming a Team" description="Learn how to recruit team members and effects of a team's composition."/>
        <h1 id="top">Forming a Team</h1>
        <div id="team">
            <h3>Figure Out the Team's Composition</h3>
            <p>
                Make a layout of the team's size and the various roles for the project.
                Determine what tasks each role will be responsible for, and how many individuals you will need for each role.
                Once you've decide on what role you want to play, you can fill the remaining roles by recruiting additional members.
            </p>
        </div>
        <div id="draft">
            <h3>Draft a Recruitment Post</h3>
            <p>
                Draft a recruitment post for your project and the open roles.
                Describe the game's premise, the game's genre, the available roles, each role's responsiblilities, skill and experience requirements, the estimated production time, and minimum time commitment per week.
                Also, make it clear if you are offerring any form of compensation (Unpaid, revenue-share, hourly payment, or commission based payment).
                The more detail you provide, the more likely people will inquire and join your team.
            </p>
            <p>
                If you make people sign a Non-Disclosure Agreement (NDA) before divulging any details about your game, then people may be less likely to contact you about your project.
                While an NDA is a good way to keep your business and game idea a secret, the lack of information about the project may inhibit your ability to recruit the right individuals to your team.
            </p>
            <p>
                <span class="bold">Recruitment Post Template:</span><br/>
                Project Name:<br/>
                Project Description: <br/>
                My Role:<br/>
                My Previous Projects: (If Applicable)<br/>
                Team Size: <br/>
                Role(s) Required: <br/>
                Responsibilities of Role(s):<br/>
                Require Experience for Role(s):<br/>
                Project Length: (X Months, X Years)<br/>
                Compensation: (None, Revenue-Share, Commission, Hourly, Salary)<br/>
            </p>
        </div>
        <div id="recruit">
            <h3>Recruit Team Members</h3>
            <p>
                Publish your recruitment post on game development forums, subreddits, and discord servers.
                You can also contact individuals directly who post that they are open to joining a team.
            </p>
            <p>
                If you want to try a more in-person approach, then attend a game development meetups for local clubs or organizations.
                You can ask other attendees if they would be interested in joining your project.
                Even if they don't join your team, they may be able to connect you with others who may be interested in joining.
            </p>
            <p>
                If you aren't getting contacted by potential recruits through your posts, then consider contacting individuals directly who are looking for a team.
                You can find "looking for a team" posts in the same forums, subreddits, and discord servers where you published your recruitment post.
                Individuals looking for a team include freelancers, hobbyists, or beginners.
            </p>
            <p>
                Factors to consider while recruiting members are: experience, availabile time commitment, physical location, and time zone.
            </p>
            <p>
                <Link to="/resources#communities">Full List of Game Development Communities</Link>
            </p>
        </div>
        <div id="experience">
            <h3>Team's Experience</h3>
            <p>
                The team’s experience will determine if implementing certain features is feasible and if it can be done in a timely manner.
                Team members will also expect a certain level of compensation based on their experience.
            </p>
            <p>
                While less experienced members are more likely to work for free or for revenue-share, they may spend more time learning the necessary skills to make the game.
                Also, less experienced members may have a more difficult time implementating complex features.
            </p>
            <p>
                Experienced members will have an easier time building the required systems and expanding upon them.
                Development will be more predictable and move at a steadier pace.
                But more experienced individuals will expect payment for their high skill labor, especially if your project requires a significant time commitment.
            </p>
        </div>
        <div id="time">
            <h3>Team's Availability</h3>
            <p>
                The team's availability will determine how much progress can be made on a daily, weekly, and monthly basis.
            </p>
            <p>
                People tend to be available on a part-time basis to work on side projects. So progress is often made on a weekly basis.
                If a person that is only available a few hours out of the week, then expect monthly progress.
                Team members that are working on the project full-time will allow for daily progress.
            </p>
        </div>
        <div id="location">
            <h3>Team's Location</h3>
            <p>
                Working with people locally allows you to meet up in person, which makes it easier for people to motivate each other and hold each other accountable.
                Working with people in the same time zone also makes it easier to synchronize the production schedule and ensure everyone is working around the same time.
            </p>
            <p>
                Remote teams allow team members to work on the project anytime and anywhere.
                But remote projects require more management to make sure team members are working on tasks regularly.
                It also requires more leadership efforts to maintain morale and motivation. 
                Also, communications may be delayed, trust may take longer to build up, and morale more difficult to maintain.
            </p>
        </div>
        <div id="size">
            <h3>Team's Size</h3>
            <p>
                The team's size will determine how much work can be distributed and completed simultaneously.
            </p>
            <p>
                As a solo dev, the production time is entirely dependant on your efforts.
                While you have full creative control, every aspect of the game will require your attention.
                Production times will drastically increase because tasks can only be performed sequentially.
            </p>
            <p>
                With a team of specialized individuals, tasks can be divided up and worked on in parallel.
                The bigger the team, the more specialized team members become.
                As a result, the final product will be a culmination of the team's creative efforts.
            </p>
        </div>
        <div id="next">
            <h3>What's Next?</h3>
            <p>
                It's time to produce your game!<br/>
                <Link to="/guides/introductory/production">Producing a Video Game</Link>
            </p>
        </div>
        <div className="lastmodified">
            Last Modified: 2020/09/07
        </div>
    </Layoutg>
)
export default TeamPage
