//#1 ==> Write a function for factorial number for given number using recursion function

// let num = Number(prompt('Enter number: '));
// function factorial (n)
// {
//     if(n==1)
//    {
//     return 1;
//    }
//    else
//    {
//     return n *factorial(n-1);
//    }
// }
// console.log(factorial(6))
//=============>Output = 720 



// #2 ======> Write a function convert feet into meter.

// let num = Number(prompt('Enter number: '));
// function feetinToMeters(a){
//          const N = a * 0.3048;
//          return N;
//      }
//      console.log(feetinToMeters(4));
//=============> Output = 1.2192



//#3 = Write a function find sum of natural numbers up to n (with argument with return type)

// let num = Number(prompt('Enter number: '));
// function sumnumber(n){
//     if(n < 1)
//     {
//         return 0;
//     }
//     else
//     {
//         return(n*(n+1));
//     }
// }
// console.log(sumnumber(20));
//===========> output = 420



//#4 =====> Write a function find a maximum number of three number.(Argument passed)

// let num = Number(prompt('Enter number: '));
//  function maximumnumber(num1,num2,num3){
//         let maximum;
//         if(num1 >= num2 && x >= num3){
//             maximum = num1;
//         }else if(y >= num1 &&num2 >=num3z){
//             maximum = num2;
//         }else{
//             maximum =num3;
//         }
//         console.log(m);
//     }
//     maximumnumber(10,30,60);
//==============>output = 95



//#5 ================>.Write a function find average of numbers up to n.

let num = Number(prompt('Enter number: '));
    function averagenumber(n){
        if(n<1)
        {
            console.log(0);
            return;
        }
        let s = (n *(n+1));
        let average = s / n;
        console.log(average);
    }
    averagenumber(15);
//========>Output = 16