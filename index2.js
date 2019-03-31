var inquirer=require("inquirer");
var chalk=require("chalk");
var cliFormat=require("cli-format");
var terminalLink = require("terminal-link");
var config={
    width:120
}

var color1=chalk.bold.cyan;
var color2=chalk.bold.white


var resume=require("./education.json");
var edInfo=resume.Education;
var expInfo=resume.Experience;
var conInfo=resume.Contact;
var skillsInfo=resume.Skills;
var projectsInfo=resume.Projects;
var projectLink=terminalLink("Click Here",resume.Projects.Link);


function options(){
    inquirer.prompt([
        {
            type:"list",
            name:"options",
            message:"Please choose an option",
            choices:["Education", "Professional Experience", "Skills", "Projects", "Contact", "Exit"],
            pagesize:12
        }
    ])
    .then(function(answer){
        switch(answer.options){
            case "Education": 
                education();
                backExit();
                break;
            case "Professional Experience": 
                experience();
                backExit();
                break;
            case "Skills": 
                skills();
                backExit();
                break;
            case "Projects":
                projects();
                backExit();
                break;
            case "Contact":
                contact();
                backExit();
                break;
            case "Exit":
                return;
        }
    });
};

function backExit(){
    inquirer.prompt([
        {
            type:"list",
            name:"backExit",
            message: "Would you like to go back or exit?",
            choices:["Back to Options", "Exit"]
        }
    ]).then(function(answers){
        switch(answers.backExit){
            case "Back to Options":
                options();
                break;
            case "Exit":
            return;
        }
        
    })
}
function education(){
    console.log("\n")
    // console.log("--------------------------------------------------------------------------")
    for(i=0; i<edInfo.length; i++){
       for (var key in edInfo[i]){
           console.log(color2(key + ":" + cliFormat.wrap((color1(edInfo[i][key])))));
        };
        console.log("\n");
   };
  };
function experience(){
    console.log("\n");
    for(i=0; i<expInfo.length; i++){
       for (var key in expInfo[i]){
           console.log(color2(key + ":" + cliFormat.wrap((color1(expInfo[i][key])))));
       };
       console.log("\n");
   };
};
function skills (){
    console.log("\n");
    for(i=0; i<skillsInfo.length; i++){
        for (var key in skillsInfo[i]){
            console.log(color2(key + ":" + cliFormat.wrap((color1(skillsInfo[i][key] )))));
        }
        console.log("\n");
    }
};

function projects(){
    console.log("\n");
    for(i=0; i<projectsInfo.length; i++){
        for (var key in projectsInfo[i]){
            console.log(color2(key + ":" + cliFormat.wrap((color1(projectsInfo[i][key])))));
        }
        console.log("\n")
    }
};

   function contact(){
       console.log("\n");
       for(i=0; i<conInfo.length; i++){
           for (var key in conInfo[i]){
               console.log(color2(key + ":" + cliFormat.wrap((color1(conInfo[i][key])))));
           };
           console.log("\n");
       };
   };



function main() {
    console.log("Welcome to Brandy Nicholson's Resume.  Feel free to have a look around!");
    options();
};

main();