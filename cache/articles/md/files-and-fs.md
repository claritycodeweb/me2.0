In this post we are going to explore The Node File System (**fs**) :

```js
var fs = require('fs');
```

fs module can deal directly with files. Let's create a text file and named it data.txt:

```js
Hello from file!
```

<h2 id="synchronous">synchronous</h2>

Let's read this file using **readFileSync** function:

```js
var fs = require('fs');
var data = fs.readFileSync(__dirname + '/data.txt', 'utf8');
```

> **\_\_dirname**, this parameters is passed when the code is wrapped inside function expression and it gives me the path to the directory that the code we are running lives in.

What the function **readFileSync** is doing ?

- is looking into \_\_dirname + "/data.txt" file
- read the binary data (010101010110) and load content into a buffer
- converts zeros and ones to readable string with encoding UTF8

Notice that **fs.readFileSync** has a Sync word on the end. So it is synchronous loading file it means that when the **fs.readFileSync** function is called the javascript engine will wait util the buffer is filled and then return a string. This can be useful when you need to load configuration for the application start and you need to read it before code execution. But in most cases you don't want to run synchronous code because usually there are many users who are also wanting to have access to your application util fs.readFileSync is end, so we can use fs.readFile which is asynchronous and provides callback function as parameter.

<h2 id="asynchronous">asynchronous</h2>

```js
var data = fs.readFile(__dirname + '/data.txt', 'utf8', (error, data) =>
  console.log(data)
);
console.log('keep going');
```

Output

```js
keep going
Hi from the file!
```

After invoking readFile function javascript code is keep running ('keep going' is printed before file was read). Event loop is checking and when the file is finished reading it invokes the callback **(error, data) => console.log(data))**. If there was a error it was pass as a first parameter if there is no error it will be null and this is a very common node pattern called **_Error-First CallBack_**.

> Error-First Callback - callback take error as a their first parameter

**fs.readFile** use buffers to load a file content and buffer is just data sitting in memory. If the file is very large and many people are requesting to this heavy file there will be start a lots of buffer keeping data in memory. So reading and serving files to large number of concurrent users using **fs.readFile** is not a good idea. Fortunately nodejs give us steams. I will talk about stream in the next artilce.

> Streams - data is reading in small chunks and piped out contentiously

<h2 id="server">server</h2>

I will show you a practical example of using fs module, we will make a basic server serving a static website.

Project structure:

```js
src
│   server.js
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

server.js

```js
/// <reference path="typings/tsd.d.ts" />
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
function server(req, res) {
  let baseUrl = url.parse(req.url);
  let filePath =
    __dirname +
    (baseUrl.pathname === '/'
      ? '/public/index.html'
      : '/public' + baseUrl.pathname);
  //1-check if file exist
  fs.access(filePath, fs.F_OK, err => {
    if (!err) {
      //2-Read and serve the file
      fs.readFile(filePath, (err, content) => {
        if (!err) {
          //3-set the content type
          console.log(baseUrl.pathname);
          let contentType = mimes[path.extname(filePath)];
          //4-serve the file from the buffer to the client
          res.writeHead(200, { 'Contetn-type': contentType });
          res.end(content, 'utf-8');
        } else {
          //5-cannot read the file serve 500
          res.writeHead(500);
          res.end('Cannot read requested file: ' + filePath);
        }
      });
    } else {
      res.writeHead(404);
      res.end('File Not Found');
    }
  });
}
//create the instance of the server that listen to incoming request on port 3000
http.createServer(server).listen(3000, () => {
  console.log('server is running on port 3000');
});
```

Output after running node server.js command:

```js
/
/css/bootstrap.min.css
/css/jumbotron-narrow.css
/js/app.js
```

All files are served through callback function 'server'. Of course we can do this better using streams (to avoid memory increase and enable flow control) and promises(reduce nested callbacks, [ES6 - Promise](/wall/articles/nodejs/promise,4))) but this is only the example of using fs then I will show you how to fix it in future post so keep reading.
