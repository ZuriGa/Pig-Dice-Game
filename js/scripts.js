// Business Logic
function PigDiceGame() {
    this.players = [
        { name: "Player 1", totalScore: 0, currentScore: 0 },
        { name: "Player 2", totalScore: 0, currentScore: 0 }
    ];
    this.activePlayer = 0;
    this.dice = 0;
}

PigDiceGame.prototype.rollDice = function() {
    this.dice = Math.floor(Math.random() * 6) + 1; 

    if (this.dice === 1) {
        this.players[this.activePlayer].currentScore = 0;
        this.switchPlayer();
    } else {
        this.players[this.activePlayer].currentScore += this.dice;
    }
    return this.dice;
};

PigDiceGame.prototype.hold = function() {
    this.players[this.activePlayer].totalScore += this.players[this.activePlayer].currentScore;

    if (this.players[this.activePlayer].totalScore >= 100) {
        return this.players[this.activePlayer].name;
    }

    this.players[this.activePlayer].currentScore = 0;
    this.switchPlayer();
    return null;
};

PigDiceGame.prototype.switchPlayer = function () {
    this.activePlayer = 1 - this.activePlayer;
};

PigDiceGame.prototype.getCurrentPlayer = function () {
    return this.players[this.activePlayer];
};

PigDiceGame.prototype.getCurrentDice = function () {
    return this.dice;
};

PigDiceGame.prototype.reset = function () {
    this.players = [
        { name: "Player 1", totalScore: 0, currentScore: 0 },
        { name: "Player 2", totalScore: 0, currentScore: 0 }
    ];
    this.activePlayer = 0;
    this.dice = 0;
};

// UI Logic
window.addEventListener("load", function() {
    const game = new PigDiceGame();
    const rollButton = document.getElementById("buttonRoll");
    const holdButton = document.getElementById("buttonHold");
    const newGameButton = document.getElementById("buttonNew");
    const playerNameElement = document.getElementById("player1");
    const totalScoreElement1 = document.getElementById("total-score-1");
    const totalScoreElement2 = document.getElementById("total-score-2");
    const currentScoreElement1 = document.getElementById("current-score-1");
    const currentScoreElement2 = document.getElementById("current-score-2");
    const messageElement = document.getElementById("message");

    function updateUI() {
        const currentPlayer = game.getCurrentPlayer();
        playerNameElement.textContent = currentPlayer.name + "'s Turn";
        if (currentPlayer.name === "Player 1") {
            document.getElementById("player1").textContent = "Players 1's Turn";
            document.getElementById("player2").textContent = "Player 2";
        } else {
            document.getElementById("player1").textContent = "Player 1";
            document.getElementById("player2").textContent = "Players 2's Turn";
        }
        totalScoreElement1.textContent = game.players[0].totalScore;
        totalScoreElement2.textContent = game.players[1].totalScore;
        currentScoreElement1.textContent = game.players[0].currentScore;
        currentScoreElement2.textContent = game.players[1].currentScore;
        messageElement.textContent = "";
    }

    rollButton.addEventListener("click", function () {
        const diceValue = game.rollDice();
        updateUI();

        if (diceValue === 1) {
            messageElement.textContent = "Oops! You rolled 1";
        }

    });

    holdButton.addEventListener("click", function () {
        const winner = game.hold();
        updateUI();

        if (winner) {
            messageElement.textContent = winner + " wins!";
        }

    });

    newGameButton.addEventListener("click", function () {
        game.reset();
        updateUI();
    });

    updateUI();

});
