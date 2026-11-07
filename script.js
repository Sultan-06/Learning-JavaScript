// let button = document.getElementById("myId");
// console.log(button);

// let headings = document.getElementsByClassName("myClass");
// console.log(headings);
// console.log(headings);


// let para = document.getElementsByTagName("p");
// console.dir(para);


// let elemens = document.querySelectorAll(".myClass");
// console.log(elemens);

// let element = document.querySelector("#myId");
// console.log(element);

// let div = document.querySelector("div");
// console.dir(div);


// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log("id");

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newpara"))

// let fiv = document.querySelector("div")

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn)

// let div = document.querySelector("div")
// div.before(newBtn)


// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>this is a headinh</i>";

// document.querySelector("body").prepend(newHeading)

// let para = document.querySelector("p");
// para.remove();

let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log("evt");
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

// btn1.addEventListener("click", (evt) => {
//     console.log("button clicked handler 1");
// })
// btn1.addEventListener("click", (evt) => {
//     console.log("button clicked handler 2");
// })
// btn1.addEventListener("click", (evt) => {
//     console.log("button clicked handler 3");
// })
// btn1.addEventListener("click", (evt) => {
//     console.log("button clicked handler 4");
// })

// btn1.removeEventListener("click", (evt) => {
//     console.log("button clicked handler 4");
// });

let Modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

Modebtn.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.remove("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
})