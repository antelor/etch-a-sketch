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
    e.target.classList.add('drawnItem');
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

const mainContainer = document.querySelector('[class=mainContainer]');
const resetButton = document.querySelector('[class=resetButton');

createGrid();

resetButton.addEventListener('click', resetGrid);

