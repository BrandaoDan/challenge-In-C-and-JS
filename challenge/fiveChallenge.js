function reverseString(s) {
    let inverted = "";
    for (let char of s) {
        inverted = char + inverted;
    }
    return inverted;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite uma string: ", (stringInput) => {
    console.log("String invertida:", reverseString(stringInput));
    readline.close();
});
