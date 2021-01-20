import React from "react"
import { Link } from "gatsby"

import Layoutg from "../../../components/layoutguides"
import SEO from "../../../components/seo"

const IntroductoryPage = () => (
    <Layoutg>
        <SEO title="Selecting a Toolkit" description="Learn about game creation tools and toolkit recommendations."/>
        <h1 id="top">Selecting a Toolkit</h1>
        <div id="faq">
            <h3 id="top">Frequently Asked Questions</h3>
            <p>
                <b>
                Q: What tools should I use to make my game?<br/>
                </b>
                A: Use any tools that will make it easier to develop your game. <br/><br/>
                It doesn't matter what tools you use to make your game, what matters is making it.
                If you have a particular game genre in mind, then find a toolset that is tailored for making that type of game.
                Don't be afraid to download a tool, try it out.
            </p>
            <br/>
            <p>
                <b>
                Q: I’ve never programmed before and want to make games. Where do I start?<br/>
                </b>
                A: Learn to program by making a game in a Game Engine.<br/><br/>
                Google search for introductory tutorials and documentation on game engine programming.
                Search for guides or videos on how to program game mechanics or systems.
                Search for answers to questions in forums or Q&A hubs, it is very likely someone else has already asked them.
                If you can't find an answer to a question you have, then make a post about your question.
            </p>
            <br/>
            <p>
                <b>
                Q: Should I make a Game Engine to make my game?<br/>
                </b>
                A: If you want to be a game developer, then make games. Do not make an Engine. <br/><br/>
                An Engine is a tool to make game creation easier.
                Some engines are general-purpose, and provide a standard set of tools and functions to create any type of game.
                Other engines are specialized and come equipped with tools to make a game for a specific genre.
                If an engine lacks the functionality you need, you can extend it with plugins or by modifying the engine’s source code. 
            </p>
            <br/>
            <p>
                <b>
                Q: When would I make my own Game Engine?<br/>
                </b>
                A: Only make a Game Engine if: 
                <ul>
                    <li>
                        You want to be a professional Engine Programmer.
                    </li>
                    <li>
                        All the available engines aren’t suitable for making your game.
                    </li>
                    <li>
                        You want a specialized tool that you own and you plan on reusing it to make sequels or similar games.
                    </li>
                    <li>
                        You are adamant about avoiding royalties or subscriptions for the use of a commercial engine.
                    </li>
                </ul>
            </p>
            <br/>
            <p>
                <b>
                Q: I'm using a general-purpose Game Engine, and I don’t want to spend time programming key game systems. What should I do?<br/>
                </b>
                A: Purchase plugins for an engine from their respective marketplace or asset store. <br/><br/>
                You can purchase game systems, game templates, and tools.
                Many people work on extending the functionality of an engine to save others time and speed up the development process.
            </p>
            <br/>
            <p>
                <b>
                Q: Are there other ways to program a game without learning a programming language?<br/>
                </b>
                A: Yes, some engines use visual scripting systems to make it easier for designers and artists to program game logic.
            </p>
            <br/>
            <p>
                <b>
                Q: I want to make a game, but I don’t want to program it. What do I do?<br/>
                </b>
                A: Team up, hire, or contract programmers.
            </p>
            <br/>
            <p>
                <b>
                Q: I don’t want to make the art and audio for my game. What do I do? <br/>
                </b>
                A: Team up, hire, or contract an artist. Or purchase art assets from digital marketplaces.
            </p>
            <br/>
            <p>
                <b>
                Q: Are there free tools and assets?<br/> 
                </b>
                A: Yes, there are plenty of free tools and assets available for download. <br/><br/>
                Most game engines are free so you can start development right away. A lot of asset creation tools are free or offer free trials. There are also many websites that provide free assets for anyone to use to make games.
            </p>
        </div>
        <div id="engine">
            <h3>Game Engine Recommendations</h3>
            <b>General-Purpose Engines (2D and 3D)</b>
            <p class="guideimg">
                <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/unity-logo.svg" alt="Unity Logo"/>
                </a>
                <a href="https://www.unrealengine.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/unreal-logo.svg" alt="Unreal Logo"/>
                </a>
                <a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/godot-logo.svg" alt="Godot Logo"/>
                </a>
                <a href="https://www.cocos.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/cocos-logo.png" alt="Cocos Logo"/>
                </a>
                <a href="https://www.defold.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/defold-logo.png" alt="Defold Logo"/>
                </a>
            </p>
            <b>General-Purpose Engines (2D Only)</b>
            <p class="guideimg">
                <a href="https://www.yoyogames.com/gamemaker" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/gms2-logo.svg" alt="Game Maker Studio 2 Logo"/>
                </a>
                <a href="https://gdevelop-app.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/gdevelop-logo.svg" alt="GDevelop Logo"/>
                </a>
                <a href="http://www.stencyl.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/stencyl-logo.png" alt="Stencyl Logo"/>
                </a>
                <a href="http://phaser.io/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/phaser-logo.png" alt="Phaser Logo"/>
                </a>
            </p>
            <b>General-Purpose Frameworks (2D and 3D)</b>
            <p class="guideimg">
                <a href="http://www.monogame.net/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/mono-logo.svg" alt="Monogame Logo"/>
                </a>
                <a href="https://fna-xna.github.io/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/fna-logo.svg" alt="FNA Logo"/>
                </a>
                <a href="https://heaps.io/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/heaps-logo.png" alt="Heaps.io Logo"/>
                </a>
            </p>
            <b>General-Purpose Frameworks (2D Only)</b>
            <p class="guideimg">
                <a href="https://love2d.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/love-logo.png" alt="Love2D Logo"/>
                </a>
                <a href="https://haxeflixel.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/haxeflixel-logo.png" alt="HaxeFlixel Logo"/>
                </a>
            </p>
            <b>Visual Novel</b>
            <p class="guideimg">
                <a href="https://www.renpy.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/renpy-logo.png" alt="RenPy Logo"/>
                </a>
                <a href="https://www.rpgmakerweb.com/products/visual-novel-maker" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/vnm-logo.png" alt="Visual Novel Maker Logo"/>
                </a>
            </p>
            <b>Role Playing Game (RPG)</b>
            <p class="guideimg">
                <a href="https://www.rpgmakerweb.com/products/rpg-maker-mv" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/rpgmaker-logo.png" alt="RPG Maker Logo"/>
                </a>
            </p>
            <b>Real Time Strategy (RTS)</b>
            <p class="guideimg">
                <a href="https://springrts.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/spring-logo.png" alt="Spring RTS Logo"/>
                </a>
            </p>
            <b>Point and Click Adventure</b>
            <p class="guideimg">
                <a href="https://www.visionaire-studio.net/cms/visionaire-studio-english.html" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/visionaire-logo.png" alt="Visionaire Logo"/>
                </a>
                <a href="https://www.adventuregamestudio.co.uk/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/ags-logo.png" alt="Adventure Game Studio Logo"/>
                </a>
                <a href="http://dead-code.org/home/index.php/about/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/wintermute-logo.png" alt="Wintermute Logo"/>
                </a>
            </p>
            <b>Text Adventure</b>
            <p class="guideimg">
                <a href="http://textadventures.co.uk/quest" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/quest-logo.png" alt="Quest Logo"/>
                </a>
                <a href="http://inform7.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/inform-logo.png" alt="Inform Logo"/>
                </a>
                <a href="http://www.adrift.co/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/adrift-logo.png" alt="Adrift Logo"/>
                </a>
            </p>
            <b>Interactive Fiction</b>
            <p class="guideimg">
                <a href="http://twinery.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/twine-logo.png" alt="Twine Logo"/>
                </a>
                <a href="http://textadventures.co.uk/squiffy" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/squiffy-logo.png" alt="Squiffy Logo"/>
                </a>
                <a href="https://www.inklestudios.com/ink/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/ink-logo.png" alt="Ink Logo"/>
                </a>
            </p>
            <p>
                <b><Link to="/resources#engine">Full List of Engines and Frameworks</Link></b>
            </p>
        </div>
        <div id="2d">
            <h3>2D Art Tool Recommendations</h3>
            <b>Image Creation Suite</b>
            <p class="guideimg">
                <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/photoshop-logo.png" alt="Adobe Photoshop Logo"/>
                </a>
                <a href="https://www.gimp.org/">
                    <img src="/images/guides/gimp-logo.png" alt="Gimp Logo"/>
                </a>
            </p>
            <b>Graphic Art</b>
            <p class="guideimg">
                    <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/illustrator-logo.png" alt="Adobe Illustrator Logo"/>
                    </a>
                    <a href="https://inkscape.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/inkscape-logo.svg" alt="Inkscape Logo"/>
                    </a>
            </p>
            <b>Pixel Art</b>
            <p class="guideimg">
                    <a href="https://www.cosmigo.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/promotionng-logo.png" alt="Promotion NG Logo"/>
                    </a>
                    <a href="https://www.aseprite.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/aseprite-logo.png" alt="Aseprite Logo"/>
                    </a>
                    <a href="https://www.mapeditor.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/tiled-logo.png" alt="Tiled Logo"/>
                    </a>
            </p>
            <b>2D Animation</b>
            <p class="guideimg">
                    <a href="http://esotericsoftware.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/spine-logo.svg" alt="Spine Logo"/>
                    </a>
                    <a href="http://dragonbones.com/en/index.html" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/dragonbones-logo.png" alt="Dragonbones Logo"/>
                    </a>
            </p>
            <p>
                <b><Link to="/resources#2d">Full List of 2D Art Tools</Link></b>
            </p>
        </div>
        <div id="3d">
            <h3>3D Art Tool Recommendations</h3>
            <b>3D Creation Suite</b>
            <p class="guideimg">
            <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/blender-logo.svg" alt="Blender Logo"/>
                </a>
                <a href="https://www.autodesk.com/products/maya/overview" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/maya-logo.png" alt="Maya Logo"/>
                </a>
                <a href="http://pixologic.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/zbrush-logo.svg" alt="Zbrush Logo"/>
                </a>
            </p>
            <b>Texturing and Materials</b>
            <p class="guideimg">
            <a href="https://www.substance3d.com/products/substance-painter/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/substance-logo.svg" alt="Substance Painter Logo"/>
                </a>
                <a href="https://quixel.com/mixer" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/mixer-logo.png" alt="Quixel Mixer Logo"/>
                </a>
            </p>
            <b>Terrain Generation</b>
            <p class="guideimg">
            <a href="https://www.world-creator.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/wc-logo.svg" alt="World Creator Logo"/>
                </a>
                <a href="https://info.e-onsoftware.com/more-info-vue" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/vue-logo.png" alt="E-onSoftware VUE Logo"/>
                </a>
                <a href="http://www.world-machine.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/wm-logo.png" alt="World Machine Logo"/>
                </a>
            </p>
            <b>Character Creation</b>
            <p class="guideimg">
            <a href="https://www.reallusion.com/character-creator/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/cc3-logo.png" alt="Reallusion Character Creator Logo"/>
                </a>
                <a href="https://www.daz3d.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/daz-logo.png" alt="Daz3D Logo"/>
                </a>
            </p>
            <b>Voxel</b>
            <p class="guideimg">
            <a href="https://blackflux.com/node/11" target="_blank" rel="noopener noreferrer">
                <img src="/images/guides/voxelshop-logo.png" alt="Voxelshop Logo"/>
            </a>
            <a href="http://www.minddesk.com/get.php" target="_blank" rel="noopener noreferrer">
                <img src="/images/guides/qubicle-logo.png" alt="Qubicle Logo"/>
            </a>
            <a href="https://ephtracy.github.io/" target="_blank" rel="noopener noreferrer">
                <img src="/images/guides/magicavoxel-logo.png" alt="Magicavoxel Logo"/>
            </a>
            </p>
            <b>3D Asset Manager</b>
            <p class="guideimg">
            <a href="https://quixel.com/bridge" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/bridge-logo.png" alt="Quixel Bridge Logo"/>
                </a>
            </p>
            <p>
                <b><Link to="/resources#3d">Full List of 3D Art Tools</Link></b>
            </p>
        </div>
        <div id="audio">
            <h3>Audio Tool Recommendations</h3>
            <b>Digital Audio Workstation</b>
            <p class="guideimg">
                <a href="https://www.ableton.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/ableton-logo.png" alt="Ableton Logo"/>
                </a>
                    <a href="https://www.avid.com/en/pro-tools" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/avid-logo.png" alt="Avid Pro Tools Logo"/>
                    </a>
                    <a href="https://www.presonus.com/products/Studio-One" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/studio1-logo.svg" alt="Presonus Studio One Logo"/>
                    </a>
            </p>
            <b>Music Tracker</b>
            <p class="guideimg">
                <a href="http://deflemask.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/deflemask-logo.png" alt="Deflemask Logo"/>
                </a>
                    <a href="https://www.renoise.com/products/renoise" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/renoise-logo.png" alt="Renoise Logo"/>
                    </a>
            </p>
            <b>Audio Recording and Editing</b>
            <p class="guideimg">
                <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/audacity-logo.png" alt="Audacity Logo"/>
                </a>
            </p>
            <b>Sound Effects Generator</b>
            <p class="guideimg">
                <a href="https://www.bfxr.net/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/bfxr-logo.png" alt="Bfxr Logo"/>
                </a>
                    <a href="http://sfbgames.com/chiptone/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/chiptone-logo.png" alt="Chiptone Logo"/>
                    </a>
            </p>
            <p>
                <b><Link to="/resources#audio">Full List of Audio Tools</Link></b>
            </p>
        </div>
        <div id="video">
            <h3>Video Tool Recommendations</h3>
            <b>Screen Capture and Broadcasting</b>
            <p class="guideimg">
                <a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/obs-logo.png" alt="OBS Studios Logo"/>
                </a>
                    <a href="https://www.elgato.com/en/gaming/game-capture-software" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/elgato-logo.svg" alt="Elgato Logo"/>
                    </a>
            </p>
            <b>Video Editing</b>
            <p class="guideimg">
                <a href="https://www.adobe.com/products/premiere.html" target="_blank" rel="noopener noreferrer">
                    <img src="/images/guides/premiere-logo.png" alt="Adobe Premiere Logo"/>
                </a>
                    <a href="https://www.blackmagicdesign.com/products/davinciresolve/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/guides/davinci-logo.png" alt="Davinci Resolve Logo"/>
                    </a>
            </p>
            <p>
                <b><Link to="/resources#video">Full List of Video Tools</Link></b>
            </p>
        </div>
        <div id="next">
            <h3>What's Next?</h3>
            <p>
                If you need a team, let's recruit some team members.<br/>
                <Link to="/guides/introductory/team">Forming a Team</Link>
            </p>
            <p>
                Otherwise, it's time to start producing your game!<br/>
                <Link to="/guides/introductory/production">Producing a Video Game</Link>
            </p>
        </div>
        <div class="lastmodified">
            Last Modified: 2020/10/26
        </div>
    </Layoutg>
)
export default IntroductoryPage
