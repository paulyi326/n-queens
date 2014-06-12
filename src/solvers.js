/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  for (var i = 0; i < n; i++) {
    var arr = [];
    for (var j = 0; j < n; j++) {
      if (i === j) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    solution.push(arr);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1; //fixme

  for(var i = n; i > 0; i--){
    solutionCount *= i;
  }


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  if (n === 1) {
    return [[1]];
  }
  if(n === 2){
    return [[],[]];
  }
  if (n === 3) {
    return [[],[],[]];
  }

  var boardCreator = function(array){

    var board = [];
    for(var i = 0; i < array.length; i++){
      board.push([]);
    }

    for(var i = 0; i < array.length; i++){
      var column = board[i];
      for(var k = 0; k < array.length; k++){
        if(k === array[i]){
          column.push(1);
        }else{
          column.push(0);
        }
      }
    }
    return board;
  };
  var validSolution;
  var countHelper = function(rows, array){
    if(rows === 0 ){
      var board = new Board(boardCreator(array));
      if (!board.hasAnyQueensConflicts()) {
  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
        if(n == 2){
          console.log(boardCreator(array));
        }
        validSolution = boardCreator(array);
        return;
      }
    } else {
      for(var i = 0; i < n; i++){
        array.push(i);
        countHelper(rows-1, array.slice());
        array.pop();
      }
    }
  };
  countHelper(n, []);
  return validSolution;

};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n < 2) {
    return 1;
  } else {
    var board = new Board()

    var solutionCount = 0; //fixme

    var boardCreator = function(array){

      var board = [];
      for(var i = 0; i < array.length; i++){
        board.push([]);
      }

      for(var i = 0; i < array.length; i++){
        var column = board[i];
        for(var k = 0; k < array.length; k++){
          if(k === array[i]){
            column.push(1);
          }else{
            column.push(0);
          }
        }
      }
      return board;
    };

    var countHelper = function(rows, array){
      if(rows === 0 ){
        var board = new Board(boardCreator(array));
        if (!board.hasAnyQueensConflicts()) {
          solutionCount++;
        }
      } else {
        for(var i = 0; i < n; i++){
          array.push(i);
          countHelper(rows-1, array.slice());
          array.pop();
        }
      }
    };

    countHelper(n, []);
    console.log('Number of solutions for ' + n + ' queens:', solutionCount);
    return solutionCount;
  }
};
