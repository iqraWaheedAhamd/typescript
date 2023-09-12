// program 1 :This  program take the name string
const A = "IQRA";
console.log(A);
// program 2 : this program print a current date
const date = new Date();

let day = date.getDate();
let month = date.getMonth() ;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
console.log(currentDate); // "24-2-2023"