#e621
######An Node.js module designed to use the e621 API.

How to Use
```js
var Furry = require("e621");
var e621 = new Furry();


e621.getFurry(1, 1, "furry").then((data) => { console.log(data[0]) })
```

NPM Package: https://www.npmjs.com/package/e621

Documentation:

.getFurry(limit, tags ,auth)

limit: The limit of posts, max is 320
tags: The tags you want to use
auth: Your e621 username
