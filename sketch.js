const gridContainer = document.querySelector('.grid-container');


// grid


function addGridBoxes(num){
    num = prompt('Enter a number to create grid eg. 20 (20x20), 40 (40x40)', 16)
    if(num < 16 || num > 100){
        alert('Choose from 16 to 100');
        return;
    }
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
        box.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = 'rgb(6, 6, 53)';
        })
    }
    
}

function populatePad(num = 16){
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
        box.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = 'rgb(6, 6, 53)';
        })
    }
}


const gridButton = document.querySelector(".grid");
gridButton.addEventListener('click', addGridBoxes);



resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', ()=>{
    const gridBoxes = document.querySelector('.grid-container').children;
    for(let box of gridBoxes){
        box.style.backgroundColor = `rgb(224, 244, 250)`;
        box.classList.remove('rainbow-box');
        populatePad();
    };
})



const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', makeRainbow)


function makeRainbow(){
    gridBoxes = document.querySelector('.grid-container').children;
    for(let box of gridBoxes){
        box.style.backgroundColor = `rgb(224, 244, 250)`;
    }

    for(let box of gridBoxes){
        box.addEventListener('mouseover', ()=>{
            box.classList.add('rainbow-box')
        })
    }
    
} 

