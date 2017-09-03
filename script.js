//Let input - prompt to ask user ans store value
//let number - converting string to Int (in JS it is already decimal)
//checks if statement is true - (entered a number smaller than 100 or 100)
//If didn't enter number smaller state so and press enter to close program
//calculates times tables
//outputs back to user


alert("This program will display division tables of inputed number that is less than 100")


let input = prompt("Please enter a number less than 100", "")

if (input < 100) {
    for (let i = 0; i < 12; i++) {

        var numbers = parseInt(input);

        let a = i + 1;
        console.log(numbers + "/" + a + "=" + (numbers / a));
    }
} else {
    alert("You didn't enter a number less than 100 press enter to exit")

}