
// Question-1
const color = ['Red', 'Green', 'Yellow', 'Black', 'White'];
console.log(color.length);

// Question-2
const fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.join());

// Question-3
const letter = ['A', 'B', 'C', 'D'];
console.log(letter[2]);

// Question-4
const words = ['Learning', 'JavaScript', 'is', 'fun'];
console.log(words.join(" "));

// Question-5
const items1 = ['pen', 'pencil', 'eraser', 'sharpener'];
items1.pop();
console.log(items1);

// Question-6
const items2 = ['pen', 'pencil', 'eraser'];
items2.push('marker');
console.log(items2);

// Question-7
const city1 = ["Dhaka", "Chittagong", "Khulna"];
city1.shift();
console.log(city1);

// Question-8
const city2 = ["Chittagong", "Khulna"];
city2.unshift("Rajshahi");
console.log(city2);


//  Level 2 — মাঝারি মানের প্রশ্ন

// Question-9
const arr1 = ["A", "B", "C"];
const arr2 = ["D", "E"];
const combined = arr1.concat(arr2);
console.log(combined);

// Question-10
const numbers = [10, 20, 30, 40, 50, 60];
const part = numbers.slice(1,4);
console.log(part);

// Question-11
const array = [10, 20, 30, 40];
delete array[1];
console.log(array);


// Level 3 

// Question-12
const itemNum = [1, 2, 3, 4, 5];
itemNum.copyWithin(3, 0, 2);
console.log(itemNum);

// Question-13
const nestedArr =  [1, [2, 3], [4, [5]]];
const flatArr = nestedArr.flat(2);
console.log(flatArr);

// Question-14
const spliceArr = [10, 20, 30, 40, 50];
spliceArr.splice(2, 2, 99, 100);
console.log(spliceArr);

// Question-15
const a = [1, 2, 3, 4, 5];
const b = a.slice(1, 4);
const c = a.splice(1, 4);
console.log(a, b, c);

// Question-16
const fruits2 = ["apple", "banana", "cherry"];
const newFruits = fruits2.toSpliced(1, 1);
console.log("fruits =", fruits2);
console.log("newFruits =", newFruits);

// Question-17
const arrRev = ["JS", "love", "I"];
const reversed = [];
while (arrRev.length) {
  reversed.push(arrRev.pop());
}
console.log(reversed);

// Question-18
const nestedArray = ["a", ["c", "d"]];
console.log(nestedArray[1][0]);