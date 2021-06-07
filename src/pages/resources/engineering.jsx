import React from "react"
import Resources from "../../components/resources"

const Engine = () => {
    
    let resourceMap = new Map();
    resourceMap.set("pop","https://docs.google.com/spreadsheets/d/e/2PACX-1vQS6gi_-cuPCaqp0M0-JtC7wmbKqa-0Kmmr0ZyOLtICKvriZu8lzqd3JEs6Yo5VvyFJyr2PKFSMED22/pub?output=csv");
    resourceMap.set("engine","https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9sShYkfVUkVI2XHBASu9DD0a-7kCkMFidjozCyEH2rhW1YnjFHw4BySKaCLAN4Xq_OAv9eeNSpw9s/pub?output=csv");
    resourceMap.set("sdk","https://docs.google.com/spreadsheets/d/e/2PACX-1vTJ-hCq_hrYjKF60QLmigAQ6yo3rPC0W3gJuTjA8-Y_2QOAppcUQC88jkCCTXQEzGn3sknRKRntdtN4/pub?output=csv");
    resourceMap.set("mod","https://docs.google.com/spreadsheets/d/e/2PACX-1vR5uW4NGvUv7VwSv8yUdZbnDOilGTOXdSfyxrBVE5eLe428s4g5Sq_WOBxJ-1xbmYSCax86rmX__aGr/pub?output=csv");
    resourceMap.set("backend","https://docs.google.com/spreadsheets/d/e/2PACX-1vTWNDx8dsTjLCgquTfsTs_OBeowXqmFbPmSKS31lNUuHsm37gpJI0zGMYv1pzuQ69rYfGlueJE_DiSw/pub?output=csv");
    resourceMap.set("security","https://docs.google.com/spreadsheets/d/e/2PACX-1vSjdroNpvimp_bT3cOvQt69dYe-EoYJrRfeAKtu4kmD6E7_yFnaGxm71YinP9FbIwuChxJyCGbjo5XA/pub?output=csv");
    resourceMap.set("oengine","https://docs.google.com/spreadsheets/d/e/2PACX-1vSeFL1o_NbA8-a8B4hsgbU0Y168DJeH4_1H_Y1cCILxrDwfDog3StKaKMUqvoURrAVQotoX5D9kFGMj/pub?output=csv");
    resourceMap.set("vcs","https://docs.google.com/spreadsheets/d/e/2PACX-1vSrEBSWTZ9ckxc3WB57C0B5oFc4O62OaOZ8lqpWZ-Vfu3owP0T7vh2ZktoWkz31edMo88lH-0nFNRIQ/pub?output=csv");
    resourceMap.set("ci-cd","https://docs.google.com/spreadsheets/d/e/2PACX-1vT4Cgu_TIphIB7T9tMoPrDvjXA0u7vIflKLNHfvGGU352IT3tOWX2yJj5FG33llEWflLwVNbyKnifKT/pub?output=csv");
    
    return(
        <Resources map={resourceMap}>
            <option value="pop">Popular Engines, Frameworks, and Services</option>
            <optgroup label="Engineering Tools">
                <option value="engine">Engines and Frameworks</option>
                <option value="sdk">SDKs, APIs, and Libraries</option>
                <option value="mod">Modding & Creation Platforms</option>
                <option value="backend">Backend Services</option>
                <option value="security">Security</option>
                <option value="oengine">Other Engineering</option>
            </optgroup>
            <optgroup label="DevOps Tools">
                <option value="vcs">Version Control Systems</option>
                <option value="ci-cd">CI / CD</option>
            </optgroup>
            
        </Resources> 
    );
}
export default Engine