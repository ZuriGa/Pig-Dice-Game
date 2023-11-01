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
}