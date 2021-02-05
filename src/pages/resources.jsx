import React, {useState, useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {readString} from "react-papaparse"

import "../css/resources.css"

const Resources = () => {
    
    const [tableName,setTableName] = useState("Popular Tools and Services");
    const [tableFile,setTableFile] = useState("pop");

    useEffect(() => {
        SelectTable(tableFile);
    },[tableFile]);

    function handleSelectChange(file, name)
    {
        setTableFile(file);
        setTableName(name);
    }

    return(
        <Layout>
            <SEO title="Resources" description="Explore a Database full of game development tools, assets, and services."/>
            <div className="selectbar">
                <button onClick={console.log("Filter Button")}>
                    <img src="images/filter.svg" alt="filter icon"/>
                    <span>Filter & Sort</span>
                </button>
                <div className="tableTitle">
                    <b>Tables:</b>
                </div>
                <select id="category" onChange={(e) => handleSelectChange(e.target.value, e.target.options[e.target.selectedIndex].text)}>
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
                        <option value="narrative">Narrative Writing</option>
                        <option value="diagram">Diagramming</option>
                    </optgroup>
                    <optgroup label="Business Tools">
                        <option value="analytics">Analytics</option>
                        <option value="business">Business</option>
                        <option value="monetization">Monetization</option>
                        <option value="website">Websites</option>
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
                        <option value="tasking">Tasking and Collaboration</option>
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
                        <option value="conventions">Conventions</option>
                        <option value="awards">Awards</option>
                        <option value="jams">Game Jams</option>
                    </optgroup>
                    <optgroup label="Communities & Career">
                        <option value="communities">Communities</option>
                        <option value="jobs">Job Boards</option>
                    </optgroup>
                    <optgroup label="Education & Learning">
                        <option value="schools">Schools</option>
                        <option value="learning">Learning Websites</option>
                    </optgroup>
                    <optgroup label="Hardware & Peripherals">
                        <option value="hardware">PC, Mobile, and XR Devices</option>
                        <option value="hardwareparts">PC Components</option>
                        <option value="peripherals">Peripherals</option>
                    </optgroup>
                </select>
            </div>
            <div className="sidenav rsidenav">
                <div>
                    <b className="filtername">Filters:</b>
                    <div className="listTitle">
                        <b>Price:</b>
                        <ul id="price" className="nobullets">
                        </ul>    
                    </div>
                    <div className="listTitle">
                        <b>Platform:</b>
                        <ul id="platform" className="nobullets">
                        </ul>    
                    </div>   
                    <div className="listTitle">
                        <b>Categories:</b>
                        <ul id="categories" className="nobullets">
                        </ul>
                    </div>
                    <div className="listTitle">
                        <b>Tags:</b>
                        <ul id="tag" className="nobullets">
                        </ul>
                    </div>
                </div>   
                <div>
                    <br/><br/>
                </div> 
            </div>
            <div className="resource">
                <h1 id="tname">{tableName}</h1>
                <div id="showData">
                </div>
            </div>
        </Layout>
    )
}
export default Resources

//Global vars
var filepath;
var csvdata;

function SelectTable(filename)
{
    //console.log("Select table called");
    filepath = "csv/"+filename+".csv";

    //Clear HTML Data Table
    document.getElementById("showData").innerHTML = "";
    //ClearFilter("price");
    //ClearFilter("platform");
    //ClearFilter("categories");
    //ClearFilter("tag");

    //Load CSV Data
    LoadDoc(filepath, CreateTableFromArray2D);
}

function LoadDoc(filepath, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            //document.getElementById("papa").innerHTML = this.responseText;
            csvdata = readString(this.responseText);
            //console.log(csvdata);
            callback(csvdata.data);
        }
    };
    xhttp.open("GET", filepath, true);
    xhttp.send();
}

function CreateTableFromArray2D(array2D)
{
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
                        this.src = "images/placeholder.png";
                    });
                    img.src = "images/resources/" + GetImageName(array2D[i][j+1]) + ".png";
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

    //Make Filter List
    MakeFilterChoices(3,"price");
    MakeFilterChoices(4,"platform");
    MakeFilterChoices(2,"categories");
    MakeFilterChoices(5,"tag");
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
            case "Nintendo":
                div.textContent = "Nintendo";
                tableCell.appendChild(div);
                break;
            default:
        }
    });
}

function MakeFilterChoices(column_index, filter_id)
{
    var arr = GetFilterNames(column_index);
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

var filtersPrice;
var fitlersPlat;
var fitlersCat;
var fitlersTag;

// Add filtering for categories and tags
function FilterTable()
{
    filtersPrice = UpdateFilterArray("price");
    fitlersPlat = UpdateFilterArray("platform");
    fitlersCat = UpdateFilterArray("categories");
    fitlersTag = UpdateFilterArray("tag");

    filterTableByColumn();

    var filterids = ["categories","price","platform","tag"];
    for(var i = 0; i < filterids.length; i++)
    {
        HideFilters(filterids[i], i+2);
    }
}

function UpdateFilterArray(filterName)
{
    var filterArrayAll = document.getElementsByName(filterName);
    //console.log(filterArrayAll);
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

function filterTableByColumn() 
{
    var table, tr, i;
    table = document.getElementById("myTable");
    if(table)
    {
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) 
        {
            if (CheckFilter(filtersPrice, tr, i, 3) && CheckFilter(fitlersPlat, tr, i, 4) && CheckFilter(fitlersCat, tr, i, 2) && CheckFilter(fitlersTag, tr, i, 5))
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

function GetFilterNames(column_index)
{
    var set = new Set();
    for (var j=1;j < csvdata.data.length;j++)
    {
        var cells = csvdata.data[j][column_index].split(", ");
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