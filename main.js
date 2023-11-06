const menu=document.querySelector(".nav-links")
const hamburger=document.querySelector("nav .fa-bars")

hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("show")
})