import React from "react"
import Resources from "../../components/resources"

const Business = () => {
    
    let resourceMap = new Map();
    resourceMap.set("pop","https://docs.google.com/spreadsheets/d/e/2PACX-1vTl9K9cqGDHxy6RwXFw-YWY7DnTAHke7IXCs-tQMehYhpyndAgcRLfSVk_pRRPWMpWNDoVA9KeeMUHM/pub?output=csv");
    resourceMap.set("communication","https://docs.google.com/spreadsheets/d/e/2PACX-1vRrjVZ8PKAU51_fyLV5QMjdQFO8w4EqST2vQf5mfsmU9u13qg1_yF8DKXRIPOv00Fy1exWpiQv3qDI6/pub?output=csv");
    resourceMap.set("tasking","https://docs.google.com/spreadsheets/d/e/2PACX-1vS9lpC4xOOiWXCz1Ysm2816qmBucgsA75721yezbz5ujFy7jul4Y49L2nXsNlZbmKREonZIXzn9SeG_/pub?output=csv");
    resourceMap.set("analytics","https://docs.google.com/spreadsheets/d/e/2PACX-1vSKnRa__EP0CwdkABbNGBavhMyUr8kJn01tlfF8yQd6hnz-A21dUNdjzAMpKrWeQtiMqG3hrtbxaSfW/pub?output=csv");
    resourceMap.set("business","https://docs.google.com/spreadsheets/d/e/2PACX-1vTLZktBrbkqfzXr0E_6e2NhOqV8f1IbJzx9aupyNe36kslRmCJ3f21BCIl0-NoJgXQUcSnCxxk2lZ3t/pub?output=csv");
    resourceMap.set("ratings","https://docs.google.com/spreadsheets/d/e/2PACX-1vR_3vK3tP3DfcJy0fXwaM1v9x0eB80QgXA4Ynbh0GiESC-CTB71dhDSIZQPfOPZKLojascbscTwHMyA/pub?output=csv");
    resourceMap.set("news","https://docs.google.com/spreadsheets/d/e/2PACX-1vR902-_2TVjVM-hKRxAFkLe1TXeZsawX4RelNi9ezE0QPh3-Q7ZAySzsuzpqSAM7HyBE7Brvj2ZrTx2/pub?output=csv");
    resourceMap.set("website","https://docs.google.com/spreadsheets/d/e/2PACX-1vTvwgqk5crjFD-1BjB7i3CDC3Gz_sE6cQyNUjn_x0mm23aCU3HtBnprCbvUWZtxEsH8KmlGSRX86d4d/pub?output=csv");
    
    return(
        <Resources map={resourceMap}>
            <option value="pop">Popular Business and Production</option>
            <optgroup label="Business Tools">
                <option value="business">Business & Marketing</option>
                <option value="analytics">Analytics</option>
                <option value="news">News Outlets</option>
                <option value="ratings">Ratings Boards</option>
                <option value="website">Websites</option>
            </optgroup>
            <optgroup label="Production Tools">
                <option value="communication">Communication</option>
                <option value="office">Office and Cloud Storage</option>
                <option value="tasking">Tasking and Collaboration</option>
            </optgroup>
        </Resources>
    );
}
export default Business
