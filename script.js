//IIFE Module for Gameboard
const GameBoard = (() => {
    const board = new Array(9).fill(null);

    //button for restarting game
    const makeRestartButton = () => {
        let restartButton = document.createElement('button');
        restartButton.textContent = 'restart';
        restartButton.addEventListener('click', () => {
            location.reload()
        });
        document.querySelector('body').appendChild(restartButton);
    }
    makeRestartButton(); //i wish we could put an iife inside an iife?

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

//simple Factory Function for players
const playerFactory = (name, value) => {

    const renderName = () => {
        let nameDisplay = document.createElement('p');
        nameDisplay.textContent = `${value}: ${name}`;
        document.querySelector('body').appendChild(nameDisplay);
    }

    return {
        name,
        value,
        renderName
    }
}

//IIFE Module for State Manager - ie things regarding game logic, not the board or its display
const StateManager = (() => {
    //used in turn manager
    let currentTurn = 'player1';
    let winningPlayer = null;

    //utilizing factories for players to make an x player and an o player
    const player1 = playerFactory(prompt('what is player 1 name'), 'X');
    const player2 = playerFactory(prompt('what is player 2 name'), 'O');

    //run the display name functions
    player1.renderName();
    player2.renderName();

    //took bindCellEvents function out of global scope!
    GameBoard.bindCellEvents();

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
        //this checks for win
        if (player.value == GameBoard.board[0] && player.value == GameBoard.board[1] && player.value == GameBoard.board[2]) {
            winningPlayer = player.name;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[3] && player.value == GameBoard.board[4] && player.value == GameBoard.board[5]) {
            winningPlayer = player.name;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[6] && player.value == GameBoard.board[7] && player.value == GameBoard.board[8]) {
            winningPlayer = player.name;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[0] && player.value == GameBoard.board[3] && player.value == GameBoard.board[6]) {
            winningPlayer = player.name;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[1] && player.value == GameBoard.board[4] && player.value == GameBoard.board[7]) {
            winningPlayer = player.name;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[2] && player.value == GameBoard.board[5] && player.value == GameBoard.board[8]) {
            winningPlayer = player.name;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[0] && player.value == GameBoard.board[4] && player.value == GameBoard.board[8]) {
            winningPlayer = player.name;
            alert(`congrats ${winningPlayer}, you win`);
        }
        else if (player.value == GameBoard.board[2] && player.value == GameBoard.board[4] && player.value == GameBoard.board[6]) {
            winningPlayer = player.name;
            alert(`congrats ${winningPlayer}, you win`);
        }
        //checking for tie
        else if (GameBoard.board.every(item => item !== null)) {
            winningPlayer = 'tie';
            alert('you tied. try again.');
        }
    };

    return {
        player1,
        player2,
        turnManager
    }
})();