import React, {useState, useEffect, useMemo} from "react"
import Collapsible from 'react-collapsible';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Modal from "../components/modal"

import {useSortBy, useTable, usePagination, useGlobalFilter, useFilters, useAsyncDebounce} from "react-table/src";
import {readString} from "react-papaparse"

import "../css/resources.css"
import axios from "axios";
import {graphql, useStaticQuery} from "gatsby";

const IconsOS = ({source}) => {
    let platformsArray = source !== undefined ? source.split(", ") : [];
    let otherTemp = "";
    const[other, setOther] = useState("");
    useEffect(()=>{getPlatforms(platformsArray);},[]);

    return(
        source !== undefined && <>
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
                    break;
                case "Mac":
                    break;
                case "Linux":
                    break;
                case "Web":
                    break;
                case "iOS":
                    break;
                case "Android":
                    break;
                case "Xbox":
                    break;
                case "PlayStation":
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
// bCustomImage = true means to use the imagekit cdn because CustomImageString="TRUE"
// if bCustomImage is false, then the image will be pulled from the provided CustomImageString
const Image = ({source, bCustomImage=false, CustomImageString=""}) => {
    //console.log(bCustomImage + " " + source)
    //console.log(bCustomImage + " " +  !(CustomImageString==="")  + " " + CustomImageString)
    return (
        bCustomImage ? <img src={"https://ik.imagekit.io/ucxasjyuy/resources/" + GetImageName(source) + ".png?tr=w-32"} className ={"tableimg"} onError={ (e) => {replaceImgOnError (e.target)}} alt={"Icon"}/>
        : !(CustomImageString==="") ? <img src={CustomImageString} className ={"tableimg"} onError={ (e) => {replaceImgOnError (e.target)}} alt={"Icon"}/>
        :<img src={"https://www.google.com/s2/favicons?sz=32&domain_url="+source} className ={"tableimg"} onError={ (e) => {replaceImgOnError (e.target)}} alt={"Icon"}/>
    );

    function GetFavicon(url)
    {
        // Split trailing url info
        url = url.split('/');
        console.log(url[0]+url[1]+url[2]);
        return url[0]+url[1]+url[2]+"/favicon.ico";
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

    function replaceImgOnError (img) {
        img.src = "https://www.google.com/s2/favicons?sz=32&domain_url="+source;
        img.onerror = () => {
            img.src = "https://ik.imagekit.io/ucxasjyuy/placeholder.png?tr=w-32";
        }
    }
}

const GlobalFilter = ({ filter, setFilter }) => {
    return(
        <div>
            <div className="filtername bold">Search: {" "}</div>
            <input className="globalSearch" value={filter || ""} onChange={(e) => {setFilter(e.target.value);{/*setTimeout(()=>{FilterTable();},100);*/} }}/>
        </div>
    );
}

const GlobalFilterAsync = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);

    const onChange = useAsyncDebounce((value) => {
        setFilter(value || undefined);
        //FilterTable();
    },500)

    return(
        <div>
            <span className="filtername bold">Search: {" "}</span>
            <input className="globalSearch"  value={value || ""} onChange={(e) => {setValue(e.target.value);onChange(e.target.value);}}/>
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

function setFilteredParams(filterArr, val, checked) {
    //console.log(checked)
    if (filterArr.includes(val) && !checked) {
        filterArr = filterArr.filter((n) => {
            return n !== val;
        });
    } else filterArr.push(val);

    if (filterArr.length === 0) filterArr = undefined;

    //console.log(filterArr);
    return filterArr;
}

function SelectColumnFilter({column: { filteredRows, filterValue = [], setFilter, preFilteredRows, id, Header }}) {

    // Get array of options based on all rows in a table.
    const options = useMemo(() => {
        let set = new Set();
        filteredRows.forEach(row =>{
            if(row.values[id] !== undefined){
                let cells = row.values[id].split(", ");
                cells.forEach(element => {
                    set.add(element);
                });
            }
        })
        return Array.from(set).sort();
    }, [id])

    // Get set of options based on the filtered rows
    const optionsSet = useMemo(() => {
        let set = new Set();
        filteredRows.forEach(row =>{
            if(row.values[id] !== undefined){
                let cells = row.values[id].split(", ");
                cells.forEach(element => {
                    set.add(element);
                });
            }
        })
        return set;
    },[filteredRows]);

    function isDisabled(option){
        return !optionsSet.has(option);
    }

    let defaultOpen = window.innerWidth > 768 && !window.location.href.includes("/all/");

    return (
        <div className="listTitle">
            <Collapsible trigger={Header} transitionTime={200} open={defaultOpen} triggerClassName={"collapsible-arrow-down"} triggerOpenedClassName={"collapsible-arrow-up"}>{/*<span className="bold">{Header}:</span>*/}
                <ul key={window.location.hash}>
                    {options.map((option, i) => {
                        return (
                            (option !== "") &&
                            <li className="nobullets" key={option + id}>
                                <input
                                    type="checkbox"
                                    className="filterItem"
                                    id={option}
                                    name={option}
                                    value={option}
                                    onChange={(e) => {
                                        setFilter(setFilteredParams(filterValue, e.target.value, e.target.checked));
                                    }}
                                    disabled={isDisabled(option)}
                                    /*defaultChecked={false}*/
                                />
                                <label htmlFor={option}>{option}</label>
                            </li>
                        );
                    })}
                </ul>
            </Collapsible>
        </div>
    );
}

const LoadingData = () => {
    return(
        <h2 className={"textcenter"}>Loading Data...</h2>
    );
}

const EmptyRow = ({rows}) => {
    console.log("Empty rows");
    console.log(rows);
    let isTableEmpty = rows.length === 0;
    return(
        isTableEmpty && <h2>No Search Results</h2>
    )
}

const Resources = ({map, children}) => {
    const query = useStaticQuery( graphql`
        query AllSheets{
            allContentfulTestAsset(
                filter: {optionvalue: {regex: "/^(?!pop).+/", nin: ["userSubmitted","global"]}}
                sort: {fields: optionvalue}
              ) {
                edges {
                  node {
                    optionvalue
                    csvlink
                  }
                }
              }
        }
    `);

    let resourceData;
    const [isLoading,setIsLoading] = useState(false);
    const [tableName,setTableName] = useState("");
    let csvData =[], columnsData = [];
    const [data,setData] = useState(csvData);
    const [columns,setColumns] = useState(columnsData);
    const [isGlobalTable,setIsGlobalTable] = useState(false);

    function MakeResourceMap(entry){
        //console.log(entry[1])
        return axios.get(entry[1]);
    }

    useEffect(()=>{
        //console.log(map)
        // If viewing All Resources, then initialize the Global Table
        if(map.global === "nocsvlink"){
            setIsGlobalTable(true);
            InitializeGlobalTable();
        }
        else{
            // Otherwise, load a table from the Select list.
            //console.log(map);
            //console.log(localStorage.getItem(initialKey));

            // If table does not exist in local storage, show "Loading" text.
            let initialKey = document.getElementById("category").value;
            if(!localStorage.getItem(initialKey)){
                //console.log("set loading to true");
                setIsLoading(true);
                //console.log("isLoading");
                //console.log(isLoading);
            }

            // Get tables from local storage.
            let tempMap = {};
            Object.keys(map).forEach((key) => {
                tempMap[key] = localStorage.getItem(key);
            })
            resourceData = tempMap;
            //console.log("tempMap")
            //console.log(tempMap)

            // Show table if it exists.
            SelectTable();

            // Get data tables using Axios function and save any changes to local storage.
            let object = {};
            //console.log(map)
            //console.log(Array.from(Object.entries(map)))
            try{
                Promise.all(Array.from(Object.entries(map)).map(MakeResourceMap))
                    .then(dataArray => {
                        Object.keys(map).forEach((key, index) => {
                            object[key] = dataArray[index].data
                            if (localStorage.getItem(key) !== dataArray[index].data) {
                                localStorage.setItem(key, object[key]);
                            }
                        })
                        resourceData = object;

                        // Only load table with axios data if the current local storage data differs from the axios data.
                        if (tempMap[initialKey] !== object[initialKey]) {
                            setData([]);
                            setColumns([]);
                            SelectTable();
                        }
                        setIsLoading(false);
                    })
            }
            catch (e) {
                console.log(e)
            }
        }

        // Set hash change handler so we can switch between tables using browser navigation.
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
        //console.log("Load Table");
        if(resourceData === undefined){
            console.log("resourceMap undefined");
            return;
        }
        if(map.global === "nocsvlink"){
            console.log("Ignore LoadTable for View All Resources page.");
            return;
        }

        //console.log(filename)
        //console.log(resourceData[filename])
        let link = resourceData[filename];
        let category = document.getElementById("category");
        setTableName(category.options[category.selectedIndex].text);

        // React-table implementation
        try{
            csvData = readString(link, {header: true}).data;

            //console.log("csvData: ");
            //console.log(csvData);
            let columnKeys = Object.keys(csvData[0]);
            //console.log("columnKeys: ");
            //console.log(columnKeys);
            let arr = [];

            // Make Image column for resource table
            if(columnKeys.toString().includes("Link")){
                arr.push({
                    Header: "",
                    accessor: "Image",
                    disableSortBy: true,
                    Cell: ({row}) => <Image source={row.original.Link} bCustomImage={row.original.CustomImage === "TRUE"} CustomImageString={row.original.CustomImage}/>,
                    disableFilters: true,
                })
            }
            // Make Image column for resource table
            if(columnKeys.toString().includes("URL")){
                arr.push({
                    Header: "",
                    accessor: "Image",
                    disableSortBy: true,
                    Cell: ({row}) => <Image source={row.original.URL}/>,
                    disableFilters: true,
                })
            }
            //console.log("columnKeys.length: " + columnKeys.length);
            for(let i = 0; i < columnKeys.length; i++){
                let columnObject = {};
                columnObject.Header = columnKeys[i];
                columnObject.accessor = columnKeys[i];
                columnObject.id = columnKeys[i]+window.location.hash;
                if(columnKeys[i].includes("Name")){
                    columnObject.Cell = ({row}) => <a href={row.original.Link} target="_blank" rel="noopener noreferrer">{row.original.Name}</a>;
                    columnObject.disableFilters = true;
                }
                if(columnKeys[i].includes("Link")){
                    continue;
                }
                /*if(columnKeys[i].includes("Resource")){
                    columnObject.Cell = ({row})=> <a href={row.original.URL} target="_blank" rel="noopener noreferrer" className={"work-break"}>{row.original.Resource + " ("+row.original.URL+")"}</a>;
                    columnObject.disableFilters = true;
                }*/
                if(columnKeys[i].includes("Resource")){
                    columnObject.Cell = ({row}) =>
                        row.original.Verified === "TRUE" ?
                        <>
                            <a href={row.original.URL} target="_blank" rel="noopener noreferrer">{row.original.Resource}</a>
                            <img src="https://img.icons8.com/color/24/000000/verified-badge.png" className={"inline-block vertical-align"} alt={"Verified"}/>
                        </>
                        : <>
                            <button className={"button_link"} onClick={() => {
                                setModalOpen(true);
                                setModalName(row.original.Resource);
                                setModalLink(row.original.URL);
                            }}>
                                {row.original.Resource}
                            </button>
                            <img src={"https://img.icons8.com/fluency/24/000000/error.png"} className={"inline-block vertical-align"} alt={"Warning"}/>
                        </>
                    columnObject.disableFilters = true;
                }
                if(columnKeys[i].includes("URL")){
                    continue;
                }
                if(columnKeys[i].includes("Platforms")){
                    columnObject.Cell = ({row}) => <IconsOS source={row.original.Platforms}/>;
                }
                if(i > 1  && i < columnKeys.length - 1){
                    columnObject.Filter = SelectColumnFilter;
                    columnObject.filter = "includesAll";
                }
                if(i > 2  && i < columnKeys.length){
                    columnObject.disableSortBy = true;
                }
                if(columnKeys[i].includes("Description")) {
                    columnObject.disableFilters = true;
                }
                if(columnKeys[i].includes("Google Account Security")){
                    continue;
                }
                if(columnKeys[i].includes("Timestamp")){
                    continue;
                }
                if(columnKeys[i].includes("Verified")){
                    continue;
                }
                if(columnKeys[i].includes("CustomImage")){
                    continue;
                }
                //console.log(columnObject)
                arr.push(columnObject);
            }
            columnsData = arr;
            //console.log("columnsData");
            //console.log(columnsData);
            setData(csvData);

            setColumns(columnsData);
            //console.log("columns");
            //console.log(columns);

            //console.log("table");
            //console.log(table);
        }catch (e){
            console.log(e)
        }
    }
    function InitializeGlobalTable()
    {
        //console.log("Initialize Global Tables");
        setTableName("All Resources");
        setPageSize(10);
        // If table does not exist in local storage, show "Loading" text.
        /*query.allContentfulTestAsset.edges.map(edge => {
            if(!localStorage.getItem(edge.node.optionvalue)) {
                setIsLoading(true);
                return;
            }
        })*/
        try{
            let resourceGlobalLocal = {};
            //console.log(query);
            query.allContentfulTestAsset.edges.map(edge => {
                if(localStorage.getItem(edge.node.optionvalue) !== null) {
                    resourceGlobalLocal[edge.node.optionvalue] = localStorage.getItem(edge.node.optionvalue);
                }
            })
            //console.log(resourceGlobalLocal)

            // Load Global table from local storage data.
            if(Object.keys(resourceGlobalLocal).length === 0){
                setIsLoading(true);
            }
            else {
                GlobalTable(resourceGlobalLocal);
            }

            // Make table object with names and values of the tables and csv url.
            let tables = {};
            query.allContentfulTestAsset.edges.map(edge => {
                tables[edge.node.optionvalue]=edge.node.csvlink;
            })
            //console.log(tables);

            // Fetch the csv data from the tables object
            let resourceGlobal;
            let object = {};
            Promise.all(Array.from(Object.entries(tables)).map(MakeResourceMap))
                .then(dataArray => {
                    Object.keys(tables).forEach((key,index) => {
                        object[key] = dataArray[index].data;
                        if(localStorage.getItem(key) !== dataArray[index].data){
                            localStorage.setItem(key,object[key]);
                        }
                    })
                    resourceGlobal = object;
                    setIsLoading(false);

                    //console.log(resourceGlobal);
                    //console.log(Object.values(resourceGlobal))

                    // Load table from fetched data if it doesn't match local storage data.
                    //console.log(Object.keys(resourceGlobalLocal).length !== Object.keys(resourceGlobal).length);
                    if(Object.keys(resourceGlobalLocal).length !== Object.keys(resourceGlobal).length){
                        setData([]);
                        setColumns([]);
                        GlobalTable(resourceGlobal);
                    }
                    else{
                        for (const key of Object.keys(resourceGlobal)) {
                            if(resourceGlobal[key] !== resourceGlobalLocal[key]){
                                setData([]);
                                setColumns([]);
                                GlobalTable(resourceGlobal);
                                break;
                            }
                        }
                    }
                })
        }
        catch (e){
            console.log(e);
        }

    }

    function GlobalTable(resourceGlobal)
    {
        //console.log("Load Global Tables");
        csvData = [];
        let link, data;

        // React-table implementation
        try{
            //console.log(Object.values(resourceGlobal).length)

            for(let i = 0; i < Object.values(resourceGlobal).length; i++){
                //console.log(i)
                //console.log(Object.values(resourceGlobal)[i])
                data = Object.values(resourceGlobal)[i];
                link = readString(data, {header: true}).data;
                //console.log(link)
                csvData = csvData.concat(link);
            }
            //console.log(csvData)

            let columnKeys = Object.keys(csvData[0]);
            let arr = [];

            // Make Image column for resource table
            if(columnKeys.toString().includes("Link")){
                arr.push({
                    Header: "",
                    accessor: "Image",
                    disableSortBy: true,
                    Cell: ({row}) => <Image source={row.original.Link} bCustomImage={row.original.CustomImage === "TRUE"} CustomImageString={row.original.CustomImage}/>,
                    disableFilters: true,
                })
            }
            for(let i = 0; i < columnKeys.length; i++){
                let columnObject = {};
                columnObject.Header = columnKeys[i];
                columnObject.accessor = columnKeys[i];
                columnObject.id = columnKeys[i]+window.location.hash;
                if(i > 1  && i < columnKeys.length - 1){
                    columnObject.Filter = SelectColumnFilter;
                    columnObject.filter = "includesAll";
                }
                if(i > 2  && i < columnKeys.length){
                    columnObject.disableSortBy = true;
                }
                if(columnKeys[i].includes("Name")){
                    columnObject.Cell = ({row}) => <a href={row.original.Link} target="_blank" rel="noopener noreferrer">{row.original.Name}</a>;
                    columnObject.disableFilters = true;
                    arr.push(columnObject);
                }
                if(columnKeys[i].includes("Categories")){
                    arr.push(columnObject);
                }
                if(columnKeys[i].includes("Pricing")){
                    arr.push(columnObject);
                }
                if(columnKeys[i].includes("Platforms")){
                    columnObject.Cell = ({row}) => <IconsOS source={row.original.Platforms}/>;
                    arr.push(columnObject);
                }
                if(columnKeys[i].includes("Description")) {
                    columnObject.disableFilters = true;
                    arr.push(columnObject);
                }
            }
            columnsData = arr;
            setData(csvData);

            setColumns(columnsData);
        }catch (e){
            console.log(e)
        }
    }

    const [filterOpen,setFilterOpen] = useState(false);
    function toggleSidebar()
    {
        setFilterOpen(!filterOpen);
        let side = document.getElementsByClassName("rsidenav")[0];
        if(side.style.display === "none" || side.style.display === "")
        {
            side.style.display = "block";
            document.body.classList.add("disableScroll");
        }
        else
        {
            side.style.display = "";
            document.body.classList.remove("disableScroll");
        }
    }

    // View Button
    const [view,setView] = useState("table");
    useEffect(() => {
        // Initialize View
        setView(localStorage.getItem("resource-view") !== null ? localStorage.getItem("resource-view") : "table");
    },[]);

    function cycleView(){
        //console.log(view)
        switch (view) {
            case "table":
                setView("list");
                localStorage.setItem("resource-view", "list");
                break;
            case "list":
                setView("grid");
                localStorage.setItem("resource-view", "grid");
                break;
            case "grid":
                setView("table");
                localStorage.setItem("resource-view", "table");
                break;
            default:
                setView("table");
                localStorage.setItem("resource-view", "table");
                break;
        }
    }
    const ViewButton = () => {
        return (
            <button className="viewButton select-flex-item" onClick={()=>{cycleView();}}>
            {(view === "table" || view === "") && <><i className="fas fa-table"></i><span> Table View</span></>}
            {view === "list" && <><i className=" fas fa-th-list"></i><span> List View</span></>}
            {view === "grid" && <><i className=" fas fa-th-large"></i><span> Grid View</span></>}
            </button>
        );
    }

    const defaultColumn = useMemo(() => {
        return{
            Filter: ColumnFilter,
        }
    },[])
    function compareIgnoreCase(a, b) { let r1 = a.toLowerCase(); let r2 = b.toLowerCase(); if (r1 < r2) { return -1; } if (r1 > r2) { return 1; } return 0; }
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { globalFilter, pageIndex, pageSize },
        setGlobalFilter,
        setAllFilters
    } = useTable(
{ columns: columns,
        data: data,
        defaultColumn,
        initialState: { pageIndex: 0, pageSize: 99999},
        sortTypes: {
            alphanumeric: (row1, row2, columnName) => {
                return compareIgnoreCase(
                    row1.values[columnName],
                    row2.values[columnName]
                )
            },
        },
    }, useFilters, useGlobalFilter, useSortBy, usePagination);

    useEffect(()=>{
        setAllFilters([]);
    },[data])

    const [modalOpen,setModalOpen] = useState(false);
    const [modalName,setModalName] = useState("");
    const [modalLink,setModalLink] = useState("");

    return(
        <Layout>
            <Seo title="Resources" description="Explore a Database full of game development tools, assets, and services."/>

            <div className="flex-container row limit-width margin-center">
                <div className="flex-item">
                    <div className="selectbar selectbarRes">
                        <div className="select-flex-container align-items-flex-end">
                            <span className="tableTitle select-flex-item">
                                Tables:
                            </span>
                            <div className="select-flex-item-padding"/>
                            <ViewButton/>
                            <select id="category" className="tableSelect select-flex-item" onChange={(e) => {
                                handleSelectChange(e.target.value);
                            }}>
                                {children}
                            </select>
                            <button className="filterSortButton select-flex-item" onClick={(e) => toggleSidebar()}>
                                {!filterOpen && <><i className="fas fa-sliders-h"></i>
                                    <span className={"filterButtonText"}> Filter & Sort</span></>
                                }
                                {filterOpen && <><i className="fas fa-times"></i>
                                    <span className={"filterButtonText"}> Close Filter</span></>
                                }
                            </button>
                        </div>
                    </div>
                    {/* Sidebar */}
                    <div className="rsidenav">
                        <GlobalFilterAsync filter={globalFilter} setFilter={setGlobalFilter} />
                        <br/>
                        <div className="filtername">
                            <b>Sort:</b>
                        </div>
                        {<div {...getTableProps()} className="listTitle">
                            {headerGroups.map(headerGroup => (
                                <ul {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        !column.disableSortBy &&
                                        <li {...column.getHeaderProps(column.getSortByToggleProps())}
                                            className="nobullets">
                                            {column.disableSortBy
                                                ? ""
                                                : column.isSorted
                                                    ? column.isSortedDesc
                                                        ? <i className="fas fa-sort-down"></i>
                                                        : <i className="fas fa-sort-up"></i>
                                                    : <i className="fas fa-sort"></i>
                                            }
                                            {" " + column.render('Header')}
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>}

                        <div className="filtername select-flex-container">
                            <div className="flex-filter-item bold">Filters:</div>
                            <div className="flex-filter-item-padding"></div>
                            <button className="flex-filter-item resetButton" onClick={() => {
                                setAllFilters([]);
                                let inputs = document.getElementsByClassName("filterItem");
                                Array.from(inputs).forEach((element, index) => {
                                    element.checked = false;
                                })
                            }}>
                                Reset
                            </button>
                        </div>

                        <div id="Filters">
                            {headerGroups.map((headerGroup) => (
                                <div {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <div {...column.getHeaderProps()}>
                                            {
                                                /*column.canFilter ? column.render("Filter") : null*/
                                                !column.disableFilters ? column.render("Filter") : null
                                            }
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-item-resource-table">
                    <h1 id="tname" className="textcenter">{tableName}</h1>
                    {isLoading && <LoadingData/>}

                    {/* User Submission */}
                    {tableName.includes("User Submitted") &&
                        <div className={"textcenter"}>
                            <a href={"https://forms.gle/QxW3cnvsN4ikQ9wA9"} target="_blank" rel="noopener noreferrer"
                              className={"button button_submission "}>Submit a Resource</a>
                            {modalOpen && <Modal setModalOpen={setModalOpen} name={modalName} link={modalLink}/>}
                        </div>
                    }
                        {/* Table View */}
                        {view === "table" && rows.length !== 0 && <table {...getTableProps()} id={"myTable"}>
                            <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.disableSortBy
                                                ? ""
                                                : column.isSorted
                                                    ? column.isSortedDesc
                                                        ? <i className="fas fa-sort-down"></i>
                                                        : <i className="fas fa-sort-up"></i>
                                                    : <i className="fas fa-sort"></i>
                                            }
                                            {" " + column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                            {
                                page.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell, index) => {
                                                if (index === 1) {
                                                    return (
                                                        <td {...cell.getCellProps()} className="entry-name-table">
                                                            {cell.render('Cell')}
                                                        </td>
                                                    )
                                                }
                                                return (
                                                    <td {...cell.getCellProps()}>
                                                        {cell.render('Cell')}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>}

                        {/* Grid View */}
                        {view === "grid" && <div {...getTableProps()} id={"myTable"}>
                            <div {...getTableBodyProps()} className="grid-container">
                                {
                                    page.map((row, index) => {
                                        prepareRow(row)
                                        return (
                                            <>
                                                <div {...row.getRowProps()} className="grid-item">
                                                    {row.cells.map((cell, index) => {
                                                        if (index === 1) {
                                                            return (
                                                                <div key={cell.render('Cell')}>
                                                                    <div {...row.cells[index-1].getCellProps()} className="entry-image grid">
                                                                        {row.cells[index-1].render('Cell')}
                                                                    </div>
                                                                    <div {...cell.getCellProps()}
                                                                         className="entry-name-grid">
                                                                        {cell.render('Cell')}
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        if (index > 1 && index < row.cells.length - 1) {
                                                            //console.log(cell.render('Cell').props.value)
                                                            return (
                                                                cell.render('Cell').props.value !== "" &&
                                                                <span {...cell.getCellProps()}
                                                                      className={"entry-chip chip-color"}>
                                                                    {cell.render('Cell')}
                                                                </span>
                                                            )
                                                        }
                                                        if(index === row.cells.length - 1){
                                                            return (
                                                                <div {...cell.getCellProps()}
                                                                     className="entry-description">
                                                                    {cell.render('Cell')}
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>}

                        {/* List View */}
                        {(view === "list") && <div {...getTableProps()} id={"myTable"}>
                            <div {...getTableBodyProps()} className="flex-container column wrap list-container">
                                {
                                    page.map((row, index) => {
                                        prepareRow(row)
                                        return (
                                            <>
                                                <div {...row.getRowProps()} className="flex-list-item">
                                                    {row.cells.map((cell, index) => {
                                                        if (index === 1) {
                                                            return (
                                                                <div>
                                                                    <div {...row.cells[index-1].getCellProps()} className="entry-image">
                                                                        {row.cells[index-1].render('Cell')}
                                                                    </div>
                                                                    <div {...cell.getCellProps()}
                                                                         className="entry-name">
                                                                        {cell.render('Cell')}
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        if (index === 1) {
                                                            return (
                                                                <>
                                                                    <div {...cell.getCellProps()}
                                                                         className="entry-name">
                                                                        {cell.render('Cell')}
                                                                    </div>
                                                                    <br/>
                                                                </>
                                                            )
                                                        }
                                                        if (index > 1 && index < row.cells.length - 1) {
                                                            return (
                                                                cell.render('Cell').props.value !== "" &&
                                                                <span {...cell.getCellProps()}
                                                                      className={"entry-chip chip-color"}>
                                                                    {cell.render('Cell')}
                                                                </span>
                                                            )
                                                        }
                                                        if(index === row.cells.length - 1){
                                                            return (
                                                                <div {...cell.getCellProps()}
                                                                     className="entry-description">
                                                                    {cell.render('Cell')}
                                                                </div>
                                                            )
                                                        }

                                                    })}
                                                </div>
                                            </>
                                        )
                                    })}
                            </div>
                        </div>}
                        {globalFilter && <EmptyRow rows={rows}/>}
                        {/*
                        Pagination can be built however you'd like.
                        This is just a very basic UI implementation:
                        */}
                        {!isLoading && isGlobalTable && <div className="pagination">
                            <button onClick={() => {
                                gotoPage(0);
                                window.scrollTo(0,0);
                            }} disabled={!canPreviousPage}>
                                {'<<'}
                            </button>
                            {' '}
                            <button onClick={() => {
                                previousPage();
                                window.scrollTo(0,0);
                            }} disabled={!canPreviousPage}>
                                {'<'}
                            </button>
                            {' '}
                            <button onClick={() => {
                                nextPage();
                                window.scrollTo(0,0);
                            }} disabled={!canNextPage}>
                                {'>'}
                            </button>
                            {' '}
                            <button onClick={() => {
                                gotoPage(pageCount - 1);
                                window.scrollTo(0,0);
                            }} disabled={!canNextPage}>
                                {'>>'}
                            </button>
                            {' '}
                            <span>
                                Page{' '}
                                <strong>
                                    {pageIndex + 1} of {pageOptions.length}
                                </strong>{' '}
                                |{' '}
                            </span>
                            <div className={"inline-block"}><span>
                                Go to page:{' '}
                                <input
                                    type="number"
                                    min={1}
                                    max={pageCount}
                                    defaultValue={pageIndex + 1}
                                    onChange={e => {
                                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                                        gotoPage(page)
                                    }}
                                />
                            </span>{' '}
                                <select
                                    value={pageSize}
                                    onChange={e => {
                                        setPageSize(Number(e.target.value));
                                    }}
                                >
                                    {[10, 20, 30, 40, 50, 100].map(pageSize => (
                                        <option key={pageSize} value={pageSize}>
                                            Show {pageSize}
                                        </option>
                                    ))}
                                </select></div>
                        </div>}
                    </div>
            </div>
        </Layout>
    )
}
export default Resources
