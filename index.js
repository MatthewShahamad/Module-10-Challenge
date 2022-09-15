
const inquirer = require("inquirer");

const firstQuestions = [
[
    {
      type: 'input',
      name: 'qualifier',
      message: 'Type in one of the following roles, "Manager", "Engineer", "Inter",
    }
  ]];


const managerQuestions = [
[
    {
      type: 'input',
      name: 'title',
      message: 'What is your employee ID?',
    },
    {
      type: 'input',
      name: 'github',
      message: "What is your team manage's name?",
    },
    {
      type: 'input',
      name: 'eamil',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'office',
      message: 'What is your office number?',
    },
  ]];

const engineerQuestions = [
[
    {
      type: 'input',
      name: 'title',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'github',
      message: "Employee ID",
    },
    {
      type: 'input',
      name: 'eamil',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'office',
      message: 'Github username?',
    },
  ]];

const internQuestions = [
[
    {
      type: 'input',
      name: 'title',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'github',
      message: "What is your ID?",
    },
    {
      type: 'input',
      name: 'eamil',
      message: 'What is your email',
    },
    {
      type: 'input',
      name: 'office',
      message: 'What school are you attending?',
    },
  ]];


  askToEnter() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Enter the following"
        }
      ]
  }

