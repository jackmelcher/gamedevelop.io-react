var side = document.getElementsByClassName("sidenav")[0];
var sidebutton = document.getElementsByClassName("sidenavbutton")[0];
var menuicon = document.getElementsByClassName("menuicon")[0];
menuicon.classList.replace("fa-bars","fa-list");

var mq = window.matchMedia("(max-width: 768px)");

window.addEventListener('load', makeSidebar());

function resizeSideNav()
{
    if(mq.matches)
    {
        side.style.display = "none";
        sidebutton.style.display = "inline-block";
    }
    else
    {
        side.style.display = "block";
        sidebutton.style.display = "none";
        menuicon.classList.replace("fa-times","fa-list");
    }
}
mq.addEventListener('resize',resizeSideNav);

function ToggleSide()
{
    if(mq.matches)
    {
        if(side.style.display == "none" || side.style.display == "")
        {
            side.style.display = "block";
            menuicon.classList.replace("fa-list","fa-times");
            document.body.style.overflow = "hidden";
        }
        else
        {
            side.style.display = "none";
            menuicon.classList.replace("fa-times","fa-list");
            document.body.style.overflow = "";
        }
    }
}

function secjump(id)
{
    document.getElementById(id).scrollIntoView();
    window.scrollBy(0,-64);
    ToggleSide();
}

function makeSidebar()
{
    var intro = ["concept","business","tools","team","production"];
    var introtitle = ["Conceptualizing a Video Game","Making a Business Strategy","Selecting a Toolkit","Forming a Team","Producing a Video Game"];
    var business = ["ip","youtube","tactics","kickstarter","pr"];
    var businesstitle = ["The Strength of Intellectual Property","Building a Successful YouTube Channel","Indie Business Tactics","How to be Successful at Kickstarter","Public Relations and Marketing"];
    var industry = ["overview","jobs","testing","culture"];
    var industrytitle = ["Games Industry Market Overview","Jobs in the Games Industry","Publisher QA Testing","Games Industry Work Culture"];

    makeSidebar2("introductory","Introductory Guides",intro,introtitle)
    makeSidebar2("industry","The Computer and Video Game Industry",industry,industrytitle)
    makeSidebar2("business-and-marketing","Business and Marketing Guides",business,businesstitle)

    var sidenav = document.getElementsByClassName("sidenav")[0];
    var div = document.createElement("div");
    div.innerHTML = "<br><br>";
    sidenav.appendChild(div);
}

function makeSidebar2(guideFile,guideTitle,fileArr,titleArr)
{
    var sidenav = document.getElementsByClassName("sidenav")[0];
    var fileName = location.href.split("/").slice(-1).toString(); 
    var div = document.createElement("div");
    div.classList.add("guidelink");
    
    // Make Top-level Guide Type link
    var a = document.createElement("a");
    a.textContent = guideTitle;
    a.href = "/guides/"+guideFile+".html";
    a.classList.add("bold");
    if(fileName.includes(guideFile))
    {
        a.classList.add("underline");
    }
    div.appendChild(a);

    var list = document.createElement("ul");
    list.classList.add("nobullets");
    
    // Make list of guides
    for(var i=0; i < fileArr.length; i++)
    {
        var litem = document.createElement("li");
        var link = document.createElement("a");
        link.href = "/guides/"+guideFile+"/"+fileArr[i]+".html";
        link.textContent = titleArr[i];

        litem.appendChild(link);

        if(fileName.includes(fileArr[i]))
        {
            link.classList.add("underline");
            
            //console.log(location.href.split("/").slice(-3).toString())
            if(location.href.split("/").slice(-3)[0] == "guides")
            {
                // Make anchor links
                var h3s = document.getElementsByTagName("h3");
                
                var sections = [];
                var ids = [];
                for (var j = 0; j < h3s.length; j++)
                {
                    ids.push(h3s[j].parentElement.id);
                    sections.push(h3s[j].textContent);
                }
                makeAnchors(litem,ids,sections)
            }
        }
        list.appendChild(litem);
    }
    div.appendChild(list);

    sidenav.appendChild(div);
}

function makeAnchors(divContainer,ids,sections)
{
    var list = document.createElement("ul");
    list.classList.add("nobullets");
    var litem;
    var anchor;
    for(var a = 0; a < ids.length; a++)
    {
        litem = document.createElement("li");
        anchor = document.createElement("a");
        anchor.href = "javascript:secjump(\""+ids[a]+"\")";
        anchor.textContent = sections[a];
        litem.appendChild(anchor);
        list.appendChild(litem);
    }
    divContainer.appendChild(list);
}

function secjump(id)
{
    document.getElementById(id).scrollIntoView();
    window.scrollBy(0,-64);
}