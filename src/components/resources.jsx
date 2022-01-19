import React, {useState, useEffect, useMemo} from "react"

import Layout from "../components/layoutres"
import Seo from "../components/seo"
import Navbar from "../components/navbar"

import {useSortBy, useTable, useGlobalFilter, useFilters, useAsyncDebounce} from "react-table/src";
import {readString} from "react-papaparse"

import "../css/resources.css"

const IconsOS = ({source}) => {
    let platformsArray = source.split(", ")
    let isWindows, isMac, isLinux, isWeb, isIOS, isAndroid, isXbox, isPlayStation;
    let otherTemp = "";
    const[other, setOther] = useState("");
    useEffect(()=>{getPlatforms(platformsArray);},[]);

    return(
        <>
            {source.includes("Windows")  &&
                <i className="fab fa-windows">
                    <div style={{display: "none"}}>Windows, </div>
                </i>}
            {source.includes("Mac") &&
                <i className="fab fa-apple">
                    <div style={{display: "none"}}>Mac, </div>
                </i>}
            {source.includes("Linux") &&
                <i className="fab fa-linux">
                    <div style={{display: "none"}}>Linux, </div>
                </i>}
            {source.includes("Web") &&
                <i className="fas fa-globe">
                    <div style={{display: "none"}}>Web, </div>
                </i>}
            {source.includes("iOS") &&
                <i className="fab fa-app-store">
                    <div style={{display: "none"}}>iOS, </div>
                </i>}
            {source.includes("Android") &&
                <i className="fab fa-android">
                    <div style={{display: "none"}}>Android, </div>
                </i>}
            {source.includes("Xbox") &&
                <i className="fab fa-xbox">
                    <div style={{display: "none"}}>Xbox, </div>
                </i>}
            {source.includes("PlayStation") &&
                <i className="fab fa-playstation">
                    <div style={{display: "none"}}>PlayStation, </div>
                </i>}
            {other}
        </>
    );

    function getPlatforms(platforms){
        platforms.forEach ((element,index) => {
            switch (element){
                case "Windows":
                    isWindows = true;
                    break;
                case "Mac":
                    isMac = true;
                    break;
                case "Linux":
                    isLinux = true;
                    break;
                case "Web":
                    isWeb = true;
                    break;
                case "iOS":
                    isIOS = true;
                    break;
                case "Android":
                    isAndroid = true;
                    break;
                case "Xbox":
                    isXbox = true;
                    break;
                case "PlayStation":
                    isPlayStation = true;
                    break;
                default:
                    otherTemp += (element)
                    setOther(otherTemp);
                    if(index !== platforms.length-1){
                        otherTemp += ", "
                        setOther(otherTemp);
                    }
            }
        });
    }
}

const Image = ({source}) => {
    return (
        <img src={"https://ik.imagekit.io/ucxasjyuy/resources/" + GetImageName(source) + ".png?tr=w-32"} className = "tableimg" onError={ (e) => {e.target.onerror = null; e.target.src="https://ik.imagekit.io/ucxasjyuy/placeholder.png";}}/>
    );

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
}

const GlobalFilter = ({ filter, setFilter }) => {
    return(
        <div>
            <span className="filtername bold">Search: {" "}</span>
            <input className="globalSearch" value={filter || ""} onChange={(e) => {setFilter(e.target.value);setTimeout(()=>{FilterTable();},100) }}/>
        </div>
    );
}

const GlobalFilterAsync = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);

    const onChange = useAsyncDebounce((value) => {
        setFilter(value || undefined);
        FilterTable();
    },1000)

    return(
        <div>
            Search: {" "}
        <input value={value || ""} onChange={(e) => {setValue(e.target.value);onChange(e.target.value);}}/>
        </div>
    );
}

const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    return(
        <div>
            Search: {" "}
            <input value={filterValue || ""} onChange={(e) => {setFilter(e.target.value);}}/>
        </div>
    );
}

const EmptyRow = ({rows}) => {
    let isTableEmpty = rows.length === 0;
    return(
        isTableEmpty &&
        <tr><td className="emptyRow" colSpan={99}>No Results</td></tr>
    )
}

const Table = ({columns, data}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({ columns: columns, data: data }, useFilters, useGlobalFilter, useSortBy);

    const {globalFilter} = state;

    return(
        <>
        <table {...getTableProps()} id={"myTable"}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {/*<div>
                                {column.canFilter ? column.render("Filter") : ""}
                            </div>*/}
                            {column.disableSortBy
                                ?""
                                :column.isSorted
                                    ? column.isSortedDesc
                                        ? <i className="fas fa-sort-down"></i>
                                        : <i className="fas fa-sort-up"></i>
                                    : <i className="fas fa-sort"></i>
                            }
                            {" " + column.render('Header')}
                            {/* Add a sort direction indicator */}

                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {
            rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                                <td
                                    {...cell.getCellProps()}
                                >
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            <EmptyRow rows={rows}/>
            </tbody>
        </table>
        <div className="sidenav rsidenav">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <br/>
            <div className="filtername">
                <b>Filters:</b>
            </div>
            <div id="Filters">
            </div>
            <div>
                <br/><br/>
            </div>
        </div>
        </>
    );
}

const Resources = ({map, children}) => {
    let resourceMap = map;

    const [tableName,setTableName] = useState("");
    let csvData =[], columnsData = [];
    // table = useMemo(() => csvData,[csvData]);
    // const columns = useMemo(() => columnsData,[csvData]);
    const [table,setTable] = useState(csvData);
    const [columns,setColumns] = useState(columnsData);

    useEffect(()=>{
        SelectTable();
        window.addEventListener('hashchange', hashChangeHandler);
        return () => {
            window.removeEventListener('hashchange', hashChangeHandler);
        };
    },[]);

    const hashChangeHandler = React.useCallback(() => {
        //console.log("hash change" + window.location.hash);
        SelectTable();
    },[]);

    function SelectTable()
    {
        if(window.location.hash !== "")
        {
            document.getElementById("category").value = window.location.hash.split('#')[1];
            LoadTable(document.getElementById("category").value);
        }
        else
        {
            document.getElementById("category").selectedIndex = 0;
            LoadTable(document.getElementById("category").value);
        }
    }

    function handleSelectChange(file)
    {
        window.location.hash = file;
    }
    function LoadTable(filename)
    {
        let link = resourceMap[filename];
        let category = document.getElementById("category");
        setTableName(category.options[category.selectedIndex].text);

        //Load CSV Data
        //CreateTableFromArray2D(readString(link).data);

        // React-table implementation
        csvData = readString(link,{header:true}).data;
        //console.log("csvData: ");
        //console.log(csvData);
        let columnKeys = Object.keys(csvData[0]);
        //console.log("columnKeys: ");
        //console.log(columnKeys);
        let arr = [];
        arr.push({
            Header: "",
            accessor: "Image",
            disableSortBy: true,
            Cell: ({row}) => <Image source={row.original.Link} />,
            //Filter: ColumnFilter
        })
        for(let i = 0; i < columnKeys.length; i++){
            if(i === 0){
                arr.push({
                    Header: columnKeys[i],
                    accessor: columnKeys[i],
                    Cell: ({row})=> <a href={row.original.Link} target="_blank" rel="noopener noreferrer">{row.original.Name}</a>
                })
            }
            else if(i === 1){
                continue;
            }
            else if(i === 4){
                arr.push({
                    Header: columnKeys[i],
                    accessor: columnKeys[i],
                    disableSortBy: true,
                    Cell: ({row})=> <IconsOS source={row.original.Platforms}/>,
                })
            }
            else if(i > 2){
                arr.push({
                    Header: columnKeys[i],
                    accessor: columnKeys[i],
                    disableSortBy: true
                })
            }
            else {
                arr.push({
                    Header: columnKeys[i],
                    accessor: columnKeys[i]
                })
            }
        }
        columnsData = arr;
        //console.log("columnsData");
        //console.log(columnsData);

        setColumns(columnsData);
        //console.log("columns");
        //console.log(columns);

        setTable(csvData);
        //console.log("table");
        //console.log(table);

        MakeFilters(readString(link).data);

    }

    function toggleSidebar()
    {
        let side = document.getElementsByClassName("sidenav")[0];
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
            <Seo title="Resources" description="Explore a Database full of game development tools, assets, and services."/>
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

            <Navbar/>
            <div className="resource">
                <h1 id="tname">{tableName}</h1>

                <Table
                    columns={columns}
                    data ={table}
                />

                <div id="showData">
                </div>
            </div>
        </Layout>
    )
}
export default Resources

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
                    img.src = "https://ik.imagekit.io/ucxasjyuy/resources/" + GetImageName(array2D[i][j+1]) + ".png?tr=w-32";
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

function MakeFilters(array2D){
    //Get all table headers
    //let tableheaders = document.getElementsByTagName("th");
    let tableheaders = array2D[0];

    //Get Filter Categories
    let filtercategories = [];
    for(let i=2; i<tableheaders.length-1;i++)
    {
        filtercategories.push(tableheaders[i]);
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
        // Does not work with react tables. Filtercategories value is null.
        MakeFilterChoices(i+2,filtercategories[i], array2D);
        //console.log("filtercategories" + i);
        //console.log(filtercategories[i]);
    }
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
    //console.log("tableheaders");
    //console.log(tableheaders);

    //Get Filter Categories
    let filterCategories = [];
    for(let i=2; i<tableheaders.length-1;i++)
    {
        filterCategories.push(tableheaders[i].textContent.trim());
    }
    //console.log(filterCategories);
    
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
    //console.log(filterCategoriesArray);
    
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
            txtValue = td.textContent;
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

    /*console.log(filterid);
    console.log(col);
    console.log(filter);
    console.log(flist);*/

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
    //console.log(filtervis);
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
        //console.log(flist[j].textContent);
        //console.log(filtervis.includes(flist[j].textContent));
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
