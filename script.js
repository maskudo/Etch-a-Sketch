const gridContainer = document.querySelector(".container")
let gridSize = 16
let box = []
let value = 16

function genRanHex(){
    let letters = "0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color += letters[(Math.floor(Math.random() * 16))];
    }
    return color
}

function activateEffect(){
    let gridBoxList = document.querySelectorAll(".gridItem")
    gridBoxList.forEach((item) =>{
        item.addEventListener('mouseover',() => {
            //item.classList.add("darkened")
            let color = genRanHex()
            item.setAttribute("style",`background-color:${color}`)
        })
    })
}

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


const changeSize = document.querySelector("#changeSize")
changeSize.addEventListener('click',()=>{
    value = prompt("Enter grid size(1-50): ")
    if(value==null||value<=0||value>50){
        value=gridSize
    }
    removeGrid(gridSize)
    createGrid(value)
})

const clear = document.querySelector("#clear")
clear.addEventListener('click',() => {
    removeGrid(gridSize)
    createGrid(gridSize)
})

createGrid(gridSize)

