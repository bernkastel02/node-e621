"use strict";

var rp = require("request-promise-any")

class FurryGetter {
    constructor(data) {
        // none
    }
    
    getFurry(limit, tags, auth) {
        var options = {
            method: 'POST',
            uri: 'https://e621.net/post/index.json',
            body: {
                "limit": limit,
                "tags": tags
            },
            headers: {
                "User-Agent": "node-e621/1.0 " + auth
            },
            json: true // Automatically stringifies the body to JSON 
        };
        return rp(options).then((e621data) => { return (e621data) })
    }
}

module.exports = FurryGetter;