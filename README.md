 
# IPL DATA-PROJECT I

In this project raw data is given for the IPL seasons from 2008 to 2017.You have to gather relevant data for each questions using javascript and plot the appropriate chart for each of the
questions.
### Prerequisites

1.You should have ****git**** configured in your system to clone the repository from the gitlab. 


2 You should have ****visual studio code**** and ****node.js**** configured in your system. 
## Getting Started
Clone the repository in your local system:
```
git clone https://gitlab.com/dhruvil1819/ipl-datasetproject.git
npm install
```
## Questions
1.  Plot the number of matches played per year of all the years in IPL.

2.  Plot a stacked bar chart of matches won of all teams over all the years of IPL.

3.  For the year 2016 plot the extra runs conceded per team.

4.  For the year 2015 plot the top economical bowlers.  

## Instructions
* All the csv files required for the project is in the data directory.You can open both files in excel to analyze the data.
* Write the appropriate code for all four functions in ipl.js.
* All functions should return an object which consists the solution for appropriate question.
* You can analyze the sampledata.json in the test directory to get the structure of the output objects for each question.
* Run the tests.
* Create the jsonfile by running the command in the command prompt mentioned below. 
* Read about the structure of stacked bar chart and column chart with drilldown from (highcharts.com/demo )
* Write appropriate code for each function in the app.js which is inside public folder to create the visualization.
* Write formatdataForColumnChart and formatdataForBarChart to convert the jsondata into the appropriate highchart format.
* Create the local server by running the command in the command prompt mentioned below.
* Go to url mentioned below  and see the visualization.


# Running the tests
```
npm test 
```
# Creating the jsonfile
```
npm start
```
# Starting the server
```
npm run serve
```
## Restrictions

* for loop for array is not allowed.
* Only camelcase naming convention is valid.
* All the names for the variables should self-explanatory.
* Nested functions are not allowed.
