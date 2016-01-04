$('document').ready(function(){
	var board = [["","",""],["","",""],["","",""]];
	var currPlayer = "X";
	var testArr = [];
	var gameOver = false;
	var turnCount = 0;

	var render = function(){
		for (i=0; i<3; i++) {
			for (j=0; j<3; j++){
				var x = i.toString();
				var y = j.toString();
				var z = board[i][j];
				$('.container').append('<div class="cell" id="r'+x+'c'+y+'"></div>');
			};
		};
	};

	var init = function(){
		board = [["","",""],["","",""],["","",""]];
		currPlayer = "X";
		testArr = [];
		gameOver = false;
		turnCount = 0;
		$('.container div').remove();
		$('.container button').remove();
		render();
	};

	var checkForWin = function(){
		for (b=0; b<3; b++) {
			checkArr(board[b]);
		};
		for (b=0; b<3; b++) {
			for (c=0; c<3; c++) {
				testArr[c] = board[c][b];		
			};	
			checkArr(testArr);	
		};
		testArr = [board[0][0],board[1][1],board[2][2]];
		checkArr(testArr);				
		testArr = [board[2][0],board[1][1],board[0][2]];
		checkArr(testArr);
		if (gameOver){
			alert(result);
			$('.container').append('<div class="wrapper"><button class="playAgain">Play again</button></div>');
			$('.playAgain').click(function(){
				init();
				game();
			});		
		};		
	};

	var checkArr = function(arg){
		for (a=0; a<3; a++) {
			if(arg[a] != arg[0] || arg[a] === ""){
				if(turnCount < 9){
					return
				} else {
					result = "It's a draw";
				};
			} else {
				result = "The winner is " + currPlayer;	
			};
		};
		gameOver = true;
	};

	var game = function(){
		for (i=0; i<3; i++) {
			for (j=0; j<3; j++){
				var x = i.toString();
				var y = j.toString();
				cellRef = 'r'+x+'c'+y;
				(function(k,l,m){
					$('#'+ m).click(function(){
						turnCount += 1;
						if (board[k][l] === "" && !gameOver) {
							board[k][l] = currPlayer;
							$('#' + m).append('<p>'+currPlayer+'</p>');
							checkForWin();
							if(currPlayer === "X") {
								currPlayer = "O";
							} else {
								currPlayer = "X";
							};
						};
					});
				})(i,j,cellRef);
			};
		};
	};

	init();
	game();

});
