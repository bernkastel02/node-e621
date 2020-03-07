"use strict";

var rp = require("request-promise-any")

class FurryGetter {
    constructor(data) {
        // none
    }
    
    getFurry(limit, tags, auth) {
        var options = {
            method: 'GET',
            uri: 'https://e621.net/posts.json',
            qs: {
                "limit": limit,
                "tags": tags
            },
            headers: {
                "User-Agent": "node-e621/1.0 " + auth
            }
        };
        return rp(options).then((e621data) => { return (e621data) })
    }
}

module.exports = FurryGetter;