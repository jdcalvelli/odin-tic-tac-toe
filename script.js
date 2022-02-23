const GameBoard = (() => {
    const board = new Array(9);

    const boardCells = document.querySelectorAll('.boardCell');

    const renderBoard = () => {
        boardCells.forEach((cell, index) => {
            cell.textContent = board[index];
        });
    }

    const updateBoard = (value, position) => {
        board[position] = value;
        renderBoard();
    };

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

const playerFactory = (value) => {
    return {
        value
    }
}

const StateManager = (() => {
    let currentTurn = 'player1';
    let winningPlayer = null;

    const player1 = playerFactory('X');
    const player2 = playerFactory('O');

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

GameBoard.bindCellEvents();

// StateManager.turnManager();