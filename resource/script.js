//DOM
titleSlide = document.querySelector(".titleSlide");
slides = document.querySelectorAll(".slide");

//Variable define
let slideNumber = 0;

//Defualt Setting
for (const slide of slides){
    slide.style.display = "none";
}

//Functions
function nextSlide(){
    slides[slideNumber].style.display = "none";

    if(slideNumber+1 < slides.length){
        slides[slideNumber+1].style.display = "grid";
    }
    slideNumber++;
    console.log(slideNumber);
    
    if(slideNumber===slides.length){
        restartPresent();
    }
}

function presentStart(){
    titleSlide.style.display = "none";
    slides[slideNumber].style.display = "grid";
}

function restartPresent(){
    slideNumber=0;
    for (let i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none";
    }    
    titleSlide.style.display = "block";
}

//Event
titleSlide.addEventListener("click",presentStart);
for (let i = 0 ; i < slides.length ; i++){
    // console.log(slides[i]);
    slides[i].addEventListener("click",nextSlide);
}
