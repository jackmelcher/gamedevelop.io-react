import React from "react"
import { Link } from "gatsby"

import Layoutg from "../../../components/layoutguides"
import SEO from "../../../components/seo"

const IndustryPage = () => (
  <Layoutg>
    <SEO title="Publisher QA Testing" description="Learn what it's like to work as a QA Tester for a Publisher."/>
    <h1 id="top">Publisher QA Testing</h1>
    <div id="qa">
        <h3>What is Quality Assurance Testing?</h3>
        <p>
            Quality Assurance (QA) Testing is the process of verifying a product's functionality, validating that the product benefits the customer, and ensuring that the product is not prone to errors.
            In game development, QA testing focuses on verifying implementation of game features, validating that the game is fun to play, and ensuring that there are no egregious bugs or glitches.
            QA is handled by a team of producers, engineers, analysts, and testers to ensure quality of the title, and work in tandem with the development team.
        </p>
    </div>
    <div id="testing">
        <h3>What is a QA Tester?</h3>
        <p>
            A QA Tester, also known as a Game Tester, is an entry level QA postion whose job is to perform manual testing of a game that's in development.
            If any bugs are found during testing, then the bugs are reported in a bug tracking database.
            Often, testers will perform adhoc testing around certain game features, or execute specific test cases to verify functionality.
        </p>
        <p>
            Types of test strategies include:
            <ul>
                <li>
                    Test cases: Executing a specific set of instructions to verify that a specific result occurs.
                </li>
                <li>
                    Attacks: Performing directed adhoc testing around a specific feature or aspect of a game.
                </li>
                <li>
                    Scenarios: Playing an area of the game under a certain set of conditions or customer perspective.
                </li>
                <li>
                    Tour: Exploring and freely adhocing over a wide area of the game.
                </li>
            </ul>
        </p>
        <p>
            Production regularly reviews new bug reports and triages them, assessing the validity of the bug as well as noting the severity of the issue and the priority to fix it.
            The bug report is then sent to the appropriate development team, where a developer will investigate the bug and procure a fix for the issue if it's still occurring.
            Once a bug is resolved, it's sent back to the testers to regress and verify that the fix was implemented.
            If a bug is verified to be fixed by a tester, then the bug will be closed out.
            However if a bug is still occuring, then the bug report is sent back to the developers.
        </p>
        <p>
            Sometimes, testers will be asked to participate in playtests and provide feedback to the developers about the game from a customer's point-of-view.
            If a testers has the apptitude for programming, they may be given the opportunity to make tools or scripts for the project.
            Occasionaly, production will make special requests that involve gathering game footage, accumulating performance data, evaluating if sections of the game are too difficult, etc.       
        </p>
    </div>
    <div id="compliance">
        <h3>Compliance Testing</h3>
        <p>
            Compliance Testing is done to verify that a game satisfies all of the requirements or guidelines as defined by a distribution platform.
            Console Platforms, such as Sony’s Playstation, Microsoft’s Xbox, and Nintendo's systems, each have their own guidelines for legal, technical, and performance requirements.
            Distribution platforms, such as Valve's Steam Store and The Epic Games Store, have a set of guidelines as well, and are less strict than the console guidelines.
            Testers will perform compliance testing to ensure the game will pass a platform's compliance verification.
        </p>
        <p>
            If necessary, the game is submited to the platform owners for certification.
            A game that passes certification is allowed to be published on the platform.
            If a game fails certification, then subsequent development and testing is done to address any certification issues.
        </p>
    </div>
    <div id="release">
        <h3>Release Candidate Testing</h3>
        <p>
            The Release Candidate is the label given to a game build that will be published and released to market.
            This label applies to the Gold Master version released on the launch date, and any subsequent versions of the game released as updates.
            Release Candidate testing is done to make sure a game satisfies all the platform requirements, is free of any critical bugs, implements new content and fixes, and does not introduce new bugs.
        </p>
        <p>
            For the physical version, a copy of the build is sent to manufacturers to be printed on disks then shipped out to retail stores.
            For digital versions, a copy of the game is uploaded to digital distribution platforms.
        </p>
        <p>
            With the advent of digital downloads and patching, games will often ship with major bugs that couldn’t be fixed before the game was sent off to be printed to disk.
            So development and testing will continue, often all the way up to the release date, so that a patch containing major fixes can be downloaded at launch.
            For post-launch updates, subsequent Release Candidates are tested to ensure new features and fixes are implemented without introducing new bugs to the title. 
        </p>
    </div>
    <div id="testingpros">
        <h3>The Upside of being a Game Tester</h3>
        <p>
            Game Testing is one of the few avenues into the Games industry that does not require prior experience.
            Through game testing, you will also build a better understanding of how game development and production works.
            Its a good way to learn new skills, work with industry standard hardware and software, and start making professional connections.
        </p>
        <p>
            Quality Assurance has evolved into its own specialized department in the Games Industry.
            Depending on a tester’s skills, aptitude, and career interests, they have the opportunity to further pursue a career as a: QA producer, QA engineer, or QA analyst.
            Alternatively, a tester may pursue other career paths in game design, engineering, production, artistry, customer support, or community management.
        </p>
    </div>
    <div id="testingcons">
        <h3>The Downside of being a Game Tester</h3>
        <p>
            Even though your work in quality assurance is critical to ensuring the game is of shippable quality, it is often considered the least valued from a business standpoint.
            Because a business wants to maximize test coverage while minimizing costs, testers often start working at minimum wage.
            Game testers are commonly hired as temporary contract workers instead of full-time employees, resulting in lower job security.
            As a result, contracted testers end up jumping from studio to studio to maintain steady employment.
            Because of the notion that “anyone can be a game tester”, quality assurance suffers because of the inability to retain experience testers.
        </p>
        <p>
            Sometimes testers and developers don’t always get along.
            Passion for the project can fog judgement and developers may feel attacked when testers submit a bug or give feedback.
            In studios where the testers don’t interact with the developers on a daily basis, testers may feel like they are not a part of the team.
            Concerns brought up by QA can go ignored by the development team for long periods of time.
            Ultimately, these issues can be a detriment to the quality of the game if they do not get addressed.
        </p>
    </div>
    <div class="lastmodified">
        Last Modified: 2020/09/07
    </div>
  </Layoutg>
)
export default IndustryPage