//  variables
let age: number = 23;
let speed: string = 'fast';
let hasName: boolean = true;

let nothing: undefined = undefined;
let empty: null = null;

// built-in objects
let time: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// classes
class Person {}
let student: Person = new Person();

// object literal
let data: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber: (i: number) => void = (i: number) => console.log(i);

// Type inference
let personAgeX = 21; // type inference takes place
let personAgeY;
personAgeY = 21;

// when to use annotations
// 1. Function that returns 'any' type

const json = '{"name": "aravinth", "age": "23"}';
const coordinates: { name: string; age: number } = JSON.parse(json);
console.log(coordinates);

// 2. When we declare variable in one line
// nd initalizate it later
const words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// Variables whose value cannot be inferred correctly
const values = [1, 0, -10];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < values.length; i++) {
  if (values[i] > 0) {
    numberAboveZero = values[i];
  }
}
