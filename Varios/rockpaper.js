var getComputerChoice = () => {
    // Define array will all possible values for the system to pick one
    var choice = ["Rock", "Paper", "Scissors"];
    //Return random item from the array
    return choice[Math.floor(Math.random() * choice.length)]
}

console.log(getComputerChoice());

function playGame (playerSelection, cpuSelection) {
    var playerInput = playerSelection;
    var cpuInput = cpuSelection;

    
}