// console.log("Hello, World!");

// fullName = "tony stark";
// console.log(fullName);

// age = 48;
// console.log(age);

// x = null;
// console.log(x);

// y = undefined;
// console.log(y);


// const student = {
//     fullname : "tony stark",
//     age : 19,
//     cgpa : 8.2
// };
// console.log(student);

// arithmetic operators
// let a = 5;
// let b = 2;

// console.log("a = 5, b = 2");
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);


// umary operators
// a--;
// console.log(a);


// comparision operators

//  let a = 5;
// let b = 2;

// console.log(" 5 == 2 : ", a == b);
// console.log(" 5 != 2 : ", a != b);
// console.log(" 5 === 2 : ", a === b);
// console.log(" 5 !== 2 : ", a !== b);

// console.log(" 5 > 2 : ", a > b);
// console.log(" 5 < 2 : ", a < b);
// console.log(" 5 >= 2 : ", a >= b);
// console.log(" 5 <= 2 : ", a <= b);


// logical operators

// let a = 5;
// let b = 2;

// let condition1 = a > b;
// let condition2 = a === 5;

// console.log("condition1 && condition2 = ",condition1 && condition2);
// console.log("condition1 || condition2 = ",condition1 || condition2);
// console.log("condition1 && condition2 = ",!condition1 && condition2);


// conditional statements

// let age = 18;
// let mode = "dark";
// let number = 6;

// if(age >= 18){
//     console.log("you can vote");
// }

// if(age < 18){
//     console.log("you cannot vote");
// }

// if(mode === "light:"){
//     color = "black";
// }else{
// (mode === "dark")
//     color = "white";
// }

// console.log("color = ", color);


// if(number % 2 === 0){
//     console.log(number,"number is even");
// } else{
//     console.log(number,"number is odd");
// }


// if(age <= 16){
//     console.log("junioer");
// } else if(age >= 18 && age<= 60){
//     console.log("adult");
// }else{
//     console.log("senior");
// }




// turnary operator

// let age = 18;

// let result = age >= 18 ? "you can vote" : "you cannot vote";    
// console.log(result);

// for(let i = 1; i <= 10000; i++){
//     console.log("zaki");
// }


// 1. Define your data
// 1. Updated data array
// 1. Your central data array (can start empty or with initial movies)
let movies = [
  { 
    title: "Spider-Man 3", 
    description: "Peter Parker's newfound stability is upended...", 
    imageUrl: "https://image.tmdb.org/t/p/w500/qFmwhVUoUSXjkKRmca5yVDhKv5V.jpg" 
  }
];

const container = document.getElementById('card-container');
const adminForm = document.getElementById('add-movie-form');

// 2. Function to generate and display the HTML for all cards
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

// 3. Listen for the admin form submission
adminForm.addEventListener('submit', function(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Grab the values you typed into the inputs
  const newTitle = document.getElementById('movie-title').value;
  const newDesc = document.getElementById('movie-desc').value;
  const newImg = document.getElementById('movie-img').value;

  // Push the new data into the movies array
  movies.push({
    title: newTitle,
    description: newDesc,
    imageUrl: newImg
  });

  // Re-render the UI so the new card appears immediately
  renderCards();

  // Clear the form inputs so you can type the next one
  adminForm.reset();
});

// 4. Run once on initial page load to show any existing movies
renderCards();