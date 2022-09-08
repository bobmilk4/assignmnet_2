var helloworld = "Hello World";
console.log(helloworld[0]);

let a = 'a';
let b = 'b';
if (a < b) {
    //true
    console.log(a + ' is less than ' + b);
} else if (a > b) {
    console.log(a + ' is greater than ' + b);
} else {
    console.log(a + ' and ' + b + ' are equal.');
}

let c = 'c';
let d = 'D';

console.log(c.toUpperCase());
console.log(d.toLowerCase());
console.log(c + d);

let longString =
    'this is a very long string which needs ' +
    'to wrap across multiple lines because ' +
    'otherwise my code is unreadable.';

    console.log(longString);
longString = 
    'this is a very long string which needs \
        to wrap across multiple lines because \
        otherwise my code is unreadable.';

console.log(longString);



let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);

console.log(fruits.find((fruit) => fruit === 'Apple'));
console.log(fruits.find((fruit) => fruit === 'Apple1'));

console.log(fruits.find((fruit) => fruit === 'Apple'));
console.log(firstIndex = fruits.findIndex((fruit) => fruit === 'Apple1'));

console.log(fruits.push('Kiwi'));
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

let numbers = [3,2,5,4,7]
console.log(numbers.sort());

console.log(fruits.slice(1, 3));

console.log(fruits.slice(1));
console.log(fruits.slice(-1));

fruits.forEach((fruit) => console.log(fruit));


const now = new Date(Date.now());
console.log('the current time is');
console.log(now.toDateString());

const today = new Date();

const birthday1 = new Date('August 4, 1998 08:06:00');
console.log(birthday1.toDateString());

const birthday2 = new Date(1984, 10, 14);
console.log(birthday2.toDateString());
const birthday3 = new Date(1995, 11, 17, 3, 24, 0);
console.log(birthday3.toDateString());
const birthday4 = new Date(628021800000);
console.log(birthday4.toDateString());

console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());

let newDate = new Date();
setTimeout(() => {
    newDate = Date.now()
    console.log(newDate - now);
}, 1000);