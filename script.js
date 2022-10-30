function getGridResolution() {
  let gridRes = prompt("Enter a grid resolution (1 - 100):");
  return gridRes;
}

function generateGrid(gridRes) {
  const gridArea = document.querySelector('.grid-area');
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

const sizeBtn = document.querySelector('#resBtn');
const resBtn = document.querySelector('#resBtn');

// Set default grid size in px
let gridSize = 600;
// Set default grid resolution
let gridRes = 64;

generateGrid(gridRes);


