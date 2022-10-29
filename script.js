function generateGrid(gridSize) {

  const gridContainer = document.querySelector('.grid-container');

  for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement('div');
    gridRow.setAttribute('id','grid-row');
    for (let j = 0; j < gridSize; j++) {
      let gridItem = document.createElement('div');
      gridItem.setAttribute('id','grid-item');
      gridRow.appendChild(gridItem);
    }
    gridContainer.appendChild(gridRow);
  }
}

generateGrid(16)