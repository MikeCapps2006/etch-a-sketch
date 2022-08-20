const pad = document.getElementById('pad');

function changeSquares(){
    let numSquares = '';
    do {
        numSquares = prompt("How many squares do you want on each side of the grid??? Max 64");
    } while (numSquares < 0 || numSquares > 64);
    
    pad.innerHTML = '';
    drawSqDivs(numSquares);
}


function drawSqDivs (numSquares = 16){
    for (let i = 0; i < numSquares * numSquares; i++){
        const div = document.createElement('div');
        const divSize = pad.clientWidth/numSquares;
        div.classList.add('box');
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.addEventListener('mouseenter', changeBackgroundColor);
        pad.appendChild(div);
    }
}

function changeBackgroundColor (e, color = 'red'){
    e.target.style.backgroundColor = color;
}



drawSqDivs();

