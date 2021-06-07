import React from "react"
import Resources from "../../components/resources"

const Social = () => {
    
    let resourceMap = new Map();
    resourceMap.set("orgs","https://docs.google.com/spreadsheets/d/e/2PACX-1vS8-mdVUkjV22dYh4mOvK-JKMyLVYbJ6oCy7glaf5xP0mLgVq3pk7mwOfG0fqveUND_cmYKxBoiyODF/pub?output=csv");
    resourceMap.set("communities","https://docs.google.com/spreadsheets/d/e/2PACX-1vTzoNxfsVBRGbU2InlM39Ze4SKWVB4mLZ8eNcT7z--TZYu_tsds_ga46hUa2xTLifnaWtzutS5lFpTt/pub?output=csv");
    resourceMap.set("social","https://docs.google.com/spreadsheets/d/e/2PACX-1vQEx_ZsuPYdKlSKVN7uZ3k1M6ZCjkh6GIJgT4pYjQ7g5rzAvXiHmP1WJ4S3gbdLMSo-oPrJrlBcHg2d/pub?output=csv");
    resourceMap.set("space","https://docs.google.com/spreadsheets/d/e/2PACX-1vTRJma3kNazH5j7D9-FoXFPIzz9I9lKir2ptVGpvBnYUDEsVq_y8KVDJiheyCgL5bWRtgoFY-g_SPzJ/pub?output=csv");
    
    return(
        <Resources map={resourceMap}>
            
            <optgroup label="Communities">
                <option value="orgs">Organizations</option>
                <option value="communities">Communities</option>
                <option value="social">Social Media Groups</option>
                <option value="space">Coworking Space</option>
            </optgroup>
        </Resources>
    );
}
export default Social