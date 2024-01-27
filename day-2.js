// 1. Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Eva", age: 35, gender: "female" },
];
const filterAndMapNames = (people) => {
  const males = people.filter((person) => person.gender !== "female");
  const names = males.map((person) => person.name);
  return names;
};
const maleNames = filterAndMapNames(people);
console.log(maleNames);

// 2. Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];
const extractTitles = (books) => {
  return books.map((book) => book.title);
};
const bookTitles = extractTitles(books);
console.log(bookTitles);

// 3. Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

// 4. Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Focus", year: 2010 },
  { make: "Tesla", model: "Model S", year: 2020 },
];
const sortByYearAscending = (cars) => {
  return cars.slice().sort((a, b) => a.year - b.year);
};
const sortedCars = sortByYearAscending(cars);
console.log(sortedCars);

// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
