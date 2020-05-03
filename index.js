let fs = require('fs');

var  fileData;

gatherInput();

async function gatherInput(req, res) {
    const { prompt } = require('inquirer');
    const response = await prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What\'s the project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type a brief project description.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install it?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use it?',
    }, 
    {
        type: 'input',
        name: 'license',
        message: 'Are there any licenses?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test it?',
    }, {
        type: 'input',
        name: 'questions',
        message: 'Any questions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What\'s your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What\'s your email address?',
    }
    ]);

    if (response == '') {
        const error = "you must submit a response"
        console.log(error);
    }

    let name = response.name;
    let description = response.description;
    let install = response.install;
    let usage = response.useage;
    let license = response.license;
    let contributors = response.contributors;
    let test = response.test;
    let questions = response.questions;
    let githubName = response.github;
    let email = response.email;
    let bioImg = 'https://github.com/' + githubName + '.png?size=150'
    let followGithub = 'https://img.shields.io/github/followers/' + githubName + '?label=Followers&style=social'; 
    let javascript = 'https://img.shields.io/badge/javascript-40%25-orange';
    let html = 'https://img.shields.io/badge/html-90%25-green';
    let css = 'https://img.shields.io/badge/css-80%25-green';
    let nodeJS = 'https://img.shields.io/badge/node.js-30%25-red';
    
 

    fileData = `
<p align = "center">
## ${name}
![${githubName}](${bioImg})<br />
!(${followGithub}) !(${html})  !(${css}) !(${javascript}) !(${nodeJS})<br />
##### ${email}
</p>
---
### Description
###### ${description}
---
### How to Install 
###### ${install}

### How to Use
###### ${usage}
---
### Licenses
###### ${license}
---
### Contributors
###### ${contributors}
---
### Tests
###### ${test}
---
### FAQ / Additional Readings
###### ${questions}
---
### App Functionality
![](app.gif)
---
### Special Thanks
![](gaTechCodeBootcamp.jpg)

                `


writeToFile();

}

function writeToFile() {
    fs.writeFile('README.md', fileData, (err) => {
        if (err) throw err;
    });
}