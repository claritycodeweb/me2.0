<h2 id="Caching">Caching</h2>

Caching is probably the first step to reducing the number of requests to the API you are calling. To do this we need two variables and two simple checks.

```js
let inMemoryCachedData;
let inMemoryCachedTime;

if (inMemoryCachedData && inMemoryCachedTime > Date.now() - 30 * 1000) {
  // we are in the cache
  return res.json(inMemoryCachedData);
}

inMemoryCachedData = 'cached-requst';
inMemoryCachedTime = Date.now();
```

This technique is called inMemoryCache it's simple but if you are calling a lot of different API endpoint you may no want to do this in memory because we are using one variable for this better is to store your cache in something like Redis or MongoDB.

We can test endpoint by adding cachedTime to the output:

```js
{
    "data": [
        {
            "name": "king arthur",
            "password": "password1",
            "profession": "king",
            "id": 1
        },
        {
            "name": "rob kendal",
            "password": "password3",
            "profession": "code fiddler",
            "id": 2
        },
        {
            "name": "teresa may",
            "password": "password2",
            "profession": "brexit destroyer",
            "id": 6
        }
    ],
    "cachedTime": 1608680101218
}
```

<h2 id="Rate limiting">Rate limiting</h2>

Package available for express:

> npm i express-rate-limit

then define the middleware with configuration:

```js
const rateLimiter = rateLimit({
  windowMs: 30 * 1000, // 30sec,
  max: 10 // limit each ip to 10 request per window
});
```

it says: **every 30sec i want to allow 10 req per one IP address.** Basically this middleware will keep track of the number of requests that have happened for route that you set it up and if someone exceeds more than 10 request in the past 30 sec they're gonna get a error:

> 429 - Too many request

<h2 id="Slow down respond">Slow down respond</h2>

This middleware will protect our API from spamming because it will increase the timing of the response for every request you make, it means if you send 10 request back-to-back each one is going to take a little bit longer to respond. Helping package available for express:

> npm i express-slow-down

define the middleware with configuration:

```js
const speedLimiter = slowDown({
  windowMs: 30 * 1000, // 30 sec
  delayAfter: 10, // allow 10 requests per 30 minutes, then...
  delayMs: 500 // begin adding 500ms of delay per request above 10:
  // request # 11 is delayed by  500ms
  // request # 12 is delayed by 1000ms
  // request # 13 is delayed by 1500ms
  // etc.
});
```

<h2 id="API-KEY">API-KEY</h2>

Every user calling API needs to provide extra authorization header param and the API function will gonna validate:

```js
const apiKeys = new Map();
apiKeys.set('12345', true);

const apiKeyLimiter = (req, res, next) => {
  const apiKey = req.get('X-API-KEY');

  if (apiKeys.has(apiKey)) {
    next();
  } else {
    const error = new Error('Invalid API key');
    res.statusCode = 403;
    next(error);
  }
};
```

We can simply add middleware's to particular route like this:

```js
// 1. check api key send by X-API-KEY header
// 3. limit each IP to 10 requests per every 30 sec
// 3. allow 10 requests per 30 minutes, theen begin adding 500ms per request above 10
// 4. get data form cache if previous request occure less than 30s ago
router.get('/', apiKeyLimiter, rateLimiter, speedLimiter, async (req, res, next) => {
```

<h2 id="Conclusion">Conclusion</h2>

First way of protecting api instead of hitting api all the time is to cache it in memory. Next step is rate-limiting where you should say how many request you want to allow to given IP address per time window and. Slowing down is similar technique to prevent endpoint from too many request at the same time form a given IP address. 

We have couple of protection levels:

1. caching

2. limiting the number of request people can make

3. increase respond time between the request

4. validate API-KEY

<h2 id="Source">Source</h2>

**X-API-KEY: 12345**

<a href="https://us-central1-clarity-api-node.cloudfunctions.net/clarity/api/v1/example" target="_blank">Live endpoint</a>

<a href="https://github.com/claritycodeweb/api-node-secure-basic" target="_blank">SOURCE CODE </a>

[]()
