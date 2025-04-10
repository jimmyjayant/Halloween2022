var navbar = document.getElementById("navbar600");
var link = Array.from(document.querySelectorAll("#navbar600 a:not(:first-child), .footer a:nth-child(5)"));
var isLinkSelected = 0;

link.forEach((link) => {
    if(window.location.href == link.href)
    {
        link.classList.add("activeLink");
        isLinkSelected = 1;
    }
});

if(isLinkSelected == 0)
{
    link[0].classList.add("activeLink");
}
