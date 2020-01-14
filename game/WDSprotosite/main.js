
// Change image when buttons is clicked
let image = document.querySelector(".galleryImage");
const galleryButtons = document.querySelectorAll(".galleryButton");

const gBtn1 = document.querySelector(".galleryButton1");
const gBtn2 = document.querySelector(".galleryButton2");
const gBtn3 = document.querySelector(".galleryButton3");

image.src="images/image1.png";

gBtn1.addEventListener("click",()=>{
    image.src="images/image1.png";
});

gBtn2.addEventListener("click",()=>{
    image.src="images/image2.png";
});

gBtn3.addEventListener("click",()=>{
    image.src="images/image3.png";
});



//console.log(image);
//console.log(galleryButtons);
