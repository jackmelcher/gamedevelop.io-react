import React from "react"
import Resources from "../../components/resources"

const Services = () => {
    
    let resourceMap = new Map();
    resourceMap.set("services","https://docs.google.com/spreadsheets/d/e/2PACX-1vRwOchRhXiDDYJdctaNMrqUE_Mnfq1Eq5js5gHLsjQwR6I28qbnX8Cc1Ws7kzE_kfIxGnulm8NUnhw9/pub?output=csv");

    return(
        <Resources map={resourceMap}>
            <option value="services">Services</option>
        </Resources>
    );
}
export default Services