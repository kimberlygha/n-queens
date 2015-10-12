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
  var solution = new Board({'n':n});
  // declare board to solution.rows
  var board = solution.rows(); 
  // iterate over board.length - equivalent to n 
  for(var i=0; i <n; i++){
    // iterate over the columns in the row 
    for(var j=0; j <n; j++){
      // toggle piece 
      solution.togglePiece(i,j);
        // if no col conflicts 
      if(!solution.hasColConflictAt(j)){
        // return 
        break; 
      }else{
        // else toggle back 
        solution.togglePiece(i,j)
      }
    } 
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = new Board({'n':n});
  // declare a counter variable 
  var solutionCount = 0; 
  // declare a function that takes in an array of indices 
  var getRookSolution = function(arr){

    // if the array.length is 0
    if(arr.length === 0){
      // increment counter
      solutionCount++; 
    }else{
    // else
      // iterate over the array that is passed 
      for(var i=0; i<arr.length; i++){
        // slice out current i value in array 
        var newArr = arr.slice(0,i).concat(arr.slice(i+1));
        // call inner function recursively with remaining array 
        getRookSolution(newArr);
      }
    }
  }
  // call inner function with array with range 0-(n-1);
  getRookSolution(_.range(0,n));
  //return counter variable; 

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n':n}); 
  // declare a variable for currentRow 
  var currentRow = 0; 
  // create an inner function to get solution 
  var getQueenSolution = function(arr){
    // if array length is 0 
    if(arr.length === 0){
      // return the board
      return; 
    };
    // iterate over the array that is passed 
    for(var i=0; i<arr.length; i++){
      // toggle piece at solution.togglePiece(currentRow,[arr[i]]);
      solution.togglePiece(currentRow,arr[i]);
      if()
      // check if diagonal conflicts exist 
        // if there is conflict
          // toggle back to empty
          // continue to next i 
        // if there is no conflict 
          // increment currentRow 
          // recursively call on the spliced array  
      
    }
    // if it goes through for loop, break; 
    
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
