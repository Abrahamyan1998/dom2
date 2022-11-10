
let main = document.querySelectorAll(".main");
console.log(main);
let main_line = document.querySelectorAll(".main_line");
console.log(main_line);
let string = document.querySelectorAll(".string");
console.log(string);


let dotted = document.querySelectorAll(".dotted");
for(i=0; i<dotted.length; i++){
    console.log(dotted[i]);
    dotted[i].style.border = "1px dotted rgb(12, 12, 12)";
}


let h2 = document.querySelectorAll ("h2");
for(i=0; i<h2.length; i++){
    console.log(h2[i]);
    h2[i].style.color="#C59D5F";
    h2[i].style.fontSize = "18px";

}

let p = document.querySelectorAll ("p");
for(i=0; i<p.length; i++){
    console.log(p[i]);
    p[i].style.color="#777D98";
    p[i].style.fontSize = "16px";

}

let nav = document.querySelector("nav");
nav.style.backgroundColor = "#F1F5F8";

let section = document.querySelector("section");
section.style.backgroundColor = "#F1F5F8";


let allbtn = document.querySelector(".btn1");
let breakfastbtn = document.querySelector(".btn2");
let lunchbtn = document.querySelector(".btn3");
let shakesbtn = document.querySelector(".btn4");
let dinnerbtn = document.querySelector(".btn5");

let all = document.querySelector(".all");
let breakfast = document.querySelectorAll(".breakfast");
let lunch = document.querySelectorAll(".lunch");
let shakes = document.querySelectorAll(".shakes");
let dinner = document.querySelector(".dinner");

allbtn.onclick = function () {
    console.log(all, 'all');
    all.style.display = "block"
    for (let i = 0; i < breakfast.length; i++) {
        breakfast[i].style.display = "block"
    }
    for (let i = 0; i < lunch.length; i++) {
        lunch[i].style.display = "block"
    }
    for (let i = 0; i < shakes.length; i++) {
        shakes[i].style.display = "block"
    }
   {
        dinner.style.display = "block"
    }
}

breakfastbtn.onclick = function () {
    console.log(breakfast, 'breakfast');
    for (let i = 0; i < breakfast.length; i++) {
        breakfast[i].style.display = "block"
    }
    for (let i = 0; i < lunch.length; i++) {
        lunch[i].style.display = "none"
    }
    for (let i = 0; i < shakes.length; i++) {
        shakes[i].style.display = "none"
    }
   
        dinner.style.display = "none"
    }

lunchbtn.onclick = function () {
    console.log(lunch, 'lunch');
    for (let i = 0; i < breakfast.length; i++) {
        breakfast[i].style.display = "none"
    }
    for (let i = 0; i < lunch.length; i++) {
        lunch[i].style.display = "block"
    }
    for (let i = 0; i < shakes.length; i++) {
        shakes[i].style.display = "none"
    }
    dinner.style.display = "none"
}

shakesbtn.onclick = function () {
    console.log(shakes, 'shakes');
    for (let i = 0; i < breakfast.length; i++) {
        breakfast[i].style.display = "none"
    }
    for (let i = 0; i < lunch.length; i++) {
        lunch[i].style.display = "none"
    }
    for (let i = 0; i < shakes.length; i++) {
        shakes[i].style.display = "block"
    }
    dinner.style.display = "none"
}

dinnerbtn.onclick = function () {
    console.log(dinner, 'dinner');
    for (let i = 0; i < breakfast.length; i++) {
        breakfast[i].style.display = "none"
    }
    for (let i = 0; i < lunch.length; i++) {
        lunch[i].style.display = "none"
    }
    for (let i = 0; i < shakes.length; i++) {
        shakes[i].style.display = "none"
    }
    
    dinner.style.display = "block"

}


