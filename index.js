const fs = require("fs");
const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "color",
            message: "Where is your favorite color?"
        }
    ]);
}

// const questions = [

// ];


function writeToFile(fileName, data) {

}

function init() {

    init();
// }
