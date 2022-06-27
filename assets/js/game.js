// to store user input using variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Declare enemy-robot names
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// this creates a function named "fight"
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive and the player is alive
    while(playerHealth > 0 && enemyHealth > 0) {
    //Alert players that they are stating the round
    //window.alert("Welcome to Robot Gladiators!");

// ask player if they would like to fight or not
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player picks "skip" confirm and then stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
//confirm player wants to skip
var confirmSkip = window.confirm("Are you sure you'd like to quit?");

//if yes (true), leave fight
if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    //subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    // lose money and fight new enemy
    break;
    }
}

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + ' attacked ' + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health 
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");

        //award player money for wining
        playerMoney = playerMoney + 20;
        // leave while() loop since enemey is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //remove player's health by Subtracting the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    //check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
        //leave while()loop since player is dead
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    }// end of while loop
}; // end of fight function
    
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!")
};
    
// Using for loops in array to fight all enemy 
    for(var i = 0; i < enemyNames.length; i++){
        //Move to a new robot from the array
        var pickedEnemyName = enemyNames[i];
        // Reset the health variable
        enemyHealth = 50;
        //call fight function with enemy-robot
        fight (pickedEnemyName);
     }