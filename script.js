

let hoverView = document.querySelector(".hoverView");
let hoverSection = document.querySelector(".hover-service-section")
let hoverWork = document.querySelector(".hoverWork")
let hoverWorkSection =document.querySelector(".hover-work-section")



hoverWork.addEventListener("mouseover",()=>{
    hoverWorkSection.classList.add("workShow");
})

hoverWork.addEventListener("mouseout",()=>{
    hoverWorkSection.classList.remove("workShow")
})


hoverView.addEventListener("click",()=>{
    hoverWorkSection.style.display="block"
})





hoverView.addEventListener("mouseover",()=>{

    hoverSection.style.display="block";
    
})


hoverView.addEventListener("mouseout",()=>{

    hoverSection.style.display="none";
    
})

 let menuIcon = document.querySelector(".menuIcon");
 let cancelIcon = document.querySelector(".cancelIcon");
 let topSide = document.querySelector(".topSide-header");
 let clickBackground = document.querySelector(".click");


 menuIcon.addEventListener("click",()=>{

    cancelIcon.style.display="block";
    menuIcon.style.display="none";
    topSide.style.display="block";
    clickBackground.style.display="block"
    

 })

 cancelIcon.addEventListener("click",()=>{
    menuIcon.style.display="block";
    cancelIcon.style.display="none";
    topSide.style.display="none";

 })

 
