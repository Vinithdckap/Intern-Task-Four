

let hoverView = document.querySelector(".hoverView");
let hoverSection = document.querySelector(".hover-section")

hoverView.addEventListener("mouseover",()=>{
    hoverSection.classList.add("show")
})
hoverView.addEventListener("mouseout",()=>{
    hoverSection.classList.remove("show")
})


// hoverView.addEventListener("mouseover", (event) => {
//     if (event.type === "mouseover") {
//       hoverSection.classList.add("show");
//     } else if (event.type === "mouseout") {
//       hoverSection.classList.remove("show");
//     }
//   });
  