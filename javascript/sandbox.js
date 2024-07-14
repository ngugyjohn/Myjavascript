// // Practical Exercises:
// // Exercise 1: Working with Variables and Data Types


// let name = 'Prof';
// console.log(name);

// let age = 30;
// console.log(age);

// // document.getElementById("demo").innerHTML = Boolean(10 > 9);

// let isStudent = true;
// console.log(isStudent)

// let address = {
//     city: "NBO",
//     Country: "Kenya"
// };

// console.log(address);

// let hobbies = ["watching", "pooling", "traveling"];
// console.log(hobbies)

// let undefinedVariable;

// let nullVariable = null;

// console.log(nullVariable);

// Exercise 2: Calculate Year of Birth


// let userName = prompt("Please enter your name:");
// let userAge = prompt("Please enter your age:");



// let currentYear = new Date().getFullYear();
// let yearOfBirth = currentYear - userAge

// alert("Hello " + userName + "! It seems you were born in " + yearOfBirth + ".");
// // alert("Hello " + userName + "! You were born in " + yearOfBirth + ".");

// Control Structures and Basic Functions

/*conditional statements
1. if
2. else if
3. else

// Loops
1. for
2. while
3. do...while

// functions - understand how to declare functions, pass parameters, and use return values to modularize and reuse code
*/

// if {
//     // bla bla bla
// } else {
//     // bla! bla! bla!
// }

// if ( some condition is true) {}


// for loop

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// for(let i = 0; i < 5; i++) {
//     console.log("display:", i);
// }

// console.log("loop finished");

// for(let z = 0; z < 7; z++) {
// //     console.log("Display:", z);
// }

// console.log("finished display")

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//     // console.log(names [i]);
//     let html = `<div>${names[i]}</div>`;
//         console.log(html)
//     }

// console.log('list completed');

// WHILE LOOPS
// const names = ['prof.', 'john', 'ngugi']
// // let i = 0;
// // while(i < names.length){
// //     console.log(names [i]);
// //     i++;
// // }

// let i = 5;
// do{
//     console.log('val of i is:', i);
//     i++;
// } while(i < 5);
    

/*Conditional statements
// // IF STATEMENTS
// */
// const age = 20;

// if(age > 20){
//     console.log("you are over 20 years old");
// }

// const members = ['angel', 'joseph', 'Peter', 'Shiphrah'];
// if(members.length < 3);
//     console.log('this is a perfect family');

// const password = 'passw';
// if(password.length >= 12){
//     console.log('super strong password');
// } else if(password.length >= 8){
//     console.log('strong password');
// } else if(password.length >= 5){
//     console.log('slightly strong password');
// } else {
//     console.log('password must be at least 8 characters long')
// }

/*Logical operators 
1. OR ||
2. AND &&
*/

// const password = 'pas@h';
// if(password.length >= 12 && password.includes ('@')){
//     console.log('super strong password');
// } else if(password.length >= 8 || password.includes ('@') && password.length >= 5){
//     console.log('strong password');
// } else {
//     console.log('password must be at least 8 characters long')
// }


/* Logical NOT (!)
*/

// let user = false;

// if(!user){
//     console.log('you must be logged in to continue')

// }

// console.log(!true)
// console.log(!false)

// let user = false;

// if(!user){
//     console.log('you must be logged in to continue') 
// }


// BREAK AND CONTINUE

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){
//     if(scores[i] === 0){
//         continue;
//     }
//     console.log('your score: ', scores[i]);

//     if(scores[i] ===100){
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

// SWITCH STATEMENT

// const grade = 'A';

// switch(grade){
//     case 'A':
//         console.log('You got an A!');
//         break;
//     case 'B':
//         console.log('You got an B!');
//         break;
//     case 'C':
//         console.log('You got an C!');
//         break;
//     case 'D':
//         console.log('You got an D!');
//         break;
//     case 'E':
//         console.log('You got an E!');
//         break;
//     default:
//         console.log('not a valid grade');
        
        

// } 

// VARIABLES & BLOCK SCOPE

// const age = 30

// if(true){
//     const age = 40;
//     const name = 'Prof';
//     console.log('inside 1st code block: ', age, name);

//     if(true){
//         const age = 50
//         console.log('inside 2nd code block:', age, name);
//     }
// }

// console.log('outside code block: ', age, name);

/*Function declaration & expression
*/
// FUNCTION DECLARATION
// function greet(){
//     console.log('hello there');
// }

// FUNCTION EXPRESSION

// const speak = function(){
//     console.log('good day!')
// };

// greet();
// greet();
// greet();

// // speak();
// // speak();
// // speak();

// // function declaration. (This happens though we called it before declaring it but this is because of something called HOISTING which works with function declaration but not with function expression)

// function greet(){
//     console.log('hello there');
// }

// ARGUMENTS & PARAMETERS

// const speak = function(name = 'john', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };


// speak();
// speak('prof', 'morning');


// RETURNING VALUES
const calcArea = function(radius){
   return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);


// REGULAR FUNCTION


// ARROW FUNCTION

