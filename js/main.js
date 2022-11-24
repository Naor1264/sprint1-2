'use strict'
var flagEnabled = false;
var lives=3
var gameOver = false
var isBomb = false
var gInterval
var gLevel = {
    size: 4,
    mines: 2,
    minesLocation: []
}
var mine = {
    // (A) PROPERTIES
    // (A1) GAME SETTINGS
    total : 10, // TOTAL NUMBER OF MINES
    height : 10, // NUMBER OF ROWS
    width : 8, // NUMBER OF COLUMNS
}

var gIsGameStart = false
var gStartTime
var gBoard = {
    minesAroundCount: 0,
    isShown: false,
    isMine: false,
    isMarked: true
}
var gGame = {
    isOn: false,
    showCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function initGame(level = 4) {
    document.querySelector(".flag-button").addEventListener("click", setFlag);
    gLevel.size = level
    gBoard = buildBoard()
    renderBoard(gBoard)
    console.table(gBoard)
    gIsGameStart = false
    clearInterval(gInterval)
    revealMines()
    // spawnBomb()
    // addRandomBomb()

}
function buildBoard() {
    var size = gLevel.size
    const board = []
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            board[i][j] = ''
        }
    }
    var numOfNeighbors = countNeighbors(i, j, board)
    if ((numOfNeighbors > 2) && (numOfNeighbors < 6)) {
        if (board[i][j] === '') board[i][j] = BOMB
    }
    if (size == 4) {
        board[0][2] = BOMB
        board[2][3] = BOMB
    }
    if (size === 8) {
        board[0][0] = BOMB
        board[4][1] = BOMB
        board[4][2] = BOMB
        board[0][7] = BOMB
        board[6][7] = BOMB
        board[6][8] = BOMB
        board[6][5] = BOMB
        board[5][6] = BOMB
        board[3][4] = BOMB
        board[3][2] = BOMB
        board[1][1] = BOMB
        board[0][8] = BOMB
        board[2][6] = BOMB
        board[3][6] = BOMB
    }
    return board
}


function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        // console.log(board)
        var row = board[i]
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            // var cell=row[j]
            var numOfNeighbors = countNeighbors(i, j, board)
            var currCell = `cell-${i}-${j}`
            strHTML += `<td id="${currCell}" onclick="onCellClicked('${currCell}')"></td>`
        }
        strHTML += '</tr>'
    }
    // strHTML += '</tbody></table>'
    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML

}
function renderCell(i, j, value) {
    const elCell = document.querySelector(`[data-i="${i}"][data-j="${j}"]`)
    // elCell.innerText = value
    return elCell

}
function setFlag() {
    if (flagEnabled) {
        flagEnabled = false;
        document.querySelector(".flag-button").style.backgroundColor = "lightgray";
    }
    else {
        flagEnabled = true;
        document.querySelector(".flag-button").style.backgroundColor = "darkgray";
    }
}
function onCellClicked(cell) {
    
    const idx = cell.split('-')
    const i = idx[1]
    const j = idx[2]
    const isBomb = gBoard[i][j] === BOMB ? true : false
    if (isBomb) {
        document.querySelector(`#${cell}`).innerHTML = BOMB
        lives= document.querySelector('.lives') 
        lives--
    }
    if (!gIsGameStart) startTimer()
    gIsGameStart = true
    gBoard.minesAroundCount = countNeighbors(i, j, gBoard)
    console.log(gBoard.minesAroundCount)
    if (gBoard[i][j] === BOMB)
    document.querySelector(`#${cell}`).innerHTML = BOMB
    else if(gBoard[i][j]!==BOMB) {
        document.querySelector(`#${cell}`).innerHTML = gBoard.minesAroundCount
    }
    
}
// document.querySelector(`#${cell}`).innerHTML = FLAG

function changeLevel(level) {

    if (level.innerText === 'Easy') gLevel.size = 4
    if (level.innerText === 'Medium') gLevel.size = 8
    if (level.innerText === 'Hard') gLevel.size = 16

    initGame(gLevel.size)


}
function onRestart() {
    clearInterval(gInterval)
    var elH2 = document.querySelector('.time')
    elH2.innerText = '0.000'
    initGame()
}
function addRandomBomb(){
    for (var i = 1; i < gBoard.length - 1; i++) {
        for (var j = 1; j < gBoard[i].length - 1; j++) {
            const cell = gBoard[i][j]
    var row = Math.floor(Math.random() * gBoard[i]);
    var col = Math.floor(Math.random() * gBoard[j]);
    if (!mine.gBoard[i][j]) ''}
        }
}
function getEmptyCels(gBoard) {
    const emptyCels = []
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 1; j < gBoard.length; j++) {
            const cel = gBoard[i][j]
            if (cel === null) {
                emptyCels.push({ i, j })


            }
        }
    }

    return emptyCels[getRandomInt(0, emptyCels.length)]
}
function revealMines() {
    for (let i= 0; i < gBoard.length; i++) {
        for (let j = 0; j < gBoard.length; j++) {
            let tile = gBoard[i][j];
            if (gBoard.includes(BOMB)) {
                tile.innerText = "💣";
                tile.style.backgroundColor = "red";                
            }
        }
    }
}
function startTimer() {

    gStartTime = Date.now()
    gInterval = setInterval(() => {
        const seconds = (Date.now() - gStartTime) / 1000
        var elH2 = document.querySelector('.time')
        elH2.innerText = seconds.toFixed(3)
    }, 1);
}
function countNeighbors(cellI, cellJ, mat) {
    var neighborsCount = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue
            if (j < 0 || j >= mat[i].length) continue

            if (mat[i][j] === BOMB) neighborsCount++
        }
    }
    return neighborsCount
}
function countBombsAround(board, rowIdx, colIdx) {

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= board[0].length) continue
            var currCell = board[i][j]
        }
    }
}
// function onHandleKey(event) {
//     switch (event.key) {
//         case MouseButtons.right:FLAG
//             moveTo(i, j - 1)
//             break}
// }
// function click(event)
        
//         var source = event.target;
//                 id=source.id;                     

//         if(event.which==3){
//             onCellClicked(document.querySelector(`#${cell}`).innerHTML = FLAG)
//         }
                        
                