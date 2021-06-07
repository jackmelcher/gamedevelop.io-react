import React from "react"
import Resources from "../../components/resources"

const Assets = () => {
    
    let resourceMap = new Map();
    resourceMap.set("assets","https://docs.google.com/spreadsheets/d/e/2PACX-1vRhjyyTz2hSRhuPrPSnvHQ2ckU2IrNM7UKM2C1QLU1jbahn8JW-lI20XZKu9eygjbNpdliaWz6mAk4n/pub?output=csv");
    
    return(
        <Resources map={resourceMap}>
            <optgroup label="Assets & Services">
                <option value="assets">Assets</option>
            </optgroup>
        </Resources>
    );
}
export default Assets