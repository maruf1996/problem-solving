// 1. Task: Object Transformation
// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

const customers = [
  { name: "Alice", purchases: 8, loyaltyPoints: 100 },
  { name: "Bob", purchases: 3, loyaltyPoints: 50 },
  { name: "Charlie", purchases: 6, loyaltyPoints: 80 },
  { name: "Diana", purchases: 10, loyaltyPoints: 120 },
];

const doubleLoyaltyPoints = (customer) => {
  if (customer.purchases > 5) {
    return { ...customer, loyaltyPoints: customer.loyaltyPoints * 2 };
  }
  return customer;
};

// const transformedCustomers = customers.map(doubleLoyaltyPoints);
// console.log("Original Customers:");
// console.log(customers);
// console.log("\nTransformed Customers:");
// console.log(transformedCustomers);

// 2. Task: Function Memoization
// Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.

// 3. Task: Object Sorting with Multiple Criteria
// Create an array of objects representing products with 'name', 'price', and 'category' properties. Write a function to sort the array first by 'category' in ascending order and then by 'price' in ascending order within each category.

const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "T-shirt", price: 20, category: "Clothing" },
  { name: "Headphones", price: 100, category: "Electronics" },
  { name: "Jeans", price: 50, category: "Clothing" },
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Sneakers", price: 80, category: "Clothing" },
  { name: "Sneakers", price: 30, category: "Dental" },
];

const sortProducts = (products) => {
  products.sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    return b.price - a.price;
  });
  // products.sort((a, b) => {
  //   if (a.category < b.category) return -1;
  //   if (a.category > b.category) return 1;
  //   return a.price - b.price;
  // });
  return products;
};
const sortedProducts = sortProducts(products);
console.log(sortedProducts);

// 4. Task:
// // Example:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(findUniqueElements(array1, array2)); // Output: [1, 2, 6, 7]

// Demonstrate the workflow of the function being used here to find out unique from 2 array

// 5. Task: Review this JavaScript code . The function mysteryFunctionX takes a number as input and creates an array representing a mysterious sequence up to that number. Can you decipher what this function does? Additionally, what would be the output for the provided example (mysteriousNumberX)?
// function mysteryFunctionX(limitX) {
// const sequenceX = [1];
// for (let x = 1; x <= limitX; x++) {
// sequenceX[x] = x * sequenceX[x - 1];
//       }
//       return sequenceX;
// }

// // Example usage:
// const mysteriousNumberX = 5;
// console.log(mysteryFunctionX(mysteriousNumberX));
// // Output: [1, 1, 2, 6, 24, 120]
