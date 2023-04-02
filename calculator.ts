
import inquirer from "inquirer";
inquirer.prompt( [{
    type : "number",
    name : "num1",
    message : "Enter the first number:"
},
{  type : "number",
   name : "num2",
   message : "Enter the second number:"
},
{
     type : "list",
     name : "operator",
     message : "select an operator:",
     choices : ['+','-', '*' , '/' ]
},]).then(answers=>{
    const {num1, num2, operator} = answers;
    let result;
    switch(operator){
        case '+':
            result= num1 + num2;
        break;
        case '-':
            result=  num1 - num2;
        break;
        case '*':
            result= num1 * num2;
        break;
        case '/':
        result= num1 / num2;
        break;
        default:
            console.log('invalid operator');
            }
    console.log(`Result:"${result}`)
        });

      
      
      
      
      
      


