In this post we are going to explore the difference between **var, let** and **const**. In ES5 we have only one way to declaring variables using var but ES6 gives us two extra keyword to do this let and const. I will show you how var is works:

<h2 id="var">var</h2>

```js
for (var myVar = 0; myVar < 5; myVar++) {
  console.log(myVar);
}
console.log('outside blok scope myVar is: ', myVar);
```

Output:

```js
0
1
2
3
4
outside for loop myVar is:  5
```

If you are coming from another programming languages like C#/Java output could looks wired to you because you expect to have 'myVar' to be scoped to the context inside for loop. The reason for that 'myVar' is exists outside loop is because in javsacript ES5 have only one variable scope and it's function scope.

> Scope - where are we able to see a variable

To illustrate this I'm going to wrap the code into a function:

```js
function b() {
  console.log('inside "b" function');
  let myVar;
  console.log(' -myVar is: ', myVar);
}
function a() {
  console.log('inside "a" function');
  for (var myVar = 0; myVar < 5; myVar++) {
    console.log(' -myVar is: ', myVar);
  }
  console.log(' - end loop myVar is: ', myVar);
  b();
}
const myVar = 1;
a();
console.log('outside myVar is: ', myVar);
```

Output:

```js
inside "a" function
 -myVar is: 0
 -myVar is: 1
 -myVar is: 2
 -myVar is: 3
 -myVar is: 4
 - end loop myVar is: 5
inside "b" function
 -myVar is: undefined
outside myVar is: 1
```

When the code is executed:

- First, Global Execution Context was created with his own Variable Environment (global or window object in the browser), 'myVar' is put into memory space and it assigned with number 1
- Second, invocation of a() creates the new execution context for a() and when it's created another 'myVar' variable was put into that Execution Context Variable Environment
- Third, invocation of b() and another execution context with own Variable Environment is created (with his own memory speace for variables), since 'myVar' is not set to a value myVar will be equal to undefined

Even though 'myVar' is declared 3 times they are unique and don't touch each other because they are defined in diferent execution context. Variable environment is scoped to the function within variable is defined.

> Variable Environment - where the variables live

I haven't mention before about 'hoisting', all javascript variable/function are hoisted.

> Hoisting - setup memory space for variables and functions

```js
a();
console.log(myVar);
var myVar = 'my variable';
function a() {
  console.log('a function is calling');
}
```

Output:

```js
a function is calling
undefined
JavaScript interpreter is going through the code to find variable declaration and take them and push them up to the top of current scope and set to undefined. All variables in JavaScript are initialize set to undefined.
```

&nbsp;

<h2 id="let">let</h2>

```js
var myVar = 21;
for (let myVar = 0; myVar < 5; myVar++) {
  console.log(myVar);
}
console.log('outside for loop: ', myVar);
```

Output:

```js
0
1
2
3
4
outside for loop:  21
```

let introduce block scope instead of var function scope. 'let myVar' is only going to accessible inside of for loop.

In my opinion in ES6 there is no reason to use var anymore.

&nbsp;

<h2 id="const">const</h2>

Generally const is the same as let except that cannot be reassigned. let can be reassigned:

```js
let myVar = 1;
mayVar = 2;
console.log(myVar);
```

Output:

```js
2;
```

using const:

```js
const myVar = 1;
myVar = 2;
console.log(myVar);
```

Output:

```js
myVar = 2;
      ^
TypeError: Assignment to constant variable.
```

The same when we try to reassigne object:

```js
const myobject = {
  x: 1
};
myobject.x = 2; //poroperty changing is possible
myobject = {}; //this causes exception
console.log(myobject);
```

Output:

```js
myobject = {
         ^
TypeError: Assignment to constant variable.
```

const was introduce to inform the programmers that this variable shouldn't be reassigned and it helps a litte bit with code analyzing (when we looking at the code, we know from that moment the variable will not be changed).
