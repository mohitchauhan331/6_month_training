let employees = [
    { employee_name: 'mary', dept: 'it', join_year: 2010 },
    { employee_name: 'john', dept: 'cse', join_year: 2011 },
    { employee_name: 'michael', dept: 'civil', join_year: 2012 }
];

console.log(employees);  // print employees

console.log("Departments:", employees[0].dept, employees[1].dept, employees[2].dept);  // print departments

delete employees[0].join_year;   //delete join_year data
delete employees[1].join_year;
delete employees[2].join_year;

console.log("After deleting join_year:", employees);  //after deleting join_year printing data

employees[0].employee_name = "Mohit";  //changing employee name at 0 index

console.log("After changing employee name:", employees);  //after changing employee name printing data
