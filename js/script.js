

// Find the name of the employee whose performance is outstanding and produce the percentage.
// Also apply the following labels to each employee according to their overall performance.
// If the overall percentage is greater than or equal to 90%, then “eligible for increment”, else if it is greater than or equal to 70% and less than 90%, then “eligible to continue in project team”, otherwise “change designation”.
// Write an algorithm for the above scenario.
// Algorithm means writing step by step procedure to solve a problem


function getEmployeesNumber() {
  var numberOfEmployees = document.getElementById("teamMembers").value;
  if(numberOfEmployees > 4) {
    prompt("You can only generate a form for 4 people maximum");
    return false;
  }
  
  console.log(numberOfEmployees);
  return numberOfEmployees; 
}

function generateForm() {
  var numberOfEmployees = getEmployeesNumber();
    document.getElementById("form").innerHTML = " ";
  // document.getElementById("form").innerHTML = '<div class="col-md-12"></div>'
  for (var i = 0; i < numberOfEmployees; i++) {
    document.getElementById("form").innerHTML += 
    '<div class="col"><div class="mt-4">Enter details for employee ' + (i+1) + ' below: </div>'
    +'<input id="userInput" type="text" class="form-control m-1" placeholder="Name of the employee ' + (i+1) + '" aria-describedby="basic-addon2">'
    +'<input id="userInput" type="text" class="form-control m-1" placeholder="Performance % in project 1" aria-describedby="basic-addon2">'
    +'<input id="userInput" type="text" class="form-control m-1" placeholder="Performance % in project 2" aria-describedby="basic-addon2">'
    +'<input id="userInput" type="text" class="form-control m-1" placeholder="Performance % in project 3" aria-describedby="basic-addon2"></div></br>'
  }
  document.getElementById('getResults').innerHTML = '<div><button type="button" class="btn btn-info">Store data</button></div>' 
}

function storeData() {
  document.getElementById("form").innerHTML = " ";
  
}

document.getElementById("generateForm").addEventListener('click', function() {
  generateForm();
});


// //this function generates array with employees names
// // averagePerformanceEmployee(numberOfEmployees);
// bestPerformance(numberOfEmployees);

// function generateRandomEmployees(num) {
//   var names = ['John', 'Maria', 'Kim', 'Barbara', 'Vika', 'Marina', 'Ivan', 'William', 'Kai', 'Leo'];
//   var randomEmployees = [];
//   for (let i = 0; i < num; i++) {
//     var randomIndex = Math.floor(Math.random() * (names.length-1));
//     randomEmployees.push(names[randomIndex]);
//   }
//   document.getElementById("teamMembers").innerHTML += randomEmployees;
//   return randomEmployees;
// }

// //genarete random persentage between 68 and 100%
// function randomPercentagePerformance() {
//   var performance = Math.floor(Math.random() * (100 - 68 + 1) + 68);
//   return performance;
// }

// //generate random performance (%) for amount of team members based on user input for Progect 1
// function generateProject1Performance(num) {
//   var randomPerformanceProject1 = [];
//   for (var i=0; i < num; i++) {
//     randomPerformanceProject1.push(randomPercentagePerformance());
//   }
//   document.getElementById("project1Performance").innerHTML += randomPerformanceProject1;
//   return randomPerformanceProject1;
// }

// //generate random performance (%) for amount of team members based on user input for Progect 2
// function generateProject2Performance(num) {
//   var randomPerformanceProject2 = [];
//   for (var i=0; i < num; i++) {
//     randomPerformanceProject2.push(randomPercentagePerformance());
//   }
//   document.getElementById("project2Performance").innerHTML += randomPerformanceProject2;
//   return randomPerformanceProject2;
// }

// //generate random performance (%) for amount of team members based on user input for Progect 3
// function generateProject3Performance(num) {
//   var randomPerformanceProject3 = [];
//   for (var i=0; i < num; i++) {
//     randomPerformanceProject3.push(randomPercentagePerformance());
//   }
//   document.getElementById("project3Performance").innerHTML += randomPerformanceProject3;
//   return randomPerformanceProject3;
// }


// function averagePerformanceEmployee(num){
//   var randomEmployees = generateRandomEmployees(num);
//   //create arrays with random project results
//   var project1Marks = generateProject1Performance(num);
//   var project2Marks = generateProject2Performance(num);
//   var project3Marks = generateProject3Performance(num);
//   var averageMarksAllProjects = [];
//   for (var i = 0; i < randomEmployees.length; i++) {
//     var average = (project1Marks[i] + project2Marks[i] + project3Marks[i])/3;
//     averageMarksAllProjects.push(Math.round(average));
//   }
//   document.getElementById("averageResults").innerHTML += averageMarksAllProjects;
//   return {marks: averageMarksAllProjects, employees: randomEmployees};
// }

// function bestPerformance (num) {
//   var marksAndEmployees = averagePerformanceEmployee(num);
//   var marks = marksAndEmployees.marks;
//   var employees = marksAndEmployees.employees;
//   var bestPerformance = findMaxMark(marks);
//   decision (marks, employees);
//   document.getElementById("bestPerformance").innerHTML += bestPerformance.bestMark;
//   document.getElementById("bestPerformanceMember").innerHTML += employees[bestPerformance.index];
//   return {bestMark:bestPerformance, bestPerformer:bestPerformanceMember};
// }

// function findMaxMark(marks) {
//   var bestPerformance = 0;
//   var bestPerformanceIndex;
//   for (var i = 0; i < marks.length; i++) {
//     if(bestPerformance < marks[i]) {
//       bestPerformance = marks[i];
//       bestPerformanceIndex = i;
//     }
//   }
//   return {bestMark:bestPerformance, index:bestPerformanceIndex};
// }

// function decision (marks, employees) {
//   var emploee;
//   for (var i = 0; i < marks.length; i++) {
//     if (marks[i] >= 90) {
//       emploee = employees[i];
//       document.getElementById("decision").innerHTML += emploee + " is eligible for increment" + "</br>";
//     } 
//     else if (marks[i] >= 70) {
//       emploee = employees[i];
//       document.getElementById("decision").innerHTML += emploee + " is eligible to continue in project team" + "</br>";
//     }
//     else {
//       emploee = employees[i];
//       document.getElementById("decision").innerHTML += emploee + ", change designation" + "</br>";
//     }
// }
// }

