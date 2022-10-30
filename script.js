function getGridSize() {
  let gridSize = prompt("Enter a grid size (1 - 600):");
  if (gridSize == null || gridSize < 1 || gridSize > 1000) {
    getGridResolution();
  }
  return gridSize;
}

function getGridResolution() {
  let gridRes = prompt("Enter a grid resolution (1 - 100):");
  if (gridRes == null || gridRes < 1 || gridRes > 100) {
    getGridResolution();
  }
  return gridRes;
}

function clearGrid() {
  gridArea.innerHTML = "";
}

function generateGrid() {
  // Set grid item size based on total grid size and resolution
  let itemSize = gridSize / gridRes;

  // Generate square grid based on given grid size.and resolution
  for (let i = 0; i < gridRes; i++) {
    let gridRow = document.createElement('div');
    gridRow.setAttribute('class','grid-row');
    gridRow.style.display = 'flex';

    for (let j = 0; j < gridRes; j++) {
      let gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.style.height = gridItem.style.width = `${itemSize}px`;

      gridItem.addEventListener('mouseover', () => {
        gridItem.classList.add('colored');
      });

      gridRow.appendChild(gridItem);
    }
    gridArea.appendChild(gridRow);
  }
}

const sizeBtn = document.querySelector('#sizeBtn');
const resBtn = document.querySelector('#resBtn');
const gridArea = document.querySelector('.grid-area');

let gridSize = 600; // Set default grid size in px
let gridRes = 64; // Set default grid resolution

sizeBtn.addEventListener('click', () => {
  gridSize = getGridSize();
  clearGrid();
  gridArea.style.width = `${gridSize}px`;
  gridArea.style.maxWidth = `${gridSize}px`;
  gridArea.style.height = `${gridSize}px`;
  gridArea.style.maxHeight = `${gridSize}px`;
  generateGrid();
});

resBtn.addEventListener('click', () => {
  gridRes = getGridResolution();
  clearGrid();
  generateGrid();
});

generateGrid();


