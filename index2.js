#!/usr/bin/env node
var inquirer=require("inquirer");
var chalk=require("chalk");
var cliFormat=require("cli-format");
var gradient=require("gradient-string");
var figlet=require("figlet");

var color1=chalk.bold.white;
var color2=chalk.bold.red;
var color3=chalk.bold.yellow
var header = figlet.textSync("Welcome!", {font:"Ogre", horizontalLayout:"fitted", verticalLayout:"fitted"});


var resume=require("./education.json");
var edInfo=resume.Education;
var expInfo=resume.Experience;
var conInfo=resume.Contact;
var skillsInfo=resume.Skills;
var projectsInfo=resume.Projects;


function options(){
    inquirer.prompt([
        {
            type:"list",
            name:"options",
            message:color1("Where would you like to go?"),
            choices:[color3("Education"), color3("Professional Experience"), color3("Skills"), color3("Projects"), color3("Contact"), color2("Exit")],
            pageSize:12
        }
    ])
    .then(function(answer){
        switch(answer.options){
            case color3("Education"): 
                education();
                backExit();
                break;
            case color3("Professional Experience"): 
                experience();
                backExit();
                break;
            case color3("Skills"): 
                skills();
                backExit();
                break;
            case color3("Projects"):
                projects();
                backExit();
                break;
            case color3("Contact"):
                contact();
                backExit();
                break;
            case color2("Exit"):
            console.log(color1("Thank you for viewing my resume!"))
                return;
        }
    });
};

function backExit(){
    inquirer.prompt([
        {
            type:"list",
            name:"backExit",
            message: color1("Would you like to go back or exit?"),
            choices:[color2("Back to Options"), color2("Exit")]
        }
    ]).then(function(answers){
        switch(answers.backExit){
            case color2("Back to Options"):
                options();
                break;
            case color2("Exit"):
            console.log(color1("Thank you for viewing my resume!"))
            return;
        }
        
    })
}
function education(){
    console.log("\n")
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
           console.log(color2(key + ":" + cliFormat.lines((color1(expInfo[i][key])))));
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
    };
};

function projects(){
    console.log("\n");
    for(i=0; i<projectsInfo.length; i++){
        for (var key in projectsInfo[i]){
            console.log(color2(key + ":" + cliFormat.wrap((color1(projectsInfo[i][key])))));
        };
        console.log("\n")
    };
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
    console.log (gradient.rainbow(header));
    console.log(color1("You are now viewing Brandy Nicholson's Resume"));
    options();
};

main();