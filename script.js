let cells = document.getElementById('cells');

let cellsPerSide = 48;

let frameSize = 800;

let cellSize = Math.floor(frameSize / cellsPerSide);
let cellSizeString = `${cellSize}px`;

let mouseDown = false;

document.onmousedown = function() {
    mouseDown = true;
}

document.onmouseup = function() {
    mouseDown = false;
}

for (j = 0; j < cellsPerSide; j++) {
    let row = document.createElement('div');
    for (i = 0; i < cellsPerSide; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = cellSizeString;
        cell.style.height = cellSizeString;
        cell.addEventListener('mouseenter', function () {
            if (mouseDown) {
                cell.style.backgroundColor = 'blue';
            };
        });
        row.appendChild(cell);
    };
    row.classList.add('row');
    cells.appendChild(row);
};
