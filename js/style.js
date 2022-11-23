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

// let array = new Array()
// let array1 = ["Apples", "Banana", "Oranges", {name: "Mustafa"}]
// // array1[2]="Tomato"
// // array1[4]="Lettuce"
// // array1[9]="Corn"
// // array1[10]= "Mango"
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
// console.log(array1[3].name)
// array1.push("New item")
// array1.push("Cherry")
// array1.pop()
// array1.pop()
// array1.shift()
// array1.unshift("Fries")
// array1.push("ketchup")
// console.log(array1.includes("Tater Tots"))
// const arr1 = [0,1,2]
// const arr2 = [3,4,5]

// const toApples = array1.map(item=>{
//  return   array1[item] = "Apples"
// })
// console.log(toApples)

// console.log(array1.some(item=> item=== "Apples"))
// console.log(toApples.every(item=> item=== "Apples"))

// console.log(arr1.concat(arr2))
// console.log(array1.find(item=> item === "Apples"))

// console.log( array1)

// const toApples = array1.forEach(item=>{
// console.log(item)
//    })
// console.log(array1.reverse(), array1.sort())
//    console.log(toApples)

// for (let index = 0; index < array1.length; index++) {

//     // if(index === 3){
//     //     console.log(element, element)
//     // }
//     const element = array1[index];
//     console.log(element)

// }
// for (const iterator of array1) {
//     console.log(iterator + " Fries")
// }
// for (const key in array1) {
// console.log(key)
// }

// let sandwich = {
//     grilled: true,
//     butter: "lots",
//     bread: "whole wheat",
//     calories: 250
//   }
//   for (const key in sandwich) {
// console.log(key)
//   }

// FizzBuzz challenge
// Write a function called fizzbuzz that will accept no arguments
// The goal of this function is to print out all numbers from 1 to 100 but with three exceptions:
// For every number that is divisible by 3 and 5, console log "FizzBuzz"
// For every number that is divisible by only 3 and not 5, console log "Fizz"
// For every number that is divisible by only 5 and not 3, console log "Buzz"

// const fizzbuzz = () => {

//     for (let index = 1; index <= 100; index++) {
//         handlerFunction(index);
// }
// }

// const handlerFunction = (index) => {
//     if (index % 15 === 0) {
//         console.log("FizzBuzz")
//     }
//     else if (index % 5 === 0){
//          console.log("Buzz")
//     }
//     else if (index % 3 === 0){

//          console.log("Fizz")
//     }
//     else {
//           console.log (index)
//     }
// }
// fizzbuzz()

// const getPokemonData = async (pokemon) => {
//     try{
//         const getPokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//         const pokemonData = await getPokemonResponse.json();
//         const header = document.createElement("h1");
//         header.innerHTML = pokemonData.name;
//         document.getElementById('active-div').appendChild(header);
//         const image = document.createElement('img');
//         image.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png';
//         image.alt = 'Picture of Mewtwo'
//         document.getElementById('active-div').appendChild(image)
//     }catch {
//         alert('There was an error or the pokemon name was mispelled.');
//     }
// }
// document.getElementById('myButton').addEventListener('click', () => getPokemonData('mewtwo'));

// Challenge 1
// Create a new object called Donis Kia
// Donis Kia should store key value pairs of things the car could have
// One of the keys stored should be a playlist that contains a list of Donis favorite songs

// const donisKia = {
//     color:'blue',
//     wheels: 4,
//     miles: 30000,
//     playlist: ['song1', 'song2', 'song3']
// };

// // Challenge 2
// // Congrats, you got a new dog!
// // Create an class named "dog"
// // Name and describe your dog
// // Add a property to your dog object called "name" and assign a name
// // Add two more properties to describe your dog. (ex: How many legs, fur color, etc)
// // Let's teach it some tricks
// // Give your dog a property called “speak” and assign a function that will alert “woof!”
// // Add another method to teach your dog one more trick
// // BONUS: Display your dog object values in HTML

// class NewDog {
// constructor(name, legs, furColor,){
//     this.name = name;
//     this.legs = legs;
//     this.furColor = furColor;
// }
// speak(){
//     console.log('Woof!');
// }
// roll(){
//     console.log('Dog rolled over');
// }
// }

// const onkursDog = new NewDog ('Spot', 4, 'black');
// onkursDog.roll()
// for (key in onkursDog){
//     console.log(onkursDog[key]);
// }

// class Car{
//     constructor (make, model, year, color){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// const car1 = new Car('Toyota', 'Camry', 2014, 'Blue');
// const car2 = new Car('Honda', 'Civic', 2006, 'Red');
// const car3 = new Car('Nissan', 'Altima', 2019, 'Silver');
// const car4 = new Car('Ford', 'Explorer', 2021, 'Black');
// console.log('car1:', car1, 'car2:', car2, 'car3:', car3, 'car4: ', car4,);
// const para1 = document.createElement('p');
// para1.innerHTML = JSON.stringify(car1);
// const para2 = document.createElement('p')
// para2.innerHTML = JSON.stringify(car2);
// const para3 = document.createElement('p')
// para3.innerHTML = JSON.stringify(car3);
// const para4 = document.createElement('p')
// para4.innerHTML = JSON.stringify(car4);
// document.getElementById('active-div').appendChild(para1);
// document.getElementById('active-div').appendChild(para2);
// document.getElementById('active-div').appendChild(para3);
// document.getElementById('active-div').appendChild(para4);

// Array Challenges

// Write a JS function to check whether in input is in an array or not
// const isInArray = (input, arr) => arr.includes(input);
// console.log(isInArray(3, [1,2,4,5,3]));

// // Write a JS function to clone an array
// const cloneArray = (arr) => arr.slice(0);
// console.log(cloneArray(['hello', 'world', 4, 'bye']));

// // Write a simple JavaScript program to join all elements of the following array into a string.
// const myColor = ["Red", "Green", "White", "Black"];
// const arrayToString = (arr) => arr.join(' ');
// console.log(arrayToString(myColor));

// // Write a JS function to sort the items of an array. Sample Output : -4,-3,1,2,3,5,6,7,8.
// const arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// const sortArray = (array) => array.sort();
// console.log(sortArray(arr));

// // Write a JS function to compute the sum and product of an array of integers. */
// const sumAndProduct = (arr) => {
//     let sum = 0;
//     let product = 1;
//     for (let index = 0; index < arr.length; index++) {
//         sum += arr[index];
//         product *= arr[index];
//     }
//     return `The sum of the array is ${sum} and the product of the array is ${product}`;
// }
// console.log(sumAndProduct([1, 2, 3, 4, 5, 6,]))

// // Object Exercises

// // Create an object with 3 key value pairs. Then delete one of the items from the object. Console log before and after deleting
// const favorites = {
//     color: 'Blue',
//     dessert: 'Choclate',
//     fruit: 'Pineapple'
// }
// console.log(favorites);
// delete favorites.color;
// console.log(favorites);

// // Write a function that will log the reading status of each book from the array of objects. Here is the array
// let library = [  { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]

// const readingStatus= (bookList) => {
//     let currentReadingList = [];
//     for(let index = 0; index < bookList.length; index++){
//         let book = bookList[index];
//         if(book.readingStatus){
//             currentReadingList.push(book.title);
//         }
//     }
//     return `The current books that are being read are ${currentReadingList.join(', ')}.`
// }
// console.log(readingStatus(library));

// // Create a function that multiplies every value by two const myObject = { 'a': 1, 'b': 2, 'c': 3 }; should turn into const myObject = { 'a': 2, 'b': 4, 'c': 36};
// myObject = { 'a': 1, 'b': 2, 'c': 3 };
// const multiplyByTwo = (object) => {
//     for (const key in object) {
//         object[key] = object[key] * 2;
//     }
//     return object;
// }
// console.log(multiplyByTwo(myObject));

// localStorage.setItem("name", "Mustafa")
// localStorage.setItem("height", "5'3")
// console.log(localStorage.getItem("name"))
// localStorage.removeItem("name")
// localStorage.setItem("favoriteColorsTest", JSON.stringify(["Blue", "Red", "Green", "Yellow"]))
// const arr = localStorage.getItem("favoriteColorsTest")

// const parsedArray  = JSON.parse(arr)
// console.log(parsedArray)

// sessionStorage.name = "Onkur"

// document.cookie = "name=Victor"
// alert(document.cookie)

// function sayHi(phrase, who) {
//     alert( phrase + ', ' + who );
//   }

//   setTimeout(sayHi, 10000, "Hello", "John");

// repeat with the interval of 2 seconds

// let timerId = setInterval(() => alert('tick'), 2000);
// console.time();
// for (let i = 0; i <1000;i++) {
// //     console.log(i);
// }
// console.time()
// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
// console.timeEnd()

const name = document.getElementById("name");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("form");
const errorMessage = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let message = [];
  //   if (name.value === "" || name.value == null) {
  //     message.push("Please enter your name");
  //   }
  if (password.value.length <= 6) {
    console.log("Less than 6 characters");
    message.push("Please enter a password longer than 6 characters");
  }
  if (password.value.length >= 20) {
    message.push("Please enter a password shorter than 20 characters");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorMessage.innerText = messages.join(", ");
  }
});
