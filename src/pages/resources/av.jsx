import React from "react"
import Resources from "../../components/resources"

const AV = () => {
    
    let resourceMap = new Map();
    resourceMap.set("pop","https://docs.google.com/spreadsheets/d/e/2PACX-1vRmDK6R4fCuX9-rqMFFbcWdKR2QDEePfbAKwWe67MYig5CYAfyd5PjnwOhcQA9aM4Evp7qh0oTB3dRo/pub?output=csv");
    resourceMap.set("audio","https://docs.google.com/spreadsheets/d/e/2PACX-1vRCM79IdtRCW714RqPJleBtzz5GHhvVVpyQ8OSLwQafj2_AeWQR5BJyi4eMvnCEi7vZNQkEjQdU_tbK/pub?output=csv");
    resourceMap.set("video","https://docs.google.com/spreadsheets/d/e/2PACX-1vS_eAl6F-ZFE262Rf6WexBJkoV9AAjpjn60_ZMh4h9jvdk-sgTMR9rTEzEx3FAllC9CUdNrxYBNYGcO/pub?output=csv");

    return(
        <Resources map={resourceMap}>
            <option value="pop">Popular Audio and Video Tools</option>
            <optgroup label="Audio and Video Tools">
                <option value="audio">Audio</option>
                <option value="video">Video</option>
            </optgroup>
        </Resources>
    );
}
export default AV