/*
1) Add the<script> tag that loads in jQuery from code.jquery.com

2) Modify the DOM element variables in the STATE section to be jQuery elements

3) Update the renderGame() function to use jQuery

4) Rewrite the onclick methods in the style of jQuery
*/


//***************
//  STATE
//***************
$(function() {
  var chips = 16;
  var playerOneChips = 0;
  var playerTwoChips = 0;
  var currentPlayer = 1;
  var chipsTakenThisTurn = 0;
  var playerOneName = '';
  var playerTwoName = '';

  // A string representing the html for a chip
  var chipHTML = '<div class="chip"></div>';

  // Variables that point to different DOM elements
  var chipContainer = $('#chips');
  var playerOneChipsContainer = $('#player-one-chips');
  var playerTwoChipsContainer = $('#player-two-chips');
  var playerOneTake = $('#player-one-take');
  var playerTwoTake = $('#player-two-take');
  var playerOnePass = $('#player-one-pass');
  var playerTwoPass = $('#player-two-pass');
  var playerOneOptions = $('#player-one-options');
  var playerTwoOptions = $('#player-two-options');
  var playerOneName = $('#player-one-name');
  var playerTwoName = $('#player-two-name');

//*****************
// ACTIONS
//*****************

  function renderGame() {
    // First, draw all the chips into the right containers
    chipContainer.html("");
    playerOneChipsContainer.html("");
    playerTwoChipsContainer.html("");
    for (var i=0; i<chips; i++) {
      chipContainer.append(chipHTML);
    };
    for (var i=0; i<playerOneChips; i++) {
      playerOneChipsContainer.append(chipHTML);
    };
    for (var i=0; i<playerTwoChips; i++) {
      playerTwoChipsContainer.append(chipHTML);
    };
    
    // Show/Hide the appropriate action buttons
    if (currentPlayer === 1) { //// why not toggle?????
      playerOneOptions.css("visibility", "visible"); 
      playerTwoOptions.css("visibility", "hidden");  
    } else {
      playerOneOptions.css("visibility", "hidden"); 
      playerTwoOptions.css("visibility", "visible");  
    }

    // Show the name of each player
    playerOneName.html(playerOne);
    playerTwoName.html(playerTwo);
  };

    function takeChip() {
      if (chipsTakenThisTurn === 3) {
        alert("you can't take any more chips!");
        return;
      }
      chips--;
      chipsTakenThisTurn++;
    
    if (currentPlayer === 1) {
      playerOneChips++;
    } else {
      playerTwoChips++;
    }

    if (chips === 0) {
      alert("Game Over!");
      resetGame();
    }
    renderGame();
  }

  function pass() {
    if (chipsTakenThisTurn === 0) {
      alert('hey, you need to take at least one');
      return;
    }
    currentPlayer = (currentPlayer + 1) % 2;
    chipsTakenThisTurn = 0; 

    renderGame();
  }

  function resetGame() {
    chips = 16;
    chipsTakenThisTurn = 0;
    playerOneChips = 0;
    playerTwoChips = 0;
    currentPlayer = 1;
    playerOne = prompt("Enter player one's name");
    playerTwo = prompt("Enter player two's name");
    renderGame();
    
  }

  //***********************
  //  KICKING IT ALL OFF
  //***********************

  $(playerOneTake).click(function() {   // on("click") ????
    takeChip();
  });

  $(playerTwoTake).click(function() {
    takeChip();
  });

  $(playerOnePass).click(function() {
    pass();
  });

  $(playerTwoPass).click(function() {
    pass();
  });

  resetGame();

});
