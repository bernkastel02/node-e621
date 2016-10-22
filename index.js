const FurryGET = require("./client/FurryGetter");

function e621(data) {
    return new FurryGET(data)
}

e621.LoliGET = FurryGET;

module.exports = e621;