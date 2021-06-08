createGrid = (size = 16) => {
    for (let i=0; i<size; i++){
        for (let j=0; j<size; j++){
            const gridItem = document.createElement('div');
            gridItem.classList.add('gridItem');
            gridItem.addEventListener('mouseover', mouseHover);

            mainContainer.appendChild(gridItem);
        }
    }
}

mouseHover = (e) => {
    if(color=='green') e.target.classList.add('drawnItemGreen');
    if(color=='red') e.target.classList.add('drawnItemRed');
    if(color=='blue') e.target.classList.add('drawnItemBlue');
}

resetGrid = () => {
    console.log();
    let contChildren = mainContainer.children;
    for (let i=0; contChildren[i]; i++){
        contChildren[i].style.backgroundColor='';
    }

    var gridSize = window.prompt('De que tamano la grilla?');
    mainContainer.innerHTML="";
    if(gridSize< 100) {
        mainContainer.style['grid-template-columns']= `repeat(${gridSize}, ${gridSize}fr)`;
    }
    else{
        mainContainer.style['grid-template-columns']= `repeat(100, 100fr)`;
    }
    createGrid(gridSize);
}

greenClr = () => {
    color='green';
}

redClr = () => {
    color='red';
}

blueClr = () => {
    color='blue';
}

const mainContainer = document.querySelector('[class=mainContainer]');
const resetButton = document.querySelector('[class=resetButton');
const greenBtn = document.querySelector('[class=greenBtn');
const redBtn = document.querySelector('[class=redBtn');
const blueBtn = document.querySelector('[class=blueBtn');

let color = 'green';

createGrid();

resetButton.addEventListener('click', resetGrid);
greenBtn.addEventListener('click', greenClr);
redBtn.addEventListener('click', redClr);
blueBtn.addEventListener('click', blueClr);

