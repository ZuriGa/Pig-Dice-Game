function PigDiceGame() {
    this.players = [
    { name: "Player 1", totalScore: 0, currentScore: 0},
    { name: "Player 2", totalScore: 0, currentScore: 0}
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

    if (this.players[this.activePlayer].totalScore >= 100){
        return "winner";
    }

    this.players[this.activePlayer].currentScore = 0;
    this.switchPlayer();
    return this.activePlayer;

}