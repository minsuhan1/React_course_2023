// Primitives: number, string, boolean...
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "msh";

let isInstructor: boolean;

isInstructor = false;

// More complex types

let hobbies: string[];

hobbies = ["sports", "cooking"];

type Person = {
  name: string;
  age: number;
}; // Type Alias

let person: Person;

person = {
  name: "msh",
  age: 23,
};

let people: Person[];

// Type inference (권장)

let course = "React complete guide";

// course=1231;

// union type

let course2: string | number = "React complete guide";

course2 = 123;

// Functions & types

function add_(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b"], "c");

// updatedArray[0].split("");
