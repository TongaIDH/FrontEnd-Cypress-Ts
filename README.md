# Modak - Challenge

## Scenario: As a Customer, we want to see if the second item from the second results page when searching for "instax mini" on www.aliexpress.com has at least 1 item to be bought.

### Commands to run tests

- After cloning the project, you should run **npm i** command in order to install/update the necessary dependencies.

- To run the full flow open Bash (eg. Git Bash) and run the following script: **npm run complete:flow**

- complete:flow script wraps up the following scripts:
    - **delete:results** --> Clear previous execution results
    - **chrome:report** --> Runs the test on chrome browser on headless mode
    - **merge:reports** --> Merge reports into a single JSON report and then convert it to HTML report
    - **show:report** --> Starts chrome browser to view final HTML report

### Implemented Packages

- **Cypress** --> Cypress testing library
- **Mochawesome** --> For reporting purposes
- **Mochawesome-merge** --> To merge JSON reports of given specs into a single JSON report
- **Mochawesome-report-generator** --> To convert JSON report into a final HTML report
- **npm-run-all** --> To allow to create a script based on multiple sub-scripts and run them sequentially