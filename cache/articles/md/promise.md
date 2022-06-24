In this post we are going to explore **Promise**. Promises are, just like old callbacks, a way of dealing with things being asynchronous (when we don't know certainly in what order things will happen). But promises are more powerful and much more elegant than callbacks because you can combine promises and chain them.

One of the key problem with asynchronous code is the nested callbacks.

> Nested callback - callbacks inside callbacks

```js
api(result => {
  api2(result => {
    api3(result => {
      // imagine if you have six or more deep level
    });
  });
});
```

We can handle with this problem using promise:

```js
api()
  .then(result => {
    return api2();
  })
  .then(result => {
    return api3();
  })
  .then(result => {
    // do work
  });
```

The core idea behind promises is that a **promise represents the result of an asynchronous operation**.

If the function is wrap into a Promise it can only guarantee 2 future states:

- **resolved**
- **rejected**

Initially Promise has **pending** state (not resolved/not rejected).

The **new Promise()** constructor should be like this:

```js
var p = new Promise((resolve, reject) => {

	// do job

	if(/* condition */) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function() {
	/* do something with the result */
}).catch(err => {
	/* error */
})

```

Then a real example using **fs** module:

```js
const fs = require('fs');

function readFile(filePath) {
  new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (!error) {
        resolve(data);
      } else {
        reject(error);
      }
    });
  });
}

readFile
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(JSON.stringify(error));
  });
```

## new Promise(resolve, reject)

We use new Promise to construct the promise and we pass the constructor function which does the actual job. This function is called immediately with two arguments. The first argument resolve the promise and the second argument rejects the promise. When the operation has completed (then), we call the indicated function, in this case **(data => { console.log(data);})** as a callback.

## then

The **then** callback is executed when promise is resolve resolve(data). data object is passed to the function callback.

## catch

The **catch** callback is executed when the promise is rejected reject(error).

Now we have a knowledge how promise works, so we can upgrade code of basic server from the previous post [Node.js - files and fs](/wall/articles/nodejs/files-and-fs,3)).

Create the new file named serverUpgrade.js:

```js
src
│   server.js
│   serverUpgrade1.js
│
└───public
    │   favicon.ico
    │   index.html
    │
    ├───css
    │       bootstrap.min.css
    │       jumbotron-narrow.css
    │
    └───js
            app.js
```

After update to support promise server code looks much cleaner and pleasant:

```js
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

let mimes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.jpg': 'image/jpg'
};

//--1 extracted access function
function access(filePath) {
  return new Promise((resolve, reject) => {
    fs.access(filePath, fs.F_OK, err => {
      if (!err) {
        resolve(filePath);
      } else {
        reject(err);
      }
    });
  });
}

//--2 extracted read function
function read(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, content) => {
      if (!err) {
        resolve(content);
      } else {
        reject(err);
      }
    });
  });
}

function server(req, res) {
  let baseUrl = url.parse(req.url);
  let filePath =
    __dirname +
    (baseUrl.pathname === '/'
      ? '/public/index.html'
      : '/public' + baseUrl.pathname);
  let contentType = mimes[path.extname(filePath)];

  access(filePath) //--3  resolve to fileRead
    .then(read)
    .then(content => {
      res.writeHead(200, { 'Content-type': contentType });
      res.end(content, 'utf-8');
    })
    .catch(error => {
      //--4 reject if no access or read error
      res.writeHead(500);
      res.end(JSON.stringify(error));
    });
}

http.createServer(server).listen(3000, () => {
  console.log('server is running on port 3000');
});
```

But still we are using fs module and buffers, this is risky way for serving requested files (why ? read article [Node.js - files and fs](/wall/articles/nodejs/files-and-fs,3)) , in the next article I will talk more about node.js **stream** module and we will upgrade our basic server also
