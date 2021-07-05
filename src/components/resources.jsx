import React, {useState, useEffect} from "react"

import Layout from "../components/layoutres"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

import {readString} from "react-papaparse"

import "../css/resources.css"

const Resources = ({map, children}) => {
    let resourceMap = new Map(map);

    const [tableName,setTableName] = useState("");
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
            setTableSelect(document.getElementById("category").value);
        }
    });

    useEffect(() => {
        SelectTable(document.getElementById("category").value);
    },[tableSelect]);

    function handleSelectChange(file)
    {
        window.location.hash = file;
        setTableSelect(file);
    }
    function SelectTable(filename)
    {
        //Load CSV Data
        let link = resourceMap.get(filename);
        LoadDoc(link, CreateTableFromArray2D);
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
                    {children}
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



function LoadDoc(filepath, callback) {
    //Show that table is loading
    document.getElementById("showData").innerHTML = "Loading...";

    var csvdata;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
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
                        this.src = "https://ik.imagekit.io/ucxasjyuy/placeholder.png";
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
    //console.log(filtercategories);

    //Make Filter Categories in page
    let filtersdiv = document.getElementById("Filters");
    filtersdiv.innerHTML = "";

    for(let i=0; i<filtercategories.length; i++)
    {
        let div = document.createElement("div");
        div.classList.add("listTitle");
        let b = document.createElement("b");
        b.textContent = filtercategories[i] + ":";
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
        if(element !== platforms[platforms.length - 1])
        {
            div.textContent += ", ";
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
            if (txtValue.toLowerCase().includes(filterArr[j] + ",") || txtValue.toLowerCase().endsWith(filterArr[j])) 
            {
                isfiltered = true;
            }
            else
            {
                isfiltered = false;
                break;
            }
        }
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
            cells = table.rows[i].cells[col].textContent.split(", ");
            cells.forEach(element => {
                set.add(element);
            });
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