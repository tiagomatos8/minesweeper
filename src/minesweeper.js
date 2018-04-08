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

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];

    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }

  let numbersOfBombsPlaced = 0;

  while (numbersOfBombsPlaced < numberOfBombs) {
    //This code has the potential to place bombs on top of already existing bombs. This need to be fixed!

    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

    board[randomRowIndex][randomColumnIndex] = 'B';

    numbersOfBombsPlaced++;
  }

  return board;
}

const printBoard = board => {
  return board.map(row => row.join(' | ')).join('\n');
}

let playerBoard = generatePlayerBoard(5, 5);
let bombBoard = generateBombBoard(5, 5, 10);

console.log('Player Board: ');
console.log(printBoard(playerBoard));

console.log('Bomb Board: ');
console.log(printBoard(bombBoard));

