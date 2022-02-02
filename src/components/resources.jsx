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
            <input className="globalSearch" value={filter || ""} onChange={(e) => {setFilter(e.target.value);{/*setTimeout(()=>{FilterTable();},100);*/} }}/>
        </div>
    );
}

const GlobalFilterAsync = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);

    const onChange = useAsyncDebounce((value) => {
        setFilter(value || undefined);
        //FilterTable();
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

function setFilteredParams(filterArr, val, checked) {
    console.log(checked)
    if (filterArr.includes(val) && !checked) {
        filterArr = filterArr.filter((n) => {
            return n !== val;
        });
    } else filterArr.push(val);

    if (filterArr.length === 0) filterArr = undefined;

    console.log(filterArr);
    return filterArr;
}

function SelectColumnFilter({column: { filteredRows, filterValue = [], setFilter, preFilteredRows, id, Header }}) {

    // Get array of options based on all rows in a table.
    const options = useMemo(() => {
        let set = new Set();
        filteredRows.forEach(row =>{
                let cells = row.values[id].split(", ");
                cells.forEach(element => {
                    set.add(element);
                });
            })
        return Array.from(set).sort();
    }, [id])

    // Get set of options based on the filtered rows
    const optionsSet = useMemo(() => {
        let set = new Set();
        filteredRows.forEach(row =>{
            let cells = row.values[id].split(", ");
            cells.forEach(element => {
                set.add(element);
            });
        })
        return set;
    },[filteredRows]);

    function isDisabled(option){
        return !optionsSet.has(option);
    }

    return (
        <div className="listTitle">
            <span className="bold">{Header}:</span>
            <ul key={window.location.hash}>
            {options.map((option, i) => {
                return (
                    (option !== "") &&
                    <li className="nobullets" key={option+id}>
                        <input
                            type="checkbox"
                            id={option}
                            name={option}
                            value={option}
                            onChange={(e) => {
                                setFilter(setFilteredParams(filterValue, e.target.value, e.target.checked));
                            }}
                            disabled={isDisabled(option)}
                            /*defaultChecked={false}*/
                        ></input>
                        <label htmlFor={option}>
                            {option}
                        </label>
                    </li>
                );
            })}
            </ul>
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

const Table = ({columns, data, view}) => {
    const defaultColumn = useMemo(() => {
        return{
            Filter: ColumnFilter,
        }
    },[])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        setAllFilters
    } = useTable({ columns: columns, data: data, defaultColumn }, useFilters, useGlobalFilter, useSortBy);

    useEffect(()=>{        setAllFilters([]);
    },[data])

    const {globalFilter} = state;

    return(
        <>
            {/* Table View */}
            {view === "table" && <table {...getTableProps()} id={"myTable"}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.disableSortBy
                                    ?""
                                    :column.isSorted
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
                rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
                <EmptyRow rows={rows}/>
                </tbody>
            </table>}

            {/* Grid View */}
            {view === "grid" && <div {...getTableProps()} id={"myTable"}>
            <table>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            !column.disableSortBy &&
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.disableSortBy
                                    ?""
                                    :column.isSorted
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

            </table>
                <div {...getTableBodyProps()} className="flex-table-container">
                {
                    rows.map((row, index) => {
                        prepareRow(row)
                        return (
                            <>
                                <div {...row.getRowProps()} className="flex-table-item">
                                    {row.cells.map((cell, index) => {
                                        if (index === 0) {
                                            return (
                                                <div {...cell.getCellProps()} className="entry-image">
                                                {cell.render('Cell')}
                                            </div>
                                            )
                                        }
                                        if (index === 1) {
                                            return (
                                                <>
                                                    <div {...cell.getCellProps()} className="entry-name">
                                                    {cell.render('Cell')}
                                                    </div>
                                                    <br/>
                                                </>
                                            )
                                        }
                                        if (index > 1 && index < row.cells.length - 1) {
                                            let chipColor = "chip-color" + (index - 1).toString();
                                            console.log(cell.render('Cell').props.value)
                                            return (
                                                cell.render('Cell').props.value !== "" &&
                                                <span {...cell.getCellProps()} className={"entry-chip " + chipColor}>
                                                    {cell.render('Cell')}
                                                </span>
                                            )
                                        } else {
                                            return (
                                                <div {...cell.getCellProps()} className="entry-description">
                                                    {cell.render('Cell')}
                                                </div>
                                            )
                                        }

                                    })}
                                </div>
                                <div className="flex-table-padding"/>
                            </>
                        )
                    })}
                <EmptyRow rows={rows}/>
                </div>
            </div>}

            {/* List View */}
            {(view === "list") && <div {...getTableProps()} id={"myTable"}>
                <table>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                !column.disableSortBy &&
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.disableSortBy
                                        ?""
                                        :column.isSorted
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

                </table>
                <div {...getTableBodyProps()} className="flex-list-container">
                    {
                        rows.map((row, index) => {
                            prepareRow(row)
                            return (
                                <>
                                    <div {...row.getRowProps()} className="flex-list-item">
                                        {row.cells.map((cell, index) => {
                                            if (index === 0) {
                                                return (
                                                    <div {...cell.getCellProps()} className="entry-image">
                                                        {cell.render('Cell')}
                                                    </div>
                                                )
                                            }
                                            if (index === 1) {
                                                return (
                                                    <>
                                                        <div {...cell.getCellProps()} className="entry-name">
                                                            {cell.render('Cell')}
                                                        </div>
                                                        <br/>
                                                    </>
                                                )
                                            }
                                            if (index > 1 && index < row.cells.length - 1) {
                                                let chipColor = "chip-color" + (index - 1).toString();
                                                return (
                                                    cell.render('Cell').props.value !== "" &&
                                                    <span {...cell.getCellProps()} className={"entry-chip " + chipColor}>
                                                        {cell.render('Cell')}
                                                    </span>
                                                )
                                            } else {
                                                return (
                                                    <div {...cell.getCellProps()} className="entry-description">
                                                        {cell.render('Cell')}
                                                    </div>
                                                )
                                            }

                                        })}
                                    </div>
                                </>
                            )
                        })}
                    <EmptyRow rows={rows}/>
                </div>
            </div>}

            <div className="sidenav rsidenav">
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                <br/>
                <div className="filtername">
                    <b>Filters:</b>
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
            disableFilters: true,
        })
        //console.log("columnKeys.length: " + columnKeys.length);
        for(let i = 0; i < columnKeys.length; i++){
            let columnObject = {};
            columnObject.Header = columnKeys[i];
            columnObject.accessor = columnKeys[i];
            columnObject.id = columnKeys[i]+window.location.hash;
            if(i === 0){
                columnObject.Cell = ({row})=> <a href={row.original.Link} target="_blank" rel="noopener noreferrer">{row.original.Name}</a>;
                columnObject.disableFilters = true;
            }
            if(i === 1){
                continue;
            }
            if(columnKeys[i].includes("Platforms")){
                columnObject.Cell = ({row})=> <IconsOS source={row.original.Platforms}/>;
            }
            if(i > 1  && i < columnKeys.length - 1){
                columnObject.Filter = SelectColumnFilter;
                columnObject.filter = "includesAll";
            }
            if(i > 2  && i < columnKeys.length){
                columnObject.disableSortBy = true;
            }
            if(i === columnKeys.length -1) {
                columnObject.disableFilters = true;
            }
            //console.log(columnObject)
            arr.push(columnObject);
        }
        columnsData = arr;
        //console.log("columnsData");
        //console.log(columnsData);
        setTable(csvData);

        setColumns(columnsData);
        //console.log("columns");
        //console.log(columns);

        //console.log("table");
        //console.log(table);
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

    // View Button
    const [isGridView,setGridView] = useState(true);
    const [view,setView] = useState("table");
    useEffect(() => {
        // Initialize View
        setGridView(localStorage.getItem("resource-gridview") ? true : false);
        setView(localStorage.getItem("resource-view") !== null ? localStorage.getItem("resource-view") : "table");
    },[]);
    useEffect(() => {
        viewMode(isGridView);
    },[isGridView]);
    function viewMode(isGridView){
        if (!isGridView) {
            localStorage.removeItem("resource-gridview");
        }
        else{
            localStorage.setItem("resource-gridview", "grid");
        }
    }
    function cycleView(){
        console.log(view)
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
        }
    }
    const ViewButton = () => {
        return (
            <button className="viewButton" onClick={()=>{cycleView();}}>
            {view === "table" && <><i className="fas fa-table"></i><span> Table View</span></>}
            {view === "list" && <><i className=" fas fa-th-list"></i><span> List View</span></>}
            {view === "grid" && <><i className=" fas fa-th-large"></i><span> Grid View</span></>}
            </button>
        );
    }

    return(
        <Layout>
            <Seo title="Resources" description="Explore a Database full of game development tools, assets, and services."/>
            <div className="selectbar selectbarRes">
                <span className="tableTitle">
                    <b>Tables:</b>
                </span>
                <ViewButton/>
                <select id="category" onChange={(e) => {handleSelectChange(e.target.value);}}>
                    {children}
                </select>
                <button onClick={(e) => toggleSidebar()}>
                    <i className="fas fa-filter"></i><span>Filter & Sort</span>
                </button>
            </div>

            <Navbar/>
            <div className="resource">
                <h1 id="tname">{tableName}</h1>

                <Table
                    columns={columns}
                    data ={table}
                    view = {view}
                />
            </div>
        </Layout>
    )
}
export default Resources
