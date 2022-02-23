const GameBoard = (() => {
    const board = new Array(9);
    const updateBoard = (value, position) => {
        board[position] = value;
    };
    return {
        board,
        updateBoard
    }
})();

const playerFactory = (value) => {
    const playTurn = () => {
        GameBoard.updateBoard(value, prompt('where do you want to play'));
    };
    return {
        value,
        playTurn
    }
}

const StateManager = (() => {
    let currentTurn = 'player1';
    let winningPlayer = null;

    const player1 = playerFactory('X');
    const player2 = playerFactory('O');

    const turnManager = () => {
        while (winningPlayer == null) {
            if (currentTurn == 'player1') {
                player1.playTurn();
                evaluateWin(player1);
                currentTurn = 'player2';
            } else if (currentTurn == 'player2') {
                player2.playTurn();
                evaluateWin(player2);
                currentTurn = 'player1';
            }
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
        turnManager
    }
})();

StateManager.turnManager();