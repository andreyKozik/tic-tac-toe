class TicTacToe {
    constructor() {
        this.current = "x";
        this.tictactoeArray = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
        this.winner = null;
        this.field = false;
    }

    getCurrentPlayerSymbol() {
        return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.tictactoeArray[rowIndex][columnIndex] === null) {
            this.tictactoeArray[rowIndex][columnIndex] = this.current;
            this.current = this.current === "x" ? "o" : "x";
        }
        if (this.tictactoeArray[0][0] !== null & this.tictactoeArray[0][1] !== null & this.tictactoeArray[0][2] !== null &
            this.tictactoeArray[1][0] !== null & this.tictactoeArray[1][1] !== null & this.tictactoeArray[1][2] !== null &
            this.tictactoeArray[2][0] !== null & this.tictactoeArray[2][1] !== null & this.tictactoeArray[2][2] !== null) {
            this.field = true;
        } else {
            this.field = false;
        }
    }

    isFinished() {
        if (this.tictactoeArray[0][0] === "x" & this.tictactoeArray[0][1] === "x" & this.tictactoeArray[0][2] === "x" ||
            this.tictactoeArray[1][0] === "x" & this.tictactoeArray[1][1] === "x" & this.tictactoeArray[1][2] === "x" ||
            this.tictactoeArray[2][0] === "x" & this.tictactoeArray[2][1] === "x" & this.tictactoeArray[2][2] === "x" ||
            this.tictactoeArray[0][0] === "x" & this.tictactoeArray[1][0] === "x" & this.tictactoeArray[2][0] === "x" ||
            this.tictactoeArray[0][1] === "x" & this.tictactoeArray[1][1] === "x" & this.tictactoeArray[2][1] === "x" ||
            this.tictactoeArray[0][2] === "x" & this.tictactoeArray[1][2] === "x" & this.tictactoeArray[2][2] === "x" ||
            this.tictactoeArray[0][0] === "x" & this.tictactoeArray[1][1] === "x" & this.tictactoeArray[2][2] === "x" ||
            this.tictactoeArray[0][2] === "x" & this.tictactoeArray[1][1] === "x" & this.tictactoeArray[2][0] === "x") {
            return true;
        } else if (this.tictactoeArray[0][0] === "o" & this.tictactoeArray[0][1] === "o" & this.tictactoeArray[0][2] === "o" ||
            this.tictactoeArray[1][0] === "o" & this.tictactoeArray[1][1] === "o" & this.tictactoeArray[1][2] === "o" ||
            this.tictactoeArray[2][0] === "o" & this.tictactoeArray[2][1] === "o" & this.tictactoeArray[2][2] === "o" ||
            this.tictactoeArray[0][0] === "o" & this.tictactoeArray[1][0] === "o" & this.tictactoeArray[2][0] === "o" ||
            this.tictactoeArray[0][1] === "o" & this.tictactoeArray[1][1] === "o" & this.tictactoeArray[2][1] === "o" ||
            this.tictactoeArray[0][2] === "o" & this.tictactoeArray[1][2] === "o" & this.tictactoeArray[2][2] === "o" ||
            this.tictactoeArray[0][0] === "o" & this.tictactoeArray[1][1] === "o" & this.tictactoeArray[2][2] === "o" ||
            this.tictactoeArray[0][2] === "o" & this.tictactoeArray[1][1] === "o" & this.tictactoeArray[2][0] === "o") {
            return true;
        } else if (this.tictactoeArray[0][0] !== null & this.tictactoeArray[0][1] !== null & this.tictactoeArray[0][2] !== null &
            this.tictactoeArray[1][0] !== null & this.tictactoeArray[1][1] !== null & this.tictactoeArray[1][2] !== null &
            this.tictactoeArray[2][0] !== null & this.tictactoeArray[2][1] !== null & this.tictactoeArray[2][2] !== null) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        if (this.tictactoeArray[0][0] === "x" & this.tictactoeArray[0][1] === "x" & this.tictactoeArray[0][2] === "x" ||
            this.tictactoeArray[1][0] === "x" & this.tictactoeArray[1][1] === "x" & this.tictactoeArray[1][2] === "x" ||
            this.tictactoeArray[2][0] === "x" & this.tictactoeArray[2][1] === "x" & this.tictactoeArray[2][2] === "x" ||
            this.tictactoeArray[0][0] === "x" & this.tictactoeArray[1][0] === "x" & this.tictactoeArray[2][0] === "x" ||
            this.tictactoeArray[0][1] === "x" & this.tictactoeArray[1][1] === "x" & this.tictactoeArray[2][1] === "x" ||
            this.tictactoeArray[0][2] === "x" & this.tictactoeArray[1][2] === "x" & this.tictactoeArray[2][2] === "x" ||
            this.tictactoeArray[0][0] === "x" & this.tictactoeArray[1][1] === "x" & this.tictactoeArray[2][2] === "x" ||
            this.tictactoeArray[0][2] === "x" & this.tictactoeArray[1][1] === "x" & this.tictactoeArray[2][0] === "x") {
            this.winner = "x";
            return "x";
        } else if (this.tictactoeArray[0][0] === "o" & this.tictactoeArray[0][1] === "o" & this.tictactoeArray[0][2] === "o" ||
            this.tictactoeArray[1][0] === "o" & this.tictactoeArray[1][1] === "o" & this.tictactoeArray[1][2] === "o" ||
            this.tictactoeArray[2][0] === "o" & this.tictactoeArray[2][1] === "o" & this.tictactoeArray[2][2] === "o" ||
            this.tictactoeArray[0][0] === "o" & this.tictactoeArray[1][0] === "o" & this.tictactoeArray[2][0] === "o" ||
            this.tictactoeArray[0][1] === "o" & this.tictactoeArray[1][1] === "o" & this.tictactoeArray[2][1] === "o" ||
            this.tictactoeArray[0][2] === "o" & this.tictactoeArray[1][2] === "o" & this.tictactoeArray[2][2] === "o" ||
            this.tictactoeArray[0][0] === "o" & this.tictactoeArray[1][1] === "o" & this.tictactoeArray[2][2] === "o" ||
            this.tictactoeArray[0][2] === "o" & this.tictactoeArray[1][1] === "o" & this.tictactoeArray[2][0] === "o") {
            this.winner = "o";
            return "o";
        } else {
            this.winner = null;
            return this.winner;
        }
    }
    noMoreTurns() {
        if (this.tictactoeArray[0][0] !== null & this.tictactoeArray[0][1] !== null & this.tictactoeArray[0][2] !== null &
            this.tictactoeArray[1][0] !== null & this.tictactoeArray[1][1] !== null & this.tictactoeArray[1][2] !== null &
            this.tictactoeArray[2][0] !== null & this.tictactoeArray[2][1] !== null & this.tictactoeArray[2][2] !== null) {
            this.field = true;
            return this.field;
        } else {
            return this.field;
        }
    }

    isDraw() {
        console.log(this.tictactoeArray)
        console.log(this.field);
        console.log(this.winner);
        if (this.winner !== null || this.field === false || (this.tictactoeArray[1][0] === "x" & this.tictactoeArray[1][1] === "x" & this.tictactoeArray[1][2] === "x")) {
            return false;
        } else {
            return true;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        return this.tictactoeArray[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
