let container = document.querySelector(".container")
let img = document.querySelector("#img")


container.addEventListener(`mousemove`, e=>{
    console.log(e.offsetX);
    console.log(e.offsetY);
    // console.log(e.clientX);
    img.style = `transform-origin: ${e.offsetX%e.clientX}px ${e.offsetY%e.clientY}px;transform: scale(3)`
    
    
})
container.addEventListener(`mouseleave`, e=>{
    img.style = `transform-origin: center center;
    transform: scale(1);`

 
})