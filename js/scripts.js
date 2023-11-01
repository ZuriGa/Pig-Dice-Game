function PigDiceGame() {
    this.players = [
    { name: "Player 1", totalScore: 0, currentScore: 0},
    { name: "Player 2", totalScore: 0, currentScore: 0}
    ];
    this.activePlayer = 0;
    this.dice = 0;
}