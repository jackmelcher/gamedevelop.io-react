import React from "react"
import Resources from "../../components/resources"

const Hardware = () => {
    
    let resourceMap = new Map();
    resourceMap.set("hardware","https://docs.google.com/spreadsheets/d/e/2PACX-1vSp4O0V5Fj3lzBbC_n9Di_Jed5mUG3zrRvCBUNIYYMRYszHt8EFWOpzoB7rFob-kpM_WkEmeClHuLS_/pub?output=csv");
    resourceMap.set("hardwareparts","https://docs.google.com/spreadsheets/d/e/2PACX-1vS0rmMTZrzTLHVjImzK4I0-ncjRqd2HiY3h8oS_QXFK1p2rCksl944u5zmWPNqBAE2b5QKsDsbi2wIg/pub?output=csv");
    resourceMap.set("peripherals","https://docs.google.com/spreadsheets/d/e/2PACX-1vTSceDoG1MYdZ6LNGF5b4qCismN0YJ9Ohimzn_h1zI4VoXTLvQ-uIzi07hYKLK3HUhPg-xS22zvqKlD/pub?output=csv");
    
    return(
        <Resources map={resourceMap}>
            <optgroup label="Hardware & Peripherals">
                <option value="hardware">PC, Mobile, and XR Devices</option>
                <option value="hardwareparts">PC Components</option>
                <option value="peripherals">Peripherals</option>
            </optgroup>
        </Resources>
    );
}
export default Hardware