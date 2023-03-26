// SLIDEバージョンとアニメーションバージョンを用意している。
// 11~52がSLIDEバージョン,55~106がアニメーションバージョン。

//DOM
const titleSlide = document.querySelector(".titleSlide");
const slides = document.querySelectorAll(".slide");
const hiddenElements = document.querySelectorAll(".hidden");
//Variable define
let slideNumber = 0;

//-------------------- SLIDE version -------------------------------

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

//---------------------------SLIDE version----------------------------


//---------------------------SCROLL version---------------------------

// document.body.style.backgroundImage="url('picture/transparent.jpg')";
// document.body.style.color="#000";

// //Defualt Setting
// for (const slide of slides){
//     slide.classList.add("hidden");
// }

// //Functions
// function nextSlide(){
    
//     slides[slideNumber].classList.add("hidden");
//     slides[slideNumber].classList.remove("show");
    
//     if(slideNumber+1 < slides.length){
//         slides[slideNumber+1].classList.remove("hidden");
//         slides[slideNumber+1].classList.add("show");
//     }
//     slideNumber++;
//     console.log(slideNumber);
    
//     if(slideNumber===slides.length){
//         restartPresent();
//     }
// }

// function presentStart(){
//     titleSlide.classList.add("hidden");
//     titleSlide.classList.remove("show");
//     slides[slideNumber].classList.add("show");
//     slides[slideNumber].classList.remove("hidden");
// }

// function restartPresent(){
//     slideNumber=0;
//     for (let i = 0 ; i < slides.length ; i++){
//         slides[i].classList.add("hidden");
//         slides[i].classList.remove("show");
//     }    
//     titleSlide.classList.add("show");
// }

// //Event
// titleSlide.addEventListener("click",presentStart);
// for (let i = 0 ; i < slides.length ; i++){
//     // console.log(slides[i]);
//     slides[i].addEventListener("click",nextSlide);
// }

//---------------------------SCROLL version---------------------------
