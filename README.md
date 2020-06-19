# Unit 10 OOP Homework: Template Engine - Employee Summary
The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns.

## Prompt for the user info
the prompt will be nested in order to cycle for an undefined number of cycles
```JS
inquirer
    .prompt([
      //questions yo Get Manager Info
    ])
    .then(function (answer) {
    //   saving manager info in Manager Class
      // calling a function to ask what employee to add next:
      createTeam();
    });

```
createTeam() will run a second inquirer wich will ask the user wether he wants to dd an Engineer, an Intern or exit

when Engineer or Intern is selected a similar Prompt is called to ask for the information.

everytime a new employee is added it gets pushed in to the team array.

## write HTML
Once the user select the exit option in the createTeam() function.

the writeFile method is called form the "fs npm package" wich creates the file in the output folder, the content of the file is created by the rnder fnction which takes all the data in th team array and replace it from the templates 