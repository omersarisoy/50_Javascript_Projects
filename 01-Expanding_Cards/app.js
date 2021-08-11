const images = document.querySelectorAll(".image")
console.log(images)

images.forEach(element => {
    element.addEventListener("click", ()=> {
        remove();
        element.setAttribute("class", "active")
    })
})

function remove(){
    images.forEach (element =>{
        element.setAttribute("class", "image" )

    })
}


