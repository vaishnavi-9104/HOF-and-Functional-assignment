// You are building an e-commerce website. Write a function that calculates the total price of a customer's order. You're given an array of items, each with a price property. Use the forEach method to iterate through the array and sum up the prices to get the total order amount. 
function calculateTotalPrice(items) {
    let totalPrice = 0;

    items.forEach(item => {
        totalPrice += item.price;
    });

    return totalPrice;
}

// Example usage:
const customerOrder = [
    { name: 'Laptop', price: 999.99 },
    { name: 'Mouse', price: 49.99 },
    { name: 'Keyboard', price: 89.99 },
];

const totalAmount1 = calculateTotalPrice(customerOrder);
console.log('Total Order Amount:', totalAmount1); // Output: 1139.97



// In this challenge, your task is to create a function that generates a random number and prints it to the console every 2 seconds. The program should keep printing new random numbers indefinitely, with a 2- second delay between each number. 
// function generateRandomNumber() {
//     for(var i=1;i<10;i++){
//     setInterval(() => {
//         let randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
//         console.log('Random Number:', randomNumber);
//     }, 2000);
// }
// }
// // Start generating random numbers

// generateRandomNumber();


function generateRandomNumbers(limit) {
    let count = 0;

    const intervalId = setInterval(() => {
        if (count >= limit) {
            clearInterval(intervalId); // Stop the interval
            console.log('Finished generating random numbers.');
        } else {
            let randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
            console.log('Random Number:', randomNumber);
            count++;
        }
    }, 2000);
}

// Start generating random numbers
generateRandomNumbers(10);







// 3. You are given an array of expense objects representing monthly expenses. Each object has properties, amount and category. Use the map method to create a new array that includes the calculated tax for each expense. Assume a tax rate of 10%. 


function calculateTax(expenses) {
    const taxRate = 0.10; // 10% tax rate

    return expenses.map(expense => {
        const tax = expense.amount * taxRate;
        return {
            ...expense, 
            tax: tax
        };
    });
}

// Example usage:
const monthlyExpenses1 = [
    { amount: 100, category: 'Groceries' },
    { amount: 200, category: 'Rent' },
    { amount: 50, category: 'Utilities' },
];

const expensesWithTax = calculateTax(monthlyExpenses1);
console.log('Expenses with Tax:', expensesWithTax);



// 4)
// Using the same array of expense objects, use the filter method to create a new array that includes only the expenses related to the category "Groceries."

//  5. Using the same array of expense objects, use the reduce method to calculate the total amount of all expenses.

//  6. You have a list of expenses, each with an amount and a category. Now, create a function named categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or "Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array called categorizedExpenses, where each element represents the category for the corresponding expense in the original list. Finally, print out the categorizedExpenses array. 
// Sample array of expense objects
const monthlyExpenses = [
    { amount: 100, category: 'Groceries' },
    { amount: 200, category: 'Rent' },
    { amount: 50, category: 'Utilities' },
    { amount: 120, category: 'Groceries' },
    { amount: 75, category: 'Dining' },
];

// Task 1: Use filter to create a new array with expenses related to "Groceries"
const groceriesExpenses = monthlyExpenses.filter(expense => expense.category === 'Groceries');
console.log('Groceries Expenses:', groceriesExpenses);

// Task 2: Use reduce to calculate the total amount of all expenses
const totalAmount = monthlyExpenses.reduce((total, expense) => total + expense.amount, 0);
console.log('Total Amount of All Expenses:', totalAmount);

// Task 3: Create a function to categorize expenses based on the amount
function categorizeExpense(expense) {
    return expense.amount > 100 ? 'High Expense' : 'Low Expense';
}

// Use map to generate a new array of categorized expenses
const categorizedExpenses = monthlyExpenses.map(expense => categorizeExpense(expense));
console.log('Categorized Expenses:', categorizedExpenses);


// 7. Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3]. Your task is to use the forEach method to iterate through each element in the array. During the iteration, double the value of each number. After completing the iteration, display the modified array.


// Original array of numbers
let originalNumbers = [2, 5, 8, 10, 3];

// Task 1: Double the value of each number
originalNumbers.forEach((value, index, array) => {
    array[index] = value * 2;
});

console.log('Doubled Values:', originalNumbers);

//  8. Using the same array of numbers, use the forEach method to collect and store only the even numbers in a new array.

// Reset the array to the original values for the next task
originalNumbers = [2, 5, 8, 10, 3];

// Task 2: Collect and store only even numbers
let evenNumbers = [];
originalNumbers.forEach(value => {
    if (value % 2 === 0) {
        evenNumbers.push(value);
    }
});

console.log('Even Numbers:', evenNumbers);
