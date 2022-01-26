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

    console.log("filterArr: "+ filterArr);
    return filterArr;
}

function SelectColumnFilter({column: { filteredRows, filterValue = [], setFilter, preFilteredRows, id }}) {

    let preFilteredRowsCurrent;
    let setCurrent;

    const options = useMemo(() => {
        console.log(preFilteredRows);

            let set = new Set();
            preFilteredRows.forEach(row =>{
                let cells = row.values[id].split(", ");
                cells.forEach(element => {
                    set.add(element);
                });
            })
            return Array.from(set).sort();


    }, [id,filteredRows/*preFilteredRows*/])

    /*const setFilteredRows = useMemo(()=>{
        let set = new Set();
        filteredRows.forEach(row =>{
            let cells = row.values[id].split(", ");
            cells.forEach(element => {
                set.add(element);
            });
        })
        console.log(set)
        return set;
    },[filteredRows]);*/

    return (
        <div className="listTitle">
            <span className="bold">{id}:</span>
            <ul>
            {options.map((option, i) => {
                return (
                    <li className="nobullets" key={option+window.location.hash}>
                        <input
                            type="checkbox"
                            id={option}
                            name={option}
                            value={option}
                            onChange={(e) => {
                                setFilter(setFilteredParams(filterValue, e.target.value, e.target.checked));
                            }}
                            /*disabled={!setFilteredRows.has(option)}*/
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

const Table = ({columns, data}) => {
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
        <table {...getTableProps()} id={"myTable"}>
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
        </table>
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
        console.log("columnKeys.length: " + columnKeys.length);
        for(let i = 0; i < columnKeys.length; i++){
            if(i === 0){
                arr.push({
                    Header: columnKeys[i],
                    accessor: columnKeys[i],
                    Cell: ({row})=> <a href={row.original.Link} target="_blank" rel="noopener noreferrer">{row.original.Name}</a>,
                    disableFilters: true,
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
                    Filter: SelectColumnFilter,
                    filter: "include"
                })
            }
            else if(i === 2 ){
                arr.push({
                    Header: columnKeys[i],
                    accessor: columnKeys[i],
                    Filter: SelectColumnFilter,
                    filter: "include"
                })
            }
            else if(i > 2  && i < columnKeys.length - 1){
                arr.push({
                    Header: columnKeys[i],
                    accessor: columnKeys[i],
                    disableSortBy: true,
                    Filter: SelectColumnFilter,
                    filter: "include"
                })
            }
            else {
                arr.push({
                    Header: columnKeys[i],
                    accessor: columnKeys[i],
                    disableFilters: true,
                    disableSortBy: true,
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
                <select id="category" onChange={(e) => {handleSelectChange(e.target.value);}}>
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
            </div>
        </Layout>
    )
}
export default Resources
