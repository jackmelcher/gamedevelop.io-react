import React from "react"
import Resources from "../../components/resources"

const Career = () => {
    
    let resourceMap = new Map();
    resourceMap.set("schools","https://docs.google.com/spreadsheets/d/e/2PACX-1vTwzljYhZggbZR1MPOpb3RaoMXRjkAG3ZiqqtmhCyTUthbb-LdoeBxZjr7gOXW5odec_N3ZZPMyIp5O/pub?output=csv");
    resourceMap.set("learning","https://docs.google.com/spreadsheets/d/e/2PACX-1vQCAtHsQ64cne1GJqDM7jrT0D1w9-4FKjjOWvGCAJRCHD8-PHTa1oMqLiuYiLMQFgWlM0-UdU5kj9Ga/pub?output=csv");
    resourceMap.set("youtube","https://docs.google.com/spreadsheets/d/e/2PACX-1vTKPGCzhnIPnsb78SgAwrOTgCaG_rMnRnRsv57m7Pi5QtDa8A2_LPIxZPCPrLB8W92sOvgr1jwvLriH/pub?output=csv");
    resourceMap.set("jobs","https://docs.google.com/spreadsheets/d/e/2PACX-1vTk54yYtogBp1B2VR5uIvsV5vLUdj1jpTH7PgCH_0gBbWetLdHUDyL0roNXoNW_g_f2DumneMX0PCUi/pub?output=csv");

    return(
        <Resources map={resourceMap}>
            <optgroup label="Career">
                <option value="jobs">Job Boards</option>
            </optgroup>
            <optgroup label="Education & Learning">
                <option value="schools">Schools & Courses</option>
                <option value="learning">Learning Websites</option>
                <option value="youtube">YouTube Channels</option>
            </optgroup>
        </Resources> 
    );
}
export default Career