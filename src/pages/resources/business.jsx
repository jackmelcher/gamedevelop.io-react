import React from "react"
import Resources from "../../components/resources"

const Business = () => {
    
    let resourceMap = new Map();
    resourceMap.set("pop","https://docs.google.com/spreadsheets/d/e/2PACX-1vTl9K9cqGDHxy6RwXFw-YWY7DnTAHke7IXCs-tQMehYhpyndAgcRLfSVk_pRRPWMpWNDoVA9KeeMUHM/pub?output=csv");
    resourceMap.set("communication","https://docs.google.com/spreadsheets/d/e/2PACX-1vRrjVZ8PKAU51_fyLV5QMjdQFO8w4EqST2vQf5mfsmU9u13qg1_yF8DKXRIPOv00Fy1exWpiQv3qDI6/pub?output=csv");
    resourceMap.set("office","https://docs.google.com/spreadsheets/d/e/2PACX-1vSq1AqJMPPZUMb73dU1Vy_96koYGGRB4TjWYMVXbmdUqi_EHhAbcF51qqSaXi5j5tBsD_aPwKYYhzE9/pub?output=csv");
    resourceMap.set("tasking","https://docs.google.com/spreadsheets/d/e/2PACX-1vS9lpC4xOOiWXCz1Ysm2816qmBucgsA75721yezbz5ujFy7jul4Y49L2nXsNlZbmKREonZIXzn9SeG_/pub?output=csv");
    resourceMap.set("analytics","https://docs.google.com/spreadsheets/d/e/2PACX-1vSKnRa__EP0CwdkABbNGBavhMyUr8kJn01tlfF8yQd6hnz-A21dUNdjzAMpKrWeQtiMqG3hrtbxaSfW/pub?output=csv");
    resourceMap.set("business","https://docs.google.com/spreadsheets/d/e/2PACX-1vTLZktBrbkqfzXr0E_6e2NhOqV8f1IbJzx9aupyNe36kslRmCJ3f21BCIl0-NoJgXQUcSnCxxk2lZ3t/pub?output=csv");
    resourceMap.set("monetization","https://docs.google.com/spreadsheets/d/e/2PACX-1vSiZHeG6WJLA7O26L9kCOghdQvimRZmjrnVgs7QPrPvXF9euoLcQCLrc90SqnMajk29mGVy4MElvpOG/pub?output=csv");
    
    return(
        <Resources map={resourceMap}>
            <option value="pop">Popular Business and Production</option>
            <optgroup label="Production Tools">
                <option value="communication">Communication</option>
                <option value="office">Office and Cloud Storage</option>
                <option value="tasking">Tasking and Collaboration</option>
            </optgroup>
            <optgroup label="Business Tools">
                <option value="analytics">Analytics</option>
                <option value="business">Business & Marketing</option>
                <option value="monetization">Monetization</option>
                <option value="website">Websites</option>
            </optgroup>
        </Resources>
    );
}
export default Business