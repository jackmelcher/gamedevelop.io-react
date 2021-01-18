var side = document.getElementsByClassName("sidenav")[0];
var menuicon = document.getElementsByClassName("menuicon")[0];

var mq = window.matchMedia("(max-width: 768px)");
window.onresize = resizeSideNav();

function resizeSideNav()
{
    if(mq.matches)
    {
        side.style.display = "none";
    }
    else
    {
        side.style.display = "";
    }
}

function ToggleSide()
{
    if(mq.matches)
    {
        if(side.style.display == "none" || side.style.display == "")
        {
            side.style.display = "block";
            document.body.style.overflow = "hidden";
        }
        else
        {
            side.style.display = "";
            document.body.style.overflow = "";
        }
    }
}