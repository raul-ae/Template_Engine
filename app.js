const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

var team = [];
function wrapper() {
  console.log("Let's build your team");
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Enter Manager's name",
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter Manager's ID",
      },
      {
        type: "input",
        name: "mamangerEmail",
        message: "Enter Manager's email",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter Manager's office number",
      },
    ])
    .then(function (answer) {
      const manager = new Manager(
        answer.managerName,
        answer.managerId,
        answer.mamangerEmail,
        answer.managerOfficeNumber
      );
      team.push(manager);
      console.log(team);
      createTeam();
    });
  function createTeam() {
    console.log("Let's include team members now");
    inquirer
      .prompt([
        {
          type: "list",
          name: "Choice",
          choices: ["Engineer", "Intern", "to exit, select this option"],
        },
      ])
      .then(function (selection) {
        switch (selection.Choice) {
          case "Engineer":
            console.log("Engineer selected");
            addEngineer();
            break;
          case "Intern":
            console.log("Intern selected");
            addIntern();
            break;
          default:
            console.log("bye");
          writeHTML();
        }
      });
  }
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Enter Engineer's name",
        },
        {
          type: "input",
          name: "engineerId",
          message: "Enter Engineer's ID",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Enter Engineer's email",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Enter Engineer's GitHub username",
        },
      ])
      .then(function (answer) {
        const engineer = new Engineer(
          answer.engineerName,
          answer.engineerId,
          answer.engineerEmail,
          answer.engineerGithub
        );
        team.push(engineer);
        console.log(team);
        createTeam();
      });
  }
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Enter Intern's name",
        },
        {
          type: "input",
          name: "internId",
          message: "Enter Intern's ID",
        },
        {
          type: "input",
          name: "internEmail",
          message: "Enter Intern's email",
        },
        {
          type: "input",
          name: "internSchool",
          message: "Enter Intern's Schoool",
        },
      ])
      .then(function (answer) {
        const intern = new Intern(
          answer.internName,
          answer.internId,
          answer.internEmail,
          answer.internSchool
        );
        team.push(intern);
        console.log(team);
        createTeam();
      });
  }
}
wrapper();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
function writeHTML(){
    fs.writeFile("./output/team.html", render(team),function (err) {
        if (err) {
          throw err;
        }

        console.log(`HTML file genrated succesfully!`);
      });
}
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
