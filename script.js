const gridContainer = document.querySelector(".container")
let gridSize = 16
let box = []

//creating grid boxes
for(let i=0;i<gridSize*gridSize;i++){
    box[i] = document.createElement('div')
    box[i].setAttribute('class','gridItem')
    gridContainer.append(box[i])
}

gridContainer.setAttribute('style',`grid-template-columns:repeat(${gridSize},auto)`)

let gridBoxList = document.querySelectorAll(".gridItem")
gridBoxList.forEach((item) =>{
    item.addEventListener('mouseover',() => {
        item.classList.add("darkened")
    })
})


