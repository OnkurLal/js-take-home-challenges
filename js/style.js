// const currentDate = new Date();
// // const numberedDay = currentDate.getDay();
// // let wordDay;
// // if (numberedDay === 0){
// //     wordDay = "Sunday";
// // }
// // if (numberedDay === 1){
// //     wordDay = "Monday";
// // }
// // if (numberedDay === 2){
// //     wordDay = "Tuesday";
// // }
// // if (numberedDay === 3){
// //     wordDay = "Wednesday";
// // }
// // if (numberedDay === 4){
// //     wordDay = "Thursday";
// // }
// // if (numberedDay === 5){
// //     wordDay = "Friday";
// // }
// // if (numberedDay === 6){
// //     wordDay = "Saturday";
// // }
// // alert(`Happy ${wordDay}!`);

// // const num1 = prompt("Enter a number below:");
// // const num2 = prompt("Enter a second number below:");
// // const lesser = Math.min(num1, num2);
// // let message;
// // if(num1 === num2){
// //     message = `${num1} and ${num2} are equal.`
// // }else {
// //     message = `${lesser} is the lower value of ${num1} and ${num2}.`
// // } 
// // // alert(message);

// // // console.log('currentDate :>> ', getCurrentDay);
// // // let day;
// // // if (getCurrentDay === 0){
// // //     day = "Sunday"
// // // }
// // // if (getCurrentDay === 1){
// // //     day = "Monday"
// // // }
// // // if (getCurrentDay === 2){
// // //     day = "Tuesday"
// // // }
// // // if (getCurrentDay === 3){
// // //     day = "Wednesday"
// // // }
// // // if (getCurrentDay === 4){
// // //     day = "Thursday"
// // // }
// // // if (getCurrentDay === 5){
// // //     day = "Friday"
// // // }
// // // if (getCurrentDay === 6){
// // //     day = "Saturday"
// // // }
// // // alert(`Today's day of the week is ${day}`)

// // // let kidsAge = 19;
// // // console.log(kidsAge)
// // // if(kidsAge<9){
// // //     if(favoriteFood === "🍕"){
// // //         console.log( " I like pizza")
// // //     }
// // //     else{
// // //         console.log("I dont like pizza")
// // //     }
// // // }
// // // else{
// // //     console.log('kid is greater than 9 or equal to 9 ');
// // // }

// // const currentDate = new Date();
// // const getCurrentDay = currentDate.getDay()
// // switch (getCurrentDay) {
// //     case getCurrentDay === 0:
// //         console.log('sunday')
// //         break;
// //         case 1:
// //             console.log('monday')
// //             break;
// //             case 2:
// //             console.log('tuesday')
// //             break;
// //             case 3:
// //             console.log('wednesday')
// //             break;
// //             case 4:
// //             console.log('thursday')
// //             break;
// //             case 5:
// //                 console.log('friday')
// //                 break;
// //                 case 6:
// //                     console.log('saturday')
// //                     break;
// //             default: console.log('thats a incorrect number')
// //         break;
// // }
// // const favoriteDessert = "cheese cake"
// // if(favoriteDessert === "cheese cake"){
// //     console.log("you chose my fav dessert")
// // }else{
// //     console.log("try again")
// // }

// // favoriteDessert === "cheese cake" || favoriteDessert === "ice cream" ? console.log("you chose my fav dessert"): console.log("try again");

// Challenge One
// Create a prompt asking for their name
// Create a Switch statement with 3 different cases, one of those cases should include the expected value
// Alert the user a message for each case

// const Name = prompt('whats your name')
// switch (Name) {
//     case 'Doni':
//         alert('doni is in list')
        
//         break;
//          case 'victor':
//         alert('victor is in list')
// break;
//  case 'onkur':
//         alert('onkur is in list')
//         break;
//     default:
//         alert('sorry but not in list')
//         break;
// }


// Challenge Two
// Create a prompt asking for their age
// const one =1;
// const two = 1;
// if(one === two){
//     console.log( "this is a equal number")
// }
// else{

// }
// // Write a ternary expression that returns a boolean depending if their age is less than or equal to 18
// // // console.log()the result
// // let result;
// // const age = prompt("What is your age");
// // const underAge = age<=18? result= "to young": console.log("You could buy a drink`")
// // console.log(underAge)

// // Challenge Three
// // You are given a variable chars
// // Write and if else statement to print the letters below to the console
// // AA if chars is greater than 90
// // AB if chars is greater than 80 and less than or equal to 90
// // BB if chars is greater than 70 and less than or equal to 80
// // BC if chars is greater than 60 and less than or equal to 70
// // CC if chars is greater than 50 and less than or equal to 60
// // DD if chars is less than or equal to 50

// const chars = "djfaklsdjfnjnjnjnflkdsjfl dkfjdlkjfaddfasdfsddfafskjhkjk"

// if(chars.length > 90){
//     console.log('AA')
// }else if(chars.length > 80 && chars.length <= 90){
//     console.log('AB')
// }else if(chars.length > 70 && chars.length <= 80){
//     console.log('BB')
// }else if(chars.length > 60 && chars.length <= 70){
//     console.log('BC')
// }else if(chars.length > 50 && chars.length <= 60){
//     console.log('CC')
// }else {
//     console.log('DD')
// }

// const color1 = prompt('What is your favorite color?').toLowerCase();
// const color2 = prompt('What is your second favorite color?').toLowerCase();
// color1 === 'blue' && color2 === 'grey' ? 
// console.log('You chose my favorite colors!'):
// console.log('Better luck next time!');

// const birthday= new Date('November 10, 2022');
// const dayOfBirthday = birthday.getDay();
// switch(dayOfBirthday){
//     case 1: 
//         console.log('Your birthday is a Monday.');
//         break;
//     case 2: 
//         console.log('Your birthday is a Tuesday.');
//         break;
//     case 3: 
//         console.log('Your birthday is a Wednesday.');
//         break;
//     case 4: 
//         console.log('Your birthday is a Thursday.');
//         break;
//     case 5: 
//         console.log('Your birthday is a Friday.');
//         break;
//     default:
//         console.log('Your birthday fell on the weekend.')
// }

//Day 4 Take Home Challenge
// const passwordValidation = (password) => {
//     const validLength = password.length >= 6 && password.length <= 20;
//     const firstLetter = password[0];
//     const validLetter = firstLetter.toLowerCase() !== firstLetter.toUpperCase();
//     if (typeof password !== 'string'){
//        return alert ('Password is not a valid string')
//     }
//     if (!validLength && !validLetter){
//        return alert('Password rejected, invalid password length and first charcter is not a letter')
//     }
//     if (!validLength){
//         return alert('Password rejected, invalid password length')
//     }
//     if(!validLetter){
//         return alert('Password rejected, first charcter is not a letter')
//     }
//     if(validLength && validLetter){
//         return alert ('Password accepted')
//     }
// }

// passwordValidation('9lae');
// passwordValidation('glams9laedfadfadsfasdfasfda');
// passwordValidation('9ladfasfe');
// passwordValidation('dfadf9lae');


// //Day 4 Bonus Problem
// const basicMath = (operator, num1, num2) => {
//     switch (operator){
//         case '+':
//             return num1 + num2;
//             break;
//         case '-':
//             return num1 - num2;
//             break;
//         case '*':
//             return num1 * num2;
//             break;
//         case '/':
//             return num1 / num2;
//             break;
//         default:
//             return 'Invalid operator'
//     }
// }
// console.log(basicMath('+', 4, 7));
// console.log(basicMath('-', 15, 18));
// console.log(basicMath('*', 5, 5));
// console.log(basicMath('/', 49, 7));

// const uberStatus = (isHere)=>{
// const ride = new Promise((resolve, reject)=>{
//     if(isHere){
//         resolve("Driver Arrived")
//     }else{
//         reject("Driver got lost")
//     }
// })
// ride.then((value)).catch((error)=>{
//     console.log(error)
// })

// }

async function pokemon(){
    try{
        const getPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/charizard');
        const pokemonData = await getPokemon.json();
        alert(pokemonData.name)
    }catch (err){
        alert('There was an error');
    }
}
pokemon()