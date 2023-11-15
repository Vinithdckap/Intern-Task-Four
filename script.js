

let hoverView = document.querySelector(".hoverView");
let hoverSection = document.querySelector(".hover-service-section");
let secondNav = document.querySelector(".second-content-container");
let innerContainer = document.querySelector(".inner-content");

let hoverWork = document.querySelector(".hoverWork");
let hoverWorkSection = document.querySelector(".hover-work-section")



// console.log(innerContainer);




hoverView.addEventListener("mouseover", () => {
   hoverSection.style.display = "block";
   // innerContainer.style.opacity = "20%"


})
hoverView.addEventListener("mouseout", () => {
   hoverSection.style.display = "none"
   // innerContainer.style.opacity = "100%"

})
hoverSection.addEventListener("mouseover", () => {
   hoverSection.style.display = "block";
})
hoverSection.addEventListener("mouseout", () => {
   hoverSection.style.display = "none";
})


hoverWork.addEventListener("mouseover",()=>{
   hoverWorkSection.style.display = "block";
});

hoverWork.addEventListener("mouseout",()=>{
   hoverWorkSection.style.display = "none";
})


hoverWorkSection.addEventListener("mouseover",()=>{
   hoverWorkSection.style.display = "block"
});

hoverWorkSection.addEventListener("mouseout",()=>{
   hoverWorkSection.style.display = "none"
});




// mobile menu toggle functions


let menuIcon = document.querySelector(".menuIcon");
let cancelIcon = document.querySelector(".cancelIcon");
let headerMobile = document.querySelector(".headerContents");
let subMenu = document.querySelector(".subMenu-mobile");

menuIcon.addEventListener("click",()=>{

   cancelIcon.style.display="block";
   menuIcon.style.display="none";
   headerMobile.style.display="block";

})

cancelIcon.addEventListener("click",()=>{
   menuIcon.style.display="block";
   cancelIcon.style.display="none"
   headerMobile.style.display="none"; 
   
})




