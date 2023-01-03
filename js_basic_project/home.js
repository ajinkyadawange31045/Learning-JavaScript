// console.log('hello js');
console.log('hello');
// alert('Hello thsi is Ajinkya');
//how to write a comment in inline

// ----------------------------------------------------------------
//variables
var b = 'smoothie';
console.log(b);

// ----------------------------------------------------------------
var somenumber = 45;
console.log(somenumber);
// ----------------------------------------------------------------

document.getElementById('sometext').innerHTML = 'Hey There'
    // ----------------------------------------------------------------
    //we can store a string and print it on screen
    // var age = prompt('what is your age?');
    // document.getElementById('sometext').innerHTML = age;

// ----------------------------------------------------------------
// //numbers in Js
// var num1 = 5.7;
// num1 = num1 + 1
// num1++
// console.log(num1);
// num1--
// console.log(num1);
// console.log(5 * 10);
// console.log(num1 / 10)

//---------------------------------------------------------------
// /*functions
// 1.create a function
// 2. calll the function
// */
// //creating a function
// function fun() {
//     // alert('this is a funtion')
//     console.log('this is a function')
// }
// //calling a function
// fun()

// /*lets create a function that take in a name and says hello followed by your name
// for example
// Name : "AJinkya"
// return : 'Hello Aninkya'
// */
// function greeting() {
//     var name = prompt('What is your name?');
//     var result = 'Hello' + ' ' + name; //string contatination
//     console.log(result);
// }
// greeting()

// //how do argument work in functions?
// //how do we add 2 numbers together in function?
// function sunNumber(num1, num2) {
//     var result = num1 + num2;
//     console.log(result);
// }
// sunNumber(10, 11);
// // sunNumber('10', ' Ajinkya')

// ----------------------------------------------------------------
// //While loops in js
// var num = 0;
// while (num < 10) {
//     num += 1;
//     console.log(num);
// }

// //for loops in js
// //start writinglet instead of var in any variables.
// for (let num = 0; num <= 10; num++) {
//     console.log(num);
// }

// ----------------------------------------------------------------
// //datatypes in python
// let yourage = 18 //number
// let yourname = 'Ajinkya'; //string
// let name = { first: 'Jane', last: 'Doe' }; //objects
// let truth = false; //boolean
// let list = ['apple', 'bananas', 'oranges']; //array
// let random; //undefined
// let nothing = null; //null
//----------------------------------------------------------------
// //strings commone methods
// let fruit = 'banana,orange,blackberry';
// let morefruits = 'banana \napple \nmango'; //\n is new line
// console.log(morefruits);
// console.log(fruit.length);
// console.log(fruit.indexOf('n'));
// console.log(fruit.slice(2, 6));
// console.log(fruit.replace('ban', '123'));
// console.log(fruit.toUpperCase(fruit));
// console.log(fruit.toLowerCase(fruit));
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(','));//splits ny a comma
//----------------------------------------------------------------
// arrays in js
let fruits = ['banana', 'apple', 'orange', 'pineapples']
let fruit = new Array('banana', 'apple', 'orange', 'pineapples');
console.log(fruits[1]);
console.log(fruits[2]);
fruits[0] = 'pear';
console.log(fruits[0]);
for (let i = 0; i < fruits.length; i++) {
    console.log(i + 1, fruits[i]);
}
console.log('to string :\n', fruits.toString())
console.log(fruits.join('_'))
console.log(fruits, fruits.pop(0), fruits); //removes last item
console.log(fruits.push('blackberries'), fruits); //appends at last
fruits[fruits.length] = 'New Fruit'; //new method to add something to a list or array.
console.log(fruits);
fruits.shift(); //remove first element from a list
console.log(fruits);
fruits.unshift('kiwi'); //add first element
console.log(fruits);

let vegetable = ['potato', 'tomato', 'flower', 'ladies finger'];
let all_groceries = fruits.concat(vegetable);
console.log(all_groceries);
console.log(all_groceries.slice(1, 4));
console.log(all_groceries.reverse());
console.log(all_groceries.sort());

let somenumbers = [5, 1, 2, 3, 5, 23, 45, 642, 2, 323, 4, 3, 4];
console.log(somenumbers.sort(function(a, b) { return a - b }));

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray)
    //----------------------------------------------------------------
    //     //objects in js
    //     //dictionaies in python

// let student = {
//     first: 'Ajinkya',
//     lastname: 'Dawange',
//     age: 20,
//     height: '6feet',
//     studnetInfo: function() {
//         return this.first + "\n" + this.last; //this is equivalent to self in python
//     }
// }
// console.log(student.first)
// student.first = 'notAjinkya' //to change a particular key in dictionary
// console.log(student.first)
// student.age++;
// console.log(student.age)
// console.log(student.studnetInfo)
//wrong output
//----------------------------------------------------------------
//If else condition and switch statement
// var age = prompt('what is your age?')
// if ((age >= 18) && (age <= 35)) {
//     status1 = 'target demo';
//     console.log(status1)
// } else {
//     status1 = 'not my audience';
//     console.log(status1)
// }

// // switch
// // differentiate between weeekday vs/ weekend
// //0 -> sunday
// // 6 -> saturday
// // day -4 -> thursday -> week day
// switch (6) {
//     case 0:
//         text = 'weekend'
//         break
//     case 5:
//         text = 'weekend'
//     case 6:
//         text = 'weekend'
//         break;
//     default:
//         text = 'weekday'
// }
// console.log(text);
//----------------------------------------------------------------
// JSON
//in main channel
//