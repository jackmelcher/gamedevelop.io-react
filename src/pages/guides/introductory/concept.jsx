import React from "react"
import { Link } from "gatsby"

import Layoutg from "../../../components/layoutguides"
import SEO from "../../../components/seo"

const ConceptPage = () => (
    <Layoutg>
        <SEO title="Conceptualizing a Video Game" description="Learn how to brainstorm a game idea and contain it in a Game Design Doc."/>
        <h1 id="top">Conceptualizing a Video Game</h1>
        <div id="brain">
            <h3>Brainstorm a Game Idea</h3>
            <p>
                Start putting your game idea on paper.
            </p>
            <p>
                What is your game's vision?
                What are your expectations of the player experience?
                What emotions do you want the experience to evoke from the players?
            </p>
            <p>
                Games can comprise of a few shapes and platforms, or contain a massive, online, open world. 
                Graphics can be simple pixel art, or complex, high-poly models with photorealistic textures. 
                Audio can be a few sound bites, or a grand composition played by an orchestra. 
            </p>
            <p>
                Is it a clone of a popular game but with a twist?
                Or is it a completely original game idea?
                Do you want to make a simple 2D platformer?
                Or do you want to make a vast 3D open world RPG with a bunch of items, cool weapons, deadly monsters, touching cinematics, heated action, and a grand story?
            </p>
            <p>
                Common bases for game ideas include:
                
            </p>
            <ul>
                <li>
                    Taking an existing game idea and replicating it to learn how to develop that type of game.
                </li>
                <li>
                    Taking a proven game idea and innovating on top of it.
                </li>
                <li>
                    Reusing the same genre and mechanics from a game, but using them in a different setting.
                </li>
                <li>
                    Combining two or more genres to create a new experience that poses a different set of challenges.
                </li>
                <li>
                    Participating in a Game Jam. Often, novel game ideas come from having to brainstorm around the proposed theme.
                    <ul>
                        <li>
                        <a href="https://globalgamejam.org/" target="_blank" rel="noopener noreferrer">
                            <img src="https://ik.imagekit.io/ucxasjyuy/guides/ggj-logo.svg" alt="Global Game Jam Logo" className="imgguide"/>
                        </a>
                        </li>
                        <li>
                        <a href="https://ldjam.com/" target="_blank" rel="noopener noreferrer">
                            <img src="https://ik.imagekit.io/ucxasjyuy/guides/ludum-logo.png" alt="Ludum Dare Logo" className="imgguide"/>
                        </a>
                        </li>
                        <li>
                            <b><Link to="/resources/#jams">Full List of Game Jams</Link></b>
                        </li>
                    </ul>
                </li>
            </ul>
            
            <p>
                Take the the time to brainstorm and lay out all the high-level features of the game.
                Jot down the theme, genre, goals, features, game pieces, game loop, progression, rewards, art style, type of music, target platform/s, etc.
            </p>
            <p>
                Describe the setting, the game world, story, premise, lore, characters.
                Make sketches of environments, levels, characters, and game objects to get a sense of scale and art direction.
            </p>
            <p>
                Think about the audience your game is targeting and the experience you want them to have.
            </p>
        </div>
        <div id="startsmall">
            <h3>Should I Make My Game Idea?</h3>
            <p>
                Make the game you want to make.
                But no matter how big or how small your game is, do not underestimate how long it takes to make a game.
                Making a complete game of any size is a difficult process.
            </p>
            <p>                    
                Most people suggest making small games to learn about game development process and gradually build up your skills.        
                Others suggest that you should go headlong into making the game of your dreams and ignore the pessimism.         
            </p>
            <p>
                By producing small games, you will more quickly grasp the game development process.
                Smaller projects are more manageable, team members are more likely to stick around, and there is a greater chance the game will get finished and launch.
                By failing quickly, you will be able to discover the best path for success and can use what you learned in future projects.
                As you complete more projects, you will gradually build up the experience and skills necessary to produce bigger games.
            </p>
            <p>
                If you are whole-heartedly commited to making your big dream game, then go for it.
                But make sure to break down your game into smaller, manageable chunks or milestones.
                The feeling of progress will help with maintaining your motivation to work on projects that may take years to complete.
                By accomplishing small goals, it becomes easier to achieve big goals.
                If you dont feel confident that you can make your big dream game yet, then reduce your scope and make a smaller game.
            </p>
        </div>
        <div id="gdd">
            <h3>Write a Game Design Doc</h3>
            <p>
                A Game Design Document (GDD) is pretty self-explantory. It's a document that contains all of a game's design details.
                It functions as a written blueprint and can be as broad or specific as necessary.
                At the very least, it should contain all the high level design and technical details of your game.
            </p>
            <p>
                Use the notes of your Game's Concept from the brainstorming session to outline the Game Design Doc.
            </p>
            <p>
                Elaborate on all of the rules, mechanics, systems, game objects, functionality, interfaces, control schemes, and game options.
                Make wireframes and flowcharts of the User Interface and User Experience.
            </p>
            <p>
                Solidify the art style and list out the necessary assets, such as environements, characters, props, music, and sound effects.
                Accompany the lists with concept art of the game to establish a more cohesive theme and aesthetic.
            </p>
            <p>
                Describe the basics of the lore, world building, story beats, plot, narrative, and character interactions.
                Storyboard scenes and cinematics of key plot points.
            </p>
            <p>
                The GDD is a living document and should contain the most recent design of the game as it will serve as a reference during development.
                But, it is very likely design will change after several sessions of prototyping, playtesting, and discussing.
                As a result, the GDD will evolve as designs are iterated upon.
            </p>
            <p>
                With your game design and scope set for now, how are you going to make your game?
                What are the necessary tools to make your design a reality?
            </p>
            <p>
                As you start production of your game, you will begin to fill in more of the details that were laid out in you Game Design Doc.
            </p>
        </div>
        <div id="scope">
            <h3>Evaluate the Scope</h3>
            <p>
                Scope equates to a game’s complexity.
                The more features and content a game has, the greater the game's scope.
                By evaluating the scope, you can get a better sense of how big your game will be.
            </p>
            <p>
                First, take a moment to break out your Desired Game Concept into two categories: the Minimum Viable Product, and Additional Features and Content.
                The MVP includes all essential features that makes up the game (mechanics and systems), and the minimum amount of content that you think the game should offer (characters, levels, events, art, audio, etc).
                Anything that doesn't need to be in the game at launch can then categorized as Additional Features and Content.
            </p>
            <p>
                Next, take a moment to review either your Game Concept and ask yourself:
            </p>
            <p>
                How long will it take to make this game?
                Can your team execute this game idea and create a finished product in the desired production timeframe?
                Are there things that can be set aside as Post-Launch Content?
                If not, what things would you be okay with cutting out of the game completely?
            </p>
            <p>
                A game's design is always subject to change.
                In the event you have to redesign a feature, you will also need to re-evaluate the game's scope.
                This is to determine how much of an impact the design change will have on your production timeline.
                Sometimes, design changes are small and simply involve tweaking existing design.
                Other times, designs have to be scrapped and completely overhauled, which results in a substantial impact on production.
            </p>
            <p>
                Also, you will want to do your best to avoid Feature Creep, which is the tendency to add a lot of new features and content to the game's design over the course of development.
                Team members often overestimate their production capacity, and forget how much work there still is to make the MVP.
            </p>
        </div>
        <div id="next">
            <h3>What's Next?</h3>
            <p>
                If you need a business strategy, let's make a business strategy.<br/>
                <Link to="/guides/introductory/business/">Making a Business and Marketing Strategy</Link>
            </p>
            <p>
                If you need a toolkit, let's pick out some tools.<br/>
                <Link to="/guides/introductory/tools/">Selecting a Toolkit</Link>
            </p>
            <p>
                If you need a team, let's recruit some team members.<br/>
                <Link to="/guides/introductory/team/">Forming a Team</Link>
            </p>
            <p>
                Otherwise, it's time to start producing your game!<br/>
                <Link to="/guides/introductory/production/">Producing a Video Game</Link>
            </p>
        </div>
        <div className="lastmodified">
            Last Modified: 2021/02/20
        </div>
    </Layoutg>
)
export default ConceptPage
