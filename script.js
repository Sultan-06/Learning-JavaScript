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