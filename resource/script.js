//DOM
const titleSlide = document.querySelector(".titleSlide");
const slides = document.querySelectorAll(".slide");
const slideStart = document.querySelector(".slideButton");
const scrollStart = document.querySelector(".scrollButton");

//Variable define
let slideNumber = 0;
console.log(slideStart);
console.log(scrollStart);


//functions
//-------------------- SLIDE version -------------------------------

function nextSlide() {
    slides[slideNumber].style.display = "none";
    if (slideNumber + 1 < slides.length) {
        slides[slideNumber + 1].style.display = "grid";
    }
    slideNumber++;
    console.log(slideNumber);

    if (slideNumber === slides.length) {
        restartPresent();
    }
}

function presentStart() {
    titleSlide.style.display = "none";
    slides[slideNumber].style.display = "grid";
}

function restartPresent() {
    slideNumber = 0;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    titleSlide.style.display = "block";
}
//---------------------------SLIDE version----------------------------




//---------------------------SCROLL version---------------------------
function nextSlideScroll() {

    slides[slideNumber].classList.add("hidden");
    slides[slideNumber].classList.remove("show");

    if (slideNumber + 1 < slides.length) {
        slides[slideNumber + 1].classList.add("show");
        slides[slideNumber + 1].classList.remove("hidden");
    }
    slideNumber++;
    console.log(slideNumber);

    if (slideNumber === slides.length) {
        restartPresentScroll();
    }
}

function presentStartScroll() {
    console.log(slideNumber);

    titleSlide.classList.add("hidden");
    titleSlide.classList.remove("show");
    slides[slideNumber].classList.add("show");
    slides[slideNumber].classList.remove("hidden");
}

function restartPresentScroll() {
    slideNumber = 0;
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("hidden");
        slides[i].classList.remove("show");
    }
    titleSlide.classList.add("show");
    // $("window").animate({ scrollTop: 0 }, 'fast');
    window.scrollTo(0, 0);
}
//---------------------------SCROLL version---------------------------


function slideversion() {
    document.body.style.backgroundImage = "url('./picture/backgroundedited.jfif')";
    document.body.style.color = "rgb(197, 155, 18)";
    
    // Defualt Setting
    slideNumber=0;
    for (const slide of slides) {
        slide.style.display = "none";
        slide.classList.remove("hidden");
        slide.classList.remove("show");
    }
    titleSlide.style.display = "block";
    titleSlide.classList.remove("hidden");
    titleSlide.classList.remove("show");

    titleSlide.removeEventListener("click",presentStartScroll);
    for (let i = 0; i < slides.length; i++) {
        // console.log(slides[i]);
        slides[i].removeEventListener("click", nextSlideScroll);
    }


    titleSlide.addEventListener("click", presentStart);
    for (let i = 0; i < slides.length; i++) {
        // console.log(slides[i]);
        slides[i].addEventListener("click", nextSlide);
    }
}

function scrollversion() {
    document.body.style.backgroundImage = "url('picture/transparent.jpg')";
    document.body.style.color = "#000";
    window.scrollTo(0,0);
    //Defualt Setting
    slideNumber=0;
    for (const slide of slides) {
        slide.style.display = "grid";
        slide.classList.add("hidden");
    }
    titleSlide.style.display = "block";

    titleSlide.removeEventListener("click",presentStart);
    for (let i = 0; i < slides.length; i++) {
        // console.log(slides[i]);
        slides[i].removeEventListener("click", nextSlide);
    }

    titleSlide.addEventListener("click", presentStartScroll);
    for (let i = 0; i < slides.length; i++) {
        // console.log(slides[i]);
        slides[i].addEventListener("click", nextSlideScroll);
    }

}


//Event
slideStart.addEventListener("click", slideversion);
scrollStart.addEventListener("click", scrollversion);
