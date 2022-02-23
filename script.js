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