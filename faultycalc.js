/* Create a faulty calculator using JavaScript
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operation 10% of the times
*/

//to make "prompt" work we need to link it to html file

function sum(a,b){
    x=Math.random();
    if (x<0.1){
        return a-b;
    }
    else{
        return a+b;
    }
}
function mult(a,b){
    x=Math.random();
    if (x<0.1){
        return a+b;
    }
    else{
        return a*b;
    }
}
function diff(a,b){
    x=Math.random();
    if (x<0.1){
        return a/b;
    }
    else{
        return a-b;
    }
}
function div(a,b){
    x=Math.random();
    if (x<0.1){
        return a**b;
    }
    else{
        return a/b;
    }
}


let a=parseInt(prompt("Enter a number:"));
let b=parseInt(prompt("Enter a number:"));
var userInput = prompt("Please enter something from +,-,*,/:");

switch(userInput){
    case '+':
        console.log(sum(a,b));
        break;
    case '-':
        console.log(diff(a,b));
        break;
    case '*':
        console.log(mult(a,b));
        break;
    case '/':
        console.log(div(a,b));
        break;
    
    default: console.log("HAINJI??");
}