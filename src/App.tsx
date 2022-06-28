import React from "react";
import "./App.css";

let name: string = "Piyush";
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name: string) => never;

let personName: unknown;

interface Person2 {
  name: string;
  age?: number;
}

// type X = {
//   a: string;
//   b: number;
// };

// type Y = {
//   c: string;
//   d: number;
// };

// let y: Y = {
//   c: "efsdf",
//   d: 42,
// };

interface Person {
  name: string;
  age?: number;
}

interface Guy extends Person {
  profession: string;
}

role = [5, "x"];

age = 5;

// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "xd",
// };

let lotsOfPeople: Person[];

function App() {
  return <div>hello world</div>;
}

export default App;
