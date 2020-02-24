
// Change image when buttons is clicked
//const image = document.querySelector("#galleryImage");
//const image = document.getElementsByClassName("galleryImage");
const image = document.getElementById("galleryImage");
const imageTitle = document.querySelector(".imageTitle");
const imageDescription = document.querySelector(".imageDescription");


const gBtn1 = document.querySelector(".galleryButton1");
const gBtn2 = document.querySelector(".galleryButton2");
const gBtn3 = document.querySelector(".galleryButton3");

//image.src="images/image1.png";

gBtn1.addEventListener("click",()=>{
    image.src="images/image1.png";
    imageTitle.innerHTML="Title 01";
    
    imageDescription.innerHTML="Cool Image isn't it?";
});

gBtn2.addEventListener("click",()=>{
    image.src="images/image2.png";
    imageTitle.innerHTML="Title 02";

    imageDescription.innerHTML="Another one";
});

gBtn3.addEventListener("click",()=>{
    image.src="images/image3.png";
    imageTitle.innerHTML="Title 03";

    imageDescription.innerHTML="Feels like the empire joined.";
});



//console.log(image);
//console.log(galleryButtons);
