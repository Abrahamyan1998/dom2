
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


