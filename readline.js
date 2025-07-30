const readline = require('node:readline'); //importing the read line module with the help of require function 

const rl =readline.createInterface(

    {
        input:process.stdin,
        output:process.stdout,
    }
);

rl.question("enter the first number=> ",(num1)=>{

    rl.question("enter the second number:=> ",(num2)=>
    {
        const sum=parseFloat(num1)+parseFloat(num2);
        console.log(`the sum ${num1} and ${num2} is ${sum}.`)
        rl.close();
    })
