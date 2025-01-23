/*window.onload = function() {
    const audio = new Audio("audio/scream.mp3");
    audio.play();
}*/

/* The function showmenu() is associated with hamburgermenu icon on top left corner of webpage. When you click on the icon, the navbar displays. */
function showmenu() {
    var navbar = document.getElementsByClassName("navbar")[0];
    navbar.style.display = "block";
}

/* The function hidemenu() is associated with X sign in the navbar below 600px screen size. When you click on the X sign, the navbar becomes hidden that is display none. */
function hidemenu() {
    var navbar = document.getElementsByClassName("navbar")[0];
    navbar.style.display = "none";
}

window.addEventListener("resize", () => {
    if(window.innerWidth > 600)
    {
        var navbar = document.getElementsByClassName("navbar")[0];
        navbar.style.display = "";
        navbar.style.width = "";
    }
});


if(window.location.pathname.includes("previouscontest.html"))
{
    const x = document.getElementById("win1");
    const y = document.getElementById("win2");
    const z = document.getElementById("win3");
    
    function win2018() {
        x.src = "Images/winner-2018-1.webp";
        y.src = "Images/winner-2018-2.webp";
        z.src = "Images/winner-2018-3.jpg";
    }
    
    function win2019() {
        x.src = "Images/winner-2019-1.png";
        y.src = "Images/winner-2019-2.webp";
        z.src = "Images/winner-2019-3.jpg";
    }
    
    function win2020() {
        x.src = "Images/winner-2020-1.webp";
        y.src = "Images/winner-2020-2.webp";
        z.src = "Images/winner-2020-3.webp";
    }
    
    function win2021() {
        x.src = "Images/winner-2021-1.jpg";
        y.src = "Images/winner-2021-2.webp";
        z.src = "Images/winner-2021-3.jpg";
    }
    
    function win2022() {
        x.src = "Images/winner-2022.jpg";
        y.src = "Images/winner-2022.jpg";
        z.src = "Images/winner-2022.jpg";
    }    
}
