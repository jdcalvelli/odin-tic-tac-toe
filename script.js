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
                currentTurn = 'player2';
            } else if (currentTurn == 'player2') {
                player2.playTurn();
                currentTurn = 'player1';
            }
        }
    }

    return {
        turnManager
    }
})();

StateManager.turnManager();