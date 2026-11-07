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

btn1.onclick = () => {
    console.log("button clicked");
    let a = 25;
    a++;
    console.log(a);
};

let btn2 = document.querySelector("#btn2");

btn2.ondblclick = () => {
    console.log("button double-clicked");
};
