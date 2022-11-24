const BOMB = '💣'
const FLAG = '🚩'
//* GETS AN EMPTY GLOBAL VAR OF GNUMS AND BUILDS IT ACCORDING TO THE GNUMSRANGE LENGTH
// function resetNums() {
//     gNums = []
//     for (var i = 0; i < gNumsRange; i++) {
//         gNums.push(i + 1)
//     }
// }
///////////////////////////////////////////////////////////////////////////////////////////////
//* DRAWS A RANDOM NUMBER FROM GNUMS ARRAY AND SPLICES THAT NUM SO IT WONT REPEAT ITSELF
// function drawNum() {
//     var randIdx = getRandomInt(0, gNums.length)
//     var num = gNums[randIdx]
//     gNums.splice(randIdx, 1)
//     return num
// }

///////////////////////////////////////////////////////////////////////////////////////////////
//* GET RANDOM INT INCLUSIVE / EXLUCIVE
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//!/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


///////////////////////////////////////////////////////////////////////////////////////////////
//* CREATES BOARD ACCORDING TO GLOBAL SIZE VAR 
// function buildBoard() {
//   var size = gLevel.size
//   const board = []
//   for (var i = 0; i < size; i++) {
//     board[i] = []
//     for (var j = 0; j < size; j++) {
//       board[i][j] = ''
//     }
//   }

//   if (!isBomb) {
//     board[0][2] = BOMB
//     board[2][3] = BOMB
//     board[2][1] = BOMB
//   }
//   return board
// }

// function renderBoard(board) {
//   var strHTML = ''
//   for (var i = 0; i < board.length; i++) {
//     // console.log(board)
//     var row = board[i]
//     strHTML += '<tr>'
//     for (var j = 0; j < board[0].length; j++) {
//       // var cell=row[j]
//       var currCell = `cell-${i}-${j}`
//       strHTML += `<td id="${currCell}" onclick="onCellClicked('${currCell}')"></td>`
//     }
//     strHTML += '</tr>'
//   }
//   // strHTML += '</tbody></table>'
//   const elBoard = document.querySelector('tbody.board')
//   elBoard.innerHTML = strHTML

// }
// function renderCell(location, value) {
//   const elCell = document.querySelector(`.cell${location.i}-${location.j}`)
//   elCell.innerHTML = value
//   getRandomInt(0, board.length)
// }
// console.log(BOMB)
// function onCellClicked(cell) {
//   const idx = cell.split('-')
//   const i = idx[1]
//   const j = idx[2]
//   const isBomb = board[i][j] === BOMB ? true : false
//   if (isBomb) {
//     console.log(':')
//     document.querySelector(`#${cell}`).innerHTML = BOMB

//   }



// }
// c

// function startTimer() {
//   onCellClicked()
//   gStartTime = Date.now()
//   gInterval = setInterval(() => {
//     const seconds = (Date.now() - gStartTime) / 1000
//     var elH2 = document.querySelector('.time')
//     elH2.innerText = seconds.toFixed(3)
//   }, 1);
// }
// function countNeighbors(cellI, cellJ, mat) {
//   var neighborsCount = 0
//   for (var i = cellI - 1; i <= cellI + 1; i++) {
//     if (i < 0 || i >= mat.length) continue
//     for (var j = cellJ - 1; j <= cellJ + 1; j++) {
//       if (i === cellI && j === cellJ) continue
//       if (j < 0 || j >= mat[i].length) continue
//       if (mat[i][j] === BOMB) neighborsCount++
//     }
//   }
//   return neighborsCount
// }
///////////////////////////////////////////////////////////////////////////////////////////////
//* INCASE WE NEED TO WORK/RENDER ON NEW MATRIX
// function copyMat(mat) {
//   var newMat = []
//   for (var i = 0; i < mat.length; i++) {
//     newMat[i] = []
//     for (var j = 0; j < mat[0].length; j++) {
//       newMat[i][j] = mat[i][j]
//     }
//   }
//   return newMat
// }

///////////////////////////////////////////////////////////////////////////////////////////////
//* CREATE ANY ITEM 
// function createBalloons(count) {
//   var balloons = []
//   for (var i = 0; i < count; i++) {
//     var balloon = createBalloon(i)
//     balloons.push(balloon)
//   }
//   return balloons
// }

///////////////////////////////////////////////////////////////////////////////////////////////
// function shuffle(items) {
//   var randIdx, keep, i;
//   for (i = items.length - 1; i > 0; i--) {
//     randIdx = getRandomInt(0, items.length - 1);

//     keep = items[i];
//     items[i] = items[randIdx];
//     items[randIdx] = keep;
//   }
//   return items;
// }

///////////////////////////////////////////////////////////////////////////////////////////////
//* RENDER ONLY CELL TO DOM
// location is an object like this - { i: 2, j: 7 }
////////////////////////////////////////////////////////////////
//* GET RANDOM COLOR
// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
///////////////////////////////////////////////////////////////////////////////////////////////

//* SHOW / HIDE ELEMENT
function hideElement(selector) {
  const el = document.querySelector(selector)
  el.classList.add('hidden')
}

function showElement(selector) {
  const el = document.querySelector(selector)
  el.classList.remove('hidden')
}

///////////////////////////////////////////////////////////////////////////////////////////////
//* GET ANY CELL TO AN ARRAY


///////////////////////////////////////////////////////////////////////////////////////////////
//* NEIGHBORS LOOP
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