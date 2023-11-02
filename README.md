# Pig Dice Game project.
#### By: **Zuri Gallegos**
_*Week 4 Epicodus*_

## Project Description: 
This web program is a game where two users can play Pig dice against each other.

## TDD
### Describe: Program where two users can play Pig dice against each other.

Test: “It should create a function for Pig Dice”\
Code: function PigDiceGame()\
Output: 

Test: “It should generate a random number 1-6”\
Code: Math.floor(Math.random() * 6) + 1\
Output: 1-6

Test: “it should reset score to zero if 1 comes up and switch to the new player”\
Code: activePlayer() switchPlayer()\
Output:

Test: “It should determine the "winner" if active player scores 100 or more”\
Code: totalScore >= 100\
Output: "Player 1 wins"

Test: “It should store score for players after each dice roll”\
Code: rollDice() currentScore()\
Output:

Test: “It should use hold button to switch to new player”\
Code: switchPlayer()\
Output:

## Setup/Installation:
* _You can clone this repository, you can do this by going to this link https://github.com/ZuriGa/Pig-Dice-Game.git_
* _follow the link above and click on the <> Code button then click on the copy button. Wherever you are storing your projects on your computer, use this git command: git clone url-of-remote-repo. A new folder should be created on your computer and you can navigate it now._
* _You can also fork this repository by clicking the "Fork" button in the remote repository._ 
![My_Image](img/fork.jpng.png)\
Click "create new fork" and then select your account as the "Owner", after this you have your own copy of this repository to your GitHub Account.

## Technology used:
* _JavaScript_
* _HTML_
* _CSS_

## Known Bugs:
* _No known Bugs_

## License 

MIT License

Copyright (c) 2023 Zuri Gallegos
