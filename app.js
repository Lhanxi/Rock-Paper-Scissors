console.log(game());
function getComputerChoice ()
{
    const computerChoice = ["rock", "paper", "scissors"];
    //get random index value
    const random = Math.floor(Math.random() * computerChoice.length);
    const item = computerChoice[random];
    return item;
}

function getPlayerChoice ()
{
    let playerChoice = prompt("Choose between rock, paper or scissors: ");
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        return "Tie";
    }
    else if (playerSelection === "paper" && computerSelection === "rock")
    {
        return "Won";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors")
    {
        return "Lost";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors")
    {
        return "Won";
    }
    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        return "Lost";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper")
    {
        return "Won";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock")
    {
        return "Lost";
    }
    else
    {
        console.log("Only input rock, paper or scissors!");
    }
}

function game ()
{
    let computerCounter = 0;
    let playerCounter = 0;
    for (let i = 0; i < 5; i++)
    {
        const playerSelection = getPlayerChoice ();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result === "Tie")
        {
            console.log(result + " , the score is " + playerCounter + "to " + computerCounter);
        }
        else if (result === "Won")
        {
            playerCounter++;
            console.log(result + " , the score is " + playerCounter + "to " + computerCounter);
        }
        else 
        {
            computerCounter++;
            console.log(result + " , the score is " + playerCounter + "to " + computerCounter);
        }
    }
    if(playerCounter > computerCounter)
    {
        return "Congratulations, you have beaten the Computer!";
    }
    else
    {
        return "You lost, better luck next time!";
    }
}