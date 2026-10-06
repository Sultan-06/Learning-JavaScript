console.log("Hello, World!");

fullName = "tony stark";
console.log(fullName);

age = 48;
console.log(age);

x = null;
console.log(x);

y = undefined;
console.log(y);


const student = {
    fullname : "tony stark",
    age : 19,
    cgpa : 8.2
};
console.log(student);

arithmetic operators
let a = 5;
let b = 2;

console.log("a = 5, b = 2");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


umary operators
a--;
console.log(a);


comparision operators

 let a = 5;
let b = 2;

console.log(" 5 == 2 : ", a == b);
console.log(" 5 != 2 : ", a != b);
console.log(" 5 === 2 : ", a === b);
console.log(" 5 !== 2 : ", a !== b);

console.log(" 5 > 2 : ", a > b);
console.log(" 5 < 2 : ", a < b);
console.log(" 5 >= 2 : ", a >= b);
console.log(" 5 <= 2 : ", a <= b);


logical operators

let a = 5;
let b = 2;

let condition1 = a > b;
let condition2 = a === 5;

console.log("condition1 && condition2 = ",condition1 && condition2);
console.log("condition1 || condition2 = ",condition1 || condition2);
console.log("condition1 && condition2 = ",!condition1 && condition2);


conditional statements

let age = 18;
let mode = "dark";
let number = 6;

if(age >= 18){
    console.log("you can vote");
}

if(age < 18){
    console.log("you cannot vote");
}

if(mode === "light:"){
    color = "black";
}else{
(mode === "dark")
    color = "white";
}

console.log("color = ", color);


if(number % 2 === 0){
    console.log(number,"number is even");
} else{
    console.log(number,"number is odd");
}


if(age <= 16){
    console.log("junioer");
} else if(age >= 18 && age<= 60){
    console.log("adult");
}else{
    console.log("senior");
}




turnary operator

let age = 18;

let result = age >= 18 ? "you can vote" : "you cannot vote";    
console.log(result);

for(let i = 1; i <= 10000; i++){
    console.log("zaki");
}



let movies = [
  { 
    title: "Spider-Man 3", 
    description: "Peter Parker's newfound stability is upended...", 
    imageUrl: "https://image.tmdb.org/t/p/w500/qFmwhVUoUSXjkKRmca5yVDhKv5V.jpg" 
  }
];

const container = document.getElementById('card-container');
const adminForm = document.getElementById('add-movie-form');

function renderCards() {
  container.innerHTML = movies.map(movie => `
    <div class="card">
      <img src="${movie.imageUrl}" alt="${movie.title} Poster" class="card-image">
      <div class="card-content">
        <p class="card-text"><strong>TITLE:</strong> ${movie.title}</p>
        <p class="card-text description"><strong>DESCRIPTION:</strong> ${movie.description}</p>
        <button class="read-more">Read More</button>
      </div>
    </div>
  `).join('');
}

adminForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const newTitle = document.getElementById('movie-title').value;
  const newDesc = document.getElementById('movie-desc').value;
  const newImg = document.getElementById('movie-img').value;

  movies.push({
    title: newTitle,
    description: newDesc,
    imageUrl: newImg
  });

  renderCards();

  adminForm.reset();
});

renderCards();



let sum = 0;
for(let i = 1; i <= 5; i++){ 
      sum = sum + i;
}
console.log("sum = ",sum);



for (let i = 1; i <= 5; i++) {
  console.log("i =", i)
}
console.log(i);


while loop
let i = 1;
while ( i<= 5) {
  console.log("zaki");
  i++;
}


DO WHILE LOOP
let i = 1;
do{
  console.log("i =", i);
  i++;
}while(i <= 5);



FOR_OF_LOOP

let str = "zaki";
let size = 0;
for (let val of str){
  console.log("value =", val);
  size++;
}

console.log("size =", size);


FOR_IN LOOP

let student = {
  name: "zaki",
  age: 19,
  cgpa: 8.2,
  isPass: true,
};

for (let key in student){
  console.log("key =", key, "value =", student[key]);
}

for (let i = 0; i<=100; i++){
  if(i % 2 === 0){
    console.log(i,"is even");
  }
}

for(let i = 0; i<=100; i++){
  console.log("i =", i);
}



strings

let str = "zaki";
console.log(str);

arrays

let marks =[ 90, 80, 70, 60, 50];
console.log(marks);


let heros =["spider-man", "ironman", "thor", "hulk", "captain america"];
console.log(heros);

//Array indices

console.log(marks[1]);

marks[1] = 85;
console.log(marks[1]);

for(let i = 0; i < heros.length; i++){
    console.log("hero =", heros[i]);
}

using for off loop

for(let hero of heros){
    console.log("hero =", hero.toUpperCase())
}

let marks =[ 90, 80, 70, 60, 50];

let sum = 0;
for(let value of marks){
    sum = sum + value;
}

let avg = sum / marks.length;
console.log("avg =", avg);
console.log("sum =", sum);

marks.push(40);
console.log("marks =", marks);

let markss = marks.pop();
console.log("marks =", markss);

console.log(marks.toString());


let heros =["spider-man", "ironman", "thor", "hulk", "captain america"];

let dcheros = ["batman", "superman", "wonder woman"]


let allheros = heros.concat(dcheros);

console.log(allheros);

heros.shift();

console.log(heros.slice(1, 4));

let arr = [1, 2, 3, 4, 5];

arr.splice(3, 1);
console.log(arr);

Functions

function myfunc(){
    console.log("learining javascript");
}

myfunc();


function add(a, b){
    sum = a + b;
    return sum;
}

let val = add(5, 10);
console.log("sum =", val);


function multiply(a, b){
    return a * b;
}

multiply(5, 10);
console.log("product =", multiply(5, 10));


ARROW FUNCTIONS

const add = (a, b) => {
    console.log(a+b);
}
add(5, 10);

const multi = (a, b) =>{
    console.log(a*b);
}

multi(5,10);

