//IIFE Module for Gameboard
const GameBoard = (() => {
    const board = new Array(9);

    //Grabbing DOM Items
    const boardCells = document.querySelectorAll('.boardCell');

    //Used to update the DOM grid with what's contained in the board array
    const renderBoard = () => {
        boardCells.forEach((cell, index) => {
            cell.textContent = board[index];
        });
    }

    //update what's contained in the board array + call renderboard to update DOM
    const updateBoard = (value, position) => {
        board[position] = value;
        renderBoard();
    };

    //bind Event listeners to each DOM board cell - on click, call the turnManger fcn from StateManager
    const bindCellEvents = () => {
        boardCells.forEach((cell, index) => {
            cell.addEventListener('click', () => {

                if (board[index] != null) {
                    alert('space taken, choose another')
                } else {
                    StateManager.turnManager(index);
                }

            })
        });
    }

    return {
        board,
        updateBoard,
        bindCellEvents,
    }
})();

//simple Factory Function for players - only thing relevant to them is their value (could potentially have written a play function)
const playerFactory = (value) => {
    return {
        value
    }
}

//IIFE Module for State Manager - ie things regarding game logic, not the board or its display
const StateManager = (() => {
    //used in turn manager
    let currentTurn = 'player1';
    let winningPlayer = null;

    //utilizing factories for players to make an x player and an o player
    const player1 = playerFactory('X');
    const player2 = playerFactory('O');

    //turnManager fcn, crux of gameplay logic - check if game is going, whos turn it is, and then updates board at position passed in in event listener above
    const turnManager = (position) => {
        if (currentTurn == 'player1' && winningPlayer == null) {   
            GameBoard.updateBoard(player1.value, position);
            evaluateWin(player1);
            currentTurn = 'player2';
        } else if (currentTurn == 'player2' && winningPlayer == null) {
            GameBoard.updateBoard(player2.value, position);
            evaluateWin(player2);
            currentTurn = 'player1';
        }
    };

    //evaluatewin - used to check whether to end the game or not - ie the rules of tic tac toe!
    const evaluateWin = (player) => {
        if (player.value == GameBoard.board[0] && player.value == GameBoard.board[1] && player.value == GameBoard.board[2]) {
            winningPlayer = player.value;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[3] && player.value == GameBoard.board[4] && player.value == GameBoard.board[5]) {
            winningPlayer = player.value;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[6] && player.value == GameBoard.board[7] && player.value == GameBoard.board[8]) {
            winningPlayer = player.value;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[0] && player.value == GameBoard.board[3] && player.value == GameBoard.board[6]) {
            winningPlayer = player.value;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[1] && player.value == GameBoard.board[4] && player.value == GameBoard.board[7]) {
            winningPlayer = player.value;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[2] && player.value == GameBoard.board[5] && player.value == GameBoard.board[8]) {
            winningPlayer = player.value;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[0] && player.value == GameBoard.board[4] && player.value == GameBoard.board[8]) {
            winningPlayer = player.value;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[2] && player.value == GameBoard.board[4] && player.value == GameBoard.board[6]) {
            winningPlayer = player.value;
            alert(`congrats ${winningPlayer}, you win`);
        }
    };

    return {
        player1,
        player2,
        turnManager
    }
})();

//the only global space thing we had to do is actually call the bindCellEvents function!
GameBoard.bindCellEvents();