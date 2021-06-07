import React from "react"
import Resources from "../../components/resources"

const Art = () => {
    
    let resourceMap = new Map();
    resourceMap.set("publisher","https://docs.google.com/spreadsheets/d/e/2PACX-1vQBHIGXEXbFvTI_ClUtX0E4tjlSSBwM4UDTZjKNBAY08Ud5-NJwjHmgeAUSWzwTHpviasVmXSRUDRI7/pub?output=csv");
    resourceMap.set("funding","https://docs.google.com/spreadsheets/d/e/2PACX-1vTIaf9Ydc-HbRMlidubHTLGuVhXficXv1o3FkUHfhkL0UEcHGBDGmhhFDNp4V0S-wv_J9VPvq7sJcg3/pub?output=csv");
    resourceMap.set("gamehosts","https://docs.google.com/spreadsheets/d/e/2PACX-1vQjTD0wKS8WO2UGJxT-mxEETxCZt2n6C3rxZlj2H7fJ3jUy0lTljUzMmUmUeBnLzC95vbd6XMCv5lck/pub?output=csv");
    resourceMap.set("ratings","https://docs.google.com/spreadsheets/d/e/2PACX-1vR_3vK3tP3DfcJy0fXwaM1v9x0eB80QgXA4Ynbh0GiESC-CTB71dhDSIZQPfOPZKLojascbscTwHMyA/pub?output=csv");
    resourceMap.set("news","https://docs.google.com/spreadsheets/d/e/2PACX-1vR902-_2TVjVM-hKRxAFkLe1TXeZsawX4RelNi9ezE0QPh3-Q7ZAySzsuzpqSAM7HyBE7Brvj2ZrTx2/pub?output=csv");

    return(
        <Resources map={resourceMap}>
            <optgroup label="Publishing & Distribution">
                <option value="publisher">Publishers</option>
                <option value="funding">Funding Options</option>
                <option value="gamehosts">Hosting & Storefronts</option>
                <option value="ratings">Ratings Boards</option>
                <option value="news">News Outlets</option>
            </optgroup>
        </Resources>
    );
}
export default Art