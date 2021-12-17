import React from "react"
import Resources from "../../components/resources"

const Art = () => {
    
    let resourceMap = new Map();
    resourceMap.set("pop","https://docs.google.com/spreadsheets/d/e/2PACX-1vTcuHFSZhEvLSz3sKZBtJ7TZE8wIFg3WMRmr5ktmfFJN4kqBi6eDEXOHllCEWwuF2rjMw1Qy7MN2C2y/pub?output=csv");
    resourceMap.set("2d","https://docs.google.com/spreadsheets/d/e/2PACX-1vQDJIx7G70nXNeUyMbjpnsy3M9hRXGtV7ArJBhVk4L2K8cI_jWmNVRNVQDah0_olHCJ_5INP5TfPsJg/pub?output=csv");
    resourceMap.set("3d","https://docs.google.com/spreadsheets/d/e/2PACX-1vQRPDlbVzk2EPF9bh6lukjfMbmpVZe6-h-scoOZbWWPyBqL7t1KT8oTdsmMii9XRKsDX7miQuJc1a8Y/pub?output=csv");
    resourceMap.set("oart","https://docs.google.com/spreadsheets/d/e/2PACX-1vSBxva6gUtZSJyrRdQpjum2lRAF8LPcmQ7Z2NbgC-Femnss2x2pN8LKFthHuTH8II13P1AfVm7bPDsA/pub?output=csv");
   
    return(
        <Resources map={resourceMap}>
            <option value="pop">Popular Art Tools</option>
            <optgroup label="Art Tools">
                <option value="2d">2D Art</option>
                <option value="3d">3D Art</option>
                <option value="oart">Other Art</option>
            </optgroup>
        </Resources>
    );
}
export default Art
