//autor: Tiago Cesar de Morais Matos

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];

    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

console.log(generatePlayerBoard(3,3));
