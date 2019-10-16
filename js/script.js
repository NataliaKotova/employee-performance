

// Find the name of the employee whose performance is outstanding and produce the percentage.
// Also apply the following labels to each employee according to their overall performance.
// If the overall percentage is greater than or equal to 90%, then “eligible for increment”, else if it is greater than or equal to 70% and less than 90%, then “eligible to continue in project team”, otherwise “change designation”.
// Write an algorithm for the above scenario.
// Algorithm means writing step by step procedure to solve a problem


var numberOfEmployees = parseInt(prompt("How many people in your team? Please enter number from 1 to 10. We will generate perfomance for each person and project"));

//this function generates array with employees names
// averagePerformanceEmployee(numberOfEmployees);
bestPerformance(numberOfEmployees);

function generateRandomEmployees(num) {
  var names = ['John', 'Maria', 'Kim', 'Barbara', 'Vika', 'Marina', 'Ivan', 'William', 'Kai', 'Leo'];
  var randomEmployees = [];
  for (let i = 0; i < num; i++) {
    var randomIndex = Math.floor(Math.random() * (names.length-1));
    randomEmployees.push(names[randomIndex]);
  }
  document.getElementById("teamMembers").innerHTML += randomEmployees;
  return randomEmployees;
}

//genarete random persentage between 68 and 100%
function randomPercentagePerformance() {
  var performance = Math.floor(Math.random() * (100 - 68 + 1) + 68);
  return performance;
}

//generate random performance (%) for amount of team members based on user input for Progect 1
function generateProject1Performance(num) {
  var randomPerformanceProject1 = [];
  for (var i=0; i < num; i++) {
    randomPerformanceProject1.push(randomPercentagePerformance());
  }
  document.getElementById("project1Performance").innerHTML += randomPerformanceProject1;
  return randomPerformanceProject1;
}

//generate random performance (%) for amount of team members based on user input for Progect 2
function generateProject2Performance(num) {
  var randomPerformanceProject2 = [];
  for (var i=0; i < num; i++) {
    randomPerformanceProject2.push(randomPercentagePerformance());
  }
  document.getElementById("project2Performance").innerHTML += randomPerformanceProject2;
  return randomPerformanceProject2;
}

//generate random performance (%) for amount of team members based on user input for Progect 3
function generateProject3Performance(num) {
  var randomPerformanceProject3 = [];
  for (var i=0; i < num; i++) {
    randomPerformanceProject3.push(randomPercentagePerformance());
  }
  document.getElementById("project3Performance").innerHTML += randomPerformanceProject3;
  return randomPerformanceProject3;
}


function averagePerformanceEmployee(num){
  var randomEmployees = generateRandomEmployees(num);
  //create arrays with random project results
  var project1Marks = generateProject1Performance(num);
  var project2Marks = generateProject2Performance(num);
  var project3Marks = generateProject3Performance(num);
  var averageMarksAllProjects = [];
  for (var i = 0; i < randomEmployees.length; i++) {
    var average = (project1Marks[i] + project2Marks[i] + project3Marks[i])/3;
    averageMarksAllProjects.push(Math.round(average));
  }
  document.getElementById("averageResults").innerHTML += averageMarksAllProjects;
  return {marks: averageMarksAllProjects, employees: randomEmployees};
}

function bestPerformance (num) {
  var marksAndEmployees = averagePerformanceEmployee(num);
  var marks = marksAndEmployees.marks;
  var employees = marksAndEmployees.employees;
  var bestPerformance = findMaxMark(marks);
  document.getElementById("bestPerformance").innerHTML += bestPerformance.bestMark;
  document.getElementById("bestPerformanceMember").innerHTML += employees[bestPerformance.index];
  return {bestMark:bestPerformance, bestPerformer:bestPerformanceMember};
}

function findMaxMark(marks) {
  var bestPerformance = 0;
  var bestPerformanceIndex;
  for (var i = 0; i < marks.length; i++) {
    if(bestPerformance < marks[i]) {
      bestPerformance = marks[i];
      bestPerformanceIndex = i;
    }
  }
  return {bestMark:bestPerformance, index:bestPerformanceIndex};
}
//console.log(averageMarksAllProjects);


//   for(let i=0; i<numberOfE; i++){ // asks for the employee names as many times as there are employees
//       let j = i+1;
//       employee.push(prompt("Please enter employee "+ j + "'s name:"));
//   }

// function doJobPrint(){
//   var project1Marks = [83,92,81]; // will contain each employees marks for each project
//   var project2Marks = [93,99,98];
//   var project3Marks = [100,96,93];
//   var averages = [];
//   var employees = ["Mark", "Shelley", "Peter"];  // empty array to push employee names on prompt
//   var employee = [];
  
//   for(let i=0; i<employees.length; i++){  //find average for all employees
//       var average = project1Marks[i] + project2Marks[i] + project3Marks[i];
//       averages.push(Math.round(average/3));
//   }
//   var highest = 0;
//   for(let i=0; i<averages.length; i++){
//       if(averages[i]>highest){
//           highest = averages[i];
//           var index = i;
//       }
//   }
//   document.getElementById("output").innerHTML += "<br>"+employees[index] +" is the best with "+averages[index]+"% average performace";
//   for(let i=0; i<averages.length; i++){
//       if(averages[i] > 90){
//           document.getElementById("output").innerHTML += "<br>"+employees[index] +" has an average performace of "+averages[index]+"%";
//       }
//   }
// }


// function Employee(name, performance){
//   this.name = name;
//   this.performance = performance;

//   this.average = function(){
    
//     var sum = 0;
//     for(var i = 0; i < this.performance.length; i++){
//       sum += performance[i]; 
//        }
//     return sum / performance.length;

//   }
// }

// var employees = new [];


