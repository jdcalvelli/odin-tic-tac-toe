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

const player1 = playerFactory('X');

player1.playTurn();