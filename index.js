
// Question-1
// ১️⃣ একটা ৫টা রঙের নামের অ্যারে বানাও এবং এর length প্রিন্ট করো।
//  👉 Hint: .length প্রপার্টি ব্যবহার করো।
//  🧾 Expected Output: 5

let color = ['Red', 'Green', 'Yellow', 'Black', 'White'];
console.log(color.length);



// Question-2
// ২️⃣ ["Apple", "Banana", "Mango"] কে এক লাইনে string এ পরিণত করো।
//  👉 Hint: .toString() বা .join(",") ব্যবহার করো।
//  🧾 Expected Output: "Apple,Banana,Mango"

let fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.join());



// Question-3
// ৩️⃣ ["A", "B", "C", "D"] অ্যারে থেকে ৩য় আইটেমটি প্রিন্ট করো।
//  👉 Hint: .at(2) বা [2] ব্যবহার করো।
//  🧾 Expected Output: "C"

let letter = ['A', 'B', 'C', 'D'];
console.log(letter[2]);



// Question-4
// ৪️⃣ ["Learning", "JavaScript", "is", "fun"] কে একসাথে করে একটা বাক্য বানাও।
//  👉 Hint: .join(" ") ব্যবহার করো।
//  🧾 Expected Output: "Learning JavaScript is fun"

let words = ['Learning', 'JavaScript', 'is', 'fun'];
console.log(words.join(" "));



// Question-5
// ৫️⃣ ["pen", "pencil", "eraser", "sharpener"] থেকে শেষের আইটেমটা সরাও।
//  👉 Hint: .pop() ব্যবহার করো।
//  🧾 Expected Output: ["pen", "pencil", "eraser"]

let items1 = ['pen', 'pencil', 'eraser', 'sharpener'];
items1.pop();
console.log(items1);



// Question-6
// ৬️⃣ উপরের অ্যারেটাতে "marker" যোগ করো শেষে।
//  👉 Hint: .push("marker") ব্যবহার করো।
//  🧾 Expected Output: ["pen", "pencil", "eraser", "marker"]

let items2 = ['pen', 'pencil', 'eraser'];
items2.push('marker');
console.log(items2);



// Question-7
// ৭️⃣ ["Dhaka", "Chittagong", "Khulna"] অ্যারে থেকে প্রথম আইটেম সরাও।
//  👉 Hint: .shift() ব্যবহার করো।
//  🧾 Expected Output: ["Chittagong", "Khulna"]

let city1 = ["Dhaka", "Chittagong", "Khulna"];
city1.shift();
console.log(city1);



// Question-8
// ৮️⃣ ঐ একই অ্যারেতে শুরুতে "Rajshahi" যোগ করো।
//  👉 Hint: .unshift("Rajshahi") ব্যবহার করো।
//  🧾 Expected Output: ["Rajshahi", "Chittagong", "Khulna"]

let city2 = ["Chittagong", "Khulna"];
city2.unshift("Rajshahi");
console.log(city2);


//  Level 2 

// Question-9
// ৯️⃣ ["A", "B", "C"] এবং ["D", "E"] একসাথে জোড়া লাগাও।
//  👉 Hint: .concat() ব্যবহার করো।
//  🧾 Expected Output: ["A", "B", "C", "D", "E"]

let arr1 = ["A", "B", "C"];
let arr2 = ["D", "E"];
let combined = arr1.concat(arr2);
console.log(combined);



// Question-10
// 🔟 [10, 20, 30, 40, 50, 60] থেকে নতুন একটা অ্যারে বানাও যেখানে শুধু [20, 30, 40] থাকবে।
//  👉 Hint: .slice(1, 4) ব্যবহার করো।
//  🧾 Expected Output: [20, 30, 40]

const numbers = [10, 20, 30, 40, 50, 60];
const part = numbers.slice(1,4);
console.log(part);



// Question-11
// ১️⃣ নিচের কোডে দ্বিতীয় আইটেম ডিলিট করো, কিন্তু splice() ব্যবহার কোরো না।
//  👉 Hint: delete arr[1]; ব্যবহার করে দেখো।
//  🧾 Expected Output: [10, empty, 30, 40]

let array = [10, 20, 30, 40];
delete array[1];
console.log(array);




// Level 3 

// Question-12
// ২️⃣ নিচের কোডে প্রথম দুইটা আইটেম কপি করে শেষের দিকে বসাও।
//  👉 Hint: .copyWithin(3, 0, 2) ব্যবহার করো।
//  🧾 Expected Output: [1, 2, 3, 1, 2]

let itemNum = [1, 2, 3, 4, 5];
itemNum.copyWithin(3, 0, 2);
console.log(itemNum);



// Question-13
// ৩️⃣ [1, [2, 3], [4, [5]]] এই nested অ্যারেটাকে এক লেভেলে নিয়ে আসো।
//  👉 Hint: .flat(2) ব্যবহার করো।
//  🧾 Expected Output: [1, 2, 3, 4, 5]

let nestedArr =  [1, [2, 3], [4, [5]]];
let flatArr = nestedArr.flat(2);
console.log(flatArr);



// Question-14
// ৪️⃣ নিচের অ্যারে থেকে মাঝের ২টা আইটেম replace করো 99 এবং 100 দিয়ে।
//  👉 Hint: .splice(2, 2, 99, 100) ব্যবহার করো।
//  🧾 Expected Output: [10, 20, 99, 100, 50]

let spliceArr = [10, 20, 30, 40, 50];
spliceArr.splice(2, 2, 99, 100);
console.log(spliceArr);



// Question-15
// ৫️⃣ নিচের কোডের আউটপুট কী হবে বলে মনে করো?
// let a = [1, 2, 3, 4, 5];
// let b = a.slice(1, 4);
// let c = a.splice(1, 4);
// console.log(a, b, c);

//  👉 Hint: .slice() অ্যারে পরিবর্তন করে না, কিন্তু .splice() করে।
//  🧾 Expected Output:
//  a = [1]
//  b = [2, 3, 4]
//  c = [2, 3, 4, 5]

let a = [1, 2, 3, 4, 5];
let b = a.slice(1, 4);
let c = a.splice(1, 4);
console.log(a, b, c);



// Question-16
// ৬️⃣ নিচের অ্যারেতে "banana" রিমুভ করো, কিন্তু আসল অ্যারেটা যেন না পরিবর্তন হয়।
//  👉 Hint: .toSpliced(1, 1) (ES2023) ব্যবহার করতে পারো।
//  🧾 Expected Output:
//  fruits = ["apple", "banana", "cherry"]
//  newFruits = ["apple", "cherry"]

let fruits2 = ["apple", "banana", "cherry"];
let newFruits = fruits2.toSpliced(1, 1);
console.log("fruits =", fruits2);
console.log("newFruits =", newFruits);



// Question-17
// ৭️⃣ নিচের অ্যারেটাকে উল্টো করে দাও, কিন্তু .reverse() ব্যবহার কোরো না।
//  👉 Hint: .pop() করে শেষ থেকে বের করে .push() দিয়ে শুরুতে বসাও।
//  🧾 Expected Output: ["I", "love", "JS"]

let arrRev = ["JS", "love", "I"];
let reversed = [];
while (arrRev.length) {
  reversed.push(arrRev.pop());
}
console.log(reversed);



// Question-18
// ৮️⃣ নিচের nested অ্যারে থেকে শুধু "c" প্রিন্ট করো।
//  👉 Hint: arr[1][0] ব্যবহার করো।
//  🧾 Expected Output: "c"

let nestedArray = ["a", ["c", "d"]];
console.log(nestedArray[1][0]);