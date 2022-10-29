function generateGrid(gridSize, itemSize) {
  const gridContainer = document.querySelector('.grid-container');
  // gridContainer.setAttribute('display','flex');
  // Generate square grid based on given grid size.
  for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement('div');
    gridRow.setAttribute('class','grid-row');
    gridRow.style.display = 'flex';
    for (let j = 0; j < gridSize; j++) {
      let gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.style.height = gridItem.style.width = itemSize;
      gridItem.addEventListener('mouseover', () => {
        gridItem.classList.add('colored');
      });
      gridRow.appendChild(gridItem);
    }
    gridContainer.appendChild(gridRow);
  }

}

generateGrid(64,'10px')
