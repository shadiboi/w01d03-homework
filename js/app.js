// EASY GOING
//1. Write a for loop that will log the numbers 1 through 20.
for (let i = 0;i <= 20;i++){
    console.log(i);
};
//GET EVEN
// 1. Write a `for` loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i +=2){
    console.log(i);
}

//EXCITED KITTEN
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
const catWords = ["...human...why you taking pictures of me?...","...the catnip made me do it...",
 "...why does the red dot always get away..."];

 let max = catWords.length;

//  determine how many items are in the catWords array so that you know the max number generated by your random generator

// Math.floor(Math.random() * x); 
//  ^^ this is generating a random number up to 10

// use random number generated to access a value in your array

// print that valuelet 
 

for(let i = 0; i < 20; i++){
    const random = Math.floor(Math.random() * max); 
    console.log("Love me, pet me! HSSSSSS!");
    if (i % 2 == 0){
        console.log(catWords[random]);
    }
};

//2. For every **even** number in your loop, log "...human...why you taking pictures of me?...",
// "...the catnip made me do it...", or "...why does the red dot always get away..." at random.



//FIZZ BUZZ
/*1. Write a javascript application that logs all numbers from 1 - 100.

2. If a number is divisible by 3 log "Fizz" instead of the number.

3. If a number is divisible by 5 log "Buzz" instead of the number.

4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.*/

for (let i = 0; i <= 100; i++){
    if  (i % 3 && i % 5 === 0){    //"FizzBuzz" was not displaying, I fixed this by moving the condition to the top.
        console.log("FizzBuzz");
     } else if (i % 5 === 0){
        console.log("Buzz");
     } else if (i % 3 === 0){
       console.log("Fizz");
     } else (console.log(i));
     };

//## GETTING TO KNOW YOU
//     Use the following arrays to answer the questions below (name, age, hometown)

     const shahzad = ["Shahzad", 1000, "Austin"];
     const jim = ["Jim", 16, "All cities"];
     const reuben = ["Reuben", 22, "Durham"];
     const daniel = ["Daniel", 186, "Dallas"];
     const ryan = ["Ryan", 65, "Denver"];
     
//     1. Daniel decides that Shahzad can't be named "Shahzad" anymore. Remove "Shahzad" from the `shahzad` array and replace it with "Gameboy".
     
    shahzad[0]= "Gameboy"; 
            //OR
    shahzad.splice(0,1, "GameBoy");

//      2. Daniel just had his birthday; change Daniel's array to reflect him being a year older.  Don't just hard code `187`--pretend that you don't know that his age is 186, and write your code to just make him a year older than whatever age he was.
     
    //let bDay = 187; 
    daniel[1]= 187;

//      3. Ryan is Batman maybe.  Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
     
     ryan[2] = "Gotham City";

//      4. Reuben left Durham 5 years ago to come to Chicago. Remove "Durham" from Reuben's array and add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
     
     reuben.splice(2,3, "Chicago",); //array.splice(index, howmany, item1, ....., itemX)

//      5. Jim could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
     
     jim.pop();
     jim.push("Denver", "Prague", "Hanoi");

//      6. Bonus: Whoops! Jim is actually only allowed to be in one of two cities.  Whatever the _first_ of the 3 cities for Jim is now, remove it from the array using [`.splice()`](https://www.google.com/search?q=mdn+splice&oq=mdn+splice&aqs=chrome.0.0j69i60j0l4.1078j0j7&sourceid=chrome&ie=UTF-8)```



//## YELL AT NINJA TURTLES
//1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// 2. Use a `for loop` to call `.toUpperCase()` on each of them and print out the result.

// var caps;

for (let i = 0; i < turtles.length; i++) {
    console.log(turtles[i].toUpperCase());
    }             

// 3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 6 - Yell at the Ninja Turtles answered"
// <hr></hr>

// ##RETURN OF THE CLOSETS

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// ### Alien Attire
// 1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

kristynsCloset.shift();
let kristynsShoe = "left shoe";
thomsCloset[2].unshift(kristynsShoe);



// ### Dress 'em Up
// 1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

    console.log(`Kris out for today: My shirt will be ${kristynsCloset[0]}, my pants will be ${kristynsCloset[1]}, and my shirt will be ${kristynsCloset[2]}`);
    console.log(`Thom outfit for today: My shirt will be ${thomsCloset[0][1]}, my pants will be ${thomsCloset[1][2]}, and my accessorie will be ${thomsCloset[2][1]}.`);


// ### Dirty Laundry
// Continue looking at the closet arrays:
// 1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
           for (let i = 0; i < kristynsCloset.length; i++){
               console.log("WHIRRR, Now washing item: " + kristynsCloset[i]);
           };

// ### Inventory
// 2. Thom wants to do inventory on his closet. Using **bracket notation**, log the **arrays** (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.
           for(let i = 0; i < thomsCloset.length; i++){
           console.log(thomsCloset[0]);
           console.log(thomsCloset[1]);
           console.log(thomsCloset[2]);
        };

// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 8 - I loops through their closets".
// <hr></hr>
// ## Multiples of 3 and 5
              
// _Yes, you might have tackled this earlier, but try it again (don't look back at your other code :eyes:)_

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.co

let nums = 0;


for (let i =3; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    nums = nums + i;
  }
}

console.log(nums);


// Find the **sum** of all the multiples of 3 or 5 below 1000.

// :clap: You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1! :clap:

// >Tip: Get used to thinking about how to solve problems _now_. Will help immensely with coding challenges, and get your coding brain muscles nice and flexed for the class. Make a habit of going to Project Euler and taking a crack at the problems

// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 9 - Project Euler Problem 1 answered"
// <hr>


// var str = "silly";
// var arr = [];
// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
//     arr.push(str[i]);
//     for(let i = 0; arr.length; i++){
//         if(arr[i] === arr[0]);
//     }
// }

// console.log(arr);