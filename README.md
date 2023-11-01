TDD~~~~
Describe: Program where two users can play Pig dice against each other.

Test: “It should create a function for Pig Dice”
Code: function PigDiceGame() 
Output: 

Test: “It should generate a random number 1-6”
Code: Math.trunc(Math.random() * 6) + 1
Output: 1-6

Test: “It should store score for players after each dice roll”
Code: rollDice() score()
Output:

Test: “it should reset score to zero if 1 comes up and switch to the new player”
Code: activePlayer() 
Output:

Test: “It should use hold button to switch to new player”
Code: switchPlayer()
Output:

Test: “It should reset the game if active player scores more than 100”
Code: activePlayer >= 100
Output:
