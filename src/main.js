import update from './update.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

/* NULLISH OPERATOR TEST */

// Test case 1: Check if nullish operator works with truthy value
const value1 = "Hello";
const result1 = value1 ?? "Fallback";
console.log(result1); // Expected output: "Hello"

// Test case 2: Check if nullish operator works with null
const value2 = null;
const result2 = value2 ?? "Fallback";
console.log(result2); // Expected output: "Fallback"

// Test case 3: Check if nullish operator works with undefined
const value3 = undefined;
const result3 = value3 ?? "Fallback";
console.log(result3); // Expected output: "Fallback"

/* ENaaaaaaaaaaaaaD */

/* OPTIONAL CHAINING */

// Test case 4: Check if optional chaining works with defined property
const data1 = { value: 42 };
const result4 = data1?.value;
console.log(result4); // Expected output: 42

// Test case 5: Check if optional chaining works with undefined property
const data2 = {};
const result5 = data2?.value;
console.log(result5); // Expected output: undefined

// Test case 6: Check if optional chaining works with nested properties
const data3 = { nested: { prop: "Nested property value" } };
const result6 = data3?.nested?.prop;
console.log(result6); // Expected output: "Nested property value"

/* END */

/* PROMISE TEST */

// Test case 7: Check if Promise.allSettled resolves when all promises are resolved
const promise1 = Promise.resolve("Resolved value 1");
const promise2 = Promise.resolve("Resolved value 2");
const promise3 = Promise.resolve("Resolved value 3");

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        console.log(results);
        // Expected output:
        // [
        //   { status: "fulfilled", value: "Resolved value 1" },
        //   { status: "fulfilled", value: "Resolved value 2" },
        //   { status: "fulfilled", value: "Resolved value 3" }
        // ]
    })
    .catch(error => {
        console.error(error);
    });

// Test case 8: Check if Promise.allSettled handles a mix of resolved and rejected promises
const promise4 = Promise.resolve("Resolved value 4");
const promise5 = Promise.reject(new Error("Rejected promise 5"));

Promise.allSettled([promise4, promise5])
    .then(results => {
        console.log(results);
        // Expected output:
        // [
        //   { status: "fulfilled", value: "Resolved value 4" },
        //   { status: "rejected", reason: Error: Rejected promise 5 }
        // ]
    })
    .catch(error => {
        console.error(error);
    });

/* END */

/* ADDITIONAL ES12 FEATURES */

/* LOGICAL ASSIGNMENT OPERATORS */

let x = 5;
x ||= 10; // Equivalent to x = x || 10;
console.log(x); // Output: 5

let y = null;
y ??= 20; // Equivalent to y = y ?? 20;
console.log(y); // Output: 20

/* END */

/* STRING.PROTOTYPE.REPLACEALL() */

const str = 'Hello, World!';
const newStr = str.replaceAll('o', 'x');
console.log(newStr); // Output: Hellx, Wxrld!

/* END */

/* NUMERIC SEPARATORS */

const number = 1_000_000;
console.log(number); // Output: 1000000

/* END */

update();
