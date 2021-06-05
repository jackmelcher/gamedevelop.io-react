import React, {useState, useEffect} from "react"

import Layout from "../components/layoutres"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

import {readString} from "react-papaparse"

import "../css/resources.css"

const Resources = () => {

    const [tableName,setTableName] = useState("Popular Tools and Services");
    const [tableSelect,setTableSelect] = useState("");
    useEffect(() => {
        if(window.location.hash !== "")
        {
            document.getElementById("category").value = window.location.hash.split('#')[1];
            setTableSelect(window.location.hash.split('#')[1]);
        }
        else
        {
            document.getElementById("category").selectedIndex = 0;
            setTableSelect("pop");
        }
    });

    useEffect(() => {
        SelectTable(document.getElementById("category").value);
    },[tableSelect]);
    // SelectTable is getting called twice, need to look into it further to reduce it to just one call.
    function handleSelectChange(file)
    {
        window.location.hash = file;
        setTableSelect(file);
    }
    function SelectTable(filename)
    {
        //Load CSV Data
        LoadDoc(filename, CreateTableFromArray2D);
        let category = document.getElementById("category");
        setTableName(category.options[category.selectedIndex].text);
    }
    function toggleSidebar()
    {
        var side = document.getElementsByClassName("sidenav")[0];
        if(side.style.display === "none" || side.style.display === "")
        {
            side.style.display = "block";
            //document.body.style.overflow = "hidden";
        }
        else
        {
            side.style.display = "";
            //document.body.style.overflow = "";
        }
    }

    return(
        <Layout>
            <SEO title="Resources" description="Explore a Database full of game development tools, assets, and services."/>
            <div className="selectbar selectbarRes">
                <button onClick={(e) => toggleSidebar()}>
                    <i className="fas fa-filter"></i><span>Filter & Sort</span>
                </button>
                <div className="tableTitle">
                    <b>Tables:</b>
                </div>
                <select id="category" onChange={(e) => handleSelectChange(e.target.value)}>
                    <option value="pop">Popular Tools and Services</option>
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
                        <option value="events">Industry Events</option>
                        <option value="awards">Awards</option>
                        <option value="jams">Game Jams</option>
                    </optgroup>
                    <optgroup label="Communities & Career">
                        <option value="orgs">Organizations</option>
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
            </div>
            <div className="sidenav rsidenav">
                <div className="filtername">
                    <b>Filters:</b>
                </div> 
                <div id="Filters">
                </div>   
                <div>
                    <br/><br/>
                </div> 
            </div>
            <Navbar/>
            <div className="resource">
                <h1 id="tname">{tableName}</h1>
                <div id="showData">
                </div>
            </div>
        </Layout>
    )
}
export default Resources

let resourceMap = new Map();
resourceMap.set("pop","https://docs.google.com/spreadsheets/d/e/2PACX-1vSH0z-EBQ7aUM3OARY_Xsvt9Hv9Mh04b3eEcl02jLP0u2KV3giDf7ilSmqqdbRjTR7qipL7F9v2gtVx/pub?output=csv");
resourceMap.set("2d","https://docs.google.com/spreadsheets/d/e/2PACX-1vQDJIx7G70nXNeUyMbjpnsy3M9hRXGtV7ArJBhVk4L2K8cI_jWmNVRNVQDah0_olHCJ_5INP5TfPsJg/pub?output=csv");
resourceMap.set("3d","https://docs.google.com/spreadsheets/d/e/2PACX-1vQRPDlbVzk2EPF9bh6lukjfMbmpVZe6-h-scoOZbWWPyBqL7t1KT8oTdsmMii9XRKsDX7miQuJc1a8Y/pub?output=csv");
resourceMap.set("oart","https://docs.google.com/spreadsheets/d/e/2PACX-1vSBxva6gUtZSJyrRdQpjum2lRAF8LPcmQ7Z2NbgC-Femnss2x2pN8LKFthHuTH8II13P1AfVm7bPDsA/pub?output=csv");
resourceMap.set("audio","https://docs.google.com/spreadsheets/d/e/2PACX-1vRCM79IdtRCW714RqPJleBtzz5GHhvVVpyQ8OSLwQafj2_AeWQR5BJyi4eMvnCEi7vZNQkEjQdU_tbK/pub?output=csv");
resourceMap.set("video","https://docs.google.com/spreadsheets/d/e/2PACX-1vS_eAl6F-ZFE262Rf6WexBJkoV9AAjpjn60_ZMh4h9jvdk-sgTMR9rTEzEx3FAllC9CUdNrxYBNYGcO/pub?output=csv");
resourceMap.set("design","https://docs.google.com/spreadsheets/d/e/2PACX-1vRD2q9SD8YKS51KpV71YMC0qghME_Qs0vqq4lDRMQESjgWH-VVOOu89wAzJlGrTvKxDz8p8nIGM9COS/pub?output=csv");
resourceMap.set("accessibility","https://docs.google.com/spreadsheets/d/e/2PACX-1vRgUOIqsarZpVymKLED_5_tFn1WTRGz8us3GdqexmwIEywsRqXmj7o5HL2rlhheLPom9nQTVLMRoxq0/pub?output=csv");
resourceMap.set("narrative","https://docs.google.com/spreadsheets/d/e/2PACX-1vQGGJ5FF_BiIs6Z1s352k--Q0-sLP4xdG7FitOpUsykP3z5quuB25SVuD7Q-yx9kn9iTbLijh-21l1p/pub?output=csv");
resourceMap.set("diagram","https://docs.google.com/spreadsheets/d/e/2PACX-1vSGnTTlKBOZMXnGC7t4iX830zi7PIWyochlW8YpIVqrs0h_307k4qX1pueZe6cvyVxaQrKXGIlbXVLJ/pub?output=csv");
resourceMap.set("engine","https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9sShYkfVUkVI2XHBASu9DD0a-7kCkMFidjozCyEH2rhW1YnjFHw4BySKaCLAN4Xq_OAv9eeNSpw9s/pub?output=csv");
resourceMap.set("sdk","https://docs.google.com/spreadsheets/d/e/2PACX-1vTJ-hCq_hrYjKF60QLmigAQ6yo3rPC0W3gJuTjA8-Y_2QOAppcUQC88jkCCTXQEzGn3sknRKRntdtN4/pub?output=csv");
resourceMap.set("mod","https://docs.google.com/spreadsheets/d/e/2PACX-1vR5uW4NGvUv7VwSv8yUdZbnDOilGTOXdSfyxrBVE5eLe428s4g5Sq_WOBxJ-1xbmYSCax86rmX__aGr/pub?output=csv");
resourceMap.set("backend","https://docs.google.com/spreadsheets/d/e/2PACX-1vTWNDx8dsTjLCgquTfsTs_OBeowXqmFbPmSKS31lNUuHsm37gpJI0zGMYv1pzuQ69rYfGlueJE_DiSw/pub?output=csv");
resourceMap.set("security","https://docs.google.com/spreadsheets/d/e/2PACX-1vSjdroNpvimp_bT3cOvQt69dYe-EoYJrRfeAKtu4kmD6E7_yFnaGxm71YinP9FbIwuChxJyCGbjo5XA/pub?output=csv");
resourceMap.set("oengine","https://docs.google.com/spreadsheets/d/e/2PACX-1vSeFL1o_NbA8-a8B4hsgbU0Y168DJeH4_1H_Y1cCILxrDwfDog3StKaKMUqvoURrAVQotoX5D9kFGMj/pub?output=csv");
resourceMap.set("vcs","https://docs.google.com/spreadsheets/d/e/2PACX-1vSrEBSWTZ9ckxc3WB57C0B5oFc4O62OaOZ8lqpWZ-Vfu3owP0T7vh2ZktoWkz31edMo88lH-0nFNRIQ/pub?output=csv");
resourceMap.set("ci-cd","https://docs.google.com/spreadsheets/d/e/2PACX-1vT4Cgu_TIphIB7T9tMoPrDvjXA0u7vIflKLNHfvGGU352IT3tOWX2yJj5FG33llEWflLwVNbyKnifKT/pub?output=csv");
resourceMap.set("communication","https://docs.google.com/spreadsheets/d/e/2PACX-1vRrjVZ8PKAU51_fyLV5QMjdQFO8w4EqST2vQf5mfsmU9u13qg1_yF8DKXRIPOv00Fy1exWpiQv3qDI6/pub?output=csv");
resourceMap.set("office","https://docs.google.com/spreadsheets/d/e/2PACX-1vSq1AqJMPPZUMb73dU1Vy_96koYGGRB4TjWYMVXbmdUqi_EHhAbcF51qqSaXi5j5tBsD_aPwKYYhzE9/pub?output=csv");
resourceMap.set("tasking","https://docs.google.com/spreadsheets/d/e/2PACX-1vS9lpC4xOOiWXCz1Ysm2816qmBucgsA75721yezbz5ujFy7jul4Y49L2nXsNlZbmKREonZIXzn9SeG_/pub?output=csv");
resourceMap.set("analytics","https://docs.google.com/spreadsheets/d/e/2PACX-1vSKnRa__EP0CwdkABbNGBavhMyUr8kJn01tlfF8yQd6hnz-A21dUNdjzAMpKrWeQtiMqG3hrtbxaSfW/pub?output=csv");
resourceMap.set("business","https://docs.google.com/spreadsheets/d/e/2PACX-1vTLZktBrbkqfzXr0E_6e2NhOqV8f1IbJzx9aupyNe36kslRmCJ3f21BCIl0-NoJgXQUcSnCxxk2lZ3t/pub?output=csv");
resourceMap.set("monetization","https://docs.google.com/spreadsheets/d/e/2PACX-1vSiZHeG6WJLA7O26L9kCOghdQvimRZmjrnVgs7QPrPvXF9euoLcQCLrc90SqnMajk29mGVy4MElvpOG/pub?output=csv");
resourceMap.set("website","https://docs.google.com/spreadsheets/d/e/2PACX-1vTvwgqk5crjFD-1BjB7i3CDC3Gz_sE6cQyNUjn_x0mm23aCU3HtBnprCbvUWZtxEsH8KmlGSRX86d4d/pub?output=csv");
resourceMap.set("assets","https://docs.google.com/spreadsheets/d/e/2PACX-1vRhjyyTz2hSRhuPrPSnvHQ2ckU2IrNM7UKM2C1QLU1jbahn8JW-lI20XZKu9eygjbNpdliaWz6mAk4n/pub?output=csv");
resourceMap.set("services","https://docs.google.com/spreadsheets/d/e/2PACX-1vRwOchRhXiDDYJdctaNMrqUE_Mnfq1Eq5js5gHLsjQwR6I28qbnX8Cc1Ws7kzE_kfIxGnulm8NUnhw9/pub?output=csv");
resourceMap.set("publisher","https://docs.google.com/spreadsheets/d/e/2PACX-1vQBHIGXEXbFvTI_ClUtX0E4tjlSSBwM4UDTZjKNBAY08Ud5-NJwjHmgeAUSWzwTHpviasVmXSRUDRI7/pub?output=csv");
resourceMap.set("funding","https://docs.google.com/spreadsheets/d/e/2PACX-1vTIaf9Ydc-HbRMlidubHTLGuVhXficXv1o3FkUHfhkL0UEcHGBDGmhhFDNp4V0S-wv_J9VPvq7sJcg3/pub?output=csv");
resourceMap.set("gamehosts","https://docs.google.com/spreadsheets/d/e/2PACX-1vQjTD0wKS8WO2UGJxT-mxEETxCZt2n6C3rxZlj2H7fJ3jUy0lTljUzMmUmUeBnLzC95vbd6XMCv5lck/pub?output=csv");
resourceMap.set("ratings","https://docs.google.com/spreadsheets/d/e/2PACX-1vR_3vK3tP3DfcJy0fXwaM1v9x0eB80QgXA4Ynbh0GiESC-CTB71dhDSIZQPfOPZKLojascbscTwHMyA/pub?output=csv");
resourceMap.set("news","https://docs.google.com/spreadsheets/d/e/2PACX-1vR902-_2TVjVM-hKRxAFkLe1TXeZsawX4RelNi9ezE0QPh3-Q7ZAySzsuzpqSAM7HyBE7Brvj2ZrTx2/pub?output=csv");
resourceMap.set("events","https://docs.google.com/spreadsheets/d/e/2PACX-1vSHPf0nObNM0ZrY3K5IkkkmF3z9pbfxks11OmxvufGYityD4qpOUbRYCSESsrtkWBe6j2FE1Gb3unUk/pub?output=csv");
resourceMap.set("awards","https://docs.google.com/spreadsheets/d/e/2PACX-1vRc91DOPuM_AWqOGMPpRZtqXeOq9ZWpBIkGR2m5IBtW_U9M2pIiZV4GTYRJsnSArwR4BSnQyH04f9dP/pub?output=csv");
resourceMap.set("jams","https://docs.google.com/spreadsheets/d/e/2PACX-1vT8616zbXQGzbTKUJiKCJ2Ec16ffJVRW7F_PmlksRN_yXTSSQmYWZw93WNLP1bKiWDteC1sEAxWtmc_/pub?output=csv");
resourceMap.set("orgs","https://docs.google.com/spreadsheets/d/e/2PACX-1vS8-mdVUkjV22dYh4mOvK-JKMyLVYbJ6oCy7glaf5xP0mLgVq3pk7mwOfG0fqveUND_cmYKxBoiyODF/pub?output=csv");
resourceMap.set("communities","https://docs.google.com/spreadsheets/d/e/2PACX-1vTzoNxfsVBRGbU2InlM39Ze4SKWVB4mLZ8eNcT7z--TZYu_tsds_ga46hUa2xTLifnaWtzutS5lFpTt/pub?output=csv");
resourceMap.set("social","https://docs.google.com/spreadsheets/d/e/2PACX-1vQEx_ZsuPYdKlSKVN7uZ3k1M6ZCjkh6GIJgT4pYjQ7g5rzAvXiHmP1WJ4S3gbdLMSo-oPrJrlBcHg2d/pub?output=csv");
resourceMap.set("jobs","https://docs.google.com/spreadsheets/d/e/2PACX-1vTk54yYtogBp1B2VR5uIvsV5vLUdj1jpTH7PgCH_0gBbWetLdHUDyL0roNXoNW_g_f2DumneMX0PCUi/pub?output=csv");
resourceMap.set("space","https://docs.google.com/spreadsheets/d/e/2PACX-1vTRJma3kNazH5j7D9-FoXFPIzz9I9lKir2ptVGpvBnYUDEsVq_y8KVDJiheyCgL5bWRtgoFY-g_SPzJ/pub?output=csv");
resourceMap.set("schools","https://docs.google.com/spreadsheets/d/e/2PACX-1vTwzljYhZggbZR1MPOpb3RaoMXRjkAG3ZiqqtmhCyTUthbb-LdoeBxZjr7gOXW5odec_N3ZZPMyIp5O/pub?output=csv");
resourceMap.set("learning","https://docs.google.com/spreadsheets/d/e/2PACX-1vQCAtHsQ64cne1GJqDM7jrT0D1w9-4FKjjOWvGCAJRCHD8-PHTa1oMqLiuYiLMQFgWlM0-UdU5kj9Ga/pub?output=csv");
resourceMap.set("youtube","https://docs.google.com/spreadsheets/d/e/2PACX-1vTKPGCzhnIPnsb78SgAwrOTgCaG_rMnRnRsv57m7Pi5QtDa8A2_LPIxZPCPrLB8W92sOvgr1jwvLriH/pub?output=csv");
resourceMap.set("hardware","https://docs.google.com/spreadsheets/d/e/2PACX-1vSp4O0V5Fj3lzBbC_n9Di_Jed5mUG3zrRvCBUNIYYMRYszHt8EFWOpzoB7rFob-kpM_WkEmeClHuLS_/pub?output=csv");
resourceMap.set("hardwareparts","https://docs.google.com/spreadsheets/d/e/2PACX-1vS0rmMTZrzTLHVjImzK4I0-ncjRqd2HiY3h8oS_QXFK1p2rCksl944u5zmWPNqBAE2b5QKsDsbi2wIg/pub?output=csv");
resourceMap.set("peripherals","https://docs.google.com/spreadsheets/d/e/2PACX-1vTSceDoG1MYdZ6LNGF5b4qCismN0YJ9Ohimzn_h1zI4VoXTLvQ-uIzi07hYKLK3HUhPg-xS22zvqKlD/pub?output=csv");

function LoadDoc(filepath, callback) {
    var csvdata;
    var link = resourceMap.get(filepath);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            //document.getElementById("papa").innerHTML = this.responseText;
            csvdata = readString(this.responseText);
            //console.log(csvdata);
            callback(csvdata.data);
        }
    };
    xhttp.open("GET", link, true);
    //xhttp.open("GET", filepath, true);
    xhttp.send();
}

function CreateTableFromArray2D(array2D)
{
    //Clear HTML Data Table
    document.getElementById("showData").innerHTML = "";

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.setAttribute("id", "myTable");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    for(var i = 0; i < array2D.length; i++)
    {
        var tr = table.insertRow(-1);                       // TABLE ROW.

        for(var j = 0; j < array2D[i].length; j++)
        {
            if(i === 0)
            {
                if(j===1){continue;}                         // Dont make Table Cell for Links column.
                var th = document.createElement("th");      // TABLE HEADER.
                if(j===0){th.style.borderRightStyle = "none";tr.appendChild(th);th = document.createElement("th");}
                th.textContent = array2D[i][j];
                tr.appendChild(th);
            }
            else
            {
                if(j===1){continue;}                         // Dont make Table Cell for Links column.
                var tabCell = tr.insertCell(-1);            // TABLE Cell.
                if(j===0){   
                    var img = document.createElement("img");
                    // Using event listener to catch errors
                    img.addEventListener('error', function(e) {
                        //console.log(e.target.src);
                        this.alt = this.src;
                        this.src = "/images/placeholder.png";
                    });
                    img.src = "https://ik.imagekit.io/ucxasjyuy/resources/" + GetImageName(array2D[i][j+1]) + ".png";
                    img.className = "tableimg";
                    img.addEventListener('load',function(e){
                        //console.log(e.target.src);
                        });
                    tabCell.appendChild(img);
                    tabCell = tr.insertCell(-1);
                    var a = document.createElement("a");
                    a.href = array2D[i][j+1];
                    a.target = "_blank";
                    a.rel="noopener noreferrer";
                    a.textContent = array2D[i][j];
                    tabCell.appendChild(a);
                    j++;
                }
                else{
                    tabCell.textContent = array2D[i][j];
                    if(j===4){PlatformTextToIcon(tabCell);}
                }
            }
        }
    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.appendChild(table);

    //Get all table headers
    let tableheaders = document.getElementsByTagName("th");

    //Get Filter Categories
    let filtercategories = [];
    for(let i=2; i<tableheaders.length-1;i++)
    {
        filtercategories.push(tableheaders[i].textContent);
    }
    console.log(filtercategories);

    //Make Filter Categories in page
    let filtersdiv = document.getElementById("Filters");
    filtersdiv.innerHTML = "";

    for(let i=0; i<filtercategories.length; i++)
    {
        let div = document.createElement("div");
        div.classList.add("listTitle");
        let b = document.createElement("b");
        b.textContent = filtercategories[i];
        let ul = document.createElement("ul");
        ul.id = filtercategories[i];
        ul.classList.add("nobullets");

        div.appendChild(b);
        div.appendChild(ul);
        filtersdiv.appendChild(div);
    }

    //Make Filter Lists
    for(let i=0; i<filtercategories.length; i++)
    {
        MakeFilterChoices(i+2,filtercategories[i], array2D);
    }
}

function GetImageName(url)
{
    // Remove Http
    url = url.replace(/h.*?\/\//,"")

    // Split trailing url info
    url = url.split('/');
    
    // Return the image name.
    //console.log(url[0]);
    return url[0];
}  

function PlatformTextToIcon(tableCell){
    var platforms = tableCell.textContent.split(", ")
    tableCell.textContent = "";
    
    platforms.forEach (element =>
    {
        var icon = document.createElement("i");
        var div = document.createElement("div");
        switch(element)
        {
            case "Windows":
                icon.className = "fab fa-windows";
                div.textContent = "Windows";
                div.style = "display: none"
                icon.appendChild(div);
                tableCell.appendChild(icon);
                break;
            case "Mac":
                icon.className = "fab fa-apple";
                div.textContent = "Mac";
                div.style = "display: none"
                icon.appendChild(div);
                tableCell.appendChild(icon);
                break;
            case "Linux":
                icon.className = "fab fa-linux";
                div.textContent = "Linux";
                div.style = "display: none"
                icon.appendChild(div);
                tableCell.appendChild(icon);
                break;
            case "Web":
                icon.className = "fas fa-globe";
                div.textContent = "Web";
                div.style = "display: none"
                icon.appendChild(div);
                tableCell.appendChild(icon);
                break;
            case "iOS":
                icon.className = "fab fa-app-store";
                div.textContent = "iOS";
                div.style = "display: none"
                icon.appendChild(div);
                tableCell.appendChild(icon);
                break;
            case "Android":
                icon.className = "fab fa-android";
                div.textContent = "Android";
                div.style = "display: none"
                icon.appendChild(div);
                tableCell.appendChild(icon);
                break;
            case "Xbox":
                icon.className = "fab fa-xbox";
                div.textContent = "Xbox";
                div.style = "display: none"
                icon.appendChild(div);
                tableCell.appendChild(icon);
                break;
            case "PlayStation":
                icon.className = "fab fa-playstation";
                div.textContent = "PlayStation";
                div.style = "display: none"
                icon.appendChild(div);
                tableCell.appendChild(icon);
                break;
            default:
                div.textContent = element;
                tableCell.appendChild(div);
        }
    });
}

function MakeFilterChoices(column_index, filter_id, csvarray)
{
    var arr = GetFilterNames(column_index, csvarray);
    var list = document.getElementById(filter_id);

    list.innerHTML = "";

    arr.forEach(element => {
        if(element !== "")
        {
            var item = document.createElement("li");
            var label = document.createElement("label");
            var input = document.createElement("input");
            
            input.type = "checkbox";
            input.name = filter_id;
            input.value = element.toLowerCase();
            input.onclick = function() {FilterTable();}

            label.appendChild(input);
            label.appendChild(document.createTextNode(element));
            
            item.appendChild(label);
            list.appendChild(item);
        }
    });
}

// Add filtering for categories, price, platform, and tags
function FilterTable()
{
    //Get all table headers
    let tableheaders = document.getElementsByTagName("th");

    //Get Filter Categories
    let filterCategories = [];
    for(let i=2; i<tableheaders.length-1;i++)
    {
        filterCategories.push(tableheaders[i].textContent);
    }
    console.log(filterCategories);
    
    filterTableByColumn(filterCategories);

    //Disable other filters that are no longer applicable
    for(var i = 0; i < filterCategories.length; i++)
    {
        HideFilters(filterCategories[i], i+2);
    }
}

function filterTableByColumn(filterCategories) 
{
    let filterCategoriesArray = [[]];

    for(let i=0; i<filterCategories.length; i++)
    {
        let ArrayCurrent = UpdateFilterArray(filterCategories[i]);
        filterCategoriesArray.push(ArrayCurrent);
    }
    filterCategoriesArray.shift();
    console.log(filterCategoriesArray);
    
    var table, tr;
    table = document.getElementById("myTable");
    if(table)
    {
        tr = table.getElementsByTagName("tr");
        // Remove table rows that do not match the filter lists
        for (let i = 1; i < tr.length; i++) 
        {
            let filterchecker = true;
            for(let j=0;j<filterCategoriesArray.length;j++)
            {
                if(CheckFilter(filterCategoriesArray[j], tr, i, j+2) && filterchecker)
                {
                    filterchecker = true;
                }
                else
                {
                    filterchecker = false;
                }
            }

            if(filterchecker)
            {
                tr[i].style.display = "";
            } 
            else 
            {
                tr[i].style.display = "none";
            }
        }     
    }
}

function UpdateFilterArray(filterName)
{
    var filterArrayAll = document.getElementsByName(filterName);
    console.log(filterArrayAll);
    var filterArrayCurrent = [];
    for(var i = 0; i < filterArrayAll.length; i++)
    {
        if(filterArrayAll[i].checked === true)
        {
            filterArrayCurrent.push(filterArrayAll[i].value);
        }
    }
    return filterArrayCurrent;
}

function CheckFilter(filterArr, tr, i, colIndex)
{
    var td, j, txtValue, isfiltered = false;
    
    td = tr[i].getElementsByTagName("td")[colIndex];
    if(filterArr.length === 0)
    {
        isfiltered = true;
    }
    if (td) 
    {
        // If table column contains any of the filters, set isfiltered to true.
        for(j=0;j<filterArr.length;j++)
        {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().includes(filterArr[j])) 
            {
                isfiltered = true;
            }
            else
            {
                isfiltered = false;
                break;
            }
        }

        /*
        // If table column does not contain all filters, set isfiltered to false
        for(j=0;j<filterArr.length;j++)
        {
            if (!txtValue.toLowerCase().includes(filterArr[j])) 
            {
                isfiltered = false;
                break;
            } 
        }
        */
    }
    return isfiltered;
}

function GetFilterNames(column_index, csvarray)
{
    var set = new Set();
    for (var j=1;j < csvarray.length;j++)
    {
        var cells = csvarray[j][column_index].split(", ");
        cells.forEach(element => {
            set.add(element);
        });
    }
    return Array.from(set).sort();
}

function HideFilters(filterid, col)
{
    //make all filters visible
    var filter = document.getElementById(filterid);
    var flist = filter.getElementsByTagName("li");
    
    // iterate through the table and add visible cells to set
    var table = document.getElementById("myTable");
    var set = new Set();
    for(var i = 1; i < table.rows.length; i++)
    {
        if(table.rows[i].style.display !== "none")
        {   
            var cells
            if(col === 4)
            {
                cells = Array.from(table.rows[i].cells[col].children);
                cells.forEach(element => {
                    set.add(element.textContent);
                });
            }
            else
            {
                cells = table.rows[i].cells[col].textContent.split(", ");
                cells.forEach(element => {
                    set.add(element);
                });
            }
        }
    }

    var filtervis = Array.from(set).sort();
    /*
    console.log("Set start");
    for(var i=0; i < filtervis.length; i++)
    {
        console.log(filtervis[i]);
    }
    console.log("Set end");
    */

    // make filter lists invisible
    for(var j=0; j < flist.length; j++)
    {
        //console.log(flist[i].textContent);
        //console.log(filtervis.includes(flist[i].textContent));
        if(filtervis.includes(flist[j].textContent))
        {
            //flist[i].style.display = "";
            flist[j].children[0].style.opacity = 1;
            flist[j].children[0].children[0].disabled = false;
        }
        else
        {
            //flist[i].style.display = "none";
            flist[j].children[0].style.opacity = 0.5;
            flist[j].children[0].children[0].disabled = true;
        }
    }
}