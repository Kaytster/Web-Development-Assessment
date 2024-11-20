// function menuFunction() 
// {
//     console.info("Clicked!");
// document.getElementById("menu");
// document.getElementsByClassName("Burger").innerHTML = 
// <ul>
// <a href="https://th.bing.com/th/id/OIP.iZoxY7jnds94Zc-_U5Fm3wHaHX?rs=1&pid=ImgDetMain"> peep1 </a>
// <a href="https://th.bing.com/th/id/OIP.iZoxY7jnds94Zc-_U5Fm3wHaHX?rs=1&pid=ImgDetMain"> peep2 </a>
// <a href="https://th.bing.com/th/id/OIP.iZoxY7jnds94Zc-_U5Fm3wHaHX?rs=1&pid=ImgDetMain"> peep3 </a>
// <a href="https://th.bing.com/th/id/OIP.iZoxY7jnds94Zc-_U5Fm3wHaHX?rs=1&pid=ImgDetMain"> peep4 </a>
// <a href="https://th.bing.com/th/id/OIP.iZoxY7jnds94Zc-_U5Fm3wHaHX?rs=1&pid=ImgDetMain"> peep5 </a>
// <a href="https://th.bing.com/th/id/OIP.iZoxY7jnds94Zc-_U5Fm3wHaHX?rs=1&pid=ImgDetMain"> peep6 </a>
// </ul>;
// }

//Index Slideshow
let indexArray = 
[
    "WEB-DEVELOPMENT-ASSESSMENT/Images/20230829_111351.jpg",
    "WEB-DEVELOPMENT-ASSESSMENTImages/IMG_0170.jpeg",
    "WEB-DEVELOPMENT-ASSESSMENTImages/main_2529_image4.png"
];

let imageCounter = 0;
let imageRotator = document.getElementById("indexImages");
setInterval(changeImage, 1000);

function changeImage()
{
    imageRotator.setAttribute("src", indexArray[imageCounter]);
    imageCounter++;
    if (imageCounter >= indexArray.length) 
        {
            imageCounter = 0;
        }
}
changeImage();
//Slideshow Click
document.getElementById("indexImages").addEventListener("click", nextImage)
function nextImage()
{
    imageRotator.setAttribute("src", indexArray[imageCounter]);
    imageCounter++
    if (imageCounter >= indexArray.length)
        {
            imageCounter = 0;
        }
}

let aboutL = document.getElementById("about")
let coursesL = document.getElementById("courses")
let facilitiesL = document.getElementById("facilities")
let resourcesL = document.getElementById("resources")
let portalL = document.getElementById("portal")
let contactL = document.getElementById("contact")

document.getElementsByClassName("about", "courses","facilities", "resources", "portal", "contact").addEventListener("click", setLinks)
function setLinks()
{
    aboutL.setAttribute("href", "WEB-DEVELOPMENT-ASSESSMENT/Pages/about.html")
    coursesL.setAttribute("href", "https://th.bing.com/th/id/OIP.g0zSfIMJo8pzZkulh89ZIQHaD3?rs=1&pid=ImgDetMain")
    facilitiesL.setAttribute("href", "https://th.bing.com/th/id/OIP.g0zSfIMJo8pzZkulh89ZIQHaD3?rs=1&pid=ImgDetMain")
    resourcesL.setAttribute("href", "https://th.bing.com/th/id/OIP.g0zSfIMJo8pzZkulh89ZIQHaD3?rs=1&pid=ImgDetMain")
    portalL.setAttribute("href", "https://th.bing.com/th/id/OIP.g0zSfIMJo8pzZkulh89ZIQHaD3?rs=1&pid=ImgDetMain")
    contactL.setAttribute("href", "https://th.bing.com/th/id/OIP.g0zSfIMJo8pzZkulh89ZIQHaD3?rs=1&pid=ImgDetMain")
}
