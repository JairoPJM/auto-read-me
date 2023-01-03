// TODO: Include packages needed for this application
const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require("inquirer")
const fs=require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What do you want to name your title?"
    },{
        type:"input",
        name:"description",
        message:"Enter what you are wanting in your description section"
    },{
        type:"input",
        name:"installation",
        message:"Enter what you are wanting in your installation section"
    },{
        type:"input",
        name:"usage",
        message:"Enter what you are wanting in your usage section"
    },{
        type:"input",
        name:"credits",
        message:"Enter who worked on the project"
    },{
        type:"list",
        name:"license",
        message:"Which license would you like to use?",
        choices:["MIT License","The Unlicense","Boost Software License 1.0","None"],
        validate:(userLicense)=>{
            // if(userLicense==="MIT License")
        }
    },{
        type:"input",
        name:"questions",
        message:"Enter your github"
    },{
        type:"input",
        name:"email",
        message:"Enter your email"
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
