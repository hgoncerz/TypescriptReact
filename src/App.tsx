import React from "react";
import "./App.css";

let name: string = "Piyush";
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

role = [5, "x"];

type Person = {
  name: string;
  age?: number;
};

let person: Person = {
  name: "xd",
};

let lotsOfPeople: Person[];

function App() {
  return <div>hello world</div>;
}

export default App;
