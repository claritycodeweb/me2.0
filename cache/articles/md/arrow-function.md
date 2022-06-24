In this post we are going to explore one of the most interesting and most popular ES6 feature and you have probably seen them around, they look like **(x)=> x + 1**. Generally it is a new shorter syntax for defining function in javascript.

> Arrow Function (also called fat arrow) - shorter function syntax

Arrow functions make our code more concise, and simplify.

Defining arrow function is easy and basic syntax is:

> (param1, param2, param3) => expression

Example code behind shows how to make the same function in old (ES5 way) and using fat arrow:

<h2 id="es5-way">es5-way</h2>

```js
//ES5
var multiply1 = function(x1, x2) {
  return x1 * x2;
};

//ES6 (using arrow function)
var multiply2 = (x1, x2) => x1 * x2;
```

The next example will show you how to better use the arrow function in everyday coding:

```js
var cars = [
  { class: 'hatchback', year: 2014, brand: 'fiat' },
  { class: 'van', year: 2010, brand: 'volvo' },
  { class: 'lmuzine', year: 2009, brand: 'bmw' },
  { class: 'hatchback', year: 2015, brand: 'renault' },
  { class: 'hatchback', year: 2008, brand: 'kia' }
];
//es5 (old way)
let filter = cars
  .filter(function(car) {
    return car.class == 'hatchback'; //looking for hatchback
  })
  .filter(function(car) {
    //not older than 2010
    return car.year > 2010;
  })
  .map(function(car) {
    //return only the brand
    return car.brand;
  });
```

The output:

```js
['fiat', 'renault'];
```

<h2 id="arrow">arrow</h2>

Let's do this with arrow. We can removing function keyword and add fat arrow => to statement:

```js
let filter = cars
  .filter(car => {
    return car.class == 'hatchback'; //looking for hatchback
  })
  .filter(car => {
    //not older than 2010
    return car.year > 2010;
  })
  .map(car => {
    //return only the brand
    return car.brand;
  });
```

The result is of course the same. But we can do this better. If your code is one statement like 'return car.class == 'hatchback' we can make return statement implicitly.

<a href="https://jsbin.com/narivezata/edit?js,console" target="_blank">Try in JSBin</a>

```js
let filter = cars
  .filter(car => car.class == 'hatchback')
  .filter(car => car.year > 2010)
  .map(car => car.brand);
```

When there is only one argument for an arrow function you don't need to add parentheses around those arguments. If you are passing more than one arguments then the parentheses must be include.

But every medal has two sides. **When not to use arrow function**.

Arrow function is bound to scope where it's created.

```js
var fun = () => {
  console.log(this === window);
};
fun(); // true
```

It's global window in this case. Lets' try another example using object literals:

```js
var obj = {
  table: [1, 2, 3],
  method: () => {
    return this.table.filter(m => m == 1);
  }
};
console.log(obj.method());
//TypeError: Cannot read property 'filter' of undefined
```

**obj.method()** throws TypeError because **this.table** is evaluated to undefined. Executing this.table inside method function is same as executing **window.table** which is undefined.

The same situation when defining methods on prototype object:

```js
function Test(name) {
  this.name = name;
}
Test.prototype.getName = () => {
  console.log(this === window); // => true
  return this.name;
};
var obj1 = new Test('Rafal');
console.log(obj1.getName()); // => undefined
```

Instead of using shorter syntax method in this cases you should stay with old function syntax expression:

```js
function Test(name) {
  this.name = name;
}
Test.prototype.getName = function() {
  return this.name;
};
var obj1 = new Test('Rafal');
console.log(obj1.getName()); // => Rafal
```

<h2 id="Conclusion">Conclusion</h2>
One of the most obvious benefits of using arrow function is shorter and less verbose syntax. To my opinion, besides the short and more concise syntax, its most significant benefit is to provide a better solution regarding this scope binding
