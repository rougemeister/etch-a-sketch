// grid
function addGridBoxes(num){
    num = prompt('Enter a number to create grid eg. 20 (20x20), 40 (40x40)', 16)
    if(num < 16 || num > 100){
        alert('Choose from 16 to 100');
        return;
    }

    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    let gridBoxes = gridContainer.querySelectorAll('div');
    gridBoxes.forEach(div => div.remove())

    for(let i = 0; i < num*num; i++){
        let gridBoxes = document.createElement('div');
        gridBoxes.style.boxShadow = '0 0 1px gray';
        gridContainer.appendChild(gridBoxes);
    }
    
    for(let box of gridContainer.children){
        box.addEventListener('click', (e)=>{
            e.target.style.backgroundColor = 'rgb(6, 6, 53)';
        })
    }
    
}

function populatePad(num = 16){
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    let gridBoxes = gridContainer.querySelectorAll('div');
    gridBoxes.forEach(div => div.remove())

    for(let i = 0; i < 256; i++){
        let gridBoxes = document.createElement('div');
        gridBoxes.style.boxShadow = '0 0 1px gray';
        gridContainer.appendChild(gridBoxes);
    }
    
    for(let box of gridContainer.children){
        box.addEventListener('click', (e)=>{
            e.target.style.backgroundColor = 'rgb(6, 6, 53)';
        })
    }
}

populatePad();

const gridButton = document.querySelector(".grid");
gridButton.addEventListener('click', addGridBoxes);



resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', (e)=>{
    const gridBoxes = document.querySelector('.grid-container').children;
    for(let box of gridBoxes){
        box.style.backgroundColor = `rgb(224, 244, 250)`;
    };
})



const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', makeRainbow)


function makeRainbow(){
    gridBoxes = document.querySelector('.grid-container').children;

    function getColor (){
        let random = Math.ceil(Math.random()*7);
        let color = '';

        switch (random){
            case 1: 
                color = 'teal';
                break;
            case 2:
                color = 'orange';
                break;
            case 3:
                color = 'rgb(51, 94, 235)';
                break;
            case 4:
                color = 'yellow';
                break;
            case 5:
                color = 'rgb(51, 94, 235)';
                break;
            case 6:
                color = 'rgb(50, 235, 59)';
                break;
            case 7:
                color = 'rgb(221, 61, 61)';
                break;
        }
        return color;
    }

    for(let box of gridBoxes){
        box.addEventListener('mouseover', ()=>{
            box.style.backgroundColor = getColor();
        })
    }
} 