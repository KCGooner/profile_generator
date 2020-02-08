const fs = require("fs");
const inquirer = require("inquirer");

function userPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "checkbox",
            name: "color",
            message: "Choose preferred color:",
            choices: ["Red", "Pink", "Green", "Blue"]
        }
    ]);
}

userPrompt();

// const questions = [

// ];


// function writeToFile(fileName, data) {

// }

// function init() {

//     init();
// }
