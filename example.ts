const { getLocation } = require("./dist/index");

getLocation({postalCode: "3200", country: "DK"})
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
