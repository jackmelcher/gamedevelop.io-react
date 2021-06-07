import React from "react"
import Resources from "../../components/resources"

const Design = () => {
    
    let resourceMap = new Map();
    resourceMap.set("design","https://docs.google.com/spreadsheets/d/e/2PACX-1vRD2q9SD8YKS51KpV71YMC0qghME_Qs0vqq4lDRMQESjgWH-VVOOu89wAzJlGrTvKxDz8p8nIGM9COS/pub?output=csv");
    resourceMap.set("accessibility","https://docs.google.com/spreadsheets/d/e/2PACX-1vRgUOIqsarZpVymKLED_5_tFn1WTRGz8us3GdqexmwIEywsRqXmj7o5HL2rlhheLPom9nQTVLMRoxq0/pub?output=csv");
    resourceMap.set("narrative","https://docs.google.com/spreadsheets/d/e/2PACX-1vQGGJ5FF_BiIs6Z1s352k--Q0-sLP4xdG7FitOpUsykP3z5quuB25SVuD7Q-yx9kn9iTbLijh-21l1p/pub?output=csv");
    resourceMap.set("diagram","https://docs.google.com/spreadsheets/d/e/2PACX-1vSGnTTlKBOZMXnGC7t4iX830zi7PIWyochlW8YpIVqrs0h_307k4qX1pueZe6cvyVxaQrKXGIlbXVLJ/pub?output=csv");

    return(
        <Resources map={resourceMap}>
            <optgroup label="Design Tools">
                <option value="design">Design</option>
                <option value="accessibility">Accessibility</option>
                <option value="narrative">Narrative Writing</option>
                <option value="diagram">Diagramming</option>
            </optgroup>
        </Resources>
    );
}
export default Design