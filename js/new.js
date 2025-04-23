function flipCoin(x) {

    let guess = x;

    let playerGuess = document.getElementById('guess');
    let flip = document.getElementById('flip');
    let result = document.getElementById('result');

    let rand = Math.floor(Math.random() * 2);



    if (guess === 0) {
        playerGuess.innerText = "Heads";
    } else {
        playerGuess.innerText = "Tails";
    }

    if (rand === 0) {
        flip.innerText = "Heads";
    } else {
        flip.innerText = "Tails";
    }

    if (guess === rand) {
        result.innerText = "win!";
    } else {
        result.innerText = "lose!";
    }

    function resetScore() {
        gamesPlayed = 0;
        gamesWon = 0;
        gamesLost = 0;
        
        let gameCount = document.getElementById('count');
        
        let winCount = document.getElementById('wins');
        
        let lossCount = document.getElementById('losses');
        
        gameCount.innerText = gamesPlayed;
        
        winCount.innerText = gamesWon;
        
        lossCount.innerText = gamesLost;}
}