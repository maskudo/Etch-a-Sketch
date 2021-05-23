const gridContainer = document.querySelector(".container")
let gridSize = 16
let box = []
var value = 16


function createGrid(size){
    gridSize = size
    for(let i=0;i<gridSize*gridSize;i++){
        box[i] = document.createElement('div')
        box[i].setAttribute('class','gridItem')
        gridContainer.append(box[i])
    }
    gridContainer.setAttribute('style',`grid-template-columns:repeat(${size},auto)`)
    activateEffect()

}
function removeGrid(size){
    for(let i=0;i<size*size;i++){
        gridContainer.removeChild(box[i])
    }
}
function activateEffect(){
    let gridBoxList = document.querySelectorAll(".gridItem")
    gridBoxList.forEach((item) =>{
        item.addEventListener('mouseover',() => {
            item.classList.add("darkened")
        })
    })
}

const button = document.querySelector("#button")
button.addEventListener('click',()=>{
    value = prompt("Enter grid size(1-50): ")
    if(value==null||value<=0||value>50){
        value=gridSize
    }
    removeGrid(gridSize)
    createGrid(value)
})

createGrid(gridSize)

