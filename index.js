// TODO: Include packages needed for this application
const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require("inquirer")
const fs=require("fs")
// TODO: Create an array of questions for user input
// console.log('\x1b[32m', 'This is a green message!'); 
// const input = process.argv[2];
// if (input === 'start') {
// init();
// }

const questions = [
    {
        type:"input",
        name:"title",
        message:"What do you want the title to be for your readme? \x1b[34mEx-Auto-Read-ME"
    },{
        type:"input",
        name:"descriptionMot",
        message:"What was your motivation for this project?"
    },{
        type:"input",
        name:"descriptionBuild",
        message:"why did you build this project?"
    },{
        type:"input",
        name:"descriptionProblem",
        message:"What problems does this application solve?"
    },{
        type:"input",
        name:"descriptionLearn",
        message:"What are some things you learned while working on the project"
    },{
        type:"input",
        name:"installation",
        message:"What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running"
    },{
        type:"input",
        name:"usage",
        message:"Enter what you are wanting in your usage section"
    },{
        type:"input",
        name:"credits",
        message:"Enter who worked on the project \x1b[34mEx-John Doe"
    },{
        type:"list",
        name:"license",
        message:"Which license would you like to use?",
        choices:["MIT License","The Unlicense","Boost Software License 1.0","None"],
        
        
    },{
        type:"input",
        name:"questions",
        message:"Enter your github \x1b[34mEx-JairoPJM"
    },{
        type:"input",
        name:"email",
        message:"Enter your email \x1b[34mEx-Jairomacassi@gmail.com"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((answers)=>{
            console.log(answers.title)
            const markdown=generateMarkdown(answers)
            console.log(markdown)
            writeToFile("test.md",markdown)
        })
}

// Function call to initialize app

init();
