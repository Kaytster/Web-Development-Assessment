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
    "Images/20230829_111351.jpg",
    "Images/IMG_0170.jpeg",
    "Images/main_2529_image4.png"
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