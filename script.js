const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next") ;
const previous = document.querySelector(".previous") ;

// console.log(slides);
var counter=0 ;

slides.forEach(
      (slide,index)=>{
            slide.style.left = `${index * 100}%`;
      }
)

next.addEventListener("click",()=>{
      counter++;
      if (counter >= slides.length) {
            counter = 0; 
        }
      slideImage();
})
previous.addEventListener("click",()=>{
      counter--; 
      if (counter < 0) {
            counter = slides.length - 1; 
        }
      slideImage();
})

const slideImage = () => {
    slides.forEach(
      (slide)=>{
            slide.style.transform = ` translateX(-${counter * 100}%) `
      }
    )  
}




