const diceele = document.getElementById("dice");
function roll() {
    const min = 1;
    const max = 7;

    const ramNumber = Math.floor(Math.random() * (max - min)) + min;
    switch (ramNumber) {
        case 1: diceele.src = "dice1.png";
            console.log(ramNumber);
            break;
        case 2: diceele.src = "dice2.png";
            console.log(ramNumber);

            break;
        case 3: diceele.src = "dice3.png";
            console.log(ramNumber);

            break;
        case 4: diceele.src = "dice4.png";
            console.log(ramNumber);

            break;
        case 5: diceele.src = "dice5.png";
            console.log(ramNumber);

            break;
        case 6: diceele.src = "dice6.png";

    }
}