

let hoverView = document.querySelector(".hoverView");
let hoverSection = document.querySelector(".hover-service-section")
let hoverWork = document.querySelector(".hoverWork")
let hoverWorkSection =document.querySelector(".hover-work-section")

// hoverView.addEventListener("mouseover",()=>{
//     hoverSection.classList.add("show")
   
// })
// hoverSection.addEventListener("mouseout",()=>{
//     hoverSection.classList.remove("show")
//     // hoverSection.style.display = "none"

// })

hoverWork.addEventListener("mouseover",()=>{
    hoverWorkSection.classList.add("workShow");
})

hoverWork.addEventListener("mouseout",()=>{
    hoverWorkSection.classList.remove("workShow")
})


// hoverView.addEventListener("mouseover", (event) => {
//     if (event.type === "mouseover") {
//       hoverSection.classList.add("show");
//     } else if (event.type === "mouseout") {
//       hoverSection.classList.remove("show");
//     }
//   });
  


hoverView.addEventListener("mouseover",()=>{

    hoverSection.style.display="block";
    
})


hoverView.addEventListener("mouseout",()=>{

    hoverSection.style.display="none";
    
})
