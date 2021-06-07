import React from "react"
import Resources from "../../components/resources"

const Art = () => {
    
    let resourceMap = new Map();
    resourceMap.set("events","https://docs.google.com/spreadsheets/d/e/2PACX-1vSHPf0nObNM0ZrY3K5IkkkmF3z9pbfxks11OmxvufGYityD4qpOUbRYCSESsrtkWBe6j2FE1Gb3unUk/pub?output=csv");
    resourceMap.set("awards","https://docs.google.com/spreadsheets/d/e/2PACX-1vRc91DOPuM_AWqOGMPpRZtqXeOq9ZWpBIkGR2m5IBtW_U9M2pIiZV4GTYRJsnSArwR4BSnQyH04f9dP/pub?output=csv");
    resourceMap.set("jams","https://docs.google.com/spreadsheets/d/e/2PACX-1vT8616zbXQGzbTKUJiKCJ2Ec16ffJVRW7F_PmlksRN_yXTSSQmYWZw93WNLP1bKiWDteC1sEAxWtmc_/pub?output=csv");

    return(
        <Resources map={resourceMap}>
            <optgroup label="Events">
                <option value="events">Industry Events</option>
                <option value="awards">Awards</option>
                <option value="jams">Game Jams</option>
            </optgroup>
        </Resources>
    );
}
export default Art