const { getLocation } = require("./index");

getLocation("60602", "US")
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
