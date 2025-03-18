// DOM
// Navegar no documento html
const brand = document.querySelector("#brand");

brand.addEventListener('click', function(){
    // console.log("testando o click");
    console.log(event.target)
    event.target.style.color = "black";
})
 
//selecionar os elementos dos slide
const slides = document.querySelectorAll(".banner");

const dots = document.querySelectorAll(".dot");

let slideIndex = 0;

function showSlides (){
     for(let i=0; i < slides.length; i++){
        slides[i].classList.remove("active")
       dots[i].classList.remove("active")

}
     slideIndex++;
     if (slideIndex > slides.length){
        slideIndex = 1;
     }

     slides [slideIndex -1]

//inicialização
