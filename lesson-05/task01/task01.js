/*
Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны
нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
 */

//TODO избавиться от явных значение. переделать на просчет

/**
 * Generate chess board with param (width)
 * @param width px (with padding)
 */
function generatedChessBoard(width) {
    let chessBoard = document.getElementById("chessBoard");
    // width = 8*x + 0.25 * x
    // x = side of a square
    let squareSide = width / 8.25;
    let mainBorder = squareSide * 8;
    chessBoard.style.width = mainBorder + 'px';
    chessBoard.style.margin = '0 auto';
    chessBoard.style.padding = '20px';
    chessBoard.style.border = '1px black solid';
    let abc = 'ABCDEFGH';

    for (let i = 0; i < 8; i++) {
        let row = document.createElement("div.row");
        row.style.display = 'flex';
        for (let j = 0; j < 8; j++) {
            let square = createSquare(squareSide);
            if (i % 2 !== j % 2) {
                square.style.background = 'black';
            }
            if (j === 0) {
                square.append(printNumValue('left', 8 - i + ''))
            }
            if (j === 7) {
                square.append(printNumValue('right', 1 + i + ''))
            }

            if (i === 7) {
                square.append(printLetterValue(j === 0 || j === 7 ? 'bordered-down' : 'down', abc.charAt(j)))
            }

            if (i === 0) {
                square.append(printLetterValue(j === 0 || j === 7 ? 'bordered-up' : 'up', abc.charAt(7 - j)))
            }
            row.append(square);
        }
        chessBoard.append(row);
    }
}

/**
 * Generate a square with solid border
 * @param size integer (side of a square)
 * @returns {HTMLElement}
 */
function createSquare(size){
    let square = document.createElement("div.square");
    square.style.width = size + 'px';
    square.style.height = size + 'px';
    square.style.border = '1px black solid';
    return square;
}

/**
 * Print number with direction's condition
 * @param direction (left|right)
 * @param value (1|2|3|4|5|6|7|8)
 * @returns {HTMLDivElement}
 */
function printNumValue(direction, value) {
    let numValue = document.createElement('div');
    numValue.className = 'number';
    switch (direction) {
        case 'left':
            numValue.style.left = '-15px';
            break;
        case 'right':
            numValue.style.left = '15px';
            numValue.style.transform = 'rotate(0.5turn)';
            break;
    }

    numValue.style.top = '35px';
    numValue.style.position = 'relative';
    numValue.innerText = value;
    return numValue;
}

/**
 * Print number with direction's condition include extreme squares
 * @param direction (up|down|bordered-up|bordered-down)
 * @param value (A|B|C|D|E|F|G|H)
 * @returns {HTMLDivElement}
 */
function printLetterValue(x, value) {
    let letterValue = document.createElement('div');
    letterValue.className = 'letter';
    switch (x) {
        case 'up':
            letterValue.style.top = '-20px';
            letterValue.style.transform = 'rotate(0.5turn)';
            letterValue.style.left = '-35px';
            break;
        case 'down':
            letterValue.style.top = '85px';
            letterValue.style.left = '30px';
            break;
        case 'bordered-up':
            letterValue.style.top = '-38px';
            letterValue.style.transform = 'rotate(0.5turn)';
            letterValue.style.left = '-35px';
            break;
        case 'bordered-down':
            letterValue.style.top = '66px';
            letterValue.style.left = '30px';
            break;
    }


    letterValue.style.position = 'relative';
    letterValue.innerText = value;
    return letterValue;
}

generatedChessBoard(680);



