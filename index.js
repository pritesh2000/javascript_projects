
// console.log("Hello world");
// // alert("me");
// // document.write("This is document write\n fine by me.")
// console.warn("This is warning.");
// console.error("This is an error.")

var number1 = 23;
var number2 = 34;
// console.log(number1 + number2);

var str1 = 'this is string.'
var str2 = "This is also string."

// console.log(str2)

var marks = {
    jay : 29,
    harsh : 32,
    mahesh : 9,
}
// console.log(marks)

//Boolean
var a = true;
var b = false;
// console.log(a)

var und = undefined;
// console.log(und)

var n = null;
// console.log(n);

var arr = [1,2,3,'pritesh',4,5];
// console.log(arr);

var c = 100;
var d = 10;
// console.log("The value of a + b is", c+d);
// console.log("The value of a - b is", c-d);
// console.log("The value of a * b is", c*d);
// console.log("The value of a / b is", c/d);

var e = d;
e += 2;
// console.log(e);

var x = 23;
var y = 89;
// console.log(x == y);

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(!false);
// console.log(!true);

function avg(a, b){
    return (a+b)/2;
}

c1 = avg(4,6);
c2 = avg(14,15);
// console.log(c1, c2);

/*
var age = 4;
// if(age > 8){
//     console.log('You are not a kid.')
// }
// else{
//     console.log('You are a kid.')
// }

age = 21;
if(age > 56){
    console.log('You are old.');
}
else if(age > 45){
    console.log("you will become old.");
}
else if(age > 22){
    console.log('Abhi to tum jawan ho');
}
else{
    console.log("Bachha he tu.");
}
console.log('End of ladder.')
*/
var arr = [1,2,3,4,5,6,7,8]

// console.log(arr)

// for(var i = 0 ; i < arr.length; i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// const h = 90;
// h += 1;
// h ++;
// let j = 0;

// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j ++; 
// }while(j<arr.length);

let myArr =  ["Fan", "Table", 23, true, null];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("pritesh");
// myArr.shift();  //remove first element of array
// myArr.unshift("Peru");
// console.log(myArr.unshift("Peru"));

// const newArr = myArr.unshift("nape");
// console.log(newArr);

// myArr.toString();
// console.log(myArr);

let myString = "This is my home and I am the king here. home"
// console.log(myString.length);
// console.log(myString.indexOf("home"));
// console.log(myString.lastIndexOf("home"));

// console.log(myString.slice(3,8));
d = myString.replace("and", "or");
d = d.replace("home", "mashan");
// console.log(d, myString);

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());

let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
elemClass[1].style.background = 'yellow'
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");

elemClass[0].classList.remove("text-success");

// console.log(elem.innerHTML);
// console.log(elem.innerText);

tn = document.getElementsByTagName('div');
// console.log(tn);

createdChild = document.createElement('p');
createdChild.innerText = 'This is 5:15 PM 8 march 2022 and I am sitting with dezzy mood.'
tn[0].appendChild(createdChild);

createdChild2 = document.createElement('b');
createdChild2.innerText = 'This is Bold .';
tn[0].replaceChild(createdChild2, createdChild);

sel = document.querySelector('.container');
// console.log(sel);

sel = document.querySelectorAll('.container');
// console.log(sel);


// function clicked(){
//     console.log("This button is clicked.")
// }

// window.onload = function(){

//     console.log("This page is loaded.")
// }

// Events in JavaScripts
// firstContainer.addEventListener('click', function(){console.log('hello cllick')});

/*
//addEventListner
firstContainer.addEventListner('click', function(){
    console.log('click hua');
})
*/ 

// firstContainer.addEventListener('mouseover', function(){
//     console.log('Mouse on container.')
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("mouse out of container.")
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("mouse up when clicked on container.")
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("mouse down when clicked on container.")
// })

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("Clicked on container.")
// })


// Arrowfuntion
function sum(a,b){
    return a+b;
}

summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set interval fired.</b>"
    console.log("I am your log.")
}
// Settimeout and setinterval
// setTimeout(logKaro, 3000);

// clr = setTimeout(logKaro, 3000);
// clr = setInterval(logKaro, 5000);

// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


// JavaScript LocalStorage

// localStorage.setItem("name", "Pritesh");
// localStorage
// localStorage.getItem("name");
// localStorage.removeItem("name");
// localStorage.clear();

//Json

obj = {name : "Pritesh", length : 1, a : {this : 'that"t'}}         //javascript object support double quotes however JSON doesn't support double quotes.
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(typeof obj)
console.log(jso)

parsed = JSON.parse(`{"name":"Pritesh","length":1,"a":{"this":"that"}}`)
console.log(parsed)

// Template literal - Backticks
a = 34;
console.log(`This is number ${a}`);
// console.log("This is number ${a}");
