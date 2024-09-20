# Modak - Challenge

## Scenario

As a Customer, we want to see if the second item from the second results page when searching for "instax mini" on www.aliexpress.com has at least 1 item to be bought.

---

### Commands to run tests

- After cloning the project, you should run **npm i** command in order to install/update the necessary dependencies.

- To run the full flow open Bash (eg. Git Bash) and run the following script: **npm run complete:flow**

- complete:flow script wraps up the following scripts:
    - **delete:results** &rarr; Clears previous execution results
    - **chrome:report** &rarr; Runs the test on chrome browser on headless mode
    - **merge:reports** &rarr; Merges reports into a single JSON report and then converts it to HTML report
    - **show:report** &rarr; Starts chrome browser to view final HTML report

---

### Implemented Packages

- **cypress** &rarr; Cypress testing library
- **mochawesome** &rarr; For reporting purposes
- **mochawesome-merge** &rarr; To merge JSON reports of given specs into a single JSON report
- **mochawesome-report-generator** &rarr; To convert JSON report into a final HTML report
- **npm-run-all** &rarr; To allow to create a script based on multiple sub-scripts and run them sequentially
