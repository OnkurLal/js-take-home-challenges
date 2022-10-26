const currentDate = new Date();
const numberedDay = currentDate.getDay();
let wordDay;
if (numberedDay === 0){
    wordDay = "Sunday";
}
if (numberedDay === 1){
    wordDay = "Monday";
}
if (numberedDay === 2){
    wordDay = "Tuesday";
}
if (numberedDay === 3){
    wordDay = "Wednesday";
}
if (numberedDay === 4){
    wordDay = "Thursday";
}
if (numberedDay === 5){
    wordDay = "Friday";
}
if (numberedDay === 6){
    wordDay = "Saturday";
}
alert(`Happy ${wordDay}!`);

const num1 = prompt("Enter a number below:");
const num2 = prompt("Enter a second number below:");
const lesser = Math.min(num1, num2);
let message;
if(num1 === num2){
    message = `${num1} and ${num2} are equal.`
}else {
    message = `${lesser} is the lower value of ${num1} and ${num2}.`
}
alert(message);