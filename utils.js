'use strict'

function renderBoard(mat, selector) {

    var strHTML = '<table border="0"><tbody>'
    for (var i = 0; i < mat.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {

            const cell = mat[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}">${cell}</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'

    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}
function renderCell(location, value) {

    const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    elCell.innerHTML = value
}
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
function getMoveDiff() {
    const randNum = getRandomIntInclusive(1, 4)

    switch (randNum) {
        case 1: return { i: 0, j: 1 }
        case 2: return { i: 1, j: 0 }
        case 3: return { i: 0, j: -1 }
        case 4: return { i: -1, j: 0 }
    }
}
function basicLoop() {
    for (var i = 0; i < XXX; i++) {

    }
}
function doubleLoop() {
    for (var i = 0; i < XXX; i++) {
        for (var j = 0; j < XXX; j++) {

        }

    }
}
function getEmptyLocation(board) {
    var emptyLocations = []
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] === EMPTY) {
                emptyLocations.push({ i, j })
            }
        }
    }
    if (!emptyLocations.length) return null
    var randIdx = getRandomIntInclusive(0, emptyLocations.length - 1)
    return emptyLocations[randIdx]
}
function changeModal() {
    var modal = document.querySelector('.modal').style
    var userMesage = document.querySelector('.modal .user-msg')
    if (gGame.isOn) {
        modal.display = 'none'
    }
    else {
        modal.display = 'block'
        if (gIsWin) {
            userMesage.innerText = 'congratulations you won!'
        }
        else {
            userMesage.innerText = 'you lost!  try again...'
        }
    }
}
function buildBoard() {
    const rowCount = 10
    const colCount = 12
    const board = []
    for (var i = 0; i < rowCount; i++) {
      board[i] = []
      for (var j = 0; j < colCount; j++) {
        board[i][j] = { type: FLOOR, gameElement: null }
        if (i === 0 || i === rowCount - 1 || j === 0 || j === colCount - 1) {
          board[i][j].type = WALL
        }
      }
    }
  
    // Place the gamer and two balls
    board[gGamerPos.i][gGamerPos.j].gameElement = GAMER
    board[5][5].gameElement = BALL
    board[7][2].gameElement = BALL
  
    return board
  }
  function countGamerNegs() {
    var negsCount = 0;
    for (var i = gGamerPos.i - 1; i <= gGamerPos.i + 1; i++) {
      if (i < 0 || i >= gBoard.length) continue;
      for (var j = gGamerPos.j - 1; j <= gGamerPos.j + 1; j++) {
        if (j < 0 || j >= gBoard[i].length) continue;
        if (i === gGamerPos.i && j === gGamerPos.j) continue;
        var currCell = gBoard[i][j]
        if (currCell.gameElement === BALL) negsCount++;
      }
    }
    var elNgsCount = document.querySelector('.negs-count span')
    elNgsCount.innerText = negsCount
  }
   
    //day11 cr eyal main
  function getNums(size) {
    var cellCount = size ** 2; // 16
    var nums = [];
    for (var i = 1; i <= cellCount; i++) { // 0 - 16
      nums.push(i); // nums = [1, ... , 16]
    }
    console.log('nums', nums)
    return nums;
  }
   //day11 cr eyal main
  function playSound(fileName) {
    var sound = new Audio(`sounds/${fileName}.mp3`);
    sound.play();
  }
   //day11 cr eyal main
  function updateTimer() {
    var elapsedTime = Date.now() - gStartTime;
    var minutes = Math.floor(elapsedTime / (1000 * 60));
    var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((elapsedTime % 1000) / 10);
    document.getElementById('timer').textContent =
      formatTime(minutes) +
      ':' +
      formatTime(seconds) +
      ':' +
      formatTime(milliseconds);
  }
   //day11 cr eyal main
  
  function formatTime(time) {
    return (time < 10 ? '0' : '') + time;
  }
   //day11 cr eyal main
  function getRandNum() {
    var randIdx = getRandomInt(0, gNums.length); // 4
    var num = gNums[randIdx]; // 5
    gNums.splice(randIdx, 1);// [1,2,3,4,6,7...]
    return num;
  }
   //day11 cr eyal main
  function startTimer() {
    gStartTime = Date.now();
    gIntervalId = setInterval(updateTimer, 10);
    // playSound('count');
  }
  //day11 cr eyal main
  function stopTimer() {
    clearInterval(gIntervalId);
  }
  
  function drawNum(nums) {
    return nums.splice(getRandomInt(0, nums.length), 1)[0]
  }
  function getArrayWithAscNums(max) {
    var numbers = []
    for (var i = 0; i < max; i++) {
      numbers[i] = i + 1
    }
    return numbers
}
function getRandomOrderNumbersArray(MAX) {
    const nums = getArrayWithAscNums(MAX)
    var res = []
    for (var i = 0; i < MAX; i++) {
      res[i] = drawNum(nums)
    }
    return res
  }