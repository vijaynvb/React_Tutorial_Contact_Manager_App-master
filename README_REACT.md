# React js

## Table of Contents

* [**What is React**](#what-is-react)
* [**React Features**](#react-features)
* [**ReactJS Environment Setup**](#react-js-environment-setup)
* [**ReactJS Virtual DOM**](#reactjs-virtual-dom)
* [**React ES6**](#react-es6)
* [**Components**](#components)
* [**JSX**](#jsx)
* [**Props**](#props)
* [**State**](#state)
* [**useState**](#usestate)
* [**useEffect**](#useeffect)
* [**useRef**](#useref)
* [**useReducer**](#usereducer)
* [**useContext**](#usecontext)
* [**useCallback**](#usecallback)
* [**useMemo**](#usememo)
* [**Custom Hooks**](#custom-hooks)
* [**Component Design Principles**](#component-design-principles)
* [**Forms and Validation**](#forms-and-validation)
* [**React Router**](#react-router)
* [**Context API**](#context-api)
* [**Redux Toolkit**](#redux-toolkit)
* [**React.memo**](#reactmemo)
* [**Code Splitting and Lazy Loading**](#code-splitting-and-lazy-loading)
* [**Error Boundaries**](#error-boundaries)

---

##  **What is React?**

* ReactJS is an open-source JavaScript library used to create user interfaces in a declarative and efficient way.

* It was developed by Facebook and is widely used for creating interactive and dynamic web applications.

* It is a component-based front-end library responsible only for the view layer of a Model View Controller (MVC) architecture.

* React is used to create modular user interfaces and promotes the development of reusable UI components that display dynamic data.

### `Define UI`

The User Interface (UI) is the point of human-computer interaction and communication in a device. UI encompasses all the visual and interactive elements through which users interact with software, websites, applications, and devices to perform tasks, access information, or achieve specific goals.

### `There are two primary types of user interfaces:`

`Graphical User Interface (GUI):` GUI is the most common type of user interface and is characterized by graphical elements such as icons, buttons, windows, and menus. Users interact with GUIs by using input devices like a mouse, keyboard, or touch screen. Operating systems like Windows, macOS, and most mobile apps use GUIs.

`Command Line Interface (CLI):` CLI is a text-based user interface where users interact with a program or system by typing commands in a terminal or console. It is commonly used by developers, system administrators, and power users for tasks that require precise control and automation. Popular CLI environments include the Windows Command Prompt, macOS Terminal, and various Linux shells.

### `Why React?`

* Created and Maintained By Facebook.

* It has a huge community on GitHub.

* Component-Based Architecture.

* Efficient Virtual DOM, declarative syntax, reusability, rich ecosystem.

* Offers performance optimization, JSX, and wide adoption, making it a top choice for dynamic web applications like banking dashboards, portfolio trackers, and trading platforms.

### How does React work?

* React works by creating a virtual representation of the UI called the Virtual DOM in memory.

* Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

* When state changes occur (e.g., a stock price updates or a bank transaction posts), React efficiently calculates the minimal changes needed, updates the Virtual DOM, and then synchronizes these changes with the real DOM.

* React only changes what needs to be changed!

* React finds out what changes have been made, and changes only what needs to be changed.

### React.js History

* Current stable version of React.JS is V19.x (2024).

* Initial Release to the Public (V0.3.0) was in July 2013.

* React.JS was first used in 2011 for Facebook's Newsfeed feature.

* Facebook Software Engineer, Jordan Walke, created it.

* React 19 introduced Actions, `use()` hook, Server Components stable API, and improved hydration.

## React Features

* `Component-Based Architecture:` Building UIs using reusable and self-contained components for easier development and maintenance.

* `Virtual DOM:` Efficiently updates the actual DOM by minimizing direct manipulations, resulting in better performance.

* `Declarative Syntax:` Describes UI based on state, making it easier to manage and understand.

* `Unidirectional Data Flow:` Ensures predictable updates by flowing data in one direction.

* `JSX:` Embeds HTML-like syntax within JavaScript for intuitive UI representation.

* `Component Lifecycle:` Allows control over component creation, update, and destruction.

* `State and Props:` Manages component-specific and passed data for dynamic UIs.

* `Hooks:` Offers state and lifecycle functionalities to functional components.

* `Context API:` Facilitates state sharing across components without prop drilling.

* `Ecosystem:` Rich collection of libraries and tools for diverse functionalities.

* `License:` React is licensed under the MIT License.

### React Advantages

-   Component-Based Architecture
-   Virtual DOM
-   Declarative Syntax
-   One-Way Data Flow
-   Rich Ecosystem
-   Community and Support
-   Cross-Platform Development (with React Native)
-   SEO-Friendly (with SSR and Next.js)


### React Limitations

-   Learning Curve
-   Boilerplate Code
-   Tooling Complexity
-   Frequent Updates
-   Performance Overhead (if misused)
-   Unopinionated
-   Lack of Built-in State Management
-   UI Focus (may require additional libraries for non-UI features)


### `Prerequisites for React?`

1. Basic Knowledge of HTML, CSS, and JavaScript.

2. Basic Understanding of ES6 Features.

3. Basic Understanding of how to use npm (Node Package Manager).


## React JS Environment Setup

To run any React application, we need to first set up a ReactJS Development Environment.

- `Pre-requisite:` We must have NodeJS (v18+) and npx installed on our PC.
- `ReactJS Installation:` Using Vite (recommended for React 19) or create-react-app

**Option 1 – Vite (Recommended):**

- `Step 1:` Navigate to the folder where you want to create the project and open it in terminal

- `Step 2:` Run the following command

  ```bash
  npm create vite@latest my-finance-app -- --template react
  ```

- `Step 3:` Navigate to the newly created folder

  ```bash
  cd my-finance-app
  npm install
  ```

- `Step 4:` Start the development server

  ```bash
  npm run dev
  ```

**Option 2 – Create React App (legacy):**

  ```bash
  npx create-react-app <<Application_Name>>
  ```

  ![environment](/images/ES1.png)

  ![environment](/images/ES2.png)

- Navigate to the project folder:

  ```bash
  cd <<Application_Name>>
  ```

  ![environment](/images/ES3.png)

- Start the app:

  ```bash
  npm start
  ```

  ![environment](/images/ES4.png)

### React File and Folder Structure

In a React application, there are several files and folders in the root directory. Some of them are as follows:

1. `node_modules:` It contains the React library and any other third-party libraries needed.

2. `public:` It holds the public assets of the application. It contains the index.html where React will mount the application by default on the `<div id="root"></div>` element.

3. `src:` It contains the App.css, App.js, App.test.js, index.css, index.js, and serviceWorker.js files. Here, the App.js file is always responsible for displaying the output screen in React.

4. `package-lock.json:` It is generated automatically for any operations where npm package modifies either the node_modules tree or package.json.

5. `package.json:` It holds various metadata required for the project. It gives information to npm, which allows it to identify the project as well as handle the project's dependencies.

6. `README.md:` It provides the documentation to read about React topics.

## ReactJS Virtual DOM

`What is DOM?`

* DOM stands for 'Document Object Model'. In simple terms, it is a structured representation of the HTML elements that are present in a webpage or web app.

* DOM represents the entire UI of your application.

* The DOM is represented as a tree data structure.

* It contains a node for each UI element present in the web document.

* It is very useful as it allows web developers to modify content through JavaScript, also being in structured format helps a lot as we can choose specific targets and all the code becomes much easier to work with.

### `Disadvantages of real DOM?`

Every time DOM gets updated, the updated element and its children have to be rendered again to update the UI of our page. For this, each time there is a component update, the DOM needs to be updated and the UI components have to be re-rendered.

`Example:`

```js
// Simple getElementById() method
document.getElementById('account-balance').innerText = '$12,450.00';
```

When writing the above code in the console or in the JavaScript file, these things happen:

*   The browser parses the HTML to find the node with this id.
*   It removes the child element of this specific element.
*   Updates the element (DOM) with the new balance.
*   Recalculates the CSS for the parent and child nodes.
*   Updates the layout.
*   Finally, traverses the tree and paints it on the screen (browser) display.

### `What is Virtual DOM?`

React uses a Virtual DOM which is like a lightweight copy of the actual DOM (a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document.

### `What is ReactDOM?`

ReactDOM is a package that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing the various methods to manipulate DOM.

### `How to use ReactDOM?`

To use the ReactDOM in any React web app we must first install the react-dom package in our project. To install the react-dom package use the following command.

```bash
npm i react-dom
```

After installing the package use the following command to import the package in your application file.

```js
import ReactDOM from 'react-dom/client'
```

After installing react-dom it will appear in the dependencies in package.json file like:

```json
"dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
}
```

### `Important functions provided by ReactDOM`

* `createRoot():` The modern React 18+ API to mount a React application. Replaces the legacy `ReactDOM.render()`.
* `render():` (legacy) Used to render a single React Component or several Components wrapped together in a Component or a div element.
* `findDOMNode():` This function is generally used to get the DOM node where a particular React component was rendered. Deprecated in React 19 — prefer refs instead.
* `unmountComponentAtNode():` This function is used to unmount or remove the React Component that was rendered to a particular container.
* `hydrate():` / `hydrateRoot():` This method is equivalent to the render() method but is implemented while using server-side rendering.
* `createPortal():` Allows rendering a component into a DOM node that resides outside the current DOM hierarchy of the parent component.

### `Key features of ReactDOM:`

*   ReactDOM.createRoot() is the recommended entry point in React 18+.
*   ReactDOM uses observables thus provides an efficient way of DOM handling.
*   ReactDOM can be used on both the client-side and server-side.

## React ES6

* ES6 stands for ECMAScript 6.

* ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, published in 2015, also known as ECMAScript 2015.

* ECMAScript is a scripting language specification that defines the core features of JavaScript, the most widely used programming language for web development.

* ES6 introduced significant enhancements and new features to the JavaScript language, making it more powerful, expressive, and developer-friendly.

### `Why should I learn ES6?`

React uses ES6, and you should be familiar with some of the new features like:

1. [Classes](#es6-classes)

2. [Arrow Functions](#es6-arrow-functions)

3. [Variables](#es6-variable) (let, const, var)

4. [Array Methods](#es6-array-method)

5. [Destructuring](#es6-destructuring)

6. [Rest Parameter](#es6-rest-parameter)

7. [Ternary Operator](#es6-ternary-operator)

8. [Spread Operator](#es6-spread-operator)

### ES6 Classes

* ES6 introduced classes.
* A class is a type of function, but instead of using the keyword `function` to initiate it, we use the keyword `class`, and the properties are assigned inside a `constructor()` method.

`Example:`

```js
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
}

const account = new BankAccount("Alice", 10000);
console.log(account.owner); // Alice
```

`Output:`

```bash   +@output
Alice
```

>Note: The constructor function is called automatically when the object is initialized.


#### `Method in classes`

You can add your own methods in a class:

`Example:`

```js
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  getSummary() {
    return `${this.owner} has $${this.balance.toLocaleString()} in their account.`;
  }
}

const account = new BankAccount("Alice", 10000);
console.log(account.getSummary());
```

`Output:`

```bash   +@output
Alice has $10,000 in their account.
```

#### `Class Inheritance`

* To create a class inheritance, use the `extends` keyword.

* A class created with a class inheritance inherits all the methods from another class:

`Example:`

Create a class named `SavingsAccount` which will inherit the methods from the `BankAccount` class:

```js
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  getSummary() {
    return `${this.owner} has $${this.balance.toLocaleString()}`;
  }
}

class SavingsAccount extends BankAccount {
  constructor(owner, balance, interestRate) {
    super(owner, balance);
    this.interestRate = interestRate;
  }

  getInterestEarned() {
    return this.getSummary() + ` earning ${this.interestRate}% interest.`;
  }
}

const savings = new SavingsAccount("Bob", 50000, 4.5);
console.log(savings.getInterestEarned());
```

`Output:`

```bash   +@output
Bob has $50,000 earning 4.5% interest.
```

The `super()` method refers to the parent class.

By calling the `super()` method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.

### Run Example

**File:** `examples_ts/react/01_es6_classes.ts`

```bash
npx ts-node examples_ts/react/01_es6_classes.ts
```

**Expected Output:**
```
Alice Sharma — Savings Account | Balance: ₹1,00,000 | Since: 2019
Bob Patel has ₹50,000 earning 4.5% p.a. (₹2,250/yr)
```

After deposit of ₹10,000 and withdrawal of ₹5,000, the `getSummary()` reflects the updated balance. `SavingsAccount` inherits all `BankAccount` methods via `extends` and adds its own `applyInterest()`.

### ES6 Arrow Functions

* The arrow function is a new feature of ES6. It allows the developer to create a function that has lexical `this` binding and no arguments.
* Arrow functions offer a compressed and short version of a function expression and need fewer keystrokes than regular JavaScript functions.
* Arrow functions are always anonymous, meaning there is no need to use the keyword `function` when defining them.
* They also do not have their own `this` value, meaning that `this` inside an arrow function will refer to the one where it was created rather than where it was called from.
* Arrow functions allow us to write shorter function syntax.


#### `When to use Arrow Functions?`

1. Arrow functions are great for performance and making declarative code more readable.

2. Useful scenarios in a financial app:

* When you need to map over transaction lists.
* When you want a method to be called on a component's props.
* When you want to use a callback function for data transformations.


#### **Before — without an arrow function**

```js
const transactions = [500, -200, 1500, -300];

const positiveOnly = transactions.filter(function(t) {
  return t > 0;
});

console.log(positiveOnly); // [500, 1500]
```

`Output:`

![image](images/ES6.png)


#### **With Arrow Function:**

```js
const transactions = [500, -200, 1500, -300];

const positiveOnly = transactions.filter(t => t > 0);

console.log(positiveOnly); // [500, 1500]
```

`Output:`

![image](images/ES6Arrow.png)


#### **Arrow Function With Parameters**

```js
const formatCurrency = (amount, currency = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

console.log(formatCurrency(12450.75)); // $12,450.75
```

![image](images/ES6Arrow1.png)

### Run Example

**File:** `examples_ts/react/02_es6_arrow_functions.ts`

```bash
npx ts-node examples_ts/react/02_es6_arrow_functions.ts
```

**Expected Output:**
```
Credits: [50000, 20000]
formatCurrency: ₹50,000.00
Total credits: ₹70,000
```

The file shows the before/after comparison of `filter()` with and without arrow functions, then demonstrates default parameters with `formatCurrency`, and finally chains `.map()` and `.reduce()` to compute a running total.

### ES6 Variable

Before ES6 there was only one way of defining your variables: with the `var` keyword. If you did not define them, they would be assigned to the global object. Unless you were in strict mode, then you would get an error if your variables were undefined.

Now, with ES6, there are three ways of defining your variables: `var`, `let`, and `const`.

>Note:
>
>* The `var` keyword was used in all JavaScript code from 1995 to 2015.
>
>* The `let` and `const` keywords were added to JavaScript in 2015.
>
>* The `var` keyword should only be used in code written for older browsers.

#### `Var`

* If you use `var` outside of a function, it belongs to the global scope.
* If you use `var` inside of a function, it belongs to that function.
* If you use `var` inside of a block, i.e. a for loop, the variable is still available outside of that block.
* `var` has a function scope, not a block scope.

`Example:`

```js
var accountType = "Savings";
```


#### `let`

* `let` is the block scoped version of `var`, and is limited to the block (or expression) where it is defined.

* If you use `let` inside of a block, i.e. a for loop, the variable is only available inside of that loop.

* `let` has a block scope.

`Example:`

```js
let balance = 10000;
```

#### 1. `Variables defined with let cannot be Redeclared.`

```js
let balance = 10000;
let balance = 20000; // SyntaxError: Identifier 'balance' has already been declared
```

Variables declared with `let` cannot be redeclared. But variables declared with `var` can be redeclared.

```js
var balance = 10000;
var balance = 20000; // No error — not recommended
```

#### 2. `Variables defined with let must be Declared before use.`

```js
let total = amount + tax; // ReferenceError: Cannot access 'amount' before initialization
let amount = 100;
```

`var` allows such behaviour. Variable will be assigned the value `undefined` before initialisation. This is called Hoisting.

```js
var total = amount + tax;
console.log(total); // NaN
var amount = 100;
```

#### `const`

* `const` is a variable that once it has been created, its value can never change.
* `const` has a block scope.
* The keyword `const` is a bit misleading. It does not define a constant value. It defines a constant reference to a value.
* Because of this you CANNOT:

  * Reassign a constant value
  * Reassign a constant array
  * Reassign a constant object

* But you CAN:

  * Change the elements of a constant array.
  * Change the properties of a constant object.

`Example:`

```js
const TAX_RATE = 0.18; // GST rate — never changes
```

#### 1. Variables defined with const must be Initialised

```js
const TAX_RATE;
TAX_RATE = 0.18; // SyntaxError: Missing initializer in const declaration
```

```js
let TAX_RATE;
TAX_RATE = 0.18;
console.log(TAX_RATE); // 0.18
```

#### 2. Variables defined with const cannot be Reassigned

```js
const TAX_RATE = 0.18;
TAX_RATE = 0.20; // TypeError: Assignment to constant variable.
```

```js
let TAX_RATE = 0.18;
TAX_RATE = 0.20;
console.log(TAX_RATE); // 0.20
```

### Run Example

**File:** `examples_ts/react/03_es6_variables.ts`

```bash
npx ts-node examples_ts/react/03_es6_variables.ts
```

**Expected Output:**
```
var hoisting demo — balance is: undefined
let block scope — final balance: 1000
const TAX_RATE: 0.18  (cannot reassign)
const account object — can mutate properties: { owner: 'Alice', balance: 160000 }
```

Demonstrates `var` hoisting (balance reads as `undefined` before declaration), `let` block-scope isolation inside loops, `const` preventing reassignment, and `const` objects whose properties remain mutable.

### ES6 Array Method

There are many JavaScript array methods.

* One of the most useful in React is the `.map()` array method.
* The `.map()` method allows you to run a function on each item in the array, returning a new array as the result.
* In React, `map()` can be used to generate lists — for example, a transaction history list.

#### Generate a list of items from an array

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const transactions = [
  { id: 1, desc: "Salary Credit", amount: 50000 },
  { id: 2, desc: "Electricity Bill", amount: -1200 },
  { id: 3, desc: "Grocery", amount: -3500 },
];

const TransactionList = () => (
  <ul>
    {transactions.map(t => (
      <li key={t.id} style={{ color: t.amount > 0 ? "green" : "red" }}>
        {t.desc}: ₹{Math.abs(t.amount).toLocaleString()}
      </li>
    ))}
  </ul>
);

createRoot(document.getElementById('root')).render(<TransactionList />);
```

`Output:`

![image](images/arraymethod.png)

> The `.map()` JSX example above requires a Vite/React project. See the **Run Example** blocks under [Components](#components) for full JSX setup instructions.

### ES6 Destructuring

* To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.
* Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.
* Destructuring makes it easy to extract only what is needed.

#### `Destructuring Arrays`

Here is the old way of assigning array items to a variable:

**Before**

```js
const accounts = ["savings", "checking", "investment"];

const savings    = accounts[0];
const checking   = accounts[1];
const investment = accounts[2];
```

**With Destructuring**

```js
const accounts = ["savings", "checking", "investment"];
const [savings, checking, investment] = accounts;
```

>When destructuring arrays, the order that variables are declared is important.

#### `Destructuring Objects`

Here is the old way of using an object inside a function:

**Before**

```js
const transaction = {
  id: "TXN001",
  amount: 5000,
  type: "credit",
  date: "2024-05-15",
  merchant: "HDFC Bank"
};

// old way
function displayTransaction(txn) {
  const message = `${txn.type.toUpperCase()}: ₹${txn.amount} on ${txn.date} from ${txn.merchant}`;
}
```

**With Destructuring**

```js
function displayTransaction({ id, type, amount, date, merchant }) {
  const message = `${type.toUpperCase()}: ₹${amount} on ${date} from ${merchant}`;
  return message;
}
```

`Output:`

```bash  +@output
CREDIT: ₹5000 on 2024-05-15 from HDFC Bank
```


### ES6 Spread Operator

* ES6 introduced a new operator referred to as a spread operator, which consists of three dots (`...`). It allows an iterable to expand in places where more than zero arguments are expected. It gives us the privilege to obtain the parameters from an array.
* Spread operator syntax is similar to the rest parameter, but it is entirely opposite of it.

`Syntax`

```js
var variablename1 = [...value];
```

`Example:`

```js
const debitTransactions  = [500, 200, 1500];
const creditTransactions = [10000, 5000];
const allTransactions    = [...debitTransactions, ...creditTransactions];

console.log(allTransactions); // [500, 200, 1500, 10000, 5000]
```

`Output:`

![image](images/spread1.png)

The spread operator is often used in combination with destructuring.

`Example:`

Assign the first and second transactions to variables and put the rest in an array:

```js
const transactions = [500, 200, 1500, 800, 300];
const [first, second, ...remaining] = transactions;

console.log(first);     // 500
console.log(second);    // 200
console.log(remaining); // [1500, 800, 300]
```

`Output:`

![image](images/spread2.png)


`We can use the spread operator with objects too:`

`Example:`

**Merging two account objects**

```js
const baseAccount = {
  owner: "Alice",
  type: "savings",
  currency: "INR"
};

const accountDetails = {
  balance: 150000,
  interestRate: 4.5,
  currency: "USD" // overrides baseAccount.currency
};

const fullAccount = { ...baseAccount, ...accountDetails };
console.log(fullAccount);
```

`Output:`

![image](images/spread3.png)

> Notice the properties that did not match were combined, but the property that did match, `currency`, was overwritten by the last object that was passed, `accountDetails`.

### ES6 Rest Parameter

* The rest parameter is introduced in ECMAScript 2015 or ES6, which improves the ability to handle parameters.
* The rest parameter allows us to represent an indefinite number of arguments as an array. By using the rest parameter, a function can be called with any number of arguments.
* Before ES6, the arguments object of the function was used. The arguments object is not an instance of the Array type. Therefore, we can't use the filter() method directly.
* The rest parameter is prefixed with three dots (`...`). Although the syntax of the rest parameter is similar to the spread operator, it is entirely opposite from the spread operator.
* The rest parameter has to be the last argument because it is used to collect all of the remaining elements into an array.

`Syntax`

```js
function fun(a, b, ...theArgs) {
  // statements
}
```

`Example`

```js
function calculatePortfolioTotal(label, ...amounts) {
  const total = amounts.reduce((sum, amt) => sum + amt, 0);
  console.log(`${label} Total: ₹${total.toLocaleString()}`);
}

calculatePortfolioTotal("Portfolio", 50000, 30000, 20000, 15000);
// Portfolio Total: ₹1,15,000
```

* All the arguments that we have passed in the function will map to the parameter list. As stated above, the rest parameter (`...`) should always be at last in the list of arguments. If we place it anywhere else, it will cause an error.

#### `Difference between Rest Parameter and arguments object`

The rest parameter and arguments object are different from each other. Let's see the difference between the rest parameter and the arguments object:

* The arguments object is an array-like (but not array), while the rest parameters are array instances.

* The arguments object does not include methods such as sort, map, forEach, or pop, but these methods can be directly used in rest parameters.

#### `Rest Parameters and Destructuring`

* Destructuring means to break down a complex structure into simpler parts. We can define an array as the rest parameter.

* The passed-in arguments will be broken down into the array. Rest parameter supports array destructuring only.

* By using the rest parameter, we can put all the remaining elements of an array in a new array.

`Example`

```js
const portfolio = ["AAPL", "GOOGL", "TSLA", "MSFT", "AMZN"];

const [primary, secondary, ...otherStocks] = portfolio;
console.log(primary);     // AAPL
console.log(secondary);   // GOOGL
console.log(otherStocks); // ["TSLA", "MSFT", "AMZN"]
```

### Run Example

**File:** `examples_ts/react/04_es6_destructuring_spread_rest.ts`

```bash
npx ts-node examples_ts/react/04_es6_destructuring_spread_rest.ts
```

**Expected Output:**
```
Array destructuring — savings: savings, checking: checking
Object destructuring — CREDIT: ₹5000 on 2024-05-15 from HDFC Bank
Spread merge — { owner: 'Alice', type: 'savings', currency: 'USD', balance: 150000, interestRate: 4.5 }
Rest — first: 500, second: 200, remaining: [1500, 800, 300]
Portfolio top 2: AAPL, GOOGL | others: TSLA, MSFT, AMZN
```

Array and object destructuring extract only the needed values; spread merges objects (last key wins for duplicates); rest collects remaining elements into an array.

### ES6 Ternary Operator

The ternary operator is a simplified conditional operator like if / else.

`Syntax:`

```js
condition ? <expression if true> : <expression if false>
```

`Here is an example using if / else:`

**Before:**

```js
function getTransactionLabel(amount) {
  if (amount > 0) {
    return "Credit";
  } else {
    return "Debit";
  }
}
```

**Example with Ternary Operator:**

```js
const getTransactionLabel = (amount) => amount > 0 ? "Credit" : "Debit";

console.log(getTransactionLabel(5000));  // Credit
console.log(getTransactionLabel(-1200)); // Debit
```

`Output:`

![image](images/ternary.png)

The `Output` changes when the amount is negative

![image](images/ternary1.png)

`Example Of Rendering Condition (Using Ternary Operator in React)`

`TransactionBadge.jsx`

```jsx
import { useState } from 'react'

function TransactionBadge() {
  const [amount, setAmount] = useState(5000);
  const [userType, setUserType] = useState(2);

  return (
    <div>
      {amount > 0 ? <h2 style={{color:"green"}}>Credit: ₹{amount}</h2> : <h2 style={{color:"red"}}>Debit: ₹{Math.abs(amount)}</h2>}
      {userType === 1 ? <p>Premium Account</p> : userType === 2 ? <p>Standard Account</p> : <p>Basic Account</p>}
    </div>
  )
}
export default TransactionBadge;
```

`App.jsx`

```jsx
import TransactionBadge from './TransactionBadge'

function App() {
  return (
    <div className="App">
      <TransactionBadge />
    </div>
  );
}

export default App;
```

![image](images/ternary3.png)

![image](images/ternarytrue.png)

> The JSX ternary example above requires a Vite/React project. The pure JS ternary (`getTransactionLabel`) can be run with Node — see the run block below.

### Run Example (pure TS portion)

**File:** `examples_ts/react/04_es6_destructuring_spread_rest.ts`

```bash
npx ts-node examples_ts/react/04_es6_destructuring_spread_rest.ts
```

The ternary section (`getTransactionLabel`) is included in this file alongside destructuring. For the TSX `TransactionBadge` component, copy it into a Vite project (see setup instructions below).

---

## Components

Components are the building blocks of a React application. A functional component is a plain JavaScript function that accepts props as input and returns JSX describing the UI. Components can be composed together — a parent component renders child components — enabling a tree-like structure for the entire UI.

In React 19, functional components are the standard. Class components still work but are no longer recommended for new code.

**In React, we mainly have two types of components:**

`Functional Components:` Functional components are simply JavaScript functions. We can create a functional component in React by writing a JavaScript function. These functions may or may not receive data as parameters.

>**Note:** The name of a component should always start with a capital letter. This is done to differentiate a component tag from HTML tags.

`Class Components:` Class components are a legacy pattern. They can hold state and lifecycle methods. All class component use cases are now covered by hooks in functional components.

### Syntax

```jsx
function ComponentName(props) {
  return <JSX />;
}
```

### Example

```jsx
function AccountCard({ owner, balance, accountType }) {
  return (
    <div className="account-card">
      <h2>{owner}</h2>
      <p>Type: {accountType}</p>
      <p>Balance: ₹{balance.toLocaleString()}</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <AccountCard owner="Alice" balance={150000} accountType="Savings" />
      <AccountCard owner="Bob"   balance={85000}  accountType="Checking" />
    </div>
  );
}
```

---

## JSX

JSX (JavaScript XML) is a syntax extension that lets you write HTML-like markup inside JavaScript. React transforms JSX into `React.createElement()` calls under the hood. JSX must have a single root element, and JavaScript expressions are embedded using curly braces `{}`.

`JSX Syntax`

```jsx
const element = <tagName attribute="value">{expression}</tagName>;
```

`Expressions in JSX`

* In React we are allowed to use normal JavaScript expressions with JSX.
* To embed any JavaScript expression in a piece of code written in JSX we will have to wrap that expression in curly braces `{}`.

### Syntax

```jsx
const element = <tagName attribute="value">{expression}</tagName>;
```

### Example

```jsx
const account = { owner: "Alice", balance: 150000, type: "Savings" };

function AccountCard() {
  return (
    <div className="card">
      <h2>{account.owner}</h2>
      <p>Type: {account.type}</p>
      <p>Balance: ₹{account.balance.toLocaleString()}</p>
      {account.balance > 100000 && <span className="badge">Premium</span>}
    </div>
  );
}
```

#### `Attributes in JSX`

JSX allows us to use attributes with the HTML elements just like we do with normal HTML. But instead of the normal naming convention of HTML, JSX uses the camelCase convention for attributes (e.g., `className` instead of `class`, `onClick` instead of `onclick`).

#### `Wrapping elements or Children in JSX`

Consider a situation where you want to render multiple tags at a time. To do this we need to wrap all of these tags under a parent tag and then render this parent element to the HTML. In modern React, you can use **fragments** (`<>...</>`) to avoid adding extra DOM nodes:

```jsx
function TransactionSummary() {
  return (
    <>
      <h2>Transaction Summary</h2>
      <p>Total Credits: ₹50,000</p>
      <p>Total Debits: ₹12,000</p>
    </>
  );
}
```

### Run Example

**Setup (one-time):**

```bash
npm create vite@latest react-examples -- --template react-ts
cd react-examples
npm install
```

**File:** `examples_ts/react/05_jsx_basics.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

The browser renders an `AccountCard` showing Alice's name, account type, balance (₹1,50,000), and a **Premium** badge (shown because balance > ₹1,00,000). The `TransactionSummary` fragment renders two `<p>` tags without a wrapping `<div>`.

### Run Example

**File:** `examples_ts/react/06_components.tsx` → copy to `src/App.tsx`, then run `npm run dev`.

**Expected Output:**

A page with three account cards (Alice — Savings, Bob — Checking, Charlie — Investment) rendered by `AccountList`, followed by a `PortfolioSummary` card showing total value, gain/loss, and a count of holdings. Each `AccountCard` is a reusable leaf component composed inside the container components.

---

## Props

Props (short for properties) are read-only inputs passed from a parent component to a child component. They allow data to flow down the component tree. Props can be strings, numbers, arrays, objects, or functions. A child component must never mutate its props.

### Syntax

```jsx
// Parent passes props
<Child propName={value} />

// Child receives props
function Child({ propName }) { ... }
```

### Example

```jsx
function TransactionRow({ description, amount, date, type }) {
  return (
    <tr style={{ color: type === "credit" ? "green" : "red" }}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{type === "credit" ? "+" : "-"}₹{Math.abs(amount).toLocaleString()}</td>
    </tr>
  );
}

function App() {
  return (
    <table>
      <tbody>
        <TransactionRow
          description="Salary Credit"
          amount={50000}
          date="2024-05-01"
          type="credit"
        />
        <TransactionRow
          description="Electricity Bill"
          amount={1200}
          date="2024-05-03"
          type="debit"
        />
      </tbody>
    </table>
  );
}
```

>**Note:** React Props are read-only! You will get an error if you try to change their value.

### Run Example

**File:** `examples_ts/react/07_props.tsx` → copy to `src/App.tsx`

Run `npm run dev` in a Vite project.

**Expected Output:**

A transaction table renders two rows using `TransactionRow` — one green credit (Salary, +₹50,000) and one red debit (Electricity Bill, -₹1,200). `AccountBadge` below shows tier badges (Premium in gold, Standard in silver) using default props when `tier` or `currency` is not explicitly passed.

### State Vs. Props

| Props              | State                      |
|--------------------|----------------------------|
| Props are read-only. | State changes can be asynchronous. |
| Props are immutable. | State is mutable. |
| Props allow you to pass data from one component to other components as an argument. | State holds information about the components. |
| Props can be accessed by the child component. | State cannot be accessed by child components. |
| Props are used to communicate between components. | States can be used for rendering dynamic changes with the component. |
| Stateless component can have Props. | Stateless components cannot have State. |
| Props make components reusable. | State cannot make components reusable. |
| Props are external and controlled by whatever renders the component. | The State is internal and controlled by the React Component itself. |

---

## State

State is mutable data local to a component. When state changes, React re-renders that component and its children. Unlike props which come from outside, state is owned and managed by the component itself. The `useState` hook is the primary way to add state to functional components.

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

### Example

```jsx
import { useState } from "react";

function PortfolioValue() {
  const [investedAmount, setInvestedAmount] = useState(100000);
  const [returns, setReturns] = useState(12000);

  return (
    <div>
      <p>Invested: ₹{investedAmount.toLocaleString()}</p>
      <p>Returns: ₹{returns.toLocaleString()}</p>
      <p>Total: ₹{(investedAmount + returns).toLocaleString()}</p>
      <button onClick={() => setReturns(r => r + 1000)}>+₹1,000 Returns</button>
    </div>
  );
}
```

> The State section introduces the concept. The full interactive example is in file `08_state_usestate.jsx` — see the `useState` run block below.

---

## useState

`useState` is the most fundamental React hook. It returns a state value and a setter function. When you call the setter, React schedules a re-render with the new value. For updates based on the previous value, always use the functional form of the setter to avoid stale closure bugs.

### Syntax

```jsx
const [value, setValue] = useState(initialValue);

// Functional update (safe with async/batched updates)
setValue(prev => prev + 1);
```

### Example

```jsx
import { useState } from "react";

function BankBalanceTracker() {
  const [balance, setBalance] = useState(50000);

  const deposit  = (amt) => setBalance(prev => prev + amt);
  const withdraw = (amt) => setBalance(prev => Math.max(0, prev - amt));

  return (
    <div>
      <h2>Account Balance: ₹{balance.toLocaleString()}</h2>
      <button onClick={() => deposit(5000)}>Deposit ₹5,000</button>
      <button onClick={() => withdraw(2000)}>Withdraw ₹2,000</button>
    </div>
  );
}
```

### Run Example

**File:** `examples_ts/react/08_state_usestate.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

Initial balance shows **₹50,000**. Clicking **Deposit ₹5,000** increments it to ₹55,000. Clicking **Withdraw ₹2,000** decrements it. Balance never drops below ₹0 (guarded by `Math.max(0, prev - amt)`). A transaction history list grows with each action showing credit/debit entries.

---

## useEffect

`useEffect` lets you synchronize a component with an external system (API calls, subscriptions, timers, DOM mutations). It runs after render. The dependency array controls when it re-runs: empty `[]` means run once on mount, `[value]` means re-run when `value` changes. Return a cleanup function to cancel subscriptions or clear timers on unmount.

### Explanation

Think of `useEffect` as a way to say: *"After the component appears on screen, do this action."* 

- **Without dependencies `[]`**: Runs once when component mounts (like page load)
- **With dependencies `[var]`**: Runs again whenever `var` changes
- **No dependencies**: Runs every single render (risky!)
- **Cleanup function**: Runs before the effect runs again or when component unmounts (cleanup)

Common use cases:
- Fetch data from an API when component loads
- Set up a timer or animation
- Subscribe to events and clean up later
- Update the page title

Example: *"Load user data when the page opens, and stop loading when the user ID changes"*


### Syntax

```jsx
useEffect(() => {
  // side effect logic
  return () => {
    // cleanup (optional)
  };
}, [dependencies]);
```

### Example

```jsx
import { useState, useEffect } from "react";

function StockPrice({ symbol }) {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/stocks/${symbol}`)
      .then(res => res.json())
      .then(data => {
        if (!cancelled) {
          setPrice(data.price);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true; // cleanup: ignore stale response if symbol changes
    };
  }, [symbol]);

  if (loading) return <p>Loading {symbol} price...</p>;
  return <h2>{symbol}: ₹{price?.toLocaleString()}</h2>;
}
```

### Run Example

**File:** `examples_ts/react/09_useeffect.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

- `StockPrice` shows "Loading RELIANCE price…" briefly, then displays the simulated price (e.g., **RELIANCE: ₹2,850**). Changing the symbol via the dropdown fires a new effect and cancels the previous fetch.
- `LiveBalance` polls every 2 seconds, updating the displayed balance. The **Pause** button stops polling; **Resume** restarts it. The cleanup function clears `setInterval` on unmount.
- `PageTitleUpdater` shows `document.title` changing in the browser tab as you type.

---

## useRef

`useRef` returns a mutable ref object whose `.current` property persists across renders without triggering re-renders. It is commonly used to access DOM nodes directly (e.g., focus an input) or to hold a mutable value like a timer ID or previous state value.

### Explaination

Think of `useRef` as a **"sticky note"** for your component:
- **useState** updates the note and re-renders when it changes
- **useRef** updates the note silently without re-rendering

**Key differences from useState:**
- Changing a ref **does not** trigger a re-render
- You access/update the value via `.current` property
- Great for DOM access (focusing inputs, playing videos) or tracking values that don't need UI updates

**Real-world analogy:** If `useState` is a scoreboard that updates the crowd every time it changes, `useRef` is a notebook the referee keeps for internal tracking only.

### Syntax

```jsx
const ref = useRef(initialValue);
ref.current; // access or mutate the value
```

### Example

```jsx
import { useRef } from "react";

function TransferForm() {
  const amountRef = useRef(null);

  const handleFocus = () => {
    amountRef.current.focus();
    amountRef.current.select(); // select existing text for quick edit
  };

  return (
    <div>
      <label>Transfer Amount (₹):</label>
      <input ref={amountRef} type="number" placeholder="Enter amount" />
      <button onClick={handleFocus}>Edit Amount</button>
    </div>
  );
}
```

### Run Example

**File:** `examples_ts/react/10_useref.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

- `TransferForm` — clicking **Edit Amount** focuses the number input and selects any existing text, ready for immediate re-entry. The ref accesses the DOM node directly without triggering a re-render.
- `RenderCounter` — a counter below shows how many times the component has rendered. The ref-stored count updates on every render but doesn't cause another render (no infinite loop).
- `PreviousBalanceTracker` — as you click deposit/withdraw, the component shows both the current and previous balance. The previous value is stored in a ref updated after each render via `useEffect`.

---

## useReducer

`useReducer` is an alternative to `useState` for managing complex state logic. It follows the Redux pattern: you dispatch an action, and a reducer function computes the next state from the previous state and the action. Prefer `useReducer` when state transitions depend on multiple sub-values or when next state depends on the previous in a non-trivial way.

### Beginner Explanation

Think of `useReducer` like a **vending machine**:
- **Current State** = what's currently in the machine (coins, inventory)
- **Action** = what you do (insert coin, press button)
- **Reducer Function** = the machine's logic (take action, update state, give output)

Instead of directly changing state like `updateBalance("action", value)`, you describe *what happened* (`{ type: "deposit", payload: 5000 }`), and the reducer decides how to update the state based on that action. This is cleaner when you have multiple related state changes.

**When to use it:**
- Multiple state variables that update together
- Complex state logic with many transitions
- Easier to test (pure function)

### Syntax

```jsx
const [state, dispatch] = useReducer(reducerFn, initialState);
dispatch({ type: "ACTION_TYPE", payload: value });
```

### Example

```jsx
import { useReducer } from "react";

const initialState = { balance: 50000, transactions: [] };

function walletReducer(state, action) {
  switch (action.type) {
    case "deposit":
      return {
        balance: state.balance + action.payload,
        transactions: [...state.transactions, { type: "credit", amount: action.payload }],
      };
    case "withdraw":
      if (action.payload > state.balance) return state;
      return {
        balance: state.balance - action.payload,
        transactions: [...state.transactions, { type: "debit", amount: action.payload }],
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function Wallet() {
  const [state, dispatch] = useReducer(walletReducer, initialState);

  return (
    <div>
      <h2>Wallet Balance: ₹{state.balance.toLocaleString()}</h2>
      <button onClick={() => dispatch({ type: "deposit",  payload: 5000 })}>Deposit ₹5,000</button>
      <button onClick={() => dispatch({ type: "withdraw", payload: 2000 })}>Withdraw ₹2,000</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <ul>
        {state.transactions.map((t, i) => (
          <li key={i} style={{ color: t.type === "credit" ? "green" : "red" }}>
            {t.type}: ₹{t.amount.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Run Example

**File:** `examples_ts/react/11_usereducer.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

Initial wallet balance is **₹50,000**. Each button dispatches an action to the reducer:
- **Deposit ₹5,000** → balance becomes ₹55,000, a "credit" entry appears in the list
- **Withdraw ₹2,000** → balance becomes ₹53,000, a "debit" entry appears
- **Withdraw more than balance** → state is unchanged (reducer guards against overdraft)
- **Reset** → balance and transaction list return to initial state

---

## useContext

`useContext` lets a component read a context value that was provided higher up in the tree without passing props through every level. It must be used with `React.createContext` and a `Provider`. The component re-renders whenever the context value changes.

### Explanation

**Problem:** Passing data deeply nested components requires "prop drilling" — passing props through many intermediate components that don't need them.

**Solution:** `useContext` creates a "global" value accessible to any component without passing props. Think of it as a shared bulletin board where any child component can read posted announcements.

### How It Works

1. **Create a Context** — `createContext()` creates a context object
2. **Provide a Value** — Wrap components with `Provider` and pass a value
3. **Consume the Value** — Use `useContext()` inside child components to read the value

### Syntax

```jsx
const value = useContext(MyContext);
```

### Example: Bank Account Management

This example shows a bank account where the header and balance card both need account data **without prop drilling**:

```jsx
import { createContext, useContext, useState } from "react";

const AccountContext = createContext(null);

function AccountProvider({ children }) {
  const [account, setAccount] = useState({ owner: "Alice", balance: 150000, type: "Premium" });

  const updateBalance = (amount) =>
    setAccount(prev => ({ ...prev, balance: prev.balance + amount }));

  return (
    <AccountContext.Provider value={{ account, updateBalance }}>
      {children}
    </AccountContext.Provider>
  );
}

function AccountHeader() {
  const { account } = useContext(AccountContext);
  return (
    <header>
      <span>Welcome, {account.owner}</span>
      <span> | Balance: ₹{account.balance.toLocaleString()}</span>
      <span> | {account.type}</span>
    </header>
  );
}

function App() {
  return (
    <AccountProvider>
      <AccountHeader />
    </AccountProvider>
  );
}
```

### Run Example

**File:** `examples_ts/react/12_usecontext.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

The `AccountHeader` at the top displays **"Welcome, Alice | Balance: ₹1,50,000 | Premium"** without receiving any props — it reads directly from `AccountContext`. The `BalanceCard` below shows the same balance and includes deposit/withdraw buttons that update the shared context, instantly refreshing the header. No prop drilling required.

---

## React.memo

`React.memo` is a higher-order component that memoizes a functional component. It prevents unnecessary re-renders by checking if the props have changed. If props are the same as the previous render, the component skips re-rendering and returns the cached result.

### Explanation

**Problem:** By default, child components re-render whenever their parent re-renders, even if the props haven't changed. This causes performance issues with complex components.

**Solution:** Wrap your component with `React.memo`. It compares the current props with the previous props. If they're the same, it reuses the previous render. Only if props change does it re-render.

**Real-world analogy:** Your phone checks if the software has new updates. If there are no updates (same version), it doesn't reinstall. Only if the version changes does it perform a reinstall.

### Syntax

```jsx
const MemoizedComponent = React.memo(MyComponent);
// or
export default React.memo(MyComponent);
```

### Example

```jsx
import React, { useState, useCallback } from "react";

const UserCard = React.memo(({ name, email, onUpdate }) => {
  console.log(`Rendering UserCard for: ${name}`);
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <button onClick={onUpdate}>Update Profile</button>
    </div>
  );
});

function UserDashboard() {
  const [count, setCount] = useState(0);
  const [userData] = useState({ name: "Alice", email: "alice@bank.com" });

  const handleUpdate = useCallback(() => {
    console.log("Profile updated");
  }, []);

  return (
    <div>
      <UserCard name={userData.name} email={userData.email} onUpdate={handleUpdate} />
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
    </div>
  );
}
```

### Run Example

**File:** `examples_ts/react/23_react_memo.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

When you click **Increment**, the counter updates but `UserCard` does **not** re-render (no console log) because its props remain unchanged. Only when `userData` or `onUpdate` changes will `UserCard` re-render. This improves performance by preventing unnecessary renders.

---


## useCallback

`useCallback` returns a memoized version of a callback function that only changes if its dependencies change. This is useful when passing callbacks to child components that are wrapped in `React.memo`, preventing unnecessary re-renders caused by new function references on every render.

### Explanation

**Problem:** Every time a parent component renders, new function references are created for callbacks, even if the logic hasn't changed. When you pass these new functions as props to child components (wrapped in `React.memo`), React treats them as "new" props and re-renders the children unnecessarily.

**Solution:** `useCallback` "remembers" your function. As long as dependencies don't change, the same function reference is reused across renders. This prevents child components from re-rendering when they shouldn't.

**Real-world analogy:** Instead of hiring a new driver every time you go shopping (wasteful), you use the same trusted driver unless your route changes.

### Syntax

```jsx
const memoizedFn = useCallback(() => {
  // function body
}, [dependencies]);
```

### Example

```jsx
import { useState, useCallback } from "react";
import React from "react";

const TransactionButton = React.memo(({ onTransact, label }) => {
  console.log(`Rendering: ${label}`);
  return <button onClick={onTransact}>{label}</button>;
});

function BankingDashboard() {
  const [balance, setBalance] = useState(50000);

  const handleDeposit = useCallback(() => {
    setBalance(prev => prev + 5000);
  }, []); // stable reference — no dependencies

  const handleWithdraw = useCallback(() => {
    setBalance(prev => Math.max(0, prev - 2000));
  }, []);

  return (
    <div>
      <h2>Balance: ₹{balance.toLocaleString()}</h2>
      <TransactionButton onTransact={handleDeposit}  label="Deposit ₹5,000" />
      <TransactionButton onTransact={handleWithdraw} label="Withdraw ₹2,000" />
    </div>
  );
}
```

### Run Example

**File:** `examples_ts/react/13_usecallback_usememo.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

Open the browser console. When you click **Deposit** or **Withdraw**, only that button logs "Rendering: …" — the other `TransactionButton` does **not** re-render because `useCallback` gives each handler a stable reference across renders. Without `useCallback`, both buttons would re-render on every balance change.

---


## useMemo

`useMemo` memoizes the result of an expensive computation so it is only recalculated when its dependencies change. Use it to avoid rerunning heavy calculations on every render. Do not use it for every value — only when profiling shows a performance problem.

### Explanation

When a component re-renders (for any reason), **all code inside it runs again**. If you have expensive calculations like filtering large arrays or complex math, they'll run unnecessarily. `useMemo` says: "Calculate this value, save it, and only recalculate it if specific dependencies change. Otherwise, use the saved result."

### Why Use It?

- **Without useMemo**: Every time the component renders, the entire calculation runs again — wasteful.
- **With useMemo**: The calculation only runs when dependencies change. You get the cached result otherwise — efficient.

**Real-world analogy**: Instead of calculating your monthly budget every time you open the app, calculate it once and only recalculate if your income or expenses change.

### Syntax

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### Example

```jsx
import { useState, useMemo } from "react";

function PortfolioAnalytics({ transactions }) {
  const [filterType, setFilterType] = useState("all");

  const summary = useMemo(() => {
    const filtered = filterType === "all"
      ? transactions
      : transactions.filter(t => t.type === filterType);

    return {
      count:     filtered.length,
      total:     filtered.reduce((sum, t) => sum + t.amount, 0),
      average:   filtered.length ? filtered.reduce((sum, t) => sum + t.amount, 0) / filtered.length : 0,
    };
  }, [transactions, filterType]);

  return (
    <div>
      <select onChange={e => setFilterType(e.target.value)}>
        <option value="all">All</option>
        <option value="credit">Credits</option>
        <option value="debit">Debits</option>
      </select>
      <p>Count: {summary.count}</p>
      <p>Total: ₹{summary.total.toLocaleString()}</p>
      <p>Average: ₹{summary.average.toLocaleString()}</p>
    </div>
  );
}
```

### Run Example

**File:** `examples_ts/react/13_usecallback_usememo.tsx` → copy to `src/App.tsx`

The `useMemo` portion is included in the same file as `useCallback`. Run:

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

A dropdown lets you filter by All / Credits / Debits. The `Count`, `Total`, and `Average` values update instantly on filter change. The expensive reduce computation only re-runs when `transactions` or `filterType` changes — not on unrelated parent re-renders.

---

## Custom Hooks

A custom hook is a JavaScript function whose name starts with `use` and that can call other hooks inside it. Custom hooks let you extract and reuse stateful logic across multiple components without changing the component tree. They are the React-idiomatic way to share non-visual behavior.

### Syntax

```jsx
function useHookName(params) {
  // call useState, useEffect, etc.
  return { value, handler };
}
```

### Example

```jsx
import { useState, useEffect } from "react";

function useStockPrice(symbol) {
  const [price,   setPrice]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/stocks/${symbol}`)
      .then(res => res.json())
      .then(data => { setPrice(data.price); setLoading(false); })
      .catch(err => { setError(err); setLoading(false); });
  }, [symbol]);

  return { price, loading, error };
}

// Usage in a component
function StockTicker({ symbol }) {
  const { price, loading, error } = useStockPrice(symbol);

  if (loading) return <p>Fetching {symbol}...</p>;
  if (error)   return <p>Error loading {symbol}</p>;
  return <h3>{symbol}: ₹{price?.toLocaleString()}</h3>;
}
```

### Run Example

**File:** `examples_ts/react/14_custom_hooks.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

- `useStockPrice("RELIANCE")` — shows loading state, then renders **RELIANCE: ₹2,850** (simulated price). Changing the symbol prop re-runs the hook's effect.
- `useLocalStorage("theme", "light")` — a toggle button persists the selected theme to `localStorage`. Refresh the page and the last choice is restored.
- `useCurrencyConverter(10000)` — converts ₹10,000 to USD, EUR, GBP in real-time as you type the amount.
- `useTransactionFilter` — a filterable, sortable transaction list driven entirely by the custom hook's state.

---

## Component Design Principles

Good component design separates concerns. **Presentational components** receive data and callbacks via props and render UI — they have no side effects or business logic. **Container components** (or hooks) manage state, fetch data, and pass results down. Keeping this separation makes components reusable, testable, and easier to reason about. Compose small focused components rather than building large monolithic ones.

### Example

```jsx
// Presentational — pure UI, no logic
function TransactionCard({ description, amount, date, type, onDelete }) {
  return (
    <div className="transaction-card">
      <p>{date} — {description}</p>
      <p style={{ color: type === "credit" ? "green" : "red" }}>
        {type === "credit" ? "+" : "-"}₹{Math.abs(amount).toLocaleString()}
      </p>
      <button onClick={onDelete}>Remove</button>
    </div>
  );
}

// Container — owns state and data fetching logic
function TransactionCardContainer({ transactionId }) {
  const { data: txn, loading } = useStockPrice(`/api/transactions/${transactionId}`);

  const handleDelete = () => {
    fetch(`/api/transactions/${transactionId}`, { method: "DELETE" });
  };

  if (loading) return <p>Loading...</p>;
  return (
    <TransactionCard
      description={txn.description}
      amount={txn.amount}
      date={txn.date}
      type={txn.type}
      onDelete={handleDelete}
    />
  );
}
```

---

## Forms and Validation

**What is a Controlled Form?**

A controlled form is when React controls the form data instead of the browser. Every input's value comes from React state, and when the user types, the state updates immediately. This makes React the "single source of truth" for form data.

**Why Use Controlled Forms?**
- ✅ Validate data in real-time
- ✅ Disable submit button if form is invalid
- ✅ Show error messages next to fields
- ✅ Pre-fill forms with data
- ✅ Clear form after successful submission

**How It Works (Step by Step):**
1. Store each input value in state using `useState`
2. Bind the input's `value` to that state
3. Update state when user types using `onChange`
4. Validate data before submission
5. Display errors if validation fails

### Syntax

```jsx
// 1. Create state for the input value
const [value, setValue] = useState("");

// 2. Bind input to state and update on change
<input value={value} onChange={e => setValue(e.target.value)} />

// 3. On form submit, validate and process
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent page reload
  // Validate and submit
};
```

### Example: Fund Transfer Form

```jsx
import { useState } from "react";

function FundTransferForm() {
  // Step 1: Create state for each form field
  const [recipient,   setRecipient]   = useState("");  // Who to send money to
  const [amount,      setAmount]      = useState("");  // How much to send
  const [ifscCode,    setIfscCode]    = useState("");  // Bank code
  const [errors,      setErrors]      = useState({});  // Store validation errors

  // Step 2: Validation function - checks if data is correct
  const validate = () => {
    const errs = {};
    
    // Check if recipient name is empty
    if (!recipient.trim())       
      errs.recipient = "Recipient name is required";
    
    // Check if amount is valid (not empty and greater than 0)
    if (!amount || amount <= 0)  
      errs.amount = "Enter a valid amount";
    
    // Check if amount exceeds transfer limit
    if (amount > 100000)         
      errs.amount = "Transfer limit is ₹1,00,000 per transaction";
    
    // Check if IFSC code matches bank format (4 letters + 0 + 6 alphanumeric)
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode)) 
      errs.ifscCode = "Invalid IFSC code";
    
    return errs; // Return all errors found
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop browser from reloading page
    
    const errs = validate(); // Run validation
    
    // If there are errors, show them and stop
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    
    // If no errors, submit the form
    console.log("Initiating transfer:", { recipient, amount, ifscCode });
  };

  // Step 4: Render the form
  return (
    <form onSubmit={handleSubmit}>
      {/* Recipient Name Field */}
      <div>
        <input
          type="text"
          value={recipient}                              // Bind to state
          onChange={e => setRecipient(e.target.value)}   // Update state when typing
          placeholder="Recipient Name"
        />
        {/* Show error only if this field has an error */}
        {errors.recipient && <span style={{ color: "red" }}>{errors.recipient}</span>}
      </div>

      {/* Amount Field */}
      <div>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}  // Convert to number
          placeholder="Amount (₹)"
        />
        {errors.amount && <span style={{ color: "red" }}>{errors.amount}</span>}
      </div>

      {/* IFSC Code Field */}
      <div>
        <input
          type="text"
          value={ifscCode}
          onChange={e => setIfscCode(e.target.value.toUpperCase())}  // Auto-convert to uppercase
          placeholder="IFSC Code"
        />
        {errors.ifscCode && <span style={{ color: "red" }}>{errors.ifscCode}</span>}
      </div>

      <button type="submit">Transfer Funds</button>
    </form>
  );
}
```

**Key Concepts:**
- **`e.preventDefault()`** – Stops the browser from reloading the page when form is submitted
- **Ternary Operator (`&&`)** – `{errors.recipient && <span>...}` means "only show error if it exists"
- **Regular Expression (`/^[A-Z]{4}0[A-Z0-9]{6}$/`)** – Pattern to validate IFSC code format
- **`Object.keys(errs).length`** – Counts how many errors exist (0 = no errors)
```

### Run Example

**File:** `examples_ts/react/15_forms_validation.tsx` → copy to `src/App.tsx`

```bash
npm run dev
#### Open http://localhost:5173
```

**Expected Output:**

- Submit with empty fields → red inline error messages appear for each field ("Recipient name is required", "Enter a valid amount", "Invalid IFSC code").
- Enter **HDFC0001234** as IFSC (matches `^[A-Z]{4}0[A-Z0-9]{6}$`) → no IFSC error.
- Enter amount > ₹1,00,000 → "Transfer limit is ₹1,00,000 per transaction".
- All fields valid → form submits and logs `{ recipient, amount, ifscCode }` to the console.
- The **EMI Calculator** section below the form uses range sliders; monthly EMI updates in real-time as loan amount, rate, or tenure changes.

---

## React Router

React Router is the standard routing library for React SPAs. It maps URL paths to components without a full page reload. `BrowserRouter` provides the routing context. `Routes` and `Route` declare the URL-to-component mapping. `Link` and `NavLink` provide client-side navigation. `useParams` reads dynamic segments and `useNavigate` allows programmatic navigation.

`Installing React Router`

```bash
npm install react-router-dom
```

`Importing React Router`

```js
import { BrowserRouter, Routes, Route, Link, NavLink, useParams, Outlet } from "react-router-dom";
```

### React Router Components

* `BrowserRouter:` BrowserRouter is a router implementation that uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL.

* `Routes:` The main component introduced in v6 that replaces the old `Switch`. Routes are chosen based on the best match.

* `Route:` Route is the conditionally shown component that renders some UI when its path matches the current URL.

* `Link:` The link component is used to create links to different routes and implement navigation around the application.

* `Nav`: A wrapper around Link that adds styling attributes to the rendered element when it matches the current URL. 

* `NavLink:` A special version of the Link component that can apply an active style to the link when it matches the current URL.

* `useParams:` A hook that returns an object of key/value pairs of the dynamic params from the current URL that were matched by the `Route` path.

* `Outlet:` A placeholder component that renders the matched child route.

### Syntax

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/"          element={<Dashboard />} />
    <Route path="/accounts"  element={<Accounts />} />
    <Route path="/portfolio/:id" element={<PortfolioDetail />} />
  </Routes>
</BrowserRouter>
```

### Example

```jsx
import { BrowserRouter, Routes, Route, Link, NavLink, useParams, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/"          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}>Dashboard</NavLink>
        <NavLink to="/accounts"  style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}>Accounts</NavLink>
        <NavLink to="/portfolio" style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}>Portfolio</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

function Dashboard()  { return <h1>Banking Dashboard</h1>; }
function Accounts()   { return <h1>My Accounts</h1>; }
function Portfolio()  { return <h1>Portfolio Overview</h1>; }

function StockDetail() {
  const { symbol } = useParams();
  return <h2>Stock Details: {symbol}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="accounts"           element={<Accounts />} />
          <Route path="portfolio"          element={<Portfolio />} />
          <Route path="portfolio/:symbol"  element={<StockDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

`Output:`

* **Home Page — Dashboard**

![router](/images/router.png)

* **After clicking Accounts**

![router](/images/router1.png)

### Run Example

Install the router dependency first:

```bash
npm install react-router-dom
```

**File:** `examples_ts/react/17_react_router.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```
**Expected Output:**

A nav bar with **Dashboard**, **Accounts**, **Portfolio**, and **Transfer** links. Clicking a link updates the URL without a full page reload:
- `/` → Banking Dashboard summary cards
- `/accounts` → list of Alice's accounts; clicking one navigates to `/accounts/ACC-001`
- `/accounts/ACC-001` → account detail page using `useParams` to read the account ID
- Navigating to any undefined path shows the **404 — Page Not Found** fallback

> Also covers lists and keys. The transaction list in `examples_ts/react/16_lists_keys.tsx` uses the same Vite setup — copy it into `src/App.tsx` for standalone testing.

---

## Context API

The Context API solves prop drilling — passing data through many component layers that don't actually need it. You create a context with `createContext`, wrap the subtree in a `Provider` with a `value`, and any descendant can read that value with `useContext`. Context is ideal for global concerns like theme, locale, or authenticated user / account information.

### Syntax

```jsx
const MyContext = createContext(defaultValue);

<MyContext.Provider value={sharedValue}>
  <ChildComponents />
</MyContext.Provider>

// In any descendant:
const value = useContext(MyContext);
```

### Example

```jsx
import { createContext, useContext, useState } from "react";

const BankingContext = createContext(null);

function BankingProvider({ children }) {
  const [user,    setUser]    = useState(null);
  const [balance, setBalance] = useState(0);

  const login  = (name, initialBalance) => setUser({ name, balance: initialBalance }) || setBalance(initialBalance);
  const logout = () => { setUser(null); setBalance(0); };

  return (
    <BankingContext.Provider value={{ user, balance, login, logout }}>
      {children}
    </BankingContext.Provider>
  );
}

function AccountNavbar() {
  const { user, balance, logout } = useContext(BankingContext);
  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.name} | Balance: ₹{balance.toLocaleString()}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Please log in to your account</span>
      )}
    </nav>
  );
}

function App() {
  return (
    <BankingProvider>
      <AccountNavbar />
    </BankingProvider>
  );
}
```

### Run Example

**File:** `examples_ts/react/18_context_api.tsx` → copy to `src/App.tsx`

```bash
npm run dev
#### Open http://localhost:5173
```

**Expected Output:**

- Before login: navbar shows **"Please log in to your account"**.
- Click **Login** (as Alice, ₹1,50,000) → navbar updates to **"Welcome, Alice | Balance: ₹1,50,000"** without any prop passing between `BankingProvider` and `AccountNavbar`.
- Click **Logout** → navbar resets to the logged-out message.
- A **Theme Toggle** button switches between light and dark backgrounds, driven by `ThemeContext` nested inside `BankingProvider`.

---


## Redux

Redux is a predictable state container that centralizes application state in a single store. It uses actions (events), reducers (pure functions that compute new state), and dispatch (sends actions to update state). Components subscribe to store changes with `useSelector` and dispatch actions with `useDispatch`.

**Explanation:**
Redux manages state by:
1. **Action** – A plain object describing what happened (e.g., `{ type: "ADD_HOLDING", payload: { symbol: "AAPL", value: 15000 } }`).
2. **Reducer** – A pure function that takes current state and action, returns new state. Must not mutate; use spread or Object.assign.
3. **Store** – Single source of truth holding the entire app state tree.
4. **Dispatch** – Function that sends an action to the store, triggering the reducer.
5. **Selector** – Function to extract a slice of state from the store.
6. **Middleware** – Functions that intercept actions before they reach the reducer (e.g., logging, async operations).

**Real-world use case (Portfolio Tracker):** When you add a holding, you dispatch an action. The reducer spreads the old state, pushes the new holding, and recalculates total value—all immutably.

---

## Redux Toolkit

Redux Toolkit (RTK) is the official, opinionated way to write Redux logic. It reduces boilerplate with `createSlice` (combines actions + reducer) and `configureStore` (sets up the store with sensible defaults). Components read state with `useSelector` and trigger changes with `useDispatch`. RTK also includes RTK Query for data fetching.

**Explanation:**
Redux Toolkit simplifies state management by:
1. **`createSlice`** – Bundles state (initialState) + action creators + reducer logic in one place. No need to write separate action files.
2. **`configureStore`** – Sets up Redux with middleware and DevTools enabled automatically.
3. **`useSelector`** – Hook to read state from Redux store into components.
4. **`useDispatch`** – Hook to trigger actions that update state.
5. **Immer Integration** – You can mutate state directly in reducers (RTK uses Immer under the hood to make it immutable).

**Real-world use case (Portfolio Tracker):** Track stock holdings and calculate total portfolio value. When you add a holding, RTK updates the holdings array and total value. When removed, both update automatically—no manual spreading or complex state logic needed.

### Syntax

```js
// Slice
const slice = createSlice({ name, initialState, reducers });
export const { actionCreator } = slice.actions;

// Store
const store = configureStore({ reducer: { sliceName: slice.reducer } });

// Component
const value = useSelector(state => state.sliceName.field);
const dispatch = useDispatch();
dispatch(actionCreator(payload));
```

### Example

```jsx
// store/portfolioSlice.js
import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: { holdings: [], totalValue: 0 },
  reducers: {
    addHolding:    (state, action) => { state.holdings.push(action.payload); state.totalValue += action.payload.value; },
    removeHolding: (state, action) => {
      const idx = state.holdings.findIndex(h => h.symbol === action.payload);
      if (idx !== -1) {
        state.totalValue -= state.holdings[idx].value;
        state.holdings.splice(idx, 1);
      }
    },
  },
});

export const { addHolding, removeHolding } = portfolioSlice.actions;
export default portfolioSlice.reducer;

// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolioSlice";

export const store = configureStore({ reducer: { portfolio: portfolioReducer } });

// Portfolio.jsx
import { useSelector, useDispatch } from "react-redux";
import { addHolding, removeHolding } from "./store/portfolioSlice";

function Portfolio() {
  const { holdings, totalValue } = useSelector(state => state.portfolio);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Portfolio Value: ₹{totalValue.toLocaleString()}</h2>
      <ul>
        {holdings.map(h => (
          <li key={h.symbol}>
            {h.symbol}: ₹{h.value.toLocaleString()}
            <button onClick={() => dispatch(removeHolding(h.symbol))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(addHolding({ symbol: "AAPL", value: 15000 }))}>
        Add AAPL
      </button>
    </div>
  );
}
```

### Run Example

Install RTK first:

```bash
npm install @reduxjs/toolkit react-redux
```

**File:** `examples_ts/react/19_redux_toolkit.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

- Portfolio opens empty with **"Portfolio Value: ₹0"**.
- Click **Add AAPL** → AAPL: ₹15,000 appears, total updates to ₹15,000.
- Click **Add RELIANCE** → second holding appears, total sums both values.
- Click **Remove** next to a holding → it is spliced from the Redux slice and the total recalculates via Immer (no manual spread required).

---

## React.memo

`React.memo` is a higher-order component that memoizes a functional component's output. If the component receives the same props as the previous render, React skips re-rendering it and reuses the last result. Use it for pure components that render often with the same props, especially in large lists.

### Syntax

```jsx
const MemoizedComponent = React.memo(function MyComponent({ prop }) {
  return <div>{prop}</div>;
});
```

### Example

```jsx
import React, { useState } from "react";

const TransactionRow = React.memo(function TransactionRow({ description, amount, type }) {
  console.log("Rendering row:", description);
  return (
    <tr style={{ color: type === "credit" ? "green" : "red" }}>
      <td>{description}</td>
      <td>{type === "credit" ? "+" : "-"}₹{Math.abs(amount).toLocaleString()}</td>
    </tr>
  );
});

function TransactionHistory({ transactions }) {
  return (
    <table>
      <tbody>
        {transactions.map((t, i) => (
          <TransactionRow key={i} description={t.description} amount={t.amount} type={t.type} />
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [balance, setBalance] = useState(0);
  const transactions = [
    { description: "Salary Credit", amount: 50000, type: "credit" },
    { description: "Electricity Bill", amount: 1200, type: "debit" },
  ];

  return (
    <div>
      <button onClick={() => setBalance(b => b + 1)}>Re-render Parent ({balance})</button>
      {/* TransactionRow components do NOT re-render because props haven't changed */}
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
```

### Run Example

**File:** `examples_ts/react/20_react_memo_performance.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

Open the browser console. Clicking **Re-render Parent** increments the counter but **does not log "Rendering row: …"** for the `TransactionRow` components — `React.memo` skips them because their props haven't changed. Only the parent counter updates. This confirms memoization is working correctly.

---

## Code Splitting and Lazy Loading

Code splitting defers loading of large component bundles until they are actually needed. `React.lazy` dynamically imports a component, and `Suspense` renders a fallback UI while the bundle is loading. This reduces the initial JavaScript bundle size, speeding up the first page load — critical for a financial dashboard with many heavy chart components.

### Syntax

```jsx
const LazyComponent = React.lazy(() => import("./HeavyComponent"));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

### Example

```jsx
import React, { Suspense, lazy, useState } from "react";

const PortfolioChart  = lazy(() => import("./PortfolioChart"));
const ExpenseAnalyzer = lazy(() => import("./ExpenseAnalyzer"));

function FinanceDashboard() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div>
      <button onClick={() => setActiveTab("chart")}>View Portfolio Chart</button>
      <button onClick={() => setActiveTab("expense")}>Analyze Expenses</button>

      <Suspense fallback={<p>Loading financial module...</p>}>
        {activeTab === "chart"   && <PortfolioChart />}
        {activeTab === "expense" && <ExpenseAnalyzer />}
      </Suspense>
    </div>
  );
}
```

**Route-based code splitting with React Router:**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Dashboard   = lazy(() => import("./routes/Dashboard"));
const Accounts    = lazy(() => import("./routes/Accounts"));
const Portfolio   = lazy(() => import("./routes/Portfolio"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/"         element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/portfolio"element={<Portfolio />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
```

>**Note:** `React.lazy` and `Suspense` are fully supported in React 19 including server components via Next.js. For advanced server-rendered splitting, use Next.js App Router conventions.

### Run Example

**File:** `examples_ts/react/21_lazy_loading_code_splitting.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

- Three buttons: **Portfolio Chart**, **Expense Analyzer**, **Stock Watchlist**.
- On first click, a **"Loading financial module…"** spinner appears briefly (simulated 1.5 s delay) while the lazy component bundle loads.
- The component renders once loaded; subsequent clicks show it instantly (already downloaded).
- Open the browser **Network** tab — you'll see separate JS chunks loading on demand rather than all upfront.

---

## Error Boundaries

An Error Boundary is a class component that catches JavaScript errors anywhere in its child component tree, logs them, and displays a fallback UI instead of a blank crash. It uses the `getDerivedStateFromError` lifecycle to update state on error and `componentDidCatch` to log the error. Functional components cannot be error boundaries — a class component is required.

In React 19, you can also use the new `ErrorBoundary` component from the `react-error-boundary` community package for a cleaner API.

### Syntax

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { /* log */ }
  render() {
    if (this.state.hasError) return <FallbackUI />;
    return this.props.children;
  }
}
```

### Example

```jsx
import React from "react";

class WidgetErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    console.error("Dashboard widget crashed:", error, info);
    // In production: send to your error tracking service (Sentry, Datadog, etc.)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "red", border: "1px solid red", padding: 16 }}>
          <h3>This widget failed to load.</h3>
          <p>{this.state.errorMessage}</p>
          <button onClick={() => this.setState({ hasError: false })}>Retry</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function StockWidget() {
  throw new Error("Failed to fetch stock data.");
}

function App() {
  return (
    <WidgetErrorBoundary>
      <StockWidget />
    </WidgetErrorBoundary>
  );
}
```

### Run Example

**File:** `examples_ts/react/22_error_boundaries.tsx` → copy to `src/App.tsx`

```bash
npm run dev
# Open http://localhost:5173
```

**Expected Output:**

Three dashboard widgets — **Stock**, **Transaction**, and **Portfolio** — each independently wrapped in `WidgetErrorBoundary`. Toggle buttons let you simulate a crash per widget:
- Triggering a crash on **Stock Widget** shows the fallback ("This widget failed to load. | Retry") while the other two widgets continue rendering normally.
- Clicking **Retry** resets the boundary and re-renders the widget.
- `componentDidCatch` logs the error to the console (and in production would send to Sentry/Datadog).

---

## Scalable Folder Structure

A feature-based folder structure groups all code related to a single feature (components, hooks, API calls, types) in one directory. This scales better than grouping by file type because when you change a feature you touch one folder, not many. The `shared/` directory holds things used across multiple features.

### Structure

```
src/
├── features/
│   ├── accounts/
│   │   ├── components/
│   │   │   ├── AccountCard.jsx
│   │   │   └── AccountList.jsx
│   │   ├── hooks/
│   │   │   └── useAccounts.js
│   │   ├── api/
│   │   │   └── accountsApi.js
│   │   └── index.js
│   │
│   ├── portfolio/
│   │   ├── components/
│   │   │   ├── PortfolioChart.jsx
│   │   │   └── HoldingCard.jsx
│   │   ├── hooks/
│   │   │   └── usePortfolio.js
│   │   ├── api/
│   │   │   └── portfolioApi.js
│   │   └── index.js
│   │
│   └── transactions/
│       ├── components/
│       │   ├── TransactionList.jsx
│       │   └── TransactionRow.jsx
│       ├── hooks/
│       │   └── useTransactions.js
│       └── index.js
│
├── shared/
│   ├── components/           <- reusable UI (Button, Badge, Modal)
│   ├── hooks/                <- reusable hooks (useFetch, useDebounce)
│   └── utils/                <- pure helper functions (formatCurrency)
│
├── store/                    <- Redux store (if used)
├── App.jsx
└── main.jsx
```

### Example

```js
// src/shared/utils/formatCurrency.js
export function formatCurrency(amount, currency = "INR") {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency }).format(amount);
}

// src/features/portfolio/api/portfolioApi.js
export async function fetchPortfolio(userId) {
  const res = await fetch(`/api/portfolio/${userId}`);
  return res.json();
}

// src/features/portfolio/hooks/usePortfolio.js
import { useState, useEffect } from "react";
import { fetchPortfolio } from "../api/portfolioApi";

export function usePortfolio(userId) {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => { fetchPortfolio(userId).then(setPortfolio); }, [userId]);
  return portfolio;
}

// src/features/portfolio/index.js  (feature's public API)
export { default as PortfolioChart } from "./components/PortfolioChart";
export { usePortfolio } from "./hooks/usePortfolio";
```
---