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

//
//
//

//Burger Menu
(
    () =>
    {
        console.info("BURGEEEE!!");
        const burgerButton = document.getElementById('burgerIcon');
        const navBar = document.querySelector('nav');

        burgerButton.addEventListener("click", () =>
        {
           navBar.classList.toggle("open"); 
        }
        )
    }
)();
