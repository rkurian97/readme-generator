// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license=='Apache 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if( license== 'The MIT license'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if(license== 'Creative Commons'){
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  }else{
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license=='Apache 2.0'){
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  else if( license== 'The MIT license'){
    return 'https://opensource.org/licenses/MIT'
  }else if(license== 'Creative Commons'){
    return 'http://creativecommons.org/publicdomain/zero/1.0/'
  }else{
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license=='Apache 2.0'){
    return   `  
      Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
      Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  }
  else if( license== 'The MIT license'){
    return `
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the
    Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
    and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    `
  }else if(license== 'Creative Commons'){
    return `
      The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, 
    including all related and neighboring rights, to the extent allowed by law.You can copy, modify, distribute and perform the work, 
    even for commercial purposes, all without asking permission.`
  }else{
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let url= renderLicenseLink(data.license);
  let section= renderLicenseSection(data.license);
  data.license= renderLicenseBadge(data.license);
return `
# ${data.title}
${data.license}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## License
${section}
${url}

## Tests
${data.tests}

## Questions
Here is a link to my github: github.com/${data.userName}
Email me here if you have any questions: ${data.email}`;
}

module.exports = generateMarkdown;
