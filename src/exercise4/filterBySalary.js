// 4. Write an ES6 function that takes an array of objects with name, salary and role, and returns a new array with names whose salary is an even number.

export const filterBySalary = (arr) => {
  // Your ES6+ code here
  return arr.reduce(
    (employeesNameArray, { name, salary }) =>
      salary % 2 === 0 ? [...employeesNameArray, name] : employeesNameArray,
    []
  );
};

const employees = [
  { name: "Raju", salary: 154, role: "dev" },
  { name: "Aakash", salary: 200, role: "dev" },
  { name: "Ramesh", salary: 3077, role: "pm" },
  { name: "Jiten", salary: 487, role: "qa" }
];

console.log(filterBySalary(employees)); // Output: ["Raju", "Aakash"]
